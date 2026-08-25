// Client-side session + persistence helpers (SDD D6): localStorage only, wrapped in
// try/catch so private-mode or blocked storage never breaks the widget.

const KEYS = {
  session: 'aih-chat-session-v1',
  conversation: 'aih-chat-conversation-v1',
  messages: 'aih-chat-messages-v1',
  token: 'aih-chat-token-v1',
  preview: 'aih-chat-preview',
  disclosed: 'aih-chat-disclosed-v1',
} as const;

const MAX_STORED_MESSAGES = 50;

function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable */
  }
}

function uuid(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

export function getSessionId(): string {
  let id = read(KEYS.session);
  if (!id) {
    id = uuid();
    write(KEYS.session, id);
  }
  return id;
}

export function getConversationId(): string {
  let id = read(KEYS.conversation);
  if (!id) {
    id = uuid();
    write(KEYS.conversation, id);
  }
  return id;
}

/** Restore a previous conversation id (used by the "undo clear" flow). */
export function restoreConversationId(id: string): void {
  write(KEYS.conversation, id);
}

export function resetConversation(): string {
  const id = uuid();
  write(KEYS.conversation, id);
  try {
    window.localStorage.removeItem(KEYS.messages);
  } catch {
    /* ignore */
  }
  return id;
}

export function loadMessages<T>(): T[] {
  const raw = read(KEYS.messages);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

export function saveMessages(messages: unknown[]): void {
  write(KEYS.messages, JSON.stringify(messages.slice(-MAX_STORED_MESSAGES)));
}

interface StoredToken {
  token: string;
  expiresAt: number;
}

/** Fetch (or reuse) the widget token; doubles as the function prewarm (SDD D3). */
export async function ensureToken(): Promise<string | null> {
  const raw = read(KEYS.token);
  if (raw) {
    try {
      const stored = JSON.parse(raw) as StoredToken;
      if (stored.expiresAt * 1000 > Date.now() + 60_000) return stored.token;
    } catch {
      /* refetch */
    }
  }
  try {
    const res = await fetch('/api/warmup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: getSessionId() }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { sessionId: string; token: string; expiresAt: number };
    write(KEYS.session, data.sessionId);
    write(KEYS.token, JSON.stringify({ token: data.token, expiresAt: data.expiresAt }));
    return data.token;
  } catch {
    return null;
  }
}

/** Feature gating: build-time flag, or explicit ?chat=1 opt-in that sticks per browser. */
export function isChatEnabled(buildFlag: boolean): boolean {
  if (buildFlag) return true;
  try {
    if (new URLSearchParams(window.location.search).get('chat') === '1') {
      write(KEYS.preview, '1');
      return true;
    }
    return read(KEYS.preview) === '1';
  } catch {
    return false;
  }
}

/** Escalated conversations are closed threads: the composer locks (audit follow-up). */
export function markEscalated(conversationId: string): void {
  write(`aih-chat-escalated-${conversationId}`, '1');
}

export function wasEscalated(conversationId: string): boolean {
  return read(`aih-chat-escalated-${conversationId}`) === '1';
}

export function wasDisclosed(): boolean {
  return read(KEYS.disclosed) === '1';
}

export function markDisclosed(): void {
  write(KEYS.disclosed, '1');
}

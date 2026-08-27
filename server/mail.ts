// Transactional mail via Resend (cutover plan F1): contact form, job applications
// (CV attached), and the email copy of chat escalations. No API key -> honest
// {sent:false} so callers can surface a real error instead of a fake success.

import { config } from './config';

export interface MailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

export interface MailInput {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  attachments?: MailAttachment[];
  /** Override the default recipient (hello@). */
  to?: string;
}

export async function sendMail(input: MailInput): Promise<{ sent: boolean; id?: string; error?: string }> {
  if (!config.mail.apiKey) return { sent: false, error: 'mail_not_configured' };
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(config.mail.apiKey);
    const { data, error } = await resend.emails.send({
      from: config.mail.from,
      to: input.to ?? config.mail.to,
      subject: input.subject,
      text: input.text,
      html: input.html ?? `<pre style="font-family:ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(input.text)}</pre>`,
      replyTo: input.replyTo,
      attachments: input.attachments?.map((a) => ({
        filename: a.filename,
        content: a.content,
        contentType: a.contentType,
      })),
    });
    if (error) return { sent: false, error: error.message };
    return { sent: true, id: data?.id };
  } catch (error) {
    return { sent: false, error: error instanceof Error ? error.message : 'mail_failed' };
  }
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

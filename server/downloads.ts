// Downloadable templates, offered in exchange for an email address (docs/relaunch/01-besluiten.md
// §11). One source for the article form (src/components/hs/HsDownloadForm.astro) and the function
// (api/download.ts). A template stays switched off until its files exist: the article then says
// "het sjabloon komt binnenkort" and the function answers 404. When switching a template on, also
// update the template FAQ in /nl/kennis/ai-beleid and /en/insights/ai-policy ("Het komt eraan").

export interface DownloadTemplate {
  /** Shown to the visitor and in the mail. */
  title: string;
  /** Switch on once the files below are published. */
  enabled: boolean;
  files: { label: string; url: string }[];
}

export const DOWNLOADS = {
  // K3 /nl/kennis/ai-beleid. Based on AI Heroes' own internal AI policy, which is still being
  // written (actiepunt Frans); the files go in public/downloads/ when it is ready.
  'ai-beleid': {
    title: 'Sjabloon AI-beleid',
    enabled: false,
    files: [
      { label: 'Word (.docx)', url: 'https://aiheroes.io/downloads/ai-beleid-sjabloon.docx' },
      { label: 'PDF', url: 'https://aiheroes.io/downloads/ai-beleid-sjabloon.pdf' },
    ],
  },
} satisfies Record<string, DownloadTemplate>;

export type DownloadId = keyof typeof DOWNLOADS;

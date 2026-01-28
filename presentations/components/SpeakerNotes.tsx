interface Props {
  notes: string;
}

export default function SpeakerNotes({ notes }: Props) {
  if (!notes) {
    return (
      <div className="h-1/3 bg-brand-dark border-t border-white/10 p-8 overflow-auto">
        <p className="text-white/40 font-sans italic">No speaker notes for this slide</p>
      </div>
    );
  }

  return (
    <div className="h-1/3 bg-brand-dark border-t border-white/10 p-8 overflow-auto">
      <div className="max-w-4xl">
        <h3 className="text-brand-red font-sans font-semibold text-sm uppercase tracking-wide mb-4">
          Speaker Notes
        </h3>
        <div className="text-white/80 font-sans text-base leading-relaxed whitespace-pre-wrap">
          {notes}
        </div>
      </div>
    </div>
  );
}

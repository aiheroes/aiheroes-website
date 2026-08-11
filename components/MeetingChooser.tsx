import { Calendar, ChevronDown } from 'lucide-react';
import type { MeetingOption } from '../types';

interface MeetingChooserProps {
  label: string;
  meetings: MeetingOption[];
  variant?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}

export const MeetingChooser = ({
  label,
  meetings,
  variant = 'light',
  align = 'left',
  className = ''
}: MeetingChooserProps) => {
  const isDark = variant === 'dark';

  return (
    <details className={`group ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <summary
        className={`inline-flex cursor-pointer list-none items-center gap-2 rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden ${
          isDark
            ? 'text-stone-400 hover:text-white focus-visible:ring-offset-brand-dark'
            : 'text-brand-dark hover:text-brand-red'
        }`}
      >
        <Calendar
          aria-hidden="true"
          className={`h-4 w-4 transition-colors ${
            isDark ? 'text-stone-500 group-hover:text-white' : 'text-stone-400 group-hover:text-brand-red'
          }`}
        />
        <span>{label}</span>
        <ChevronDown
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-open:rotate-180"
        />
      </summary>

      <div
        className={`mt-3 w-52 overflow-hidden rounded-lg border p-1 ${
          align === 'center' ? 'mx-auto' : ''
        } ${isDark ? 'border-white/15 bg-white/5' : 'border-stone-200 bg-white shadow-sm'}`}
      >
        {meetings.map((meeting) => (
          <a
            key={meeting.url}
            href={meeting.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
              isDark
                ? 'text-stone-300 hover:bg-white/10 hover:text-white'
                : 'text-brand-dark hover:bg-stone-100 hover:text-brand-red'
            }`}
          >
            <img
              src={meeting.photo}
              alt=""
              width={28}
              height={28}
              loading="lazy"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>{meeting.name}</span>
          </a>
        ))}
      </div>
    </details>
  );
};

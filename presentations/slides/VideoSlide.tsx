import { Slide } from '../components/Slide';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  title?: string;
  /** Video source URL (supports mp4, webm, YouTube, Vimeo) */
  src: string;
  /** Video type: 'local' for mp4/webm, 'youtube', 'vimeo' */
  type?: 'local' | 'youtube' | 'vimeo';
  /** Auto play video */
  autoPlay?: boolean;
  /** Loop video */
  loop?: boolean;
  /** Show video controls */
  controls?: boolean;
}

function getEmbedUrl(src: string, type: string): string {
  if (type === 'youtube') {
    // Extract video ID from various YouTube URL formats
    const videoId = src.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : src;
  }

  if (type === 'vimeo') {
    // Extract video ID from Vimeo URL
    const videoId = src.match(/vimeo\.com\/(\d+)/)?.[1];
    return videoId ? `https://player.vimeo.com/video/${videoId}` : src;
  }

  return src;
}

export function VideoSlide({
  title,
  src,
  type = 'local',
  autoPlay = false,
  loop = false,
  controls = true,
  background = 'bg-brand-dark',
  notes,
}: Props) {
  const embedUrl = getEmbedUrl(src, type);

  return (
    <Slide background={background} padding="xl" notes={notes}>
      <div className="h-full flex flex-col">
        {/* Title */}
        {title && (
          <div className="mb-8">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
              {title}
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mt-4" />
          </div>
        )}

        {/* Video container */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            {type === 'local' ? (
              <video
                src={src}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                className="w-full h-full"
              />
            ) : (
              <iframe
                src={`${embedUrl}${autoPlay ? '?autoplay=1' : ''}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </Slide>
  );
}

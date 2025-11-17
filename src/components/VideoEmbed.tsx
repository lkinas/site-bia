import { Play, Award } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from './i18n/TranslationContext';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
  className?: string;
}

export function VideoEmbed({ 
  videoId, 
  title, 
  thumbnail, 
  aspectRatio = 'video',
  className = '' 
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]'
  };

  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className={`space-y-6 ${className} rounded-lg pb-4`}>
      <div className={`relative ${aspectClasses[aspectRatio]} rounded-lg overflow-hidden shadow-2xl group`}>
        {!isPlaying ? (
          <>
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-white pointer-events-auto"
              >
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              </motion.button>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
      
      {/* Award Description */}
      <div className="flex justify-left">
        <div className="flex items-start gap-4 border-l-2 border-primary/20 pl-4 py-2 max-w-md">
          <Award className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
          <div className="space-y-1">
            <p className="font-serif text-primary/90 leading-relaxed">
              {t('home.video.award.title')}
            </p>
            <p className="text-primary font-medium">
              {t('home.video.award.subtitle')}
            </p>
            <p className="text-muted-foreground text-sm">
              {t('home.video.award.category')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
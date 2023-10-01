
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Video, heatScoreEmojis } from '@/data/videos';

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handlePlayClick = () => {
    onPlay(video);
  };

  const heatScoreEmoji = video.heatScore ? heatScoreEmojis[video.heatScore] : '';

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-102 cursor-pointer group border border-border/50"
      onClick={handlePlayClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center opacity-0 ${isHovering ? 'opacity-100' : ''} transition-opacity duration-300`}>
          <div className="bg-brand rounded-full w-16 h-16 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="m5 3 14 9-14 9V3z" />
            </svg>
          </div>
        </div>
        
        {/* Category tag */}
        <div className={`absolute top-2 left-2 text-xs font-medium px-2.5 py-1 rounded-full bg-${video.category === 'fails' ? 'category-fails' : 
          video.category === 'pranks' ? 'category-pranks' : 
          video.category === 'reactions' ? 'category-reactions' : 
          video.category === 'wtf' ? 'category-wtf' : 
          'category-wins'} text-white shadow-md backdrop-blur-sm bg-opacity-90`}>
          {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
        </div>
      </div>
      <div className="p-3 bg-gradient-to-b from-background to-background/95">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold line-clamp-2 text-sm md:text-base group-hover:text-brand transition-colors">{video.title}</h3>
          {video.heatScore && (
            <span className={`heat-score ${video.heatScore.toLowerCase()} ml-2 whitespace-nowrap shadow-sm`}>
              {heatScoreEmoji} {video.heatScore}
            </span>
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {video.tags.map((tag) => (
            <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;

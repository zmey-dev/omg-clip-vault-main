
import React from 'react';
import VideoCard from './VideoCard';
import { Video } from '@/data/videos';

interface VideoGridProps {
  videos: Video[];
  onPlayVideo: (video: Video) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onPlayVideo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onPlay={onPlayVideo} />
      ))}
    </div>
  );
};

export default VideoGrid;

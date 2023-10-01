
import React, { useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Video } from '@/data/videos';

interface VideoPlayerProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, isOpen, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Reset iframe when dialog closes to stop playback
    if (!isOpen && iframeRef.current) {
      const iframe = iframeRef.current;
      const iframeSrc = iframe.src;
      iframe.src = '';
      setTimeout(() => {
        iframe.src = iframeSrc;
      }, 100);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] md:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-xl">{video?.title}</DialogTitle>
          <DialogDescription>
            {video?.tags.map(tag => `#${tag}`).join(' ')}
          </DialogDescription>
        </DialogHeader>
        <div className="video-container mt-2">
          {video && (
            <iframe
              ref={iframeRef}
              src={video.embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;

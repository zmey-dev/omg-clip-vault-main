
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoGrid from '@/components/VideoGrid';
import CategoryFilter from '@/components/CategoryFilter';
import VideoPlayer from '@/components/VideoPlayer';
import { videos, Video, categoryLabels } from '@/data/videos';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fails' | 'pranks' | 'reactions' | 'wtf' | 'wins'>('all');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);

  const filteredVideos = activeCategory === 'all' 
    ? videos
    : videos.filter(video => video.category === activeCategory);

  const handlePlayVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsVideoPlayerOpen(true);
  };

  const closeVideoPlayer = () => {
    setIsVideoPlayerOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero section with improved design */}
        <section className="bg-gradient-to-r from-brand to-brand-dark py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-md">
                Discover the Most <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-300 animate-pulse-light">OMG-Worthy</span> Viral Videos
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6 text-white">
                Fails, stunts, pranks, and reactions that will make you say "OMG!"
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        {/* Video grid section */}
        <section className="container py-8 md:py-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                {activeCategory === 'all' ? 'Trending Videos' : categoryLabels[activeCategory]}
              </h2>
              <CategoryFilter 
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
              />
            </div>
            
            <Separator />
            
            <VideoGrid 
              videos={filteredVideos} 
              onPlayVideo={handlePlayVideo}
            />
          </div>
        </section>
      </main>
      
      <VideoPlayer
        video={selectedVideo}
        isOpen={isVideoPlayerOpen}
        onClose={closeVideoPlayer}
      />
      
      <Footer />
    </div>
  );
};

export default Index;

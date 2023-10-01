
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { categoryLabels } from '@/data/videos';

const Admin = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<string>('');
  const [tags, setTags] = useState('');
  const [heatScore, setHeatScore] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchVideoDetails = () => {
    setIsLoading(true);
    
    // Simulate API call to fetch video details from YouTube
    setTimeout(() => {
      // For demo, just set a mock title based on URL
      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        setTitle('Auto-fetched: Amazing Video Title');
        toast.success('Video details fetched successfully');
      } else {
        toast.error('Please enter a valid YouTube URL');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!videoUrl || !title || !category) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate adding a video
    setTimeout(() => {
      toast.success('Video added successfully!');
      // Reset form
      setVideoUrl('');
      setTitle('');
      setCategory('');
      setTags('');
      setHeatScore('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground mb-8">Add new videos to OMGTube</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="videoUrl">Video URL (YouTube or TikTok)</Label>
                <div className="flex gap-2 mt-1.5">
                  <Input 
                    id="videoUrl"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="flex-1"
                    required
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleFetchVideoDetails}
                    disabled={!videoUrl || isLoading}
                  >
                    {isLoading ? 'Fetching...' : 'Fetch Details'}
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="title">Video Title</Label>
                <Input 
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter video title"
                  className="mt-1.5"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fails">{categoryLabels.fails}</SelectItem>
                      <SelectItem value="pranks">{categoryLabels.pranks}</SelectItem>
                      <SelectItem value="reactions">{categoryLabels.reactions}</SelectItem>
                      <SelectItem value="wtf">{categoryLabels.wtf}</SelectItem>
                      <SelectItem value="wins">{categoryLabels.wins}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="heatScore">Heat Score (Optional)</Label>
                  <Select value={heatScore} onValueChange={setHeatScore}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select heat score" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="OMG">OMG 😱</SelectItem>
                      <SelectItem value="LOL">LOL 🤣</SelectItem>
                      <SelectItem value="WOW">WOW 😮</SelectItem>
                      <SelectItem value="🔥">FIRE 🔥</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Textarea 
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="funny, fail, cat, jump, etc."
                  className="mt-1.5"
                  rows={2}
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Adding Video...' : 'Add Video'}
            </Button>
          </form>
          
          <div className="mt-10 p-4 border rounded-lg bg-muted/50">
            <h2 className="font-semibold mb-2">Admin Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" disabled={isLoading}>Refresh Video Cache</Button>
              <Button variant="outline" disabled={isLoading}>Manage Categories</Button>
              <Button variant="outline" disabled={isLoading}>Video Analytics</Button>
              <Button variant="outline" disabled={isLoading}>Export Data</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;

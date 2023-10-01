
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
        
        <div className="prose prose-slate dark:prose-invert">
          <div className="bg-muted p-4 rounded-lg mb-6">
            <p className="font-medium">
              This site is for entertainment purposes only. OMGTube does not host any videos directly 
              and all content is embedded from third-party platforms.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Content Disclaimer</h2>
          <p>
            OMGTube is a content discovery platform that embeds videos from various third-party 
            platforms including but not limited to YouTube, TikTok, and other video hosting services. 
            We do not claim ownership of any video content displayed on our site.
          </p>
          
          <p className="mt-4">
            While we strive to curate content that is entertaining and suitable for general audiences, 
            OMGTube cannot guarantee the accuracy, safety, or appropriateness of all videos on our platform. 
            Viewers watch embedded content at their own risk.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Copyright Information</h2>
          <p>
            All videos on OMGTube are embedded from third-party platforms and remain the intellectual 
            property of their original creators. If you are a content creator and wish to have your content 
            removed from our site, please contact us with proof of ownership and we will promptly 
            remove the embedded content.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Safety Warning</h2>
          <p>
            Many videos on OMGTube showcase stunts, pranks, and activities that may be dangerous if 
            attempted by viewers. Under no circumstances should visitors attempt to recreate any stunts, 
            pranks, or potentially hazardous activities shown in videos featured on our platform. 
            OMGTube is not responsible for any injuries, damages, or losses resulting from attempts to 
            recreate content viewed on our site.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">External Links</h2>
          <p>
            Our site contains links to external platforms where videos are hosted. OMGTube is not 
            responsible for the content, privacy policies, or practices of these external sites. 
            By using OMGTube, you acknowledge that you may be directed to third-party websites and that 
            you do so at your own risk.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Disclaimer</h2>
          <p>
            OMGTube may update this disclaimer from time to time. We encourage users to frequently check 
            this page for any changes. Your continued use of the platform after changes to the disclaimer 
            constitutes acceptance of the updated terms.
          </p>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Last updated: May 15, 2025
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;

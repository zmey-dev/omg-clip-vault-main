
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">About OMGTube</h1>
        
        <div className="prose prose-slate dark:prose-invert">
          <p className="text-lg">
            OMGTube is your go-to platform for discovering the most jaw-dropping, hilarious, 
            and viral videos on the internet. We're passionate about curating content that makes 
            you say "OMG!", "LOL!", and "WOW!" all in one sitting.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            In a world overflowing with content, finding genuinely entertaining videos can be 
            challenging. OMGTube was created to solve this problem by hand-selecting only the 
            most entertaining, shocking, and share-worthy videos across the web.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">What Makes Us Different</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Quality Over Quantity:</strong> We don't overwhelm you with endless 
              content. Every video on OMGTube has been carefully selected for maximum 
              entertainment value.
            </li>
            <li>
              <strong>Organized by Emotion:</strong> Whether you're in the mood for laughs, 
              gasps, or pure amazement, our category system makes it easy to find exactly what 
              you're looking for.
            </li>
            <li>
              <strong>No Account Required:</strong> Just visit, click, and enjoy. We keep things 
              simple so you can focus on the content.
            </li>
            <li>
              <strong>Mobile-Friendly:</strong> OMGTube is designed for seamless viewing on any 
              device, whether you're at home or on the go.
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            Have questions, feedback, or a video suggestion? We'd love to hear from you! 
            Contact our team at <a href="mailto:hello@omgtube.com" className="text-brand hover:underline">hello@omgtube.com</a>.
          </p>
          
          <p className="italic mt-8">
            Thank you for visiting OMGTube — where every click leads to something amazing!
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

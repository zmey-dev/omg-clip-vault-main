
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} OMGTube. All rights reserved.
          </p>
        </div>
        
        <nav className="flex items-center gap-4 text-sm font-medium md:gap-6">
          <Link to="/about" className="transition hover:text-primary">
            About
          </Link>
          <Link to="/disclaimer" className="transition hover:text-primary">
            Disclaimer
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            Terms
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

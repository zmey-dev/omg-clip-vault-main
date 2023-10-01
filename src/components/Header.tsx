
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "font-bold text-2xl tracking-tight text-brand",
          )}>
            OMG<span className="text-foreground">Clip</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-brand">
            About
          </Link>
          <Link to="/disclaimer" className="text-sm font-medium hover:text-brand">
            Disclaimer
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/admin">
            <Button variant="outline" className="hidden md:flex">
              Admin Panel
            </Button>
          </Link>
          
          {/* Mobile menu button - we'd implement a full dropdown in a real app */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

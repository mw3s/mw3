
import React, { ReactNode, useState, useEffect } from 'react';
import Navigation from './Navigation';
import CircuitBackground from './CircuitBackground';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background elements */}
      <CircuitBackground />
      
      {/* Loading screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-t-2 border-primary animate-spin"></div>
        </div>
      )}
      
      {/* Main content */}
      <div className={`flex-1 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <ScrollArea className="h-[calc(100vh-80px)] w-full">
          <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex flex-col">
            {children}
          </main>
          <footer className="py-6 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} mw3s. All rights reserved.</p>
          </footer>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Layout;


import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="page-transition flex flex-col items-center justify-center flex-1 text-center px-4 md:px-8">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8 mt-12 sm:mt-0">
            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-6 overflow-hidden hover-grow">
              <Avatar className="w-full h-full border-2 border-muted">
                <AvatarImage 
                  src="/lovable-uploads/d2a3ddb8-9f26-4c2b-b974-70243226a4e7.png" 
                  alt="mw3s profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-bold">
                  mw3s
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60 pointer-events-none"></div>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
              mw3s
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Cybersecurity Developer & iOS Specialist
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link 
                to="/about" 
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                About Me
              </Link>
              <Link 
                to="/skills" 
                className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-colors"
              >
                My Skills
              </Link>
            </div>
            
            <div className="mt-10 max-w-md mx-auto">
              <div className="p-3 sm:p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <p className="typewriter text-left">
                  const developer = {'{'}
                  <br />
                  &nbsp;&nbsp;name: "mw3s",
                  <br />
                  &nbsp;&nbsp;focus: "cybersecurity",
                  <br />
                  &nbsp;&nbsp;specialty: "iOS development",
                  <br />
                  &nbsp;&nbsp;passion: "pushing boundaries"
                  <br />
                  {'}'};
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

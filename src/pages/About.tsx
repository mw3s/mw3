
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="page-transition flex flex-col items-center justify-center flex-1 py-8 md:py-12">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${
          loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Me</h1>
          
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden mb-6">
            {/* Subtle circuit animation in background */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" className="animate-circuit-flow">
                <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M100,0 L100,100 M0,100 L100,100 M0,0 L100,0 M0,0 L0,100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,10"/>
                  <circle cx="0" cy="0" r="2" fill="currentColor" />
                  <circle cx="100" cy="0" r="2" fill="currentColor" />
                  <circle cx="100" cy="100" r="2" fill="currentColor" />
                  <circle cx="0" cy="100" r="2" fill="currentColor" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
              </svg>
            </div>
            
            <div className="relative animate-fade-in">
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                I am a dedicated cybersecurity developer with a deep passion for iOS development and a keen interest in legal iOS jailbreaking. My journey in tech has been driven by a desire to push boundaries and explore new possibilities.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                I specialize in developing innovative tweaks that enhance user experience, and I have a strong background in reverse engineering. My work involves decrypting applications to uncover hidden features and optimize performance.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                I am committed to staying at the forefront of technology and continuously learning and adapting. My goal is to create secure, efficient, and user-friendly solutions that make a meaningful impact.
              </p>
              
              <div className="mt-8 pt-6 border-t border-muted space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-[130px] mb-1 sm:mb-0">Experience:</span>
                  <span className="text-muted-foreground">5+ years in cybersecurity and iOS development</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-[130px] mb-1 sm:mb-0">Focus Areas:</span>
                  <span className="text-muted-foreground">Penetration testing, iOS exploit development, reverse engineering</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold min-w-[130px] mb-1 sm:mb-0">Expertise:</span>
                  <span className="text-muted-foreground">Application security, iOS jailbreaking, tweak development</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Want to see what I can do? Check out my <a href="/skills" className="text-primary hover:underline">skills</a> or <a href="/social" className="text-primary hover:underline">connect with me</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

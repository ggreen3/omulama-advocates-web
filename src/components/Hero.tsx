
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-law-secondary text-white overflow-hidden"
    >
      {/* Background overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)', 
          backgroundPosition: 'center 30%' 
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 text-center md:text-left md:ml-16 lg:ml-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Excellence in Legal <span className="text-law-primary">Representation</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
            Edwin Omulama & Associates Advocates delivers exceptional legal services with 
            integrity, professionalism, and dedication to client success.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-fade-in">
            <Button className="bg-law-primary hover:bg-law-primary/90 text-white text-lg px-8 py-6">
              Our Practice Areas
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 border-2 border-white border-t-0 border-l-0 transform rotate-45 opacity-70"></div>
      </div>
    </section>
  );
};

export default Hero;

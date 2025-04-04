
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleReveal);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-4 reveal">
            About <span className="text-law-gold">Our Firm</span>
          </h2>
          <div className="w-24 h-1 bg-law-gold mx-auto reveal reveal-delay-200"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal reveal-delay-400">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-law-gold opacity-40"></div>
              <img 
                src="https://images.unsplash.com/photo-1601933563307-0e9c5a11b7b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Edwin Omulama & Associates Advocates Office" 
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-law-gold opacity-40"></div>
            </div>
          </div>
          
          <div className="reveal reveal-delay-600">
            <h3 className="text-2xl font-bold text-law-navy mb-6">
              A Legacy of Legal Excellence Since 2005
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Edwin Omulama & Associates Advocates is a distinguished law firm with a rich legacy of providing exceptional legal services across Kenya. Founded by Edwin Omulama, our firm combines deep legal expertise, unwavering ethical standards, and a client-centered approach to deliver outstanding results.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our team of seasoned attorneys brings decades of combined experience across diverse practice areas. Based in Westlands, Nairobi, we serve clients throughout Kenya with the highest levels of professionalism, integrity, and dedication.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-law-light-gray rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-law-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-law-navy mb-1">Expertise</h4>
                  <p className="text-sm text-gray-600">Specialized legal knowledge</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-law-light-gray rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-law-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-law-navy mb-1">Integrity</h4>
                  <p className="text-sm text-gray-600">Unwavering ethical standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-law-light-gray rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-law-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-law-navy mb-1">Client-Focused</h4>
                  <p className="text-sm text-gray-600">Personalized legal strategies</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-law-light-gray rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-law-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-law-navy mb-1">Results</h4>
                  <p className="text-sm text-gray-600">Proven track record of success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const attorneys = [
  {
    name: "Edwin Omulama",
    title: "Founding Partner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "With over 20 years of experience, Edwin leads our firm with expertise in corporate law and commercial litigation."
  },
  {
    name: "Sarah Kamau",
    title: "Senior Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    bio: "Sarah specializes in intellectual property law and has successfully represented numerous clients in high-profile cases."
  },
  {
    name: "Daniel Ochieng",
    title: "Partner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Daniel brings expert knowledge in real estate and property law, with extensive experience in complex property transactions."
  },
  {
    name: "Amina Hassan",
    title: "Associate",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    bio: "Amina focuses on employment law and labor relations, helping clients navigate complex workplace legal matters."
  }
];

const Team = () => {
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
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-4 reveal">
            Our <span className="text-law-gold">Legal Team</span>
          </h2>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-6 reveal reveal-delay-200"></div>
          <p className="max-w-2xl mx-auto text-gray-600 reveal reveal-delay-400">
            Meet our talented attorneys who combine deep legal expertise with 
            a dedication to client service and successful outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney, index) => (
            <div 
              key={attorney.name}
              className={`reveal ${
                index % 4 === 0 ? '' : 
                index % 4 === 1 ? 'reveal-delay-200' : 
                index % 4 === 2 ? 'reveal-delay-400' : 'reveal-delay-600'
              }`}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src={attorney.image} 
                    alt={attorney.name} 
                    className="w-full h-64 object-cover object-center transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-law-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 text-center group-hover:bg-law-navy transition-colors duration-300">
                  <h3 className="text-xl font-bold text-law-navy group-hover:text-white transition-colors duration-300 mb-1">
                    {attorney.name}
                  </h3>
                  <p className="text-law-gold mb-4 font-semibold">
                    {attorney.title}
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                    {attorney.bio}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

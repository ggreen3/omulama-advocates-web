
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Landmark, FileText, Users, Book, Briefcase, Gavel } from 'lucide-react';

const practiceAreas = [
  {
    title: "Corporate & Commercial Law",
    description: "Expert legal guidance for businesses of all sizes, including entity formation, contracts, mergers and acquisitions, and regulatory compliance.",
    icon: Briefcase
  },
  {
    title: "Litigation & Dispute Resolution",
    description: "Strategic representation in all forums, from negotiation and mediation to arbitration and litigation in courts at all levels.",
    icon: Gavel
  },
  {
    title: "Real Estate & Property Law",
    description: "Comprehensive services covering property acquisitions, sales, leasing, development, financing, and resolving property disputes.",
    icon: Landmark
  },
  {
    title: "Intellectual Property",
    description: "Protection and enforcement of patents, trademarks, copyrights, and trade secrets, including registration and infringement litigation.",
    icon: FileText
  },
  {
    title: "Employment & Labor Law",
    description: "Guidance on employment agreements, workplace policies, labor relations, and representation in employment disputes.",
    icon: Users
  },
  {
    title: "Regulatory & Compliance",
    description: "Assistance with navigating complex regulatory frameworks and ensuring compliance with applicable laws and regulations.",
    icon: Book
  }
];

const PracticeAreas = () => {
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
    <section id="practice-areas" className="py-20 bg-law-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-4 reveal">
            Our <span className="text-law-gold">Practice Areas</span>
          </h2>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-6 reveal reveal-delay-200"></div>
          <p className="max-w-2xl mx-auto text-gray-600 reveal reveal-delay-400">
            Our firm offers comprehensive legal services across key practice areas, 
            delivered by attorneys with specialized expertise and a commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div 
              key={area.title}
              className={`reveal ${
                index % 3 === 0 ? '' : index % 3 === 1 ? 'reveal-delay-200' : 'reveal-delay-400'
              }`}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="mb-6 text-law-gold group-hover:text-law-navy transition-colors duration-300">
                    <area.icon size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-law-navy mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">
                    {area.description}
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

export default PracticeAreas;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="text-law-navy font-playfair">
                <div className="text-2xl font-bold">Edwin Omulama</div>
                <div className="text-sm text-law-gold">& Associates Advocates</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-law-navy hover:text-law-gold transition-colors">Home</a>
            <a href="#about" className="text-law-navy hover:text-law-gold transition-colors">About</a>
            <a href="#practice-areas" className="text-law-navy hover:text-law-gold transition-colors">Practice Areas</a>
            <a href="#team" className="text-law-navy hover:text-law-gold transition-colors">Our Team</a>
            <a href="#contact" className="text-law-navy hover:text-law-gold transition-colors">Contact</a>
            <Button className="bg-law-navy hover:bg-law-gold text-white transition-colors">
              Consult Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-law-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-law-navy hover:text-law-gold transition-colors py-2">Home</a>
              <a href="#about" className="text-law-navy hover:text-law-gold transition-colors py-2">About</a>
              <a href="#practice-areas" className="text-law-navy hover:text-law-gold transition-colors py-2">Practice Areas</a>
              <a href="#team" className="text-law-navy hover:text-law-gold transition-colors py-2">Our Team</a>
              <a href="#contact" className="text-law-navy hover:text-law-gold transition-colors py-2">Contact</a>
              <Button className="bg-law-navy hover:bg-law-gold text-white transition-colors w-full">
                Consult Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

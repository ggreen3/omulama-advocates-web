
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real application, this would be an API call to your backend
    // For now, we'll simulate the email submission
    setTimeout(() => {
      console.log('Sending consultation request to georgeobuya883@gmail.com', formData);
      
      // Show success toast
      toast({
        title: "Consultation Request Sent",
        description: "We have received your request and will contact you shortly.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const handleBookAppointment = () => {
    // Store consultation request
    const appointment = {
      name: "Scheduled from website",
      email: "appointment@example.com",
      phone: "",
      service: "General Consultation",
      message: "Appointment requested from website",
      date: new Date().toISOString().split('T')[0],
      time: '10:00 AM',
      status: 'pending'
    };
    
    // Store in localStorage
    const existingRequests = localStorage.getItem('consultationRequests');
    const requests = existingRequests ? JSON.parse(existingRequests) : [];
    requests.push(appointment);
    localStorage.setItem('consultationRequests', JSON.stringify(requests));
    
    // Notify the user
    toast({
      title: "Appointment Requested",
      description: "Your appointment request has been recorded. We will contact you shortly.",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 bg-law-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Contact <span className="text-law-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-law-primary mx-auto mb-6 reveal reveal-delay-200"></div>
          <p className="max-w-2xl mx-auto text-gray-200 reveal reveal-delay-400">
            Reach out to schedule a consultation or learn more about how our legal team can assist with your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal reveal-delay-400">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-bold text-law-primary mb-6">Get in Touch</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-law-primary hover:bg-law-primary/90 text-white font-bold py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="reveal reveal-delay-600">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full">
              <h3 className="text-2xl font-bold text-law-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-law-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-200">
                      Westlands Arcade 3rd Floor<br />
                      Waiyaki Way - Westlands<br />
                      P. O. BOX 37592-00100<br />
                      NAIROBI
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-law-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-gray-200">
                      +254 (0) 727 123 456<br />
                      +254 (0) 733 789 012
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-law-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-200">
                      georgeobuya883@gmail.com<br />
                      legal@omulamaadvocates.co.ke
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-law-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Working Hours</h4>
                    <p className="text-gray-200">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-bold mb-4">Book a Consultation</h4>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation with one of our experienced attorneys to discuss your legal needs.
                </p>
                <Button 
                  className="w-full bg-law-primary hover:bg-law-primary/90 text-white font-bold"
                  onClick={handleBookAppointment}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

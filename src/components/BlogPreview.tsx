
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Corporate Law in Kenya",
    excerpt: "An overview of corporate law regulations and compliance requirements for businesses operating in Kenya.",
    date: "April 1, 2025",
    author: "Edwin Omulama",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Property Disputes: Legal Strategies for Resolution",
    excerpt: "Effective legal approaches to resolve complex property disputes in Kenya's evolving real estate market.",
    date: "March 25, 2025",
    author: "Sarah Kamau",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
  },
  {
    id: 3,
    title: "Employment Law Updates: What Employers Need to Know",
    excerpt: "Recent changes in employment legislation and their implications for businesses and HR practices.",
    date: "March 18, 2025",
    author: "Amina Hassan",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
  }
];

const BlogPreview = () => {
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
    <section id="blog" className="py-20 bg-law-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-law-secondary mb-4 reveal">
            Latest <span className="text-law-primary">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-law-primary mx-auto mb-6 reveal reveal-delay-200"></div>
          <p className="max-w-2xl mx-auto text-gray-600 reveal reveal-delay-400">
            Stay informed with our latest articles, legal updates, and expert analysis on topics 
            that matter to you and your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`reveal ${
                index % 3 === 0 ? '' : index % 3 === 1 ? 'reveal-delay-200' : 'reveal-delay-400'
              }`}
            >
              <Card className="h-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-law-secondary mb-3 hover:text-law-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Button 
                    className="mt-2 bg-law-secondary hover:bg-law-primary text-white transition-colors duration-300"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link to="/blog">
            <Button className="bg-law-primary hover:bg-law-secondary text-white text-lg px-8 py-6 transition-colors duration-300">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

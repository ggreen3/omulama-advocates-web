
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

// Sample blog posts data (expanded version of the preview data)
const allBlogPosts = [
  {
    id: 1,
    title: "Understanding Corporate Law in Kenya",
    excerpt: "An overview of corporate law regulations and compliance requirements for businesses operating in Kenya.",
    date: "April 1, 2025",
    author: "Edwin Omulama",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Property Disputes: Legal Strategies for Resolution",
    excerpt: "Effective legal approaches to resolve complex property disputes in Kenya's evolving real estate market.",
    date: "March 25, 2025",
    author: "Sarah Kamau",
    category: "Real Estate Law",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
  },
  {
    id: 3,
    title: "Employment Law Updates: What Employers Need to Know",
    excerpt: "Recent changes in employment legislation and their implications for businesses and HR practices.",
    date: "March 18, 2025",
    author: "Amina Hassan",
    category: "Employment Law",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
  },
  {
    id: 4,
    title: "Intellectual Property Protection for Startups",
    excerpt: "Essential strategies for Kenyan startups to protect their innovations, brands, and creative assets.",
    date: "March 10, 2025",
    author: "Daniel Ochieng",
    category: "Intellectual Property",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
  },
  {
    id: 5,
    title: "Navigating Commercial Contract Disputes",
    excerpt: "Best practices for businesses facing contract disputes and how to achieve favorable resolutions.",
    date: "March 5, 2025",
    author: "Edwin Omulama",
    category: "Contract Law",
    image: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 6,
    title: "Tax Compliance for Kenyan Businesses",
    excerpt: "A comprehensive guide to understanding tax obligations and maintaining compliance in Kenya.",
    date: "February 28, 2025",
    author: "Sarah Kamau",
    category: "Tax Law",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
  }
];

// Categories for filtering
const categories = [
  "All",
  "Corporate Law",
  "Real Estate Law",
  "Employment Law",
  "Intellectual Property",
  "Contract Law",
  "Tax Law"
];

const Blog = () => {
  const [posts, setPosts] = useState(allBlogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Update document title
    document.title = "Blog - Edwin Omulama & Associates Advocates";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Filter posts based on search term and category
    const filteredPosts = allBlogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setPosts(filteredPosts);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Blog Banner */}
      <section className="relative py-20 bg-law-secondary text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Legal insights, updates, and expert opinions to keep you informed
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12 grid md:grid-cols-3 gap-6">
            <div className="col-span-2 relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-law-primary hover:bg-law-primary/90 text-white" 
                    : "hover:bg-law-secondary hover:text-white"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map(post => (
                <Card key={post.id} className="h-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-law-primary text-white text-xs font-bold px-3 py-1 rounded">
                      {post.category}
                    </div>
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-bold text-gray-500 mb-4">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';
import { allBlogPosts } from '@/data/blogData';
import { BlogPost } from '@/types/blog';

const NewBlogPost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState<Omit<BlogPost, 'id'>>({
    title: '',
    category: '',
    author: '',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: new Date().toISOString().split('T')[0],
    content: '',
    excerpt: ''
  });

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!loggedIn) {
      // Redirect to login page if not logged in
      navigate('/login');
    } else {
      setIsLoggedIn(true);
    }
    
    // Update document title
    document.title = "New Blog Post - Edwin Omulama & Associates Advocates";
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If this is the excerpt field and it's empty, generate an excerpt from content
    if (name === 'content' && !formData.excerpt) {
      const excerpt = value.length > 150 ? value.substring(0, 150) + '...' : value;
      setFormData(prev => ({
        ...prev,
        [name]: value,
        excerpt: excerpt
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get existing blog posts
    let blogPosts = [...allBlogPosts];
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      blogPosts = JSON.parse(savedPosts);
    }
    
    // Generate a new ID (max id + 1)
    const maxId = blogPosts.reduce((max, post) => Math.max(max, post.id), 0);
    const newPost: BlogPost = {
      ...formData,
      id: maxId + 1
    };
    
    // Add the new post
    blogPosts.push(newPost);
    
    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    // Show success message
    toast({
      title: "Blog Post Created",
      description: "Your new blog post has been published successfully.",
      duration: 3000,
    });
    
    // Redirect to admin page
    navigate('/admin');
  };

  if (!isLoggedIn) {
    return null; // Don't render anything while checking login state
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-law-secondary">Create New Blog Post</h1>
          <Button variant="outline" onClick={() => navigate('/admin')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Admin
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Property Law">Property Law</option>
                  <option value="Tax Law">Tax Law</option>
                  <option value="Litigation">Litigation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt (Summary)
                </label>
                <Textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                  rows={3}
                  placeholder="Brief summary of the blog post"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <Textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary/50"
                  rows={12}
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button className="bg-law-primary hover:bg-law-primary/90 text-white" type="submit">
                <Save className="mr-2 h-4 w-4" /> Publish Blog Post
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;

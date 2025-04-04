
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { useToast } from '@/hooks/use-toast';
import { BlogPost } from '@/types/blog';

const NewBlogPost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    category: 'Corporate Law',
    content: '',
    excerpt: '',
    tags: [] as string[],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  });
  
  const [tagInput, setTagInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleAddTag = () => {
    if (tagInput.trim() !== '' && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call to save blog post
    setTimeout(() => {
      // Create new blog post with generated ID
      const newPost: BlogPost = {
        id: blogPosts.length + 1,
        title: formData.title,
        category: formData.category,
        author: 'Edwin Omulama',
        image: formData.image,
        date: new Date().toISOString().split('T')[0],
        content: formData.content,
        excerpt: formData.excerpt,
        tags: formData.tags,
        views: 0,
        liked: false,
        comments: []
      };
      
      // Add new post to blog posts array
      blogPosts.unshift(newPost);
      
      // Show success message
      toast({
        title: "Blog Post Published",
        description: "Your blog post has been successfully published.",
        duration: 5000,
      });
      
      // Redirect to blog page
      navigate('/blog');
      
      setIsSaving(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center">
          <Button 
            variant="ghost"
            className="mr-4"
            onClick={() => navigate('/admin')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
          <h1 className="text-2xl font-bold">Create New Blog Post</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary"
                    placeholder="Enter post title"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary"
                  >
                    <option value="Corporate Law">Corporate Law</option>
                    <option value="Criminal Law">Criminal Law</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Intellectual Property">Intellectual Property</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                    Excerpt
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary"
                    placeholder="Brief summary of the post"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Featured Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary"
                    placeholder="Image URL"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-law-primary"
                      placeholder="Add a tag"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                    />
                    <Button
                      type="button"
                      className="rounded-l-none bg-law-primary"
                      onClick={handleAddTag}
                    >
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.tags.map(tag => (
                      <div key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm flex items-center">
                        {tag}
                        <button
                          type="button"
                          className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                          onClick={() => handleRemoveTag(tag)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={16}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-primary"
                  placeholder="Write your blog post content here..."
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-law-primary"
                disabled={isSaving}
              >
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? 'Publishing...' : 'Publish Post'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;

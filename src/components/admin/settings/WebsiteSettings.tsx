
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Save } from 'lucide-react';

const WebsiteSettings = () => {
  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "Edwin Omulama & Associates Advocates - Legal Services",
    metaDescription: "Professional legal services in corporate, family, property and criminal law.",
    keywords: "law firm, advocates, legal services, nairobi, kenya",
    ogImage: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  });
  
  const [contentSettings, setContentSettings] = useState({
    showBlogSection: true,
    showTeamSection: true,
    enableComments: false,
    enableContactForm: true
  });
  
  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSeoSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleToggleChange = (name: string, value: boolean) => {
    setContentSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const saveSettings = () => {
    // Save settings to localStorage
    localStorage.setItem('seoSettings', JSON.stringify(seoSettings));
    localStorage.setItem('contentSettings', JSON.stringify(contentSettings));
    
    // Apply SEO settings
    document.title = seoSettings.metaTitle;
    
    // Update meta tags
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoSettings.metaDescription);
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoSettings.keywords);
    
    // Show success alert
    alert('Website settings saved successfully!');
  };
  
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Website Settings</h3>
      <p className="text-gray-500 mb-6">Manage website configuration, SEO settings, and content options.</p>
      
      <div className="space-y-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-4">SEO Settings</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Title
              </label>
              <input
                type="text"
                name="metaTitle"
                value={seoSettings.metaTitle}
                onChange={handleSeoChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Description
              </label>
              <Textarea
                name="metaDescription"
                value={seoSettings.metaDescription}
                onChange={handleSeoChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Keywords
              </label>
              <input
                type="text"
                name="keywords"
                value={seoSettings.keywords}
                onChange={handleSeoChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                OG Image URL
              </label>
              <input
                type="text"
                name="ogImage"
                value={seoSettings.ogImage}
                onChange={handleSeoChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-4">Content Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Show Blog Section</h5>
                <p className="text-sm text-gray-500">Display blog posts on the homepage</p>
              </div>
              <Switch 
                checked={contentSettings.showBlogSection}
                onCheckedChange={(checked) => handleToggleChange('showBlogSection', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Show Team Section</h5>
                <p className="text-sm text-gray-500">Display team members on the homepage</p>
              </div>
              <Switch 
                checked={contentSettings.showTeamSection}
                onCheckedChange={(checked) => handleToggleChange('showTeamSection', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Enable Comments</h5>
                <p className="text-sm text-gray-500">Allow visitors to comment on blog posts</p>
              </div>
              <Switch 
                checked={contentSettings.enableComments}
                onCheckedChange={(checked) => handleToggleChange('enableComments', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Enable Contact Form</h5>
                <p className="text-sm text-gray-500">Allow visitors to contact through the form</p>
              </div>
              <Switch 
                checked={contentSettings.enableContactForm}
                onCheckedChange={(checked) => handleToggleChange('enableContactForm', checked)}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            className="bg-law-secondary hover:bg-law-primary text-white"
            onClick={saveSettings}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSettings;

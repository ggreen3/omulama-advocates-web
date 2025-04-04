
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FilePlus, Home } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { allBlogPosts } from '@/data/blogData';
import { BlogPost } from '@/types/blog';

// Import refactored components
import Sidebar from '@/components/admin/Sidebar';
import DashboardTab from '@/components/admin/DashboardTab';
import BlogTab from '@/components/admin/BlogTab';
import TeamTab from '@/components/admin/TeamTab';
import MessagesTab from '@/components/admin/MessagesTab';
import AppointmentsTab from '@/components/admin/AppointmentsTab';
import SettingsTab from '@/components/admin/SettingsTab';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(allBlogPosts);
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('appointments');
    return saved ? JSON.parse(saved) : [];
  });
  const [siteSettings, setSiteSettings] = useState(() => {
    const saved = localStorage.getItem('siteSettings');
    return saved ? JSON.parse(saved) : {
      firmName: "Edwin Omulama & Associates Advocates",
      email: "info@omulamaadvocates.co.ke",
      phone: "+254 (0) 727 123 456",
      website: "https://www.omulamaadvocates.co.ke",
      address: "Westlands Arcade 3rd Floor, Waiyaki Way - Westlands, P. O. BOX 37592-00100, NAIROBI",
      primaryColor: "#e60000", // Red
      secondaryColor: "#0047AB", // Royal Blue
      colorTheme: "default"
    };
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
    document.title = "Admin Dashboard - Edwin Omulama & Associates Advocates";
    
    // Get any stored appointments from localStorage
    const consultationRequests = localStorage.getItem('consultationRequests');
    if (consultationRequests) {
      setAppointments(JSON.parse(consultationRequests));
    }
  }, [navigate]);
  
  const handleLogout = () => {
    // Clear login state
    localStorage.removeItem('isLoggedIn');
    
    // Show logout toast
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
      duration: 3000,
    });
    
    // Navigate to home page
    navigate('/');
  };
  
  const handleDeletePost = (id: number) => {
    // Delete the post from state
    const updatedPosts = blogPosts.filter(post => post.id !== id);
    setBlogPosts(updatedPosts);
    
    // Save to localStorage for persistence
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    toast({
      title: "Post deleted",
      description: "The blog post has been deleted successfully.",
      duration: 3000,
    });
  };
  
  const handleSaveSettings = () => {
    // Save settings to localStorage
    localStorage.setItem('siteSettings', JSON.stringify(siteSettings));
    
    // Update CSS variables for theme colors
    document.documentElement.style.setProperty('--law-primary', siteSettings.primaryColor);
    document.documentElement.style.setProperty('--law-secondary', siteSettings.secondaryColor);
    
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
      duration: 3000,
    });
  };
  
  const applyTheme = (theme: string) => {
    let primaryColor = "#e60000";
    let secondaryColor = "#0047AB";
    
    switch(theme) {
      case "default":
        primaryColor = "#e60000";
        secondaryColor = "#0047AB";
        break;
      case "dark":
        primaryColor = "#990000";
        secondaryColor = "#00264d";
        break;
      case "light":
        primaryColor = "#ff3333";
        secondaryColor = "#3366cc";
        break;
      case "contrast":
        primaryColor = "#cc0000";
        secondaryColor = "#000066";
        break;
    }
    
    setSiteSettings({
      ...siteSettings,
      primaryColor,
      secondaryColor,
      colorTheme: theme
    });
    
    // Apply theme immediately
    document.documentElement.style.setProperty('--law-primary', primaryColor);
    document.documentElement.style.setProperty('--law-secondary', secondaryColor);
  };

  if (!isLoggedIn) {
    return null; // Don't render anything while checking login state
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
      />
      
      {/* Main content */}
      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-law-secondary">
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'blog' && 'Blog Management'}
            {activeTab === 'team' && 'Team Management'}
            {activeTab === 'messages' && 'Messages'}
            {activeTab === 'appointments' && 'Appointments'}
            {activeTab === 'settings' && 'Settings'}
          </h1>
          
          <div className="flex items-center">
            <Button 
              className="mr-4 bg-white text-law-secondary border border-gray-200 hover:bg-gray-50"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 h-4 w-4" />
              View Website
            </Button>
            
            {activeTab === 'blog' && (
              <Button 
                className="bg-law-primary hover:bg-law-primary/90 text-white"
                onClick={() => navigate('/admin/blog/new')}
              >
                <FilePlus className="mr-2 h-4 w-4" />
                New Blog Post
              </Button>
            )}
          </div>
        </div>
        
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <DashboardTab blogPostsCount={blogPosts.length} />
        )}
        
        {/* Blog Posts Tab */}
        {activeTab === 'blog' && (
          <BlogTab blogPosts={blogPosts} onDeletePost={handleDeletePost} />
        )}
        
        {/* Team Tab */}
        {activeTab === 'team' && <TeamTab />}
        
        {/* Messages Tab */}
        {activeTab === 'messages' && <MessagesTab />}
        
        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <AppointmentsTab appointments={appointments} />
        )}
        
        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <SettingsTab 
            siteSettings={siteSettings}
            setSiteSettings={setSiteSettings}
            handleSaveSettings={handleSaveSettings}
            applyTheme={applyTheme}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;

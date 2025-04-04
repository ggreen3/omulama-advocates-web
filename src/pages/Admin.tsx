
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  BarChart, 
  Calendar,
  Edit, 
  FileEdit, 
  FilePlus, 
  Home, 
  Image, 
  LogOut, 
  MessageSquare, 
  PenSquare, 
  Settings, 
  Trash, 
  Users,
  Palette,
  Save
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { allBlogPosts } from '@/data/blogData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogPosts, setBlogPosts] = useState(allBlogPosts);
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
      <div className="bg-law-secondary text-white w-64 flex-shrink-0 fixed h-full">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <p className="text-sm text-gray-300">Edwin Omulama & Associates</p>
        </div>
        
        <nav className="mt-6">
          <ul>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start px-4 py-3 text-white hover:bg-white/10 ${activeTab === 'dashboard' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <Home className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start px-4 py-3 text-white hover:bg-white/10 ${activeTab === 'blog' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('blog')}
              >
                <PenSquare className="mr-2 h-5 w-5" />
                Blog Posts
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start px-4 py-3 text-white hover:bg-white/10 ${activeTab === 'team' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('team')}
              >
                <Users className="mr-2 h-5 w-5" />
                Team
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start px-4 py-3 text-white hover:bg-white/10 ${activeTab === 'messages' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('messages')}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Messages
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start px-4 py-3 text-white hover:bg-white/10 ${activeTab === 'appointments' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('appointments')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Appointments
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start px-4 py-3 text-white hover:bg-white/10 ${activeTab === 'settings' ? 'bg-white/10' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
          
          <div className="mt-4 flex items-center">
            <div className="h-10 w-10 rounded-full bg-law-primary flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-300">admin@omulamaadvocates.co.ke</p>
            </div>
          </div>
        </div>
      </div>
      
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Blog Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{blogPosts.length}</div>
                <p className="text-xs text-gray-500 mt-1">+3 in the last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Monthly Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,248</div>
                <p className="text-xs text-green-500 mt-1">↑ 12% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">New Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <p className="text-xs text-green-500 mt-1">↑ 8% from last month</p>
              </CardContent>
            </Card>
          </div>
        )}
        
        {/* Blog Posts Tab */}
        {activeTab === 'blog' && (
          <div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded object-cover" src={post.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{post.title}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {post.category}
                        </span>
                      </TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-law-secondary hover:text-law-primary mr-3">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
        
        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 mb-4">Manage your team members and their access permissions.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { name: "Edwin Omulama", role: "Managing Partner", image: "https://i.pravatar.cc/150?img=1" },
                { name: "Sarah Kamau", role: "Senior Associate", image: "https://i.pravatar.cc/150?img=5" },
                { name: "Daniel Ochieng", role: "Associate", image: "https://i.pravatar.cc/150?img=3" },
                { name: "Amina Hassan", role: "Associate", image: "https://i.pravatar.cc/150?img=4" }
              ].map((member, index) => (
                <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="p-4 flex items-center">
                    <img src={member.image} alt={member.name} className="h-16 w-16 rounded-full object-cover" />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="bg-gray-50 border border-dashed rounded-lg overflow-hidden flex items-center justify-center h-[120px]">
                <Button variant="ghost" className="text-gray-500">
                  <Users className="h-5 w-5 mr-2" />
                  Add New Team Member
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 mb-4">Manage messages from contact form submissions.</p>
            <div className="mt-6">
              {[
                { name: "John Doe", email: "john@example.com", message: "I need legal advice regarding a corporate matter.", date: "2025-04-04", isRead: true },
                { name: "Jane Smith", email: "jane@example.com", message: "Looking to schedule a consultation about property law.", date: "2025-04-03", isRead: false },
                { name: "Michael Johnson", email: "michael@example.com", message: "Question about employment contract review services.", date: "2025-04-02", isRead: false }
              ].map((msg, index) => (
                <div key={index} className={`border-b py-4 ${!msg.isRead ? 'bg-blue-50' : ''}`}>
                  <div className="flex justify-between">
                    <div>
                      <h3 className={`font-medium ${!msg.isRead ? 'text-law-secondary' : 'text-gray-700'}`}>{msg.name}</h3>
                      <p className="text-sm text-gray-500">{msg.email}</p>
                    </div>
                    <div className="text-sm text-gray-500">{msg.date}</div>
                  </div>
                  <p className="mt-2 text-gray-600">{msg.message}</p>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="outline">Reply</Button>
                    {!msg.isRead && <Button size="sm" variant="ghost">Mark as Read</Button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500 mb-4">Manage consultation appointments and scheduling.</p>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mt-6">
              <div className="lg:col-span-5">
                <h3 className="font-medium text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-4">
                  {appointments.length > 0 ? (
                    appointments.map((apt, index) => (
                      <div key={index} className="flex items-center p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{apt.name}</h4>
                          <p className="text-sm text-gray-500">{apt.date} at {apt.time}</p>
                          <p className="text-sm text-gray-700">{apt.service}</p>
                          <p className="text-sm text-gray-500">{apt.email}</p>
                          <p className="text-sm text-gray-500">{apt.phone}</p>
                        </div>
                        <div>
                          <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            pending
                          </span>
                        </div>
                        <div className="ml-4">
                          <Button size="sm" variant="outline">View</Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center p-8 border border-dashed rounded-lg">
                      <p className="text-gray-500">No appointments yet</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:col-span-2 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-4">Calendar</h3>
                <p className="text-sm text-gray-500">Calendar functionality would be integrated here.</p>
                <Button className="w-full mt-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  Open Calendar
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <Tabs defaultValue="general">
              <TabsList className="mb-6">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="theme">Theme</TabsTrigger>
                <TabsTrigger value="website">Website</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Firm Name</label>
                        <Input 
                          value={siteSettings.firmName} 
                          onChange={e => setSiteSettings({...siteSettings, firmName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <Input 
                          value={siteSettings.email} 
                          onChange={e => setSiteSettings({...siteSettings, email: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <Input 
                          value={siteSettings.phone} 
                          onChange={e => setSiteSettings({...siteSettings, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                        <Input 
                          value={siteSettings.website} 
                          onChange={e => setSiteSettings({...siteSettings, website: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
                      <textarea
                        className="w-full p-2 border rounded-md focus:ring-law-primary focus:border-law-primary"
                        rows={3}
                        value={siteSettings.address}
                        onChange={e => setSiteSettings({...siteSettings, address: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        className="bg-law-secondary hover:bg-law-primary text-white"
                        onClick={handleSaveSettings}
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="account">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
                <p>Manage your account settings, password, and preferences here.</p>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input defaultValue="admin@omulamaadvocates.co.ke" disabled />
                    <p className="text-xs text-gray-500 mt-1">Your login email cannot be changed</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Change Password</label>
                    <div className="space-y-2">
                      <Input type="password" placeholder="Current password" />
                      <Input type="password" placeholder="New password" />
                      <Input type="password" placeholder="Confirm new password" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button className="bg-law-secondary hover:bg-law-primary text-white">
                      Update Password
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="theme">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Theme Customization</h3>
                <p className="text-gray-500 mb-6">Customize your website's appearance with different color themes and options.</p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Color Themes</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div 
                        className={`cursor-pointer p-4 border rounded-lg ${siteSettings.colorTheme === 'default' ? 'ring-2 ring-law-primary' : ''}`}
                        onClick={() => applyTheme('default')}
                      >
                        <div className="flex space-x-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#e60000]"></div>
                          <div className="w-8 h-8 rounded-full bg-[#0047AB]"></div>
                        </div>
                        <div className="text-sm font-medium">Default</div>
                      </div>
                      
                      <div 
                        className={`cursor-pointer p-4 border rounded-lg ${siteSettings.colorTheme === 'dark' ? 'ring-2 ring-law-primary' : ''}`}
                        onClick={() => applyTheme('dark')}
                      >
                        <div className="flex space-x-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#990000]"></div>
                          <div className="w-8 h-8 rounded-full bg-[#00264d]"></div>
                        </div>
                        <div className="text-sm font-medium">Dark</div>
                      </div>
                      
                      <div 
                        className={`cursor-pointer p-4 border rounded-lg ${siteSettings.colorTheme === 'light' ? 'ring-2 ring-law-primary' : ''}`}
                        onClick={() => applyTheme('light')}
                      >
                        <div className="flex space-x-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#ff3333]"></div>
                          <div className="w-8 h-8 rounded-full bg-[#3366cc]"></div>
                        </div>
                        <div className="text-sm font-medium">Light</div>
                      </div>
                      
                      <div 
                        className={`cursor-pointer p-4 border rounded-lg ${siteSettings.colorTheme === 'contrast' ? 'ring-2 ring-law-primary' : ''}`}
                        onClick={() => applyTheme('contrast')}
                      >
                        <div className="flex space-x-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#cc0000]"></div>
                          <div className="w-8 h-8 rounded-full bg-[#000066]"></div>
                        </div>
                        <div className="text-sm font-medium">High Contrast</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-gray-800 mb-4">Custom Colors</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                        <div className="flex items-center">
                          <input 
                            type="color" 
                            value={siteSettings.primaryColor}
                            onChange={e => setSiteSettings({...siteSettings, primaryColor: e.target.value})}
                            className="w-10 h-10 border-0"
                          />
                          <Input 
                            value={siteSettings.primaryColor}
                            onChange={e => setSiteSettings({...siteSettings, primaryColor: e.target.value})}
                            className="ml-2"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
                        <div className="flex items-center">
                          <input 
                            type="color" 
                            value={siteSettings.secondaryColor}
                            onChange={e => setSiteSettings({...siteSettings, secondaryColor: e.target.value})}
                            className="w-10 h-10 border-0"
                          />
                          <Input 
                            value={siteSettings.secondaryColor}
                            onChange={e => setSiteSettings({...siteSettings, secondaryColor: e.target.value})}
                            className="ml-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="bg-law-secondary hover:bg-law-primary text-white"
                      onClick={handleSaveSettings}
                    >
                      <Palette className="mr-2 h-4 w-4" />
                      Apply Theme
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="website">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Website Settings</h3>
                <p>Manage website configuration, SEO settings, and content options.</p>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

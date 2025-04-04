
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Users 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { allBlogPosts } from '@/data/blogData';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogPosts, setBlogPosts] = useState(allBlogPosts);
  
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
    // In a real app, this would make an API call
    setBlogPosts(blogPosts.filter(post => post.id !== id));
    
    toast({
      title: "Post deleted",
      description: "The blog post has been deleted successfully.",
      duration: 3000,
    });
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
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded object-cover" src={post.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{post.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.author}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-law-secondary hover:text-law-primary mr-3">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <div className="border-t px-4 py-2 flex justify-end space-x-2">
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
                  {[
                    { name: "David Kimani", date: "April 5, 2025", time: "10:00 AM", service: "Corporate Law Consultation", status: "confirmed" },
                    { name: "Mary Otieno", date: "April 6, 2025", time: "2:30 PM", service: "Property Law Advice", status: "pending" },
                    { name: "James Mwangi", date: "April 7, 2025", time: "11:00 AM", service: "Employment Contract Review", status: "confirmed" }
                  ].map((apt, index) => (
                    <div key={index} className="flex items-center p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{apt.name}</h4>
                        <p className="text-sm text-gray-500">{apt.date} at {apt.time}</p>
                        <p className="text-sm text-gray-700">{apt.service}</p>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${apt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {apt.status}
                        </span>
                      </div>
                      <div className="ml-4">
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    </div>
                  ))}
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
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="website">Website</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Firm Name</label>
                        <Input defaultValue="Edwin Omulama & Associates Advocates" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <Input defaultValue="info@omulamaadvocates.co.ke" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <Input defaultValue="+254 (0) 727 123 456" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                        <Input defaultValue="https://www.omulamaadvocates.co.ke" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
                      <textarea
                        className="w-full p-2 border rounded-md focus:ring-law-primary focus:border-law-primary"
                        rows={3}
                        defaultValue="Westlands Arcade 3rd Floor, Waiyaki Way - Westlands, P. O. BOX 37592-00100, NAIROBI"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-law-secondary hover:bg-law-primary text-white">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="account">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
                <p>Manage your account settings, password, and preferences here.</p>
              </TabsContent>
              
              <TabsContent value="notifications">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h3>
                <p>Configure your notification preferences for emails, system alerts, etc.</p>
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

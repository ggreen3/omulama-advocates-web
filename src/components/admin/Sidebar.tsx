
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  PenSquare, 
  Users, 
  MessageSquare, 
  Calendar, 
  Settings,
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  handleLogout: () => void;
}

const Sidebar = ({ activeTab, setActiveTab, handleLogout }: SidebarProps) => {
  return (
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
  );
};

export default Sidebar;


import React from 'react';
import { Palette, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SiteSettings {
  firmName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  primaryColor: string;
  secondaryColor: string;
  colorTheme: string;
}

interface ThemeSettingsProps {
  siteSettings: SiteSettings;
  setSiteSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
  handleSaveSettings: () => void;
  applyTheme: (theme: string) => void;
}

const ThemeSettings = ({ 
  siteSettings, 
  setSiteSettings, 
  handleSaveSettings,
  applyTheme
}: ThemeSettingsProps) => {
  return (
    <div>
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
    </div>
  );
};

export default ThemeSettings;

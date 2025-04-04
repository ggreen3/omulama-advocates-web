
import React from 'react';
import { Save } from 'lucide-react';
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

interface GeneralSettingsProps {
  siteSettings: SiteSettings;
  setSiteSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
  handleSaveSettings: () => void;
}

const GeneralSettings = ({ 
  siteSettings, 
  setSiteSettings, 
  handleSaveSettings 
}: GeneralSettingsProps) => {
  return (
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
  );
};

export default GeneralSettings;

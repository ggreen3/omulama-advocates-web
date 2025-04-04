
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GeneralSettings from './settings/GeneralSettings';
import AccountSettings from './settings/AccountSettings';
import ThemeSettings from './settings/ThemeSettings';
import WebsiteSettings from './settings/WebsiteSettings';

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

interface SettingsTabProps {
  siteSettings: SiteSettings;
  setSiteSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
  handleSaveSettings: () => void;
  applyTheme: (theme: string) => void;
}

const SettingsTab = ({ 
  siteSettings, 
  setSiteSettings, 
  handleSaveSettings,
  applyTheme
}: SettingsTabProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="website">Website</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6">
          <GeneralSettings 
            siteSettings={siteSettings}
            setSiteSettings={setSiteSettings}
            handleSaveSettings={handleSaveSettings}
          />
        </TabsContent>
        
        <TabsContent value="account">
          <AccountSettings />
        </TabsContent>
        
        <TabsContent value="theme">
          <ThemeSettings 
            siteSettings={siteSettings}
            setSiteSettings={setSiteSettings}
            handleSaveSettings={handleSaveSettings}
            applyTheme={applyTheme}
          />
        </TabsContent>
        
        <TabsContent value="website">
          <WebsiteSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsTab;

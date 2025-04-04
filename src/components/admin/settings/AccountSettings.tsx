
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AccountSettings = () => {
  return (
    <div>
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
    </div>
  );
};

export default AccountSettings;

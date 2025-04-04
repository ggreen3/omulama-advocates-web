
import React from 'react';
import { Edit, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamTab = () => {
  return (
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
  );
};

export default TeamTab;

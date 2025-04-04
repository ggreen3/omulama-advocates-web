
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Appointment {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  time: string;
  status: string;
}

interface AppointmentsTabProps {
  appointments: Appointment[];
}

const AppointmentsTab = ({ appointments }: AppointmentsTabProps) => {
  return (
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
  );
};

export default AppointmentsTab;

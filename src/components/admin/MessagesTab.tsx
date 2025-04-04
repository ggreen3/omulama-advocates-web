
import React from 'react';
import { Button } from '@/components/ui/button';

const MessagesTab = () => {
  return (
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
  );
};

export default MessagesTab;

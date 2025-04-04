
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface DashboardTabProps {
  blogPostsCount: number;
}

const DashboardTab = ({ blogPostsCount }: DashboardTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Total Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{blogPostsCount}</div>
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
  );
};

export default DashboardTab;

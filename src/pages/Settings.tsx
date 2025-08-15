import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Header = ({ title }: { title: string }) => (
  <div className="mb-6 lg:mb-8">
    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h1>
  </div>
);

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="Settings"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-7xl mx-auto">
        {/* Profile Settings - Top Left */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
          <h2 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Profile Settings</h2>
          <p className="text-xs lg:text-sm text-gray-600 mb-4 lg:mb-6">Update your personal information and contact details</p>
          
          <div className="space-y-3 lg:space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-xs lg:text-sm font-medium text-gray-900 mb-2 block">Full Name</Label>
              <Input 
                id="fullName" 
                defaultValue="Admin User" 
                className="w-full h-9 lg:h-10 border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-xs lg:text-sm font-medium text-gray-900 mb-2 block">Email</Label>
              <Input 
                id="email" 
                type="email" 
                defaultValue="admin@example.com" 
                className="w-full h-9 lg:h-10 border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-xs lg:text-sm font-medium text-gray-900 mb-2 block">Phone</Label>
              <Input 
                id="phone" 
                defaultValue="+1-555-0123" 
                className="w-full h-9 lg:h-10 border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
                         <Button className="h-9 lg:h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl mt-4 lg:mt-6 text-sm lg:text-base">
               Update Profile
             </Button>
          </div>
        </div>

        {/* System Settings - Top Right */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
          <h2 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">System Settings</h2>
          <p className="text-xs lg:text-sm text-gray-600 mb-4 lg:mb-6">Configure system preferences and default options</p>
          
          <div className="space-y-3 lg:space-y-4">
            <div>
              <Label htmlFor="language" className="text-xs lg:text-sm font-medium text-gray-900 mb-2 block">Default Language</Label>
              <Select defaultValue="english">
                <SelectTrigger className="w-full h-9 lg:h-10 border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="timezone" className="text-xs lg:text-sm font-medium text-gray-900 mb-2 block">Time Zone</Label>
              <Select defaultValue="eastern">
                <SelectTrigger className="w-full h-9 lg:h-10 border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eastern">UTC-5 (Eastern Time)</SelectItem>
                  <SelectItem value="central">UTC-6 (Central Time)</SelectItem>
                  <SelectItem value="pacific">UTC-8 (Pacific Time)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
                         <Button className="h-9 lg:h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl mt-4 lg:mt-6 text-sm lg:text-base">
               Save Settings
             </Button>
          </div>
        </div>

        {/* Notification Preferences - Bottom Left */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
          <h2 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Notification Preferences</h2>
          <p className="text-xs lg:text-sm text-gray-600 mb-4 lg:mb-6">Manage how and when you receive notifications</p>
          
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Label htmlFor="emailNotifications" className="text-xs lg:text-sm font-medium text-gray-900 block">Email Notifications</Label>
                <p className="text-xs lg:text-sm text-gray-600 mt-0.5">Receive updates via email</p>
              </div>
              <Checkbox 
                id="emailNotifications" 
                defaultChecked 
                className="mt-0.5 h-4 w-4 lg:h-5 lg:w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Label htmlFor="performanceReports" className="text-xs lg:text-sm font-medium text-gray-900 block">Performance Reports</Label>
                <p className="text-xs lg:text-sm text-gray-600 mt-0.5">Weekly performance summaries</p>
              </div>
              <Checkbox 
                id="performanceReports" 
                defaultChecked 
                className="mt-0.5 h-4 w-4 lg:h-5 lg:w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Label htmlFor="schoolAlerts" className="text-xs lg:text-sm font-medium text-gray-900 block">New School Alerts</Label>
                <p className="text-xs lg:text-sm text-gray-600 mt-0.5">Notifications for new school registrations</p>
              </div>
              <Checkbox 
                id="schoolAlerts" 
                className="mt-0.5 h-4 w-4 lg:h-5 lg:w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Data Management - Bottom Right */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
          <h2 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Data Management</h2>
          <p className="text-xs lg:text-sm text-gray-600 mb-4 lg:mb-6">Export data and manage system backups</p>
          
          <div className="space-y-4 lg:space-y-6">
            <div>
              <Label className="text-xs lg:text-sm font-medium text-gray-900 mb-2 lg:mb-3 block">Export Data</Label>
                             <div className="flex flex-col sm:flex-wrap gap-2 lg:gap-3">
                 <Button 
                   variant="outline" 
                   size="sm" 
                   className="h-8 lg:h-9 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl font-bold px-2 text-xs lg:text-sm"
                 >
                   Export Student Data
                 </Button>
                 <Button 
                   variant="outline" 
                   size="sm" 
                   className="h-8 lg:h-9 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl font-bold px-2 text-xs lg:text-sm"
                 >
                   Export School Reports
                 </Button>
                 <Button 
                   variant="outline" 
                   size="sm" 
                   className="h-8 lg:h-9 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl font-bold px-2 text-xs lg:text-sm"
                 >
                   Export Analytics
                 </Button>
               </div>
            </div>
            
            <div>
              <Label className="text-xs lg:text-sm font-medium text-gray-900 mb-2 lg:mb-3 block">Backup</Label>
              <div>
                                 <Button 
                   variant="outline" 
                   className="h-8 lg:h-9 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl font-bold px-2 text-xs lg:text-sm"
                 >
                   Create Backup
                 </Button>
                <p className="text-xs text-gray-500 mt-2">Last backup: March 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
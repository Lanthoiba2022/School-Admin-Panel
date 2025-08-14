import React from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export const Settings = () => {
  return (
    <div>
      <Header 
        title="Settings"
        timestamp="12/08/2025, 15:46:57"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="space-y-6">
          <div className="chart-container">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Profile Settings</h2>
            <p className="text-sm text-text-secondary mb-6">Update your personal information and contact details</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="Admin User" />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@example.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+1-555-0123" />
              </div>
              
              <Button className="w-full">Update Profile</Button>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="chart-container">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Notification Preferences</h2>
            <p className="text-sm text-text-secondary mb-6">Manage how and when you receive notifications</p>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailNotifications">Email Notifications</Label>
                  <p className="text-sm text-text-secondary">Receive updates via email</p>
                </div>
                <Switch id="emailNotifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="performanceReports">Performance Reports</Label>
                  <p className="text-sm text-text-secondary">Weekly performance summaries</p>
                </div>
                <Switch id="performanceReports" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="schoolAlerts">New School Alerts</Label>
                  <p className="text-sm text-text-secondary">Notifications for new school registrations</p>
                </div>
                <Switch id="schoolAlerts" />
              </div>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="space-y-6">
          <div className="chart-container">
            <h2 className="text-lg font-semibold text-text-primary mb-4">System Settings</h2>
            <p className="text-sm text-text-secondary mb-6">Configure system preferences and default options</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="language">Default Language</Label>
                <Select defaultValue="english">
                  <SelectTrigger>
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
                <Label htmlFor="timezone">Time Zone</Label>
                <Select defaultValue="eastern">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eastern">UTC-5 (Eastern Time)</SelectItem>
                    <SelectItem value="central">UTC-6 (Central Time)</SelectItem>
                    <SelectItem value="pacific">UTC-8 (Pacific Time)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full">Save Settings</Button>
            </div>
          </div>

          {/* Data Management */}
          <div className="chart-container">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Data Management</h2>
            <p className="text-sm text-text-secondary mb-6">Export data and manage system backups</p>
            
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-text-primary">Export Data</Label>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">Export Student Data</Button>
                  <Button variant="outline" size="sm">Export School Reports</Button>
                </div>
                <div className="mt-2">
                  <Button variant="outline" size="sm">Export Analytics</Button>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-text-primary">Backup</Label>
                <div className="mt-2">
                  <Button variant="outline" className="w-full">Create Backup</Button>
                  <p className="text-xs text-text-secondary mt-2">Last backup: March 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
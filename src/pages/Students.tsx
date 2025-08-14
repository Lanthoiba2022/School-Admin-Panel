import React from 'react';
import { Header } from '@/components/layout/Header';
import { StudentCard } from '@/components/cards/StudentCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { students, classEnrollment } from '@/data/mockData';

export const Students = () => {
  return (
    <div>
      <Header 
        title="Students"
        subtitle="Manage and view all student profiles and performance data"
        timestamp="12/08/2025, 15:46:57"
      />

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="metric-card">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Total Students</h3>
          <p className="text-3xl font-bold text-primary-blue">245</p>
          <p className="text-sm text-success-green">+12 new this month</p>
        </div>
        
        <div className="metric-card">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Active Learners</h3>
          <p className="text-3xl font-bold text-success-green">198</p>
          <p className="text-sm text-text-secondary">Engaged this week</p>
        </div>
        
        <div className="metric-card">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Average Score</h3>
          <p className="text-3xl font-bold text-accent-purple">86.2%</p>
          <p className="text-sm text-success-green">+2.1% from last month</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input 
          placeholder="Search by name or ID..." 
          className="max-w-md"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Classes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            {classEnrollment.map((cls) => (
              <SelectItem key={cls.class} value={cls.class.toLowerCase()}>
                {cls.class}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Performance Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Performance Levels</SelectItem>
            <SelectItem value="excellent">Excellent (90-100%)</SelectItem>
            <SelectItem value="good">Good (80-89%)</SelectItem>
            <SelectItem value="average">Average (70-79%)</SelectItem>
            <SelectItem value="needs-improvement">Needs Improvement</SelectItem>
          </SelectContent>
        </Select>
        
        <Button>Export Data</Button>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            showRanking={true}
            compact={false}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Students (235 remaining)
        </Button>
      </div>
    </div>
  );
};
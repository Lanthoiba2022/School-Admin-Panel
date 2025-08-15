import React from 'react';
import { Header } from '@/components/layout/Header';
import { MetricCard } from '@/components/cards/MetricCard';
import { LeaderboardCard } from '@/components/cards/LeaderboardCard';
import { StudentCard } from '@/components/cards/StudentCard';
import { SummaryCard } from '@/components/cards/SummaryCard';
import { CustomBarChart } from '@/components/charts/BarChart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { dashboardMetrics, students, classEnrollment, analyticsData } from '@/data/mockData';
import { Users, BookOpen, TrendingUp, Star, Trophy, Flame, Zap } from 'lucide-react';

const iconMap = {
  Users,
  BookOpen,
  TrendingUp,
  Star
};

// Updated performance distribution to match the image exactly
const performanceDistribution = [
  { name: "Excellent (90-100%)", value: 45, color: "#10b981" },
  { name: "Good (80-89%)", value: 35, color: "#2563eb" },
  { name: "Average (70-79%)", value: 15, color: "#f59e0b" },
  { name: "Needs Improvement", value: 5, color: "#ef4444" }
];

export const Dashboard = () => {
  const topStudents = students.slice(0, 10);
  const displayStudents = students.slice(0, 12);

  const classData = classEnrollment.map(item => ({
    name: item.class,
    value: item.students
  }));

  return (
    <div className="min-h-screen bg-gray-50 p-6 focus:outline-none">
      {/* Custom Header to match the image */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-600 mb-2">Greenwood Elementary School</h1>
            <p className="text-gray-600">Welcome back, School Admin! Here's your school's overview.</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-sm text-gray-600">CBSE Board</span>
            <span className="text-sm text-gray-600">Last updated: 12/08/2025, 15:46:57</span>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardMetrics.map((metric, index) => {
          const IconComponent = iconMap[metric.icon as keyof typeof iconMap];
          return (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
              icon={IconComponent}
              iconColor={metric.iconColor}
            />
          );
        })}
      </div>

      {/* Charts Section - Fixed to match the image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 items-start">
        <div className="bg-white rounded-xl shadow-sm p-6 pb-20 border border-gray-100 focus:outline-none">
          <CustomBarChart
            data={classData}
            title="Class-wise Student Enrollment"
            subtitle="Student distribution across different grades"
            color="#60a5fa"
          />
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 focus:outline-none">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-1">Performance Distribution</h3>
            <p className="text-sm text-gray-600">Overall accuracy breakdown across all students</p>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={performanceDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {performanceDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend positioned below the pie chart */}
          <div className="flex flex-col gap-3 ">
            {performanceDistribution.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-sm text-gray-900 whitespace-nowrap">
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">🏆</span>
          <h2 className="text-xl font-semibold text-blue-600">
            School Leaderboard - Top 10 Champions
          </h2>
        </div>
        <p className="text-gray-600 mb-8">
          Our highest performing students this month with points and achievements
        </p>

        {/* Top 10 Champions Grid - All uniform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {topStudents.map((student, index) => (
            <LeaderboardCard
              key={student.id}
              student={student}
              rank={index + 1}
            />
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 rounded-lg p-6 text-center border border-yellow-200">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-semibold text-gray-800 mb-2">Top Scorer</h3>
            <p className="text-green-600">Ahan Kumar - 830 pts</p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
            <div className="text-3xl mb-2">🔥</div>
            <h3 className="font-semibold text-gray-800 mb-2">Longest Streak</h3>
            <p className="text-green-600">Ahan Kumar - 15 days</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Most Lessons</h3>
            <p className="text-green-600">Ahan Kumar - 68 lessons</p>
          </div>
        </div>
      </div>

      {/* All Students Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-600">All Students</h2>
            <p className="text-gray-600">Complete student directory with performance details.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              placeholder="Search students..." 
              className="w-full sm:w-64"
            />
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-40">
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
          </div>
        </div>

        {/* Students Grid - 3x4 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {displayStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              compact={true}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Load More Students (233 remaining)
          </Button>
        </div>
      </div>
    </div>
  );
};
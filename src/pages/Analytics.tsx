import React from 'react';
import { Header } from '@/components/layout/Header';
import { MetricCard } from '@/components/cards/MetricCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Line, PieChart, Pie, Cell } from 'recharts';
import { analyticsData } from '@/data/mockData';
import { Clock, BookOpen, Users, Target } from 'lucide-react';

const analyticsMetrics = [
  {
    title: "Total Learning Hours",
    value: "2,847",
    change: "+12% from last month",
    changeType: "positive" as const,
    icon: Clock,
    iconColor: "blue" as const
  },
  {
    title: "Lessons Completed",
    value: "1,892",
    change: "+18% from last month",
    changeType: "positive" as const,
    icon: BookOpen,
    iconColor: "green" as const
  },
  {
    title: "Average Session Time",
    value: "24 min",
    change: "+8% from last month",
    changeType: "positive" as const,
    icon: Target,
    iconColor: "purple" as const
  },
  {
    title: "Active Students",
    value: "1,156",
    change: "+5% from last month",
    changeType: "positive" as const,
    icon: Users,
    iconColor: "orange" as const
  }
];

const skillData = [
  { skill: "Vocabulary", percentage: 82, color: "#2563eb" },
  { skill: "Grammar", percentage: 78, color: "#10b981" },
  { skill: "Pronunciation", percentage: 76, color: "#f59e0b" },
  { skill: "Listening", percentage: 85, color: "#8b5cf6" },
  { skill: "Speaking", percentage: 74, color: "#ef4444" }
];

// Updated performance distribution to match the image exactly
const performanceDistribution = [
  { name: "Excellent (85-100%)", value: 45, color: "#10b981" },
  { name: "Good (70-84%)", value: 35, color: "#f59e0b" },
  { name: "Needs Improvement (<70%)", value: 20, color: "#ef4444" }
];

// Month-over-month improvement data
const monthlyImprovement = [
  { skill: "Vocabulary", improvement: 5 },
  { skill: "Grammar", improvement: 8 },
  { skill: "Pronunciation", improvement: 12 },
  { skill: "Listening", improvement: 3 },
  { skill: "Speaking", improvement: 15 }
];

// Updated engagement data to match the image exactly
const engagementData = [
  { month: "Jan", students: 45, lessons: 12 },
  { month: "Feb", students: 58, lessons: 20 },
  { month: "Mar", students: 59, lessons:15 },
  { month: "Apr", students: 56, lessons: 20 },
  { month: "May", students: 60, lessons: 21 }
];

export const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Analytics & Reports</h1>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {analyticsMetrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
            icon={metric.icon}
            iconColor={metric.iconColor}
          />
        ))}
      </div>

      {/* Charts Row 1 - Fixed to match the image exactly */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {/* Left Column: Student Performance Distribution */}
        <div className="bg-white rounded-xl p-6 lg:p-6 shadow-sm border border-gray-200 relative">
          <div className="mb-4 lg:mb-6">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">Student Performance Distribution</h3>
            <p className="text-xs lg:text-sm text-gray-600">Overall accuracy breakdown across all students</p>
          </div>
          
          <div className="h-64 lg:h-80">
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
          
          {/* Legend positioned in bottom left corner - Mobile optimized */}
          <div className="absolute -bottom-14 lg:bottom-6 left-4 lg:left-6 flex flex-col gap-2 lg:gap-3 mb-16 lg:mb-44">
            {performanceDistribution.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-xs lg:text-sm text-gray-900 whitespace-nowrap">
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Average Performance by Skill Area */}
        <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200">
          <div className="mb-4 lg:mb-6">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">Average Performance by Skill Area</h3>
            <p className="text-xs lg:text-sm text-gray-600">Individual skill performance metrics and improvements</p>
          </div>
          
          {/* Skill Performance Progress Bars */}
          <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
            {skillData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 lg:gap-4">
                <div className="w-20 lg:w-24 text-xs lg:text-sm text-gray-600 font-medium">
                  {item.skill}
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-2 lg:h-3 relative">
                  <div 
                    className="h-2 lg:h-3 rounded-full"
                    style={{ 
                      width: `${item.percentage}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
                <div className="w-10 lg:w-12 text-xs lg:text-sm text-gray-900 font-medium text-right">
                  {item.percentage}%
                </div>
              </div>
            ))}
          </div>

          {/* Skill Performance Bar Chart */}
          <div className="h-36 lg:h-48 mb-6 lg:mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="skill" 
                  tick={{ fontSize: 10, fill: '#6b7280' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 10, fill: '#6b7280' }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar 
                  dataKey="percentage" 
                  radius={[4, 4, 0, 0]}
                >
                  {skillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Month-over-Month Improvement */}
          <div>
            <h4 className="text-xs lg:text-sm font-medium text-gray-900 mb-2 lg:mb-3">Month-over-Month Improvement</h4>
            <div className="grid grid-cols-2 gap-2 lg:gap-3">
              {monthlyImprovement.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 lg:p-3 bg-gray-50 rounded-lg">
                  <span className="text-xs font-medium text-gray-700">{item.skill}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-green-600">+{item.improvement}%</span>
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Student Engagement Trends */}
      <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200">
        <div className="mb-4 lg:mb-6">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">Student Engagement Trends</h3>
          <p className="text-xs lg:text-sm text-gray-600">Monthly engagement patterns and learning time</p>
        </div>
        
        <div className="h-64 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 10, fill: '#6b7280' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                yAxisId="left"
                tick={{ fontSize: 10, fill: '#6b7280' }}
                axisLine={false}
                tickLine={false}
                domain={[0, 70]}
                ticks={[0, 15, 30, 45, 60]}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 10, fill: '#6b7280' }}
                axisLine={false}
                tickLine={false}
                domain={[0, 30]}
                ticks={[0, 6, 12, 18, 24]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar yAxisId="left" dataKey="students" fill="#2563eb" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="lessons" fill="#10b981" radius={[4, 4, 0, 0]} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
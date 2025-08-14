import React from 'react';
import { Header } from '@/components/layout/Header';
import { MetricCard } from '@/components/cards/MetricCard';
import { CustomPieChart } from '@/components/charts/PieChart';
import { HorizontalBarChart } from '@/components/charts/HorizontalBarChart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
    change: "+6% from last month",
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

export const Analytics = () => {
  return (
    <div>
      <Header 
        title="Analytics & Reports"
      />

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <CustomPieChart
          data={analyticsData.performanceDistribution}
          title="Student Performance Distribution"
          subtitle="Overall accuracy breakdown across all students"
        />
        <HorizontalBarChart
          data={skillData}
          title="Average Performance by Skill Area"
          subtitle="Individual skill performance metrics and improvements"
        />
      </div>

      {/* Student Engagement Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="chart-container">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-text-primary">Student Engagement Trends</h3>
            <p className="text-sm text-text-secondary">Monthly engagement patterns and learning time</p>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.monthlyEngagement}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="students" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lessons" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Month-over-Month Improvement */}
        <div className="chart-container">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-text-primary">Month-over-Month Improvement</h3>
          </div>
          
          <div className="space-y-4">
            {analyticsData.monthlyImprovement.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-text-primary">{item.skill}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-success-green">+{item.improvement}%</span>
                  <span className="text-xs text-success-green">▲</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
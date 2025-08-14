import React from 'react';
import { Header } from '@/components/layout/Header';
import { MetricCard } from '@/components/cards/MetricCard';
import { LeaderboardCard } from '@/components/cards/LeaderboardCard';
import { StudentListCard } from '@/components/cards/StudentListCard';
import { SummaryCard } from '@/components/cards/SummaryCard';
import { CustomBarChart } from '@/components/charts/BarChart';
import { CustomPieChart } from '@/components/charts/PieChart';
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

export const Dashboard = () => {
  const topStudents = students.slice(0, 10);
  const displayStudents = students.slice(0, 12);

  const classData = classEnrollment.map(item => ({
    name: item.class,
    value: item.students
  }));

  return (
    <div className="min-h-screen bg-gray-50 p-6 focus:outline-none">
      <Header 
        title="Greenwood Elementary School"
        subtitle="Welcome back, School Admin! Here's your school's overview."
        timestamp="12/08/2025, 15:46:57"
      />

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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 items-start">
        <div className="bg-white rounded-xl shadow-sm p-6 pb-12 border border-gray-100 focus:outline-none">
          <CustomBarChart
            data={classData}
            title="Class-wise Student Enrollment"
            subtitle="Student distribution across different grades"
            color="#2563eb"
          />
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 pb-12 border border-gray-100 focus:outline-none">
          <CustomPieChart
            data={analyticsData.performanceDistribution}
            title="Performance Distribution"
            subtitle="Overall accuracy breakdown across all students"
          />
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
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">All Students</h2>
            <p className="text-gray-600">
              Complete student directory with performance details
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <Input 
            placeholder="Search students..." 
            className="max-w-sm border-gray-200 focus:outline-none"
          />
          <Select defaultValue="all">
            <SelectTrigger className="w-40 border-gray-200 focus:outline-none">
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

        {/* Student List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {displayStudents.map((student) => (
            <StudentListCard
              key={student.id}
              student={student}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none">
            Load More Students (233 remaining)
          </Button>
        </div>
      </div>
    </div>
  );
};
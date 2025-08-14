import React from 'react';
import { Header } from '@/components/layout/Header';
import { StudentCard } from '@/components/cards/StudentCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { students } from '@/data/mockData';

export const Leaderboard = () => {
  const topThree = students.slice(0, 3);
  const allRankings = students.slice(0, 12);

  return (
    <div>
      <Header 
        title="🏆 School Leaderboard"
        subtitle="Celebrating our top performers and encouraging healthy competition"
        timestamp="Updated: 12/08/2025"
      />

      {/* Champions Podium */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-primary-blue mb-2">🏆 Champions Podium 🏆</h2>
          <p className="text-text-secondary">This month's top 3 achievers</p>
        </div>

        <div className="flex justify-center items-end gap-4 mb-8">
          {/* 2nd Place */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border-4 border-gray-300">
              <img src={topThree[1]?.avatar} alt={topThree[1]?.name} className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-300 text-gray-800 px-4 py-8 rounded-lg min-w-[120px]">
              <div className="text-2xl font-bold mb-1">2</div>
              <div className="font-semibold">{topThree[1]?.name}</div>
              <div className="text-sm">{topThree[1]?.class}</div>
              <div className="text-lg font-bold mt-2">{topThree[1]?.points} pts</div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 border-4 border-yellow-400">
              <img src={topThree[0]?.avatar} alt={topThree[0]?.name} className="w-full h-full object-cover" />
            </div>
            <div className="bg-yellow-400 text-yellow-900 px-6 py-10 rounded-lg min-w-[140px]">
              <div className="text-3xl font-bold mb-1">1</div>
              <div className="font-semibold">{topThree[0]?.name}</div>
              <div className="text-sm">{topThree[0]?.class}</div>
              <div className="text-xl font-bold mt-2">{topThree[0]?.points} pts</div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border-4 border-orange-400">
              <img src={topThree[2]?.avatar} alt={topThree[2]?.name} className="w-full h-full object-cover" />
            </div>
            <div className="bg-orange-400 text-orange-900 px-4 py-8 rounded-lg min-w-[120px]">
              <div className="text-2xl font-bold mb-1">3</div>
              <div className="font-semibold">{topThree[2]?.name}</div>
              <div className="text-sm">{topThree[2]?.class}</div>
              <div className="text-lg font-bold mt-2">{topThree[2]?.points} pts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <Input 
          placeholder="Search students..." 
          className="max-w-sm"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Classes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            <SelectItem value="class1">Class 1</SelectItem>
            <SelectItem value="class2">Class 2</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="month">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="This Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          More Filters
        </Button>
      </div>

      {/* Complete Rankings */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Complete Rankings</h2>
        <p className="text-text-secondary mb-6">All students ranked by points earned this month</p>

        <div className="space-y-3">
          {allRankings.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              showRanking={true}
              compact={false}
            />
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-card-background rounded-lg border border-gray-100">
          <div className="text-2xl mb-2">🏆</div>
          <div className="font-semibold text-text-primary">Current Champion</div>
          <div className="text-sm text-text-secondary">Ahan Kumar</div>
          <div className="text-lg font-bold text-primary-blue">830 points</div>
        </div>

        <div className="text-center p-6 bg-card-background rounded-lg border border-gray-100">
          <div className="text-2xl mb-2">🔥</div>
          <div className="font-semibold text-text-primary">Longest Streak</div>
          <div className="text-sm text-text-secondary">Ahan Kumar</div>
          <div className="text-lg font-bold text-warning-orange">15 days</div>
        </div>

        <div className="text-center p-6 bg-card-background rounded-lg border border-gray-100">
          <div className="text-2xl mb-2">⚡</div>
          <div className="font-semibold text-text-primary">Most Lessons</div>
          <div className="text-sm text-text-secondary">Ahan Kumar</div>
          <div className="text-lg font-bold text-primary-blue">68 lessons</div>
        </div>

        <div className="text-center p-6 bg-card-background rounded-lg border border-gray-100">
          <div className="text-2xl mb-2">🎯</div>
          <div className="font-semibold text-text-primary">Highest Accuracy</div>
          <div className="text-sm text-text-secondary">Ahan Kumar</div>
          <div className="text-lg font-bold text-success-green">96%</div>
        </div>
      </div>
    </div>
  );
};
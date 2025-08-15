import React from 'react';
import { Header } from '@/components/layout/Header';
import { StudentCard } from '@/components/cards/StudentCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { students } from '@/data/mockData';
import { Search, Filter, Trophy, Medal, Crown, Flame, Zap, Star, Target, Eye } from 'lucide-react';

export const Leaderboard = () => {
  const topThree = students.slice(0, 3);
  const allRankings = students.slice(0, 12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        title="🏆 School Leaderboard"
        subtitle="Celebrating our top performers and encouraging healthy competition"
      />

      {/* Champions Podium */}
      <div className="mb-8 lg:mb-12 px-4 lg:px-6">
        <div className="text-center mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 lg:gap-3 bg-gradient-to-r from-blue-50 to-yellow-50 px-4 lg:px-8 py-3 lg:py-4 rounded-2xl border border-blue-100">
            <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
            <h2 className="text-lg lg:text-2xl font-bold text-blue-600">Champions Podium</h2>
            <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
          </div>
          <p className="text-orange-500 font-medium mt-2 lg:mt-3 text-sm lg:text-base">This month's top 3 achievers</p>
        </div>

        <div className="flex justify-center items-end gap-3 lg:gap-6 mb-6 lg:mb-8">
          {/* 2nd Place */}
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative mb-2 lg:mb-3">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mx-auto border-4 border-gray-300 shadow-lg">
                <img src={topThree[1]?.avatar} alt={topThree[1]?.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-gray-400 rounded-full p-1 lg:p-2 shadow-md text-xs lg:text-sm">
              🥈
              </div>
            </div>
            <div className="bg-gradient-to-b from-gray-400 to-gray-500 text-white px-3 lg:px-6 py-4 lg:py-8 rounded-2xl min-w-[100px] lg:min-w-[140px] shadow-xl border border-gray-300">
              <div className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">2</div>
              <div className="font-bold text-sm lg:text-lg mb-1">{topThree[1]?.name}</div>
              <div className="text-xs lg:text-sm opacity-90 mb-2 lg:mb-3">{topThree[1]?.class}</div>
              <div className="text-lg lg:text-2xl font-bold">{topThree[1]?.points} pts</div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative mb-2 lg:mb-3">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mx-auto border-4 border-yellow-400 shadow-xl">
                <img src={topThree[0]?.avatar} alt={topThree[0]?.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-2 -right-0 lg:-top-3 bg-yellow-500 rounded-full p-1 shadow-lg">
                <Trophy className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
            <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-yellow-900 px-4 lg:px-8 py-6 lg:py-12 rounded-2xl min-w-[120px] lg:min-w-[160px] shadow-2xl border border-yellow-300 relative">
              <div className="text-3xl lg:text-4xl font-bold mb-1 lg:mb-2">1</div>
              <div className="font-bold text-base lg:text-xl mb-1">{topThree[0]?.name}</div>
              <div className="text-xs lg:text-sm opacity-90 mb-2 lg:mb-3">{topThree[0]?.class}</div>
              <div className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-3">{topThree[0]?.points} pts</div>
              <div className="flex justify-center gap-1 lg:gap-2">
                <Trophy className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-700" />
                <Flame className="w-3 h-3 lg:w-4 lg:h-4 text-red-500" />
                <Zap className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-600" />
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative mb-2 lg:mb-3">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mx-auto border-4 border-orange-400 shadow-lg">
                <img src={topThree[2]?.avatar} alt={topThree[2]?.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-orange-500 rounded-full p-1 lg:p-2 shadow-md text-xs lg:text-sm">
              🥉
              </div>
            </div>
            <div className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-3 lg:px-6 py-4 lg:py-8 rounded-2xl min-w-[100px] lg:min-w-[140px] shadow-xl border border-orange-300">
              <div className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">3</div>
              <div className="font-bold text-sm lg:text-lg mb-1">{topThree[2]?.name}</div>
              <div className="text-xs lg:text-sm opacity-90 mb-2 lg:mb-3">{topThree[2]?.class}</div>
              <div className="text-lg lg:text-2xl font-bold">{topThree[2]?.points} pts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6 mb-6 lg:mb-8 mx-4 lg:mx-6">
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search students..." 
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 w-full sm:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-40 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500">
                <SelectValue placeholder="All Classes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="class1">Class 1</SelectItem>
                <SelectItem value="class2">Class 2</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="month">
              <SelectTrigger className="w-full sm:w-40 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500">
                <SelectValue placeholder="This Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-gray-50 border-gray-200 hover:bg-white hover:border-blue-500 transition-colors w-full sm:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Complete Rankings */}
      <div className="mb-8 lg:mb-12 px-4 lg:px-6">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2 lg:mb-3">Complete Rankings</h2>
          <p className="text-gray-600 text-sm lg:text-lg">All students ranked by points earned this month</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="space-y-0">
            {allRankings.map((student, index) => (
              <div key={student.id} className={`relative transition-all duration-200 hover:bg-gray-50 ${
                index < 3 
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-200' 
                  : 'bg-white border-b border-gray-100'
              } ${index === allRankings.length - 1 ? 'border-b-0' : ''}`}>
                
                <div className="px-3 lg:px-6 py-3 lg:py-4">
                  <div className="flex items-center gap-2 lg:gap-4">
                    {/* Rank */}
                    <div className="flex-shrink-0">
                      {index < 3 ? (
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shadow-sm">
                          {index === 0 && (
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                              <Trophy className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                            </div>
                          )}
                          {index === 1 && (
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-400 rounded-full flex items-center justify-center relative text-xs lg:text-sm">
                              🥈
                            </div>
                          )}
                          {index === 2 && (
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-full flex items-center justify-center relative text-xs lg:text-sm">
                              🥉
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs lg:text-sm border border-blue-200">
                          #{index + 1}
                        </div>
                      )}
                    </div>

                    {/* Avatar */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-gray-200">
                        <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
                      </div>
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Flame className="w-1.5 h-1.5 lg:w-2 lg:h-2 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Student Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 lg:gap-3 mb-1">
                        <h3 className="font-semibold text-gray-900 truncate text-sm lg:text-base">{student.name}</h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                          {student.class}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 lg:gap-2">
                        {index === 0 && (
                          <>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                              <Trophy className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-orange-500 rounded-full flex items-center justify-center">
                              <Flame className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                              <Zap className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gray-400 rounded-full flex items-center justify-center">
                              <Trophy className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <Star className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-orange-500 rounded-full flex items-center justify-center">
                              <Target className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-pink-500 rounded-full flex items-center justify-center">
                              <Star className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                          </>
                        )}
                        {index >= 3 && (
                          <>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-blue-400 rounded-full flex items-center justify-center">
                              <Star className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                              <Trophy className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Points */}
                    <div className="flex-shrink-0 text-right">
                      <div className={`text-lg lg:text-2xl font-bold ${
                        index < 3 ? 'text-orange-500' : 'text-gray-700'
                      }`}>
                        {student.points}
                      </div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>

                    {/* Percentage */}
                    <div className="flex-shrink-0 hidden sm:block">
                      <div className="bg-green-100 text-green-700 px-2 lg:px-3 py-1 rounded-full text-xs font-medium">
                        {index === 0 ? '98%' : 
                         index === 1 ? '96%' : 
                         index === 2 ? '94%' : 
                         index === 3 ? '92%' : 
                         index === 4 ? '90%' : 
                         index === 5 ? '88%' : 
                         index === 6 ? '86%' : 
                         index === 7 ? '84%' : 
                         index === 8 ? '82%' : 
                         index === 9 ? '80%' : 
                         index === 10 ? '78%' : 
                         '76%'}
                      </div>
                    </div>

                    {/* Views */}
                    <div className="flex-shrink-0 flex items-center gap-1 text-yellow-600 text-xs lg:text-sm">
                      <Flame className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span>{index === 0 ? '16' : 
                            index === 1 ? '15' : 
                            index === 2 ? '14' : 
                            index === 3 ? '13' : 
                            index === 4 ? '12' : 
                            index === 5 ? '11' : 
                            index === 6 ? '10' : 
                            index === 7 ? '9' : 
                            index === 8 ? '8' : 
                            index === 9 ? '7' : 
                            index === 10 ? '6' : 
                            '5'}</span>
                    </div>

                    {/* View Button */}
                    <div className="flex-shrink-0">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="h-7 lg:h-8 px-2 lg:px-4 text-xs border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                      <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span className="hidden sm:inline ml-1">View</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-6 mb-6 lg:mb-8">
        <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
            <Trophy className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </div>
          <div className="font-bold text-gray-900 text-sm lg:text-lg mb-1 lg:mb-2">Current Champion</div>
          <div className="text-gray-600 mb-2 lg:mb-3 text-xs lg:text-sm">Ahan Kumar</div>
          <div className="text-xl lg:text-2xl font-bold text-blue-600">830 points</div>
        </div>

        <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
            <Flame className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </div>
          <div className="font-bold text-gray-900 text-sm lg:text-lg mb-1 lg:mb-2">Longest Streak</div>
          <div className="text-gray-600 mb-2 lg:mb-3 text-xs lg:text-sm">Ahan Kumar</div>
          <div className="text-xl lg:text-2xl font-bold text-red-600">15 days</div>
        </div>

        <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
            <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </div>
          <div className="font-bold text-gray-900 text-sm lg:text-lg mb-1 lg:mb-2">Most Lessons</div>
          <div className="text-gray-600 mb-2 lg:mb-3 text-xs lg:text-sm">Ahan Kumar</div>
          <div className="text-xl lg:text-2xl font-bold text-yellow-600">68 lessons</div>
        </div>

        <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
            <Target className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </div>
          <div className="font-bold text-gray-900 text-sm lg:text-lg mb-1 lg:mb-2">Highest Accuracy</div>
          <div className="text-gray-600 mb-2 lg:mb-3 text-xs lg:text-sm">Ahan Kumar</div>
          <div className="text-xl lg:text-2xl font-bold text-green-600">96%</div>
        </div>
      </div>
    </div>
  );
};
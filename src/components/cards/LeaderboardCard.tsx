import React from 'react';
import { Button } from '@/components/ui/button';
import { Student } from '@/types';
import { Eye } from 'lucide-react';

interface LeaderboardCardProps {
  student: Student;
  rank: number;
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return "🏆";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return "⭐";
  }
};

const getRankBadgeColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-yellow-500 text-white";
    case 2:
      return "bg-gray-400 text-white";
    case 3:
      return "bg-orange-500 text-white";
    default:
      return "bg-blue-500 text-white";
  }
};

const getPointsButtonColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-yellow-500 text-white hover:bg-yellow-600 border-0";
    case 2:
      return "bg-gray-500 text-white hover:bg-gray-600 border-0";
    case 3:
      return "bg-orange-500 text-white hover:bg-orange-600 border-0";
    default:
      return "bg-blue-500 text-white hover:bg-blue-600 border-0";
  }
};

const getCardBackground = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300";
    case 2:
      return "bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300";
    case 3:
      return "bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300";
    default:
      return "bg-white border border-gray-200";
  }
};

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ 
  student, 
  rank 
}) => {
  const isTopThree = rank <= 3;

  return (
    <div className={`rounded-lg p-3 lg:p-4 text-center shadow-sm hover:shadow-md transition-shadow ${getCardBackground(rank)}`}>
      {/* Rank Badge and Trophy */}
      <div className="flex justify-between items-start mb-2 lg:mb-3">
        <span className="text-xl lg:text-2xl">{getRankIcon(rank)}</span>
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${getRankBadgeColor(rank)}`}>
          #{rank}
        </span>
      </div>

      {/* Student Avatar */}
      <div className="text-center mb-2 lg:mb-3">
        <div className="relative w-16 h-16 lg:w-20 lg:h-20 mx-auto">
          {rank <= 3 ? (
            // Top 3 styling
            <div className="relative w-20 h-16 lg:w-28 lg:h-18 -mx-2 lg:-mx-3 rounded-full bg-yellow-300 flex items-center justify-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-4 border-yellow-500">
                {student.avatar ? (
                  <img 
                    src={student.avatar} 
                    alt={student.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-sm lg:text-lg font-semibold text-gray-700 flex items-center justify-center h-full bg-gray-100">
                    {student.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          ) : (
            // Others (blue ring)
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-4 border-blue-300">
              {student.avatar ? (
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm lg:text-lg font-semibold text-gray-700 flex items-center justify-center h-full bg-gray-100">
                  {student.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Student Info */}
      <div className="text-center mb-2 lg:mb-3">
        <h3 className="font-semibold text-gray-800 mb-1 text-xs lg:text-sm">{student.name}</h3>
        <p className="text-xs text-gray-600">{student.class}</p>
      </div>

      {/* Points */}
      <div className="text-center mb-2 lg:mb-3">
        <Button 
          className={`h-6 lg:h-8 text-xs lg:text-sm font-bold rounded-full ${getPointsButtonColor(rank)}`}
          size="sm"
        >
          {student.points} pts
        </Button>
      </div>

      {/* Accuracy */}
      <div className="text-center mb-2 lg:mb-3">
        <p className="inline-block text-xs bg-green-200 border rounded-full px-2 py-1 text-green-600 font-medium whitespace-nowrap">{student.accuracy}% Accuracy</p>
      </div>

      {/* Streak */}
      <div className="text-center mb-2 lg:mb-3">
        <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
          <span>⭐</span>
          <span>{student.lessons}</span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>{student.streak} day streak</span>
        </div>
      </div>

      {/* View Profile Button */}
      <div className="text-center">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-24 lg:w-32 h-6 lg:h-8 border-gray-300 text-gray-700 hover:bg-gray-50 text-xs rounded-xl"
        >
          <Eye size={12} className="lg:w-4 lg:h-4" /> 
          <span className="hidden sm:inline ml-1">View Profile</span>
          <span className="sm:hidden">View</span>
        </Button>
      </div>
    </div>
  );
}; 
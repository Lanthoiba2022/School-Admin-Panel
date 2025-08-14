import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Student } from '@/types';
import { cn } from '@/lib/utils';

interface StudentCardProps {
  student: Student;
  showRanking?: boolean;
  compact?: boolean;
}

const getRankBadgeColor = (rank: number) => {
  if (rank === 1) return 'bg-yellow-400 text-yellow-900';
  if (rank === 2) return 'bg-gray-300 text-gray-800';
  if (rank === 3) return 'bg-orange-400 text-orange-900';
  return 'bg-primary-blue text-white';
};

export const StudentCard: React.FC<StudentCardProps> = ({ 
  student, 
  showRanking = true,
  compact = false 
}) => {
  return (
    <div className={cn(
      "student-card",
      compact ? "p-3" : "p-4"
    )}>
      <div className="flex items-center gap-4">
        {showRanking && student.rank && (
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
            getRankBadgeColor(student.rank)
          )}>
            {student.rank}
          </div>
        )}
        
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <img 
            src={student.avatar} 
            alt={student.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text-primary truncate">
            {student.name}
          </h3>
          <p className="text-sm text-text-secondary">
            {student.class}
          </p>
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="secondary" className="bg-primary-blue text-white">
              {student.points} pts
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-success-green font-medium">
              {student.accuracy}% Accuracy
            </span>
            <span className="text-text-secondary">
              {student.streak} day streak
            </span>
          </div>
        </div>
        
        {!compact && (
          <Button variant="outline" size="sm">
            View Profile
          </Button>
        )}
      </div>
    </div>
  );
};
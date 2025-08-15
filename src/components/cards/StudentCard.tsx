import React from 'react';
import { Button } from '@/components/ui/button';
import { Student } from '@/types';
import { cn } from '@/lib/utils';
import { Eye } from 'lucide-react';

interface StudentCardProps {
  student: Student;
  showRanking?: boolean;
  compact?: boolean;
}

const getPerformanceColor = (accuracy: number) => {
  if (accuracy >= 90) return 'text-green-600 bg-green-50';
  if (accuracy >= 80) return 'text-blue-600 bg-blue-50';
  return 'text-gray-600 bg-gray-50';
};

export const StudentCard: React.FC<StudentCardProps> = ({ 
  student, 
  showRanking = false,
  compact = false 
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-3 lg:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow",
      compact ? "p-3 lg:p-4" : "p-3 lg:p-4"
    )}>
      <div className="flex items-center gap-2 lg:gap-3">
        {/* Profile Picture/Initials */}
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <img 
            src={student.avatar} 
            alt={student.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Student Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate text-sm lg:text-base">
            {student.name}
          </h3>
          <p className="text-xs text-gray-500">
            {student.class}
          </p>
        </div>
        
        {/* Performance and XP */}
        <div className="text-right">
          <div className={cn(
            "text-xs lg:text-sm font-medium mb-1 px-2 py-1 rounded-full inline-block",
            getPerformanceColor(student.accuracy)
          )}>
            {student.accuracy}%
          </div>
          <div className="text-xs text-gray-500">
            {student.points.toLocaleString()} XP
          </div>
        </div>
        
        {/* Eye Icon */}
        <Button variant="ghost" size="sm" className="p-1 h-7 w-7 lg:h-8 lg:w-8 rounded-full">
          <Eye className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400" />
        </Button>
      </div>
    </div>
  );
};
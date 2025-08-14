import React from 'react';
import { Button } from '@/components/ui/button';
import { Student } from '@/types';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StudentListCardProps {
  student: Student;
}

const getPerformanceColor = (accuracy: number) => {
  if (accuracy >= 90) return 'bg-green-100 text-green-700 border-green-200';
  if (accuracy >= 80) return 'bg-blue-100 text-blue-700 border-blue-200';
  return 'bg-orange-100 text-orange-700 border-orange-200';
};

export const StudentListCard: React.FC<StudentListCardProps> = ({ 
  student 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          {student.avatar ? (
            <img 
              src={student.avatar} 
              alt={student.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-200 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">
                {student.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </div>
          )}
        </div>
        
        {/* Student info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">
            {student.name}
          </h3>
          <p className="text-sm text-gray-600">
            {student.class}
          </p>
        </div>
        
        {/* Performance and XP */}
        <div className="text-right">
          <div className={cn(
            "inline-block px-3 py-1 rounded-full text-sm font-medium border mb-1",
            getPerformanceColor(student.accuracy)
          )}>
            {student.accuracy}%
          </div>
          <div className="text-sm text-gray-500">
            {student.points.toLocaleString()} XP
          </div>
        </div>
        
        {/* View Details Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-10 h-10 p-0 border-gray-200 hover:bg-gray-50"
        >
          <Eye className="w-4 h-4 text-gray-600" />
        </Button>
      </div>
    </div>
  );
}; 
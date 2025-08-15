import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'info';
  icon: LucideIcon;
  iconColor: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const iconColorClasses = {
  blue: 'bg-blue-500 text-white',
  green: 'bg-green-500 text-white',
  purple: 'bg-purple-500 text-white',
  orange: 'bg-orange-500 text-white',
  red: 'bg-red-500 text-white'
};

const changeColorClasses = {
  positive: 'text-green-600',
  negative: 'text-red-600',
  info: 'text-green-600'
};

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor
}) => {
  // Function to render change text with proper formatting
  const renderChangeText = () => {
    if (changeType === 'info') {
      // Handle special case for "Ahan K. Class 8" format
      if (change.includes('Class')) {
        const parts = change.split(' ');
        const namePart = parts.slice(0, -2).join(' '); // "Ahan K."
        const classPart = parts.slice(-2).join(' '); // "Class 8"
        return (
          <>
            <span className="text-green-600 font-medium">{namePart}</span>
            <span className="text-gray-900"> {classPart}</span>
          </>
        );
      }
      return <span className="text-gray-900">{change}</span>;
    }
    
    // Handle percentage changes like "+12% from last month"
    if (change.includes('%') && change.includes('from')) {
      const percentageMatch = change.match(/^(\+?\d+%)/);
      if (percentageMatch) {
        const percentage = percentageMatch[1];
        const remaining = change.substring(percentageMatch[0].length);
        return (
          <>
            <span className="text-green-600 font-medium">{percentage}</span>
            <span className="text-gray-900">{remaining}</span>
          </>
        );
      }
    }
    
    // Default case
    return (
      <span className={cn("font-medium", changeColorClasses[changeType])}>
        {change}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100 focus:outline-none">
      <div className="flex items-start justify-between mb-3 lg:mb-4">
        <div className="flex-1">
          <p className="text-xs font-medium text-black uppercase tracking-wide mb-1 lg:mb-2">
            {title}
          </p>
          <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
            {value}
          </p>
          <p className="text-xs lg:text-sm">
            {renderChangeText()}
          </p>
        </div>
        
        <div className={cn(
          "w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center ml-3 lg:ml-4 mt-2 lg:mt-4 flex-shrink-0",
          iconColorClasses[iconColor]
        )}>
          <Icon size={20} className="lg:w-6 lg:h-6" />
        </div>
      </div>
    </div>
  );
};
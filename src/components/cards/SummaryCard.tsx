import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SummaryCardProps {
  title: string;
  details: string;
  icon: LucideIcon;
  bgColor: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  details, 
  icon: Icon, 
  bgColor 
}) => {
  // Function to render details text with proper formatting
  const renderDetailsText = () => {
    // Handle format like "Ahan Kumar - 830 pts"
    if (details.includes(' - ')) {
      const parts = details.split(' - ');
      const namePart = parts[0]; // "Ahan Kumar"
      const remainingPart = parts.slice(1).join(' - '); // "830 pts"
      return (
        <>
          <span className="text-green-600 font-medium">{namePart}</span>
          <span className="text-gray-700"> - {remainingPart}</span>
        </>
      );
    }
    
    // Default case
    return <span className="text-gray-700">{details}</span>;
  };

  return (
    <div className={cn(
      "rounded-xl shadow-sm p-4 border border-gray-100 relative",
      bgColor
    )}>
      {/* Top corner icon */}
      <div className="absolute -top-2 -left-2">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      
      {/* Content */}
      <div className="text-center">
        <h3 className="font-bold text-gray-900 text-sm mb-1">
          {title}
        </h3>
        <p className="text-xs">
          {renderDetailsText()}
        </p>
      </div>
    </div>
  );
}; 
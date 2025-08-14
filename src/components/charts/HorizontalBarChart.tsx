import React from 'react';

interface SkillData {
  skill: string;
  percentage: number;
  color: string;
}

interface HorizontalBarChartProps {
  data: SkillData[];
  title: string;
  subtitle?: string;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ 
  data, 
  title, 
  subtitle 
}) => {
  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        {subtitle && (
          <p className="text-sm text-text-secondary">{subtitle}</p>
        )}
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-20 text-sm text-text-secondary text-right">
              {item.skill}
            </div>
            <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
              <div 
                className="h-6 rounded-full flex items-center justify-end pr-3"
                style={{ 
                  width: `${item.percentage}%`,
                  backgroundColor: item.color
                }}
              >
                <span className="text-white text-sm font-medium">
                  {item.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
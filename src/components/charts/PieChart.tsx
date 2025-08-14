import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface CustomPieChartProps {
  data: PieChartData[];
  title: string;
  subtitle?: string;
}

export const CustomPieChart: React.FC<CustomPieChartProps> = ({ 
  data, 
  title, 
  subtitle 
}) => {
  return (
    <div className="focus:outline-none">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-600 mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-600">{subtitle}</p>
        )}
      </div>
      
      <div className="relative h-96 pb-8 focus:outline-none">
        {/* Pie chart positioned much higher up */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 focus:outline-none transform -translate-y-16">
            <ResponsiveContainer width="100%" height="100%" className="focus:outline-none">
              <PieChart className="focus:outline-none">
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  className="focus:outline-none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, '']}
                  labelFormatter={(label) => label}
                  contentStyle={{
                    outline: 'none',
                    border: 'none'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Labels positioned much further down at the very bottom-left */}
        <div className="absolute -bottom-6 left-0 flex flex-col gap-3">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-sm text-gray-900 whitespace-nowrap">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Extended blank space at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24"></div>
      </div>
    </div>
  );
};
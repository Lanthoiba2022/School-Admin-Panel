import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartData {
  name: string;
  value: number;
}

interface CustomBarChartProps {
  data: BarChartData[];
  title: string;
  subtitle?: string;
  color?: string;
}

export const CustomBarChart: React.FC<CustomBarChartProps> = ({ 
  data, 
  title, 
  subtitle,
  color = "#60a5fa"
}) => {
  return (
    <div className="focus:outline-none">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-600 mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-600">{subtitle}</p>
        )}
      </div>
      
      <div className="h-96 pb-12 focus:outline-none">
        <ResponsiveContainer width="100%" height="100%" className="focus:outline-none">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 32 }} className="focus:outline-none">
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
              domain={[0, 36]}
              ticks={[0, 9, 18, 27, 36]}
            />
            <Tooltip 
              formatter={(value) => [value, 'Students']}
              labelFormatter={(label) => label}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
                outline: 'none'
              }}
            />
            <Bar 
              dataKey="value" 
              fill={color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
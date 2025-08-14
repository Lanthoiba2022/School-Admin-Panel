import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  timestamp?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, timestamp }) => {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        {subtitle && (
          <p className="text-gray-600 text-base">{subtitle}</p>
        )}
      </div>
      <div className="text-right">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
          <span className="text-sm text-gray-600">CBSE Board</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          {timestamp && (
            <span className="text-sm text-gray-600">Last updated: {timestamp}</span>
          )}
        </div>
      </div>
    </div>
  );
};
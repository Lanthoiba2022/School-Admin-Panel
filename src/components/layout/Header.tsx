import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  timestamp?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, timestamp }) => {
  return (
    <div className="flex justify-between items-start mb-8 w-full">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        {subtitle && (
          <p className="text-gray-600 text-base">{subtitle}</p>
        )}
      </div>
      {timestamp && (
        <div className="flex-shrink-0 ml-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
            <span className="text-sm text-gray-700 font-medium">CBSE Board</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="text-sm text-gray-600">Last updated: {timestamp}</span>
          </div>
        </div>
      )}
    </div>
  );
};
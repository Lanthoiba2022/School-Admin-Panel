import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  timestamp?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, timestamp }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 lg:mb-8 w-full gap-4 lg:gap-0">
      <div className="flex-1">
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        {subtitle && (
          <p className="text-sm lg:text-base text-gray-600">{subtitle}</p>
        )}
      </div>
      {timestamp && (
        <div className="flex-shrink-0 lg:ml-6">
          <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
            <span className="text-xs lg:text-sm text-gray-400">CBSE Board</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="text-xs lg:text-sm text-gray-400">Last updated: {timestamp}</span>
          </div>
        </div>
      )}
    </div>
  );
};
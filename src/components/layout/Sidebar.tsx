import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Trophy, Users, BarChart3, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' }
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full w-60 bg-sidebar-background border-r border-gray-200 flex flex-col z-40 transition-transform duration-300 ease-in-out",
      isMobile && !isOpen && "-translate-x-full",
      !isMobile && "translate-x-0"
    )}>
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-4 lg:p-6 border-b border-gray-200">
        <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">SG</span>
        </div>
        <div>
          <h1 className="font-semibold text-text-primary text-sm lg:text-base">SpeakGenie</h1>
          <p className="text-xs text-text-secondary">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 lg:px-4 py-4 lg:py-6">
        <ul className="space-y-1 lg:space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className={cn(
                    "sidebar-item text-sm lg:text-base",
                    isActive && "sidebar-item-active"
                  )}
                >
                  <Icon size={18} className="lg:w-5 lg:h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* School Admin Profile */}
      <div className="p-3 lg:p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary-blue rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-xs lg:text-sm">S</span>
            </div>
            <div className="min-w-0">
              <p className="font-medium text-text-primary text-xs lg:text-sm">School Admin</p>
              <p className="text-xs text-text-secondary truncate">Greenwood Elementary</p>
            </div>
          </div>
          {/* Logout Icon */}
          <button className="p-2 lg:p-4 text-text-secondary hover:text-primary-blue hover:bg-hover-blue rounded-lg transition-colors">
            <LogOut size={14} className="lg:w-4 lg:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
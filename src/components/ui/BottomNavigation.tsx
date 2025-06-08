import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center py-2 px-3 ${
      isActive ? 'text-black' : 'text-gray-80'
    }`}
  >
    <div className="w-6 h-6 mb-1">{icon}</div>
    <span className="font-instrument font-normal text-descriptor">{label}</span>
  </button>
);

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onNavigateToHome?: () => void;
  onNavigateToSkills?: () => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab = 'home',
  onTabChange,
  onNavigateToHome,
  onNavigateToSkills,
}) => {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v9h2v-9zm4 0h-2v9h2v-9zm4 0h-2v9h2v-9zm2-7H5v2h14V4zM6 19h12v2H6v-2z"/>
        </svg>
      ),
    },
    {
      id: 'discovery',
      label: 'Discovery',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
    },
    {
      id: 'highlights',
      label: 'Highlights',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ),
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white border-t border-gray-40 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => (
          <NavItem
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => {
              onTabChange?.(tab.id);
              if (tab.id === 'home') onNavigateToHome?.();
              if (tab.id === 'skills') onNavigateToSkills?.();
            }}
          />
        ))}
      </div>
    </div>
  );
};
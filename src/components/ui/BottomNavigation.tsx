import React from 'react';

interface NavItemProps {
  iconName: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ iconName, label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center py-2 px-3 ${
      isActive ? 'text-black' : 'text-gray-80'
    }`}
  >
    <span 
      className="material-symbols-outlined w-6 h-6 mb-1 text-2xl leading-none"
      style={{ 
        fontVariationSettings: `'FILL' ${isActive ? 1 : 0}`,
        fontSize: '24px'
      }}
    >
      {iconName}
    </span>
    <span className="font-instrument font-normal text-descriptor">{label}</span>
  </button>
);

interface BottomNavigationProps {
  currentPage?: string;
  onNavigateToHome?: () => void;
  onNavigateToSkills?: () => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentPage = 'home',
  onNavigateToHome,
  onNavigateToSkills,
}) => {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      iconName: 'home',
    },
    {
      id: 'skills',
      label: 'Skills',
      iconName: 'star', // Trophy/medal icon for skills/achievements
    },
    {
      id: 'discovery',
      label: 'Discovery',
      iconName: 'explore',
    },
    {
      id: 'settings',
      label: 'Settings',
      iconName: 'settings',
    },
  ];

  // Map currentPage to appropriate tab for active state
  const getActiveTab = () => {
    if (currentPage === 'home') return 'home';
    if (currentPage === 'skills' || currentPage === 'skillDetail') return 'skills';
    return currentPage;
  };

  return (
    <div className="bg-white border-t border-gray-40 py-3">
      <div className="flex justify-around items-center max-w-[393px] mx-auto px-4">
        {tabs.map((tab) => (
          <NavItem
            key={tab.id}
            iconName={tab.iconName}
            label={tab.label}
            isActive={getActiveTab() === tab.id}
            onClick={() => {
              if (tab.id === 'home') onNavigateToHome?.();
              if (tab.id === 'skills') onNavigateToSkills?.();
              // Discovery and Settings are not implemented yet
            }}
          />
        ))}
      </div>
    </div>
  );
};
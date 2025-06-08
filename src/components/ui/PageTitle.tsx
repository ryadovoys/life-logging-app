import React from 'react';

interface PageTitleRequiredProps {
  title: string;
}

interface PageTitleOptionalProps {
  dropdownLabel?: string;
  onDropdownClick?: () => void;
  showDropdown?: boolean;
  variant?: 'default' | 'large';
}

export interface PageTitleProps extends PageTitleRequiredProps, PageTitleOptionalProps {}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  dropdownLabel,
  onDropdownClick,
  showDropdown = false,
  variant = 'default',
}) => {
  const titleClasses = variant === 'large' ? 'text-display' : 'text-headline';

  return (
    <div className="flex items-center justify-between mb-lg">
      <h1 className={`${titleClasses} text-black font-semibold text-left`}>
        {title}
      </h1>
      
      {showDropdown && dropdownLabel && (
        <button
          onClick={onDropdownClick}
          className="flex items-center gap-xs px-md py-sm bg-gray-20 border border-gray-40 rounded-ios text-caption text-black"
        >
          <span>{dropdownLabel}</span>
          <svg 
            className="w-4 h-4 text-gray-80" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};
import React from 'react';

// Living Organism: PageHeader Component Architecture
// Pure navigation component - clean separation from content

// Required Elements (Core Identity) - None! Pure navigation flexibility
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PageHeaderRequiredProps {}

// Optional Elements (Enhancing Personality)  
interface PageHeaderOptionalProps {
  onBack?: () => void;               // Back navigation handler
  showBackButton?: boolean;          // Show/hide back arrow
  rightElement?: React.ReactNode;    // Flexible right element (plus, dots, custom button)
}

export interface PageHeaderProps extends PageHeaderRequiredProps, PageHeaderOptionalProps {}

// Predefined right elements for common patterns
export const PageHeaderActions = {
  PlusButton: ({ onClick }: { onClick?: () => void }) => (
    <button 
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center"
    >
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>
  ),
  
  MenuButton: ({ onClick }: { onClick?: () => void }) => (
    <button 
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center"
    >
      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 14c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 4 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 6 10c.55 0 1.02.196 1.413.587C7.804 10.98 8 11.45 8 12s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 6 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 10 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 12 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 12 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 16 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 18 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 18 14z"/>
      </svg>
    </button>
  ),
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  onBack,
  showBackButton = true,
  rightElement,
}) => {
  return (
    <div className={`sticky top-0 bg-white z-10 px-sm pt-lg pb-xs`}>
      <div className="flex items-center justify-between">
        {/* Left: Back Button */}
        {showBackButton ? (
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        ) : (
          <div className="w-10 h-10" />
        )}
        
        {/* Middle: Clean empty space for proper separation */}
        <div className="flex-1" />
        
        {/* Right: Flexible Element */}
        {rightElement ? (
          <div className="flex-shrink-0">
            {rightElement}
          </div>
        ) : (
          <div className="w-10 h-10" />
        )}
      </div>
    </div>
  );
};
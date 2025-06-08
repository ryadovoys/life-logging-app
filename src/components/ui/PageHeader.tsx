import React from 'react';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  onAdd?: () => void;
  showBackButton?: boolean;
  showAddButton?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onBack,
  onAdd,
  showBackButton = true,
  showAddButton = true,
}) => {
  return (
    <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-4 pt-6 pb-0 border-b border-gray-40">
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
      
      <h1 className="font-instrument font-medium text-bodyLarge text-black">
        {title}
      </h1>
      
      {showAddButton ? (
        <button 
          onClick={onAdd}
          className="w-10 h-10 flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      ) : (
        <div className="w-10 h-10" />
      )}
    </div>
  );
};
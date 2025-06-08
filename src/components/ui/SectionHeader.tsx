import React from 'react';

interface SectionHeaderProps {
  title: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showViewAll = true,
  onViewAll,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <h2 className="font-instrument font-semibold text-h2 text-black">
        {title}
      </h2>
      
      {showViewAll && (
        <button
          onClick={onViewAll}
          className="px-3 py-2 bg-gray-20 border border-gray-40 rounded-lg font-instrument font-normal text-body-small text-black"
        >
          View all
        </button>
      )}
    </div>
  );
};
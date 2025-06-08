import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onAdd?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  value,
  onChange,
  onAdd,
}) => {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full h-12 px-4 bg-gray-20 border border-gray-40 rounded-[10px] font-instrument text-body-small text-gray-80 placeholder:text-gray-80 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>
      <button
        onClick={onAdd}
        className="w-12 h-12 bg-gray-20 border border-gray-40 rounded-[10px] flex items-center justify-center hover:bg-gray-40 transition-colors"
      >
        <span className="text-black text-xl font-medium">+</span>
      </button>
    </div>
  );
};
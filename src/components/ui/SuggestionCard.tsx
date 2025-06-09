import React from 'react';

interface SuggestionCardProps {
  title: string;
  description: string;
  emoji: string;
  color: string;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  title,
  description,
  emoji,
  color,
}) => {
  return (
    <div 
      className="flex-shrink-0 w-[310px] rounded-lg flex items-center gap-4 p-0"
      style={{ backgroundColor: color }}
    >
      <div 
        className="w-[100px] h-[100px] rounded-lg flex items-center justify-center text-[70px]"
        style={{ 
          fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
        }}
      >
        {emoji}
      </div>
      
      <div className="flex-1 py-4 pr-4 text-left">
        <h3 className="font-instrument font-semibold text-body text-black mb-1 text-left">
          {title}
        </h3>
        <p className="font-instrument font-normal text-body-small text-gray-80 text-left">
          {description}
        </p>
      </div>
    </div>
  );
};
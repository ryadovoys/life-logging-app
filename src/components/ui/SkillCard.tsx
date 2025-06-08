import React from 'react';

interface SkillCardProps {
  title: string;
  totalTime: string;
  lastActivity: string;
  streak?: number;
  color: string;
  emoji: string;
  onClick?: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  totalTime,
  lastActivity,
  streak,
  color,
  emoji,
  onClick,
}) => {
  return (
    <div className="flex-shrink-0 w-[146px]" onClick={onClick}>
      <div className="relative mb-3 cursor-pointer">
        <div 
          className="w-full h-[146px] rounded-lg flex items-center justify-center text-[90px]"
          style={{ 
            backgroundColor: color,
            fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
        >
          {emoji}
        </div>
        
        {streak && (
          <div className="absolute top-1 left-1 bg-white rounded-lg px-2 py-1">
            <span className="font-instrument font-medium text-descriptor text-gray-80">
              🔥 {streak}-day streak
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-0 text-left">
        <h3 className="font-instrument font-semibold text-body text-black text-left mb-0">{title}</h3>
        
        <p className="font-instrument font-normal text-body-small text-gray-80 text-left mb-0">
          Est. total: {totalTime}
        </p>
        
        <p className="font-instrument font-normal text-body-small text-gray-80 text-left mb-0">
          Last: {lastActivity}
        </p>
      </div>
    </div>
  );
};
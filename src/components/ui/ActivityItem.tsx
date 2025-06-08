import React from 'react';

interface ActivityItemProps {
  skill: string;
  activity: string;
  timeAgo: string;
  source: string;
  icon?: React.ReactNode;
  sourceIcon?: React.ReactNode | string;
  emoji?: string;
  color?: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  skill,
  activity,
  timeAgo,
  source,
  icon,
  sourceIcon,
  emoji,
  color,
}) => {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-gray-40 last:border-b-0">
      <div 
        className="flex-shrink-0 w-[60px] h-[60px] rounded-lg flex items-center justify-center text-[40px]"
        style={{ 
          backgroundColor: color || '#f7f7f7',
          fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
        }}
      >
        {emoji || icon}
      </div>
      
      <div className="flex-1 min-w-0 text-left">
        <div className="font-instrument font-normal text-body-small text-gray-80 mb-0 text-left">
          {skill}
        </div>
        
        <h4 className="font-instrument font-semibold text-body text-black mb-0 text-left">
          {activity}
        </h4>
        
        <div className="flex items-center gap-3 text-left">
          <span className="font-instrument font-normal text-body-small text-gray-80 text-left">
            {timeAgo}
          </span>
          {source && (
            <>
              <div className="w-px h-3 bg-gray-40"></div>
              <div className="flex items-center gap-1">
                {sourceIcon && (
                  <div className="w-4 h-4 flex items-center justify-center">
                    {typeof sourceIcon === 'string' ? sourceIcon : sourceIcon}
                  </div>
                )}
                <span className="font-instrument font-normal text-body-small text-gray-80 text-left">
                  {source}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      
      <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 14c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 4 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 6 10c.55 0 1.02.196 1.413.587C7.804 10.98 8 11.45 8 12s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 6 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 10 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 12 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 12 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 16 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 18 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 18 14z"/>
        </svg>
      </button>
    </div>
  );
};
import React from 'react';

// Living Organism: ActivityItem Component Architecture
// Following Airbnb's philosophy of components as organisms with required/optional elements

// App icon mapping
const APP_ICONS = {
  'Health App': '/health-app.png',
  'Books App': '/books-app.png', 
  'YouTube': '/youtube-app.png',
  'Reddit': '/reddit-app.png',
} as const;

export type AppType = keyof typeof APP_ICONS | 'Transcript';

// Required Elements (Core Identity)
interface ActivityItemRequiredProps {
  title: string;       // Primary content - what happened
  emoji: string;       // Visual representation - activity icon
  timestamp: string;   // When it occurred - time context
}

// Optional Elements (Enhancing Personality)
interface ActivityItemOptionalProps {
  sourceApp?: AppType;          // Where activity originated
  showIcon?: boolean;           // Visual icon display control
  showBorder?: boolean;         // Visual separation in lists
  description?: string;         // Additional context about activity
  divider?: boolean;           // Custom divider style
  skillContext?: string;       // Related skill association
  interaction?: {              // User interaction options
    onMore?: () => void;       // More actions handler
    onShare?: () => void;      // Share activity handler
  };
  visual?: {                   // Visual customization
    iconColor?: string;        // Icon background color
    size?: 'compact' | 'normal' | 'expanded';
  };
  metadata?: {                 // Additional activity data
    duration?: string;         // How long activity lasted
    score?: number;           // Activity quality score
    tags?: string[];          // Activity categorization
  };
}

// Complete Component Interface
export interface ActivityItemProps extends ActivityItemRequiredProps, ActivityItemOptionalProps {}

// Component Type Guards
export const isValidActivityItem = (props: Partial<ActivityItemProps>): props is ActivityItemProps => {
  return !!(props.title && props.emoji && props.timestamp);
};

// Component Implementation with Living Organism Architecture
export const ActivityItem: React.FC<ActivityItemProps> = ({
  // Required elements
  title,
  emoji,
  timestamp,
  
  // Optional elements with defaults
  sourceApp,
  showIcon = true,
  showBorder = false,
  description,
  divider = false,
  skillContext,
  interaction,
  visual = { size: 'normal' },
  metadata,
}) => {
  // Component behavior adaptation based on context
  const size = visual?.size || 'normal';
  const iconColor = visual?.iconColor || '#f7f7f7';
  
  const sizeClasses = {
    compact: { 
      container: 'py-2 gap-3', 
      icon: 'w-[40px] h-[40px] text-[24px]',
      typography: { title: 'text-caption', meta: 'text-overline' }
    },
    normal: { 
      container: 'py-3 gap-4', 
      icon: 'w-[70px] h-[70px] text-[40px]',
      typography: { title: 'text-body', meta: 'text-caption' }
    },
    expanded: { 
      container: 'py-4 gap-4', 
      icon: 'w-[80px] h-[80px] text-[50px]',
      typography: { title: 'text-subtitle', meta: 'text-caption' }
    },
  };
  
  // Determine if source is an app with icon
  const isApp = sourceApp && sourceApp !== 'Transcript' && sourceApp in APP_ICONS;
  const appIconSrc = isApp ? APP_ICONS[sourceApp as keyof typeof APP_ICONS] : null;
  
  return (
    <div className={`flex items-center ${sizeClasses[size].container} ${showBorder ? 'border-b border-gray-40 last:border-b-0' : ''}`}>
      {/* Required: Activity icon */}
      {showIcon && (
        <div 
          className={`flex-shrink-0 ${sizeClasses[size].icon} rounded-lg flex items-center justify-center`}
          style={{ 
            backgroundColor: iconColor,
            fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
        >
          {emoji}
        </div>
      )}
      
      <div className="flex-1 min-w-0 text-left">
        {/* Optional: Skill context */}
        {skillContext && (
          <div className={`${sizeClasses[size].typography.meta} text-gray-80 mb-0.5 text-left`}>
            {skillContext}
          </div>
        )}
        
        {/* Required: Activity title */}
        <h4 className={`${sizeClasses[size].typography.title} text-black mb-0.5 text-left`}>
          {title}
        </h4>
        
        {/* Optional: Description */}
        {description && (
          <p className="text-caption text-gray-80 mb-0 text-left">
            {description}
          </p>
        )}
        
        {/* Metadata row */}
        <div className="flex items-center gap-3 text-left">
          {/* Required: Timestamp */}
          <span className={`${sizeClasses[size].typography.meta} text-gray-80 text-left`}>
            {timestamp}
          </span>
          
          {/* Optional: Duration */}
          {metadata?.duration && (
            <>
              <div className="w-px h-3 bg-gray-40"></div>
              <span className={`${sizeClasses[size].typography.meta} text-gray-80 text-left`}>
                {metadata.duration}
              </span>
            </>
          )}
          
          {/* Optional: Source app */}
          {sourceApp && (
            <>
              <div className="w-px h-3 bg-gray-40"></div>
              <div className="flex items-center gap-1">
                {appIconSrc && (
                  <img 
                    src={appIconSrc} 
                    alt={sourceApp}
                    className="w-4 h-4 rounded-sm"
                  />
                )}
                <span className={`${sizeClasses[size].typography.meta} text-gray-80 text-left`}>
                  {sourceApp}
                </span>
              </div>
            </>
          )}
          
          {/* Optional: Score indicator */}
          {metadata?.score && (
            <>
              <div className="w-px h-3 bg-gray-40"></div>
              <span className={`${sizeClasses[size].typography.meta} text-gray-80 text-left`}>
                ⭐ {metadata.score}/5
              </span>
            </>
          )}
        </div>
        
        {/* Optional: Tags */}
        {metadata?.tags && metadata.tags.length > 0 && (
          <div className="flex gap-1 mt-1">
            {metadata.tags.map((tag, index) => (
              <span key={index} className="text-overline bg-gray-20 text-gray-80 px-2 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Optional: Interaction buttons */}
      {interaction && (
        <div className="flex-shrink-0 flex gap-2">
          {interaction.onMore && (
            <button 
              className="w-6 h-6 flex items-center justify-center"
              onClick={interaction.onMore}
            >
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 14c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 4 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 6 10c.55 0 1.02.196 1.413.587C7.804 10.98 8 11.45 8 12s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 6 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 10 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 12 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 12 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 16 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 18 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 18 14z"/>
              </svg>
            </button>
          )}
          
          {interaction.onShare && (
            <button 
              className="w-6 h-6 flex items-center justify-center"
              onClick={interaction.onShare}
            >
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92S19.61 16.08 18 16.08z"/>
              </svg>
            </button>
          )}
        </div>
      )}
      
      {/* Optional: Custom divider */}
      {divider && <div className="w-full h-px bg-gray-40 mt-3" />}
    </div>
  );
};

// Legacy compatibility wrapper for existing usage
export interface LegacyActivityItemProps {
  title?: string;
  activity?: string;
  timeAgo: string;
  source: AppType;
  sourceColor?: string;
  showIcon?: boolean;
  showBorder?: boolean;
  emoji?: string;
  color?: string;
  skill?: string;
  icon?: React.ReactNode;
  sourceIcon?: React.ReactNode | string;
}

export const LegacyActivityItem: React.FC<LegacyActivityItemProps> = (props) => {
  return (
    <ActivityItem
      title={props.title || props.activity || ''}
      emoji={props.emoji || '📝'}
      timestamp={props.timeAgo}
      sourceApp={props.source}
      showIcon={props.showIcon}
      showBorder={props.showBorder}
      skillContext={props.skill}
      visual={{ iconColor: props.color }}
    />
  );
};
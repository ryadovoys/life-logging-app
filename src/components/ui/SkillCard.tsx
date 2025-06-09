import React from 'react';

// Living Organism: SkillCard Component Architecture
// Following Airbnb's philosophy of components as organisms with required/optional elements

// Required Elements (Core Identity)
interface SkillCardRequiredProps {
  title: string;      // Primary identifier - the skill name
  emoji: string;      // Visual representation - skill icon
  progress: {         // Progress tracking data
    totalTime: string;      // Est. total time invested
    lastActivity: string;   // Last activity timestamp
  };
}

// Optional Elements (Enhancing Personality)
interface SkillCardOptionalProps {
  streak?: number;           // Achievement indicator - consecutive days
  badge?: string;           // Special status indicator
  timeTracking?: {          // Additional time metrics
    weeklyHours?: string;
    monthlyTrend?: 'up' | 'down' | 'stable';
  };
  overlay?: {              // Visual enhancements
    color?: string;        // Background color (defaults to system color)
    size?: 'small' | 'medium' | 'large';
  };
  divider?: boolean;       // Visual separation (for lists)
  onClick?: () => void;    // Interaction handler
}

// Complete Component Interface
export interface SkillCardProps extends SkillCardRequiredProps, SkillCardOptionalProps {}

// Component Type Guards
export const isValidSkillCard = (props: Partial<SkillCardProps>): props is SkillCardProps => {
  return !!(props.title && props.emoji && props.progress?.totalTime && props.progress?.lastActivity);
};

// Component Implementation with Living Organism Architecture
export const SkillCard: React.FC<SkillCardProps> = ({
  // Required elements
  title,
  emoji,
  progress,
  
  // Optional elements with defaults
  streak,
  badge,
  timeTracking,
  overlay = { color: '#f0f0f0', size: 'medium' },
  divider = false,
  onClick,
}) => {
  // Component behavior adaptation based on context
  const cardSize = overlay?.size || 'medium';
  const sizeClasses = {
    small: 'w-[120px]',
    medium: 'w-[146px]',
    large: 'w-[160px]',
  };
  
  const emojiSizes = {
    small: 'text-[70px]',
    medium: 'text-[90px]',
    large: 'text-[100px]',
  };

  return (
    <div className={`flex-shrink-0 ${sizeClasses[cardSize]}`} onClick={onClick}>
      <div className="relative mb-sm cursor-pointer">
        {/* Main skill card with emoji */}
        <div 
          className={`w-full h-[146px] rounded-lg flex items-center justify-center ${emojiSizes[cardSize]}`}
          style={{ 
            backgroundColor: overlay?.color || '#f0f0f0',
            fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
        >
          {emoji}
        </div>
        
        {/* Optional: Streak indicator */}
        {streak && (
          <div className="absolute top-xs left-xs bg-white rounded-lg px-xs py-xs">
            <span className="text-overline text-gray-80">
              🔥 {streak}-day streak
            </span>
          </div>
        )}
        
        {/* Optional: Badge indicator */}
        {badge && (
          <div className="absolute top-xs right-xs bg-black rounded-lg px-xs py-xs">
            <span className="text-overline text-white">
              {badge}
            </span>
          </div>
        )}
      </div>
      
      {/* Required: Skill information */}
      <div className="space-y-0 text-left">
        <h3 className="text-body text-black text-left mb-0">{title}</h3>
        
        <p className="text-caption text-gray-80 text-left mb-0">
          Est. total: {progress.totalTime}
        </p>
        
        <p className="text-caption text-gray-80 text-left mb-0">
          Last: {progress.lastActivity}
        </p>
        
        {/* Optional: Additional time tracking */}
        {timeTracking?.weeklyHours && (
          <p className="text-caption text-gray-80 text-left mb-0">
            This week: {timeTracking.weeklyHours}
          </p>
        )}
        
        {/* Optional: Monthly trend indicator */}
        {timeTracking?.monthlyTrend && (
          <p className="text-caption text-gray-80 text-left mb-0">
            Trend: {timeTracking.monthlyTrend === 'up' ? '📈' : timeTracking.monthlyTrend === 'down' ? '📉' : '➖'}
          </p>
        )}
      </div>
      
      {/* Optional: Divider for list contexts */}
      {divider && <div className="w-full h-px bg-gray-40 mt-sm" />}
    </div>
  );
};

// Legacy compatibility wrapper for existing usage
export interface LegacySkillCardProps {
  title: string;
  totalTime: string;
  lastActivity: string;
  streak?: number;
  color: string;
  emoji: string;
  onClick?: () => void;
}

export const LegacySkillCard: React.FC<LegacySkillCardProps> = (props) => {
  return (
    <SkillCard
      title={props.title}
      emoji={props.emoji}
      progress={{
        totalTime: props.totalTime,
        lastActivity: props.lastActivity,
      }}
      streak={props.streak}
      overlay={{ color: props.color }}
      onClick={props.onClick}
    />
  );
};
import React from 'react';

// Living Organism: PageTitle Component Architecture
// Following Airbnb's philosophy of components as organisms with required/optional elements

// Required Elements (Core Identity) - None! Maximum flexibility
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PageTitleRequiredProps {}

// Optional Elements (Enhancing Personality)
interface PageTitleOptionalProps {
  title?: string;                    // Page title text (Display typography - 28pt)
  emoji?: string;                    // Emoji for 48x48 icon box (32pt)
  emojiBackgroundColor?: string;     // Background color for emoji box
  rightElement?: React.ReactNode;    // Flexible right-side element (dropdown, button, etc.)
  spacing?: 'compact' | 'normal' | 'spacious';  // Vertical spacing control
}

export interface PageTitleProps extends PageTitleRequiredProps, PageTitleOptionalProps {}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  emoji,
  emojiBackgroundColor = '#d9f0ff',
  rightElement,
  spacing = 'normal',
}) => {
  // Spacing adaptation
  const spacingClasses = {
    compact: 'mb-md',
    normal: 'mb-lg', 
    spacious: 'mb-xl',
  };

  return (
    <div className={`flex items-center gap-md px-md pt-md ${spacingClasses[spacing]}`}>
      {/* Optional: 48x48 Emoji Box */}
      {emoji && (
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-[32px]"
          style={{ 
            backgroundColor: emojiBackgroundColor,
            fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
        >
          {emoji}
        </div>
      )}
      
      {/* Optional: Title Text (Display Typography - 28pt) */}
      {title && (
        <h1 className="flex-1 text-display text-black font-bold text-left">
          {title}
        </h1>
      )}
      
      {/* Optional: Right Element (Dropdown, Button, etc.) */}
      {rightElement && (
        <div className="flex-shrink-0">
          {rightElement}
        </div>
      )}
    </div>
  );
};
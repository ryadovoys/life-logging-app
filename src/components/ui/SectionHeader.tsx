import React from 'react';

// Living Organism: SectionHeader Component Architecture
// Following Airbnb's philosophy of components as organisms with required/optional elements

// Required Elements (Core Identity)
interface SectionHeaderRequiredProps {
  title: string;           // Section name/heading
}

// Optional Elements (Enhancing Personality)
interface SectionHeaderOptionalProps {
  viewAllButton?: {        // Action button configuration
    text?: string;         // Button label (defaults to "View all")
    onAction?: () => void; // Click handler
    variant?: 'default' | 'primary' | 'outline';
  };
  divider?: boolean;       // Visual separation
  subtitle?: string;       // Additional context below title
  badge?: {               // Status indicator
    text: string;
    variant?: 'count' | 'status' | 'new';
  };
  spacing?: {             // Layout customization
    horizontal?: 'none' | 'normal' | 'wide';
    vertical?: 'compact' | 'normal' | 'spacious';
  };
  alignment?: 'left' | 'center' | 'space-between';
}

// Complete Component Interface
export interface SectionHeaderProps extends SectionHeaderRequiredProps, SectionHeaderOptionalProps {}

// Component Type Guards
export const isValidSectionHeader = (props: Partial<SectionHeaderProps>): props is SectionHeaderProps => {
  return !!(props.title);
};

// Component Implementation with Living Organism Architecture
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  // Required elements
  title,
  
  // Optional elements with defaults
  viewAllButton,
  divider = false,
  subtitle,
  badge,
  spacing = { horizontal: 'normal', vertical: 'normal' },
  alignment = 'space-between',
}) => {
  // Component behavior adaptation based on context
  const horizontalSpacing = {
    none: 'px-0',
    normal: 'px-4',
    wide: 'px-6',
  };
  
  const verticalSpacing = {
    compact: 'py-2',
    normal: 'py-3',
    spacious: 'py-4',
  };
  
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    'space-between': 'justify-between',
  };
  
  const buttonVariantClasses = {
    default: 'bg-gray-20 border border-gray-40 text-gray-80 hover:bg-gray-40',
    primary: 'bg-black text-white hover:bg-gray-80',
    outline: 'border border-black text-black hover:bg-black hover:text-white',
  };
  
  const badgeVariantClasses = {
    count: 'bg-black text-white',
    status: 'bg-gray-20 text-gray-80',
    new: 'bg-black text-white',
  };

  return (
    <div>
      <div className={`flex items-center ${alignmentClasses[alignment]} ${horizontalSpacing[spacing.horizontal || 'normal']} ${verticalSpacing[spacing.vertical || 'normal']}`}>
        {/* Required: Section title with optional badge */}
        <div className="flex items-center gap-2">
          <h2 className="text-title text-black">
            {title}
          </h2>
          
          {/* Optional: Badge */}
          {badge && (
            <span className={`text-overline px-2 py-1 rounded-lg ${badgeVariantClasses[badge.variant || 'count']}`}>
              {badge.text}
            </span>
          )}
        </div>
        
        {/* Optional: Subtitle (if no button is shown) */}
        {subtitle && !viewAllButton && (
          <p className="text-caption text-gray-80">
            {subtitle}
          </p>
        )}
        
        {/* Optional: View all button */}
        {viewAllButton && (
          <button
            onClick={viewAllButton.onAction}
            className={`px-3 py-2 rounded-lg text-caption transition-colors ${buttonVariantClasses[viewAllButton.variant || 'default']}`}
          >
            {viewAllButton.text || 'View all'}
          </button>
        )}
      </div>
      
      {/* Optional: Subtitle row (when button is present) */}
      {subtitle && viewAllButton && (
        <div className={`${horizontalSpacing[spacing.horizontal || 'normal']} pb-2`}>
          <p className="text-caption text-gray-80">
            {subtitle}
          </p>
        </div>
      )}
      
      {/* Optional: Divider */}
      {divider && (
        <div className="w-full h-px bg-gray-40 mt-2" />
      )}
    </div>
  );
};

// Legacy compatibility wrapper for existing usage
export interface LegacySectionHeaderProps {
  title: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
  buttonText?: string;
}

export const LegacySectionHeader: React.FC<LegacySectionHeaderProps> = ({
  title,
  showViewAll = true,
  onViewAll,
  buttonText = "View all",
}) => {
  return (
    <SectionHeader
      title={title}
      viewAllButton={showViewAll ? {
        text: buttonText,
        onAction: onViewAll,
        variant: 'default'
      } : undefined}
    />
  );
};
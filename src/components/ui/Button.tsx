import React from 'react';

// Living Organism: Button Component Architecture
// Following Airbnb's philosophy of components as organisms with required/optional elements

// Required Elements (Core Identity)
interface ButtonRequiredProps {
  label: string;           // Button text content
  onClick: () => void;     // Primary interaction handler
}

// Optional Elements (Enhancing Personality)
interface ButtonOptionalProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';  // Visual style
  size?: 'compact' | 'normal' | 'large';                   // Size variation
  disabled?: boolean;                                       // Interaction state
  loading?: boolean;                                        // Loading state
  icon?: {                                                  // Icon enhancement
    position?: 'left' | 'right';
    element?: React.ReactNode;
  };
  fullWidth?: boolean;                                      // Layout adaptation
  className?: string;                                       // Custom styling
  htmlProps?: React.ButtonHTMLAttributes<HTMLButtonElement>; // Native button props
}

// Complete Component Interface
export interface ButtonProps extends ButtonRequiredProps, ButtonOptionalProps {}

// Component Type Guards
export const isValidButton = (props: Partial<ButtonProps>): props is ButtonProps => {
  return !!(props.label && props.onClick);
};

// Component Implementation with Living Organism Architecture
export const Button: React.FC<ButtonProps> = ({
  // Required elements
  label,
  onClick,
  
  // Optional elements with defaults
  variant = 'secondary',
  size = 'normal',
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  className = '',
  htmlProps,
}) => {
  // Component behavior adaptation based on context
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-colors font-medium';
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-80 disabled:bg-gray-40 disabled:text-gray-80',
    secondary: 'bg-gray-20 text-gray-80 border border-gray-40 hover:bg-gray-40 disabled:opacity-50',
    outline: 'border border-black text-black hover:bg-black hover:text-white disabled:opacity-50',
    ghost: 'text-black hover:bg-gray-20 disabled:opacity-50',
  };
  
  const sizeClasses = {
    compact: 'h-8 px-sm text-caption',
    normal: 'h-12 px-md text-body',
    large: 'h-14 px-lg text-subtitle',
  };
  
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Handle loading state
  const isInteractionDisabled = disabled || loading;
  
  const handleClick = () => {
    if (!isInteractionDisabled) {
      onClick();
    }
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`}
      onClick={handleClick}
      disabled={isInteractionDisabled}
      {...htmlProps}
    >
      {/* Optional: Left icon */}
      {icon?.position === 'left' && icon.element && (
        <span className="mr-xs">{icon.element}</span>
      )}
      
      {/* Loading spinner or label */}
      {loading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-xs h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        <span>{label}</span>
      )}
      
      {/* Optional: Right icon */}
      {icon?.position === 'right' && icon.element && (
        <span className="ml-xs">{icon.element}</span>
      )}
    </button>
  );
};

// Legacy compatibility wrapper for existing usage
export interface LegacyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const LegacyButton: React.FC<LegacyButtonProps> = ({ 
  variant = 'secondary', 
  size = 'md',
  children, 
  onClick,
  className = '',
  ...props 
}) => {
  const sizeMapping = { sm: 'compact', md: 'normal' } as const;
  
  return (
    <Button
      label={typeof children === 'string' ? children : 'Button'}
      onClick={() => onClick?.(new MouseEvent('click') as any)}
      variant={variant}
      size={sizeMapping[size]}
      className={className}
      htmlProps={props}
    />
  );
};
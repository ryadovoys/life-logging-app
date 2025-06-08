import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'secondary', 
  size = 'md',
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-[10px] font-instrument font-normal transition-colors';
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-80',
    secondary: 'bg-gray-20 text-gray-80 border border-gray-40 hover:bg-gray-40',
  };
  
  const sizeClasses = {
    sm: 'h-9 px-[13px] py-2.5 text-body-small',
    md: 'h-12 px-4 py-3 text-body',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
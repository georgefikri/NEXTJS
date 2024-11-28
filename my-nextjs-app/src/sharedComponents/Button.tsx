import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled = false,
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  // variant color classes
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100',
  };

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'py-6 py-3 text-lg',
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`;
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const fullWidthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled || isLoading ? disabledClasses : ''}
        ${fullWidthClasses}
        ${className}
    `}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading && (
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-4 w-4 mr-2"></span>
      )}
      {children}
    </button>
  );
};

export default Button;

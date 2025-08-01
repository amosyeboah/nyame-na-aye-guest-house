import React from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  icon?: React.ElementType;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ size = 'md', variant = 'default', icon: Icon, children, onClick }) => {
  const baseStyles = 'flex items-center justify-center font-semibold rounded transition duration-300';
  const sizeStyles = size === 'lg' ? 'px-6 py-3 text-lg' : size === 'sm' ? 'px-3 py-1 text-sm' : 'px-4 py-2';
  const variantStyles = variant === 'outline' ? 'border border-gray-300 text-gray-900' : 'bg-yellow-600 text-white';

  return (
    <button className={`${baseStyles} ${sizeStyles} ${variantStyles}`} onClick={onClick}>
      {Icon && <Icon className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
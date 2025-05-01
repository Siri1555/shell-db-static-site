
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = 'blue', 
  size = 'md', 
  href, 
  to, 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden rounded-md";
  
  const variantStyles = {
    blue: "cyber-button",
    green: "cyber-button cyber-button-green",
    outline: "border border-gray-400 text-gray-300 hover:bg-gray-800",
    ghost: "text-gray-300 hover:text-shelldb-blue hover:bg-shelldb-blue/5"
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };
  
  const buttonClasses = cn(
    baseStyles, 
    variantStyles[variant], 
    sizeStyles[size], 
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

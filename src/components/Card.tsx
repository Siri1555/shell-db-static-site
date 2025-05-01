
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
}

const Card = ({ children, className, glowing = false }: CardProps) => {
  return (
    <div className={cn(
      'rounded-lg p-6',
      glowing ? 'glow-card animate-glow' : 'bg-shelldb-darker border border-gray-800',
      className
    )}>
      {children}
    </div>
  );
};

export default Card;

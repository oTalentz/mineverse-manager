
import { cn } from '@/lib/utils';
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  darkGlass?: boolean;
  style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  onClick,
  hoverEffect = true,
  darkGlass = false,
  style,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        darkGlass ? 'glass-darker' : 'glass-card',
        'rounded-xl transition-all duration-300',
        hoverEffect && 'hover:shadow-2xl hover:scale-[1.02] cursor-pointer',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;

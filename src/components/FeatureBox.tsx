
import React from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './GlassCard';

interface FeatureBoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ 
  title, 
  description, 
  icon,
  className,
  delay = 0 
}) => {
  return (
    <GlassCard 
      className={cn(
        "p-6 flex flex-col items-center text-center animate-pop", 
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </GlassCard>
  );
};

export default FeatureBox;

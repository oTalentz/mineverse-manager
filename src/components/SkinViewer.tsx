
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Check, RefreshCw } from 'lucide-react';
import GlassCard from './GlassCard';

interface SkinViewerProps {
  skinUrl: string;
  name: string;
  isActive?: boolean;
}

const SkinViewer: React.FC<SkinViewerProps> = ({
  skinUrl,
  name,
  isActive = false,
}) => {
  return (
    <GlassCard 
      className="overflow-hidden animate-pop"
      hoverEffect={!isActive}
    >
      <div className="aspect-[3/4] bg-black/20 relative">
        <img 
          src={skinUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {isActive && (
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 text-xs rounded-full">
            Ativo
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-3">{name}</h3>
        <div className="flex gap-2">
          {isActive ? (
            <Button className="w-full gap-1" variant="outline">
              <RefreshCw className="h-4 w-4" />
              <span>Alterar</span>
            </Button>
          ) : (
            <Button className="w-full gap-1">
              <Check className="h-4 w-4" />
              <span>Usar</span>
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default SkinViewer;

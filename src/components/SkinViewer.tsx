
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Check, RefreshCw, Download } from 'lucide-react';
import GlassCard from './GlassCard';
import { toast } from '@/components/ui/use-toast';

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
  const [loading, setLoading] = useState(false);
  
  const handleSkinAction = () => {
    setLoading(true);
    
    // Simulate skin application process
    setTimeout(() => {
      if (isActive) {
        toast({
          title: "Alteração de skin iniciada",
          description: `Preparando para alterar a skin ${name}...`,
        });
      } else {
        toast({
          title: "Skin aplicada com sucesso!",
          description: `A skin ${name} foi definida como sua skin atual.`,
        });
      }
      setLoading(false);
    }, 1500);
  };
  
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    toast({
      title: "Download iniciado",
      description: `Baixando a skin ${name}...`,
    });
    
    // Simulate download
    setTimeout(() => {
      toast({
        title: "Download concluído",
        description: `A skin ${name} foi baixada com sucesso.`,
      });
    }, 2000);
  };

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
        <div className="flex flex-col gap-2">
          <Button 
            className="w-full gap-1" 
            variant={isActive ? "outline" : "default"}
            onClick={handleSkinAction}
            disabled={loading}
          >
            {loading ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : isActive ? (
              <RefreshCw className="h-4 w-4" />
            ) : (
              <Check className="h-4 w-4" />
            )}
            <span>{isActive ? "Alterar" : "Usar"}</span>
          </Button>
          
          <Button 
            className="w-full gap-1" 
            variant="secondary"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default SkinViewer;

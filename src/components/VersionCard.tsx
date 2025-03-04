
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Layers, Clock, DownloadCloud, Check } from 'lucide-react';
import GlassCard from './GlassCard';

interface VersionCardProps {
  version: string;
  releaseDate: string;
  type: 'release' | 'snapshot' | 'beta';
  isInstalled?: boolean;
  size: string;
}

const VersionCard: React.FC<VersionCardProps> = ({
  version,
  releaseDate,
  type,
  isInstalled = false,
  size,
}) => {
  const typeIcons = {
    release: <Layers className="h-4 w-4" />,
    snapshot: <Clock className="h-4 w-4" />,
    beta: <DownloadCloud className="h-4 w-4" />,
  };

  const typeColors = {
    release: 'bg-green-100 text-green-600 border-green-200',
    snapshot: 'bg-blue-100 text-blue-600 border-blue-200',
    beta: 'bg-orange-100 text-orange-600 border-orange-200',
  };

  return (
    <GlassCard className="p-5 transition-all duration-300 animate-pop">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-lg">{version}</span>
            <div className={`text-xs px-2 py-0.5 rounded flex items-center gap-1 border ${typeColors[type]}`}>
              {typeIcons[type]}
              <span className="capitalize">{type}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Lançado em {releaseDate} • {size}
          </p>
        </div>
        
        <Button variant={isInstalled ? "outline" : "default"} className="gap-2">
          {isInstalled ? (
            <>
              <Check className="h-4 w-4" />
              <span>Instalado</span>
            </>
          ) : (
            <>
              <Download className="h-4 w-4" />
              <span>Instalar</span>
            </>
          )}
        </Button>
      </div>
      
      <div className="text-sm">
        {type === 'release' ? (
          <p>Versão estável oficial do Minecraft com todas as funcionalidades.</p>
        ) : type === 'snapshot' ? (
          <p>Versão de pré-lançamento com as últimas novidades para teste.</p>
        ) : (
          <p>Versão beta para testes iniciais de funcionalidades experimentais.</p>
        )}
      </div>
    </GlassCard>
  );
};

export default VersionCard;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Layers, Clock, DownloadCloud, Check, Play, X, Loader2 } from 'lucide-react';
import GlassCard from './GlassCard';
import { toast } from '@/hooks/use-toast';

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
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(isInstalled);
  const [launching, setLaunching] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

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

  const handleInstall = () => {
    if (installing) return;
    
    setInstalling(true);
    setDownloadProgress(0);
    
    toast({
      title: "Download iniciado",
      description: `Baixando Minecraft ${version}...`,
    });
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setInstalling(false);
          setInstalled(true);
          toast({
            title: "Instalação completa",
            description: `Minecraft ${version} foi instalado com sucesso.`,
          });
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const handleLaunch = () => {
    setLaunching(true);
    
    toast({
      title: "Iniciando Minecraft",
      description: `Preparando para iniciar o Minecraft ${version}...`,
    });
    
    // Simulate game launch
    setTimeout(() => {
      toast({
        title: "Minecraft iniciado",
        description: `Bom jogo!`,
      });
      setLaunching(false);
    }, 3000);
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
        
        <div className="flex gap-2">
          {installed ? (
            <Button 
              variant="default" 
              className="gap-2" 
              onClick={handleLaunch}
              disabled={launching}
            >
              {launching ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Iniciando...</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  <span>Jogar</span>
                </>
              )}
            </Button>
          ) : (
            <Button 
              variant="default" 
              className="gap-2" 
              onClick={handleInstall}
              disabled={installing}
            >
              {installing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{Math.round(downloadProgress)}%</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>Instalar</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      
      {installing && (
        <div className="mb-4">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300" 
              style={{ width: `${downloadProgress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{Math.round(downloadProgress)}%</span>
            <span>{(parseFloat(size) * (downloadProgress / 100)).toFixed(1)} MB / {size}</span>
          </div>
        </div>
      )}
      
      <div className="text-sm">
        {type === 'release' ? (
          <p>Versão estável oficial do Minecraft com todas as funcionalidades.</p>
        ) : type === 'snapshot' ? (
          <p>Versão de pré-lançamento com as últimas novidades para teste.</p>
        ) : (
          <p>Versão beta para testes iniciais de funcionalidades experimentais.</p>
        )}
      </div>
      
      {installed && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Instalado</span>
              </div>
              <p className="text-muted-foreground text-xs mt-1">Localização: C:\Minecraft\versions\{version}</p>
            </div>
            
            <Button variant="outline" size="sm" className="text-destructive">
              <X className="h-4 w-4 mr-1" />
              Desinstalar
            </Button>
          </div>
        </div>
      )}
    </GlassCard>
  );
};

export default VersionCard;

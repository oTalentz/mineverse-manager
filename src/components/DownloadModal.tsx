
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, CheckCircle, AlertCircle, Terminal } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DownloadModalProps {
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ onClose }) => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStatus, setDownloadStatus] = useState<'downloading' | 'complete' | 'error'>('downloading');
  const [showDetails, setShowDetails] = useState(false);
  
  // Simulação do progresso de download
  useEffect(() => {
    if (downloadStatus !== 'downloading') return;

    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const increment = Math.random() * 5;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setDownloadStatus('complete');
          toast({
            title: "Download concluído",
            description: "MineVerse Launcher baixado com sucesso!",
          });
          return 100;
        }
        
        return newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, [downloadStatus]);
  
  const handleDownloadComplete = () => {
    // Simulando download do arquivo real
    const dummyLink = document.createElement('a');
    dummyLink.href = '/MineVerseLauncher.exe';  // Este arquivo não existe, é apenas simulação
    dummyLink.setAttribute('download', 'MineVerseLauncher.exe');
    dummyLink.click();
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-lg animate-zoom-in">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Baixando MineVerse Launcher</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            {downloadStatus === 'downloading' && (
              <div className="flex items-center mb-2">
                <Download className="h-6 w-6 text-primary animate-pulse mr-2" />
                <span>Baixando MineVerseLauncher.exe ({Math.round(downloadProgress)}%)</span>
              </div>
            )}
            
            {downloadStatus === 'complete' && (
              <div className="flex items-center mb-2">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <span>Download concluído!</span>
              </div>
            )}
            
            {downloadStatus === 'error' && (
              <div className="flex items-center mb-2">
                <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
                <span>Erro durante o download. Tente novamente.</span>
              </div>
            )}
            
            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  downloadStatus === 'error' ? 'bg-red-500' : 'bg-primary'
                }`}
                style={{ width: `${downloadProgress}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>{Math.round(downloadProgress)}%</span>
              <span>{(95.7 * (downloadProgress / 100)).toFixed(1)} MB / 95.7 MB</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Sobre o MineVerse Launcher</h3>
              <p className="text-sm text-muted-foreground">
                O MineVerse Launcher dá acesso a todas as versões do Minecraft com suporte completo para mods, 
                skins personalizadas, gerenciamento de perfis e muito mais.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Requisitos do Sistema</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Sistema Operacional: Windows 10/11, macOS 10.14+, Linux</li>
                <li>• Processador: Intel Core i3 / AMD Ryzen 3 ou superior</li>
                <li>• Memória: 4GB RAM (8GB recomendado)</li>
                <li>• Espaço em Disco: 2GB (+ espaço para jogos)</li>
                <li>• Conexão com a Internet</li>
              </ul>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center w-full justify-center"
              onClick={() => setShowDetails(!showDetails)}
            >
              <Terminal className="h-4 w-4 mr-2" />
              {showDetails ? "Ocultar detalhes técnicos" : "Mostrar detalhes técnicos"}
            </Button>
            
            {showDetails && (
              <div className="bg-black/10 p-3 rounded-md text-xs font-mono h-20 overflow-y-auto">
                <p>[INFO] Iniciando download do MineVerse Launcher v2.1.4</p>
                <p>[INFO] Verificando checksums...</p>
                <p>[INFO] Preparando arquivos temporários...</p>
                <p>[INFO] Conectando ao servidor de download...</p>
                <p>[INFO] Velocidade de download: 3.2 MB/s</p>
                <p>[INFO] Tempo estimado restante: {Math.round((100 - downloadProgress) / 10)} segundos</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t p-4 flex justify-end gap-2 bg-muted/30">
          {downloadStatus === 'complete' ? (
            <>
              <Button variant="outline" onClick={onClose}>
                Fechar
              </Button>
              <Button onClick={handleDownloadComplete}>
                <Download className="mr-2 h-4 w-4" />
                Abrir pasta
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button disabled={downloadStatus !== 'error'} onClick={() => setDownloadProgress(0)}>
                {downloadStatus === 'error' ? 'Tentar novamente' : 'Baixando...'}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;

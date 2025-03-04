
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';

interface LogEntry {
  timestamp: string;
  type: 'info' | 'warning' | 'error';
  message: string;
}

const LauncherLogs: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [activeLog, setActiveLog] = useState<string>("launcher");
  
  useEffect(() => {
    // Simular alguns logs
    const initialLogs: LogEntry[] = [
      { timestamp: currentTimeStamp(), type: 'info', message: 'Launcher iniciado' },
      { timestamp: currentTimeStamp(-2), type: 'info', message: 'Carregando lista de versões disponíveis' },
      { timestamp: currentTimeStamp(-1), type: 'info', message: 'Lista de versões carregada com sucesso' },
      { timestamp: currentTimeStamp(), type: 'info', message: 'Verificando atualizações' },
    ];
    
    setLogs(initialLogs);
    
    // Adicionar alguns logs extras com o passar do tempo
    setTimeout(() => {
      addLog('info', 'Sem atualizações disponíveis');
      addLog('info', 'Verificando integridade dos arquivos');
    }, 3000);
    
    setTimeout(() => {
      addLog('warning', 'Alguns arquivos de cache podem estar corrompidos');
    }, 6000);
    
    setTimeout(() => {
      addLog('info', 'Pronto para iniciar o jogo');
    }, 9000);
  }, []);
  
  const currentTimeStamp = (offsetSeconds = 0): string => {
    const date = new Date(Date.now() + offsetSeconds * 1000);
    return date.toLocaleTimeString();
  };
  
  const addLog = (type: 'info' | 'warning' | 'error', message: string) => {
    setLogs(prev => [...prev, { timestamp: currentTimeStamp(), type, message }]);
  };
  
  const getLogTypeColor = (type: 'info' | 'warning' | 'error'): string => {
    switch (type) {
      case 'info': return 'text-blue-500';
      case 'warning': return 'text-orange-500';
      case 'error': return 'text-red-500';
      default: return '';
    }
  };
  
  const handleClearLogs = () => {
    setLogs([]);
    addLog('info', 'Logs limpos');
  };
  
  return (
    <div className="glass rounded-xl p-4">
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Logs do Launcher</h3>
        <div className="flex gap-2 mb-4">
          <Button 
            variant={activeLog === "launcher" ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveLog("launcher")}
          >
            Launcher
          </Button>
          <Button 
            variant={activeLog === "game" ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveLog("game")}
          >
            Jogo
          </Button>
          <Button 
            variant={activeLog === "console" ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveLog("console")}
          >
            Console
          </Button>
        </div>
      </div>
      
      <div className="bg-black/20 rounded-lg p-3 h-64 overflow-y-auto font-mono text-xs">
        {logs.length > 0 ? (
          logs.map((log, index) => (
            <div key={index} className="mb-1">
              <span className="text-gray-400">[{log.timestamp}]</span>{' '}
              <span className={getLogTypeColor(log.type)}>[{log.type.toUpperCase()}]</span>{' '}
              <span>{log.message}</span>
            </div>
          ))
        ) : (
          <div className="text-muted-foreground text-center mt-24">
            Nenhum log para exibir
          </div>
        )}
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="text-xs text-muted-foreground">
          {logs.length} registros
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleClearLogs}>
            Limpar
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-3 w-3 mr-1" />
            Atualizar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-3 w-3 mr-1" />
            Exportar
          </Button>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="mt-4">
        <AccordionItem value="advanced">
          <AccordionTrigger className="text-sm">Opções avançadas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Nível de detalhamento</label>
                <select className="p-2 rounded-md border border-input bg-background">
                  <option>Padrão</option>
                  <option>Detalhado</option>
                  <option>Depuração</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" id="autoScroll" className="rounded border-gray-300" />
                <label htmlFor="autoScroll" className="text-sm">Rolagem automática</label>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" id="saveToFile" className="rounded border-gray-300" />
                <label htmlFor="saveToFile" className="text-sm">Salvar logs em arquivo</label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LauncherLogs;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Settings, 
  Users, 
  Globe, 
  FileText, 
  ShoppingCart, 
  X, 
  Minus, 
  Maximize2, 
  ChevronDown,
  Gamepad2,
  User
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import ProfileSelector from '@/components/ProfileSelector';
import LauncherNews from '@/components/LauncherNews';
import OnlineUsers from '@/components/OnlineUsers';
import FriendsList from '@/components/FriendsList';

const LauncherApp: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState('1.20.4');
  const [launching, setLaunching] = useState(false);
  const [onlineCount, setOnlineCount] = useState(28300);
  const [selectedProfile, setSelectedProfile] = useState('OptiFine');
  
  // Simular número de usuários online flutuando
  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 50) - 25;
      setOnlineCount(prev => Math.max(28000, Math.min(29000, prev + change)));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleLaunchGame = () => {
    setLaunching(true);
    
    toast({
      title: "Iniciando MineVerse",
      description: `Configurando Minecraft ${selectedVersion} com ${selectedProfile}...`,
    });
    
    // Simulação de inicialização do jogo
    setTimeout(() => {
      toast({
        title: "Minecraft Iniciado",
        description: "Bom jogo!",
      });
      setLaunching(false);
    }, 3000);
  };

  return (
    <div className="bg-[#121218] text-white w-full h-screen flex flex-col overflow-hidden">
      {/* Barra de título personalizada */}
      <div className="bg-[#0A0A0E] p-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/7e9e0bcf-9f2d-4835-98d7-b59cbdcdb4d1.png" 
            alt="MineVerse" 
            className="h-6 w-6" 
          />
          <span className="text-sm font-medium">MineVerse Launcher</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-white/80">{onlineCount.toLocaleString()} Online</span>
          </div>
          
          <div className="text-sm text-white/60">
            MineVerse v2.1.4
          </div>
          
          <div className="flex space-x-2">
            <button className="hover:bg-white/10 p-1 rounded">
              <Minus className="h-4 w-4" />
            </button>
            <button className="hover:bg-white/10 p-1 rounded">
              <Maximize2 className="h-4 w-4" />
            </button>
            <button className="hover:bg-red-500/80 p-1 rounded">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex">
        {/* Sidebar de navegação */}
        <div className="w-20 bg-[#0A0A0E] flex flex-col items-center py-6 border-r border-white/5">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/7e9e0bcf-9f2d-4835-98d7-b59cbdcdb4d1.png" 
              alt="MineVerse" 
              className="w-12 h-12"
            />
          </div>
          
          <div className="flex flex-col space-y-6 items-center mt-4">
            <button className="p-2 bg-primary text-white rounded-md hover:bg-primary/80">
              <Gamepad2 className="h-5 w-5" />
            </button>
            <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              <Globe className="h-5 w-5" />
            </button>
            <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              <FileText className="h-5 w-5" />
            </button>
            <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-auto">
            <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          {/* Barra de navegação superior */}
          <div className="bg-[#151519] p-2 px-6 flex items-center space-x-6 border-b border-white/5">
            <button className="px-4 py-2 bg-[#1E1E24] text-white rounded-md font-bold hover:bg-[#2C2C34] transition-colors">
              QUICK PLAY
            </button>
            
            <div className="flex space-x-6">
              {['Vanilla', 'Forge', 'Fabric', 'OptiFine', 'PvP', '1.8', '1.16', 'Mods', 'Skyblock'].map((item, index) => (
                <button 
                  key={index}
                  className="p-1 opacity-70 hover:opacity-100 transition-opacity"
                >
                  {index < 5 ? (
                    <div className="w-8 h-8 bg-[#2A2A32] rounded-md flex items-center justify-center">
                      {item.charAt(0)}
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                      {item.charAt(0)}
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="ml-auto flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-[#2A2A32] rounded-md">
                <User className="h-5 w-5" />
              </div>
              <span className="font-medium">Convidado</span>
              <button className="px-3 py-1 bg-[#2A2A32] text-white/90 rounded-md text-sm hover:bg-[#3A3A42] transition-colors">
                FAZER LOGIN
              </button>
            </div>
          </div>
          
          {/* Alerta/Anúncio */}
          <div className="bg-red-600 p-2 px-4 flex items-center justify-center">
            <span className="font-medium text-sm">
              Fevereiro: Nova interface do Launcher, Mods Skyblock, Mundos Hospedados & Mais
            </span>
            <button className="ml-auto">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          {/* Conteúdo principal */}
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 p-6 overflow-auto">
              {/* Área central com área de jogo */}
              <div className="bg-[#1A1A22] rounded-lg h-[350px] mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://i.imgur.com/XiV7WDT.png')] bg-cover opacity-40"></div>
                
                <div className="z-10 flex flex-col items-center">
                  <div className="mb-6">
                    <ProfileSelector 
                      selectedProfile={selectedProfile}
                      setSelectedProfile={setSelectedProfile}
                      selectedVersion={selectedVersion}
                      setSelectedVersion={setSelectedVersion}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleLaunchGame} 
                    disabled={launching}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md text-lg"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    {launching ? 'INICIANDO...' : 'INICIAR JOGO'}
                  </Button>
                </div>
                
                <div className="absolute bottom-3 right-3 text-xs text-white/60">
                  Configuração atual: 4GB RAM / Java 17 / Melhor performance
                </div>
              </div>
              
              {/* Notícias do Launcher */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold">ÚLTIMAS NOTÍCIAS</h2>
                  <button className="text-sm text-white/60 hover:text-white">Ver todas</button>
                </div>
                
                <LauncherNews />
              </div>
            </div>
            
            {/* Painel lateral de amigos */}
            <div className="w-72 bg-[#1A1A22] border-l border-white/5 overflow-auto">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-4">AMIGOS</h2>
                
                <div className="mb-6">
                  <FriendsList />
                </div>
                
                <Button variant="outline" className="w-full">
                  Adicionar amigo
                </Button>
              </div>
              
              <div className="mt-auto p-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Remover anúncios</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    Assinar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Barra de status inferior */}
      <div className="bg-[#0A0A0E] text-white/60 text-xs p-1 px-4 flex justify-between items-center">
        <span>v2.1.4</span>
        <div className="flex items-center space-x-3">
          <span>0 Instâncias em Execução</span>
        </div>
      </div>
    </div>
  );
};

export default LauncherApp;

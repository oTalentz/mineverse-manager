import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Search, Settings } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import SystemMonitor from '@/components/SystemMonitor';
import { toast } from '@/hooks/use-toast';

const Profiles = () => {
  const [showNewProfileModal, setShowNewProfileModal] = useState(false);
  
  const handleNewProfile = () => {
    toast({
      title: "Novo perfil",
      description: "Funcionalidade de criação de perfil em desenvolvimento.",
    });
  };
  
  const profiles = [
    {
      name: "Vanilla 1.20.4",
      version: "1.20.4",
      lastPlayed: "Hoje, 15:30",
      mods: 0,
    },
    {
      name: "Mods de Aventura",
      version: "1.20.1",
      lastPlayed: "Ontem",
      mods: 12,
    },
    {
      name: "Construção Tech",
      version: "1.19.2",
      lastPlayed: "Há 3 dias",
      mods: 25,
    },
    {
      name: "Snapshot Test",
      version: "23w46a",
      lastPlayed: "15/11/2023",
      mods: 0,
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-4 container mx-auto animate-page-transition">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Perfis de Jogo</h1>
          <p className="text-muted-foreground">Gerencie suas configurações e perfis personalizados</p>
        </div>
        
        {/* Search and Add */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar perfis..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <Button className="gap-2" onClick={handleNewProfile}>
            <Plus className="h-4 w-4" />
            Novo Perfil
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Profile List */}
            <div className="space-y-4">
              {profiles.map((profile, index) => (
                <ProfileCard
                  key={index}
                  name={profile.name}
                  version={profile.version}
                  lastPlayed={profile.lastPlayed}
                  mods={profile.mods}
                />
              ))}
            </div>
            
            {/* Profile Templates */}
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Modelos de Perfil</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                  className="glass p-4 rounded-xl cursor-pointer hover:shadow-lg transition-all"
                  onClick={handleNewProfile}
                >
                  <h4 className="font-medium">Vanilla</h4>
                  <p className="text-sm text-muted-foreground">Minecraft puro sem mods</p>
                </div>
                <div 
                  className="glass p-4 rounded-xl cursor-pointer hover:shadow-lg transition-all"
                  onClick={handleNewProfile}
                >
                  <h4 className="font-medium">Otimizado</h4>
                  <p className="text-sm text-muted-foreground">Configurações para melhor desempenho</p>
                </div>
                <div 
                  className="glass p-4 rounded-xl cursor-pointer hover:shadow-lg transition-all"
                  onClick={handleNewProfile}
                >
                  <h4 className="font-medium">Mods Populares</h4>
                  <p className="text-sm text-muted-foreground">Com os mods mais usados</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {/* System Monitor */}
            <SystemMonitor />
            
            {/* Recommended Settings */}
            <div className="glass rounded-xl p-4 mt-6">
              <h3 className="text-lg font-medium mb-4">Configurações Recomendadas</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Ray Tracing</label>
                  <div className="flex items-center h-6">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Renderização avançada</label>
                  <div className="flex items-center h-6">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Distância de renderização</label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">4</Button>
                    <Button variant="outline" size="sm">8</Button>
                    <Button variant="default" size="sm">12</Button>
                    <Button variant="outline" size="sm">16</Button>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Mais Configurações
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profiles;

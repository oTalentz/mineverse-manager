import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download, Settings, RefreshCw } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import VersionCard from '@/components/VersionCard';
import LauncherLogs from '@/components/LauncherLogs';
import { toast } from '@/hooks/use-toast';

const Versions = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefreshVersions = () => {
    setIsRefreshing(true);
    
    toast({
      title: "Atualizando versões",
      description: "Verificando novas versões disponíveis...",
    });
    
    // Simular atualização da lista de versões
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Lista atualizada",
        description: "Todas as versões estão atualizadas!",
      });
    }, 2000);
  };

  const versions = [
    {
      version: "1.20.4",
      releaseDate: "12/12/2023",
      type: "release" as const,
      isInstalled: true,
      size: "375 MB"
    },
    {
      version: "1.20.2",
      releaseDate: "17/09/2023",
      type: "release" as const,
      isInstalled: false,
      size: "368 MB"
    },
    {
      version: "1.20.1",
      releaseDate: "12/06/2023",
      type: "release" as const,
      isInstalled: false,
      size: "356 MB"
    },
    {
      version: "1.19.4",
      releaseDate: "14/03/2023",
      type: "release" as const,
      isInstalled: false,
      size: "352 MB"
    },
    {
      version: "1.19.2",
      releaseDate: "28/07/2022",
      type: "release" as const,
      isInstalled: false,
      size: "340 MB"
    },
    {
      version: "1.18.2",
      releaseDate: "28/02/2022",
      type: "release" as const,
      isInstalled: false,
      size: "325 MB"
    },
    {
      version: "1.17.1",
      releaseDate: "06/07/2021",
      type: "release" as const,
      isInstalled: false,
      size: "318 MB"
    },
    {
      version: "1.16.5",
      releaseDate: "15/01/2021",
      type: "release" as const,
      isInstalled: false,
      size: "302 MB"
    },
    {
      version: "1.15.2",
      releaseDate: "21/01/2020",
      type: "release" as const,
      isInstalled: false,
      size: "285 MB"
    },
    {
      version: "1.14.4",
      releaseDate: "19/07/2019",
      type: "release" as const,
      isInstalled: false,
      size: "268 MB"
    },
    {
      version: "1.13.2",
      releaseDate: "22/10/2018",
      type: "release" as const,
      isInstalled: false,
      size: "252 MB"
    },
    {
      version: "1.12.2",
      releaseDate: "18/09/2017",
      type: "release" as const,
      isInstalled: false,
      size: "230 MB"
    },
    {
      version: "1.11.2",
      releaseDate: "21/12/2016",
      type: "release" as const,
      isInstalled: false,
      size: "215 MB"
    },
    {
      version: "1.10.2",
      releaseDate: "26/06/2016",
      type: "release" as const,
      isInstalled: false,
      size: "195 MB"
    },
    {
      version: "1.9.4",
      releaseDate: "10/05/2016",
      type: "release" as const,
      isInstalled: false,
      size: "180 MB"
    },
    {
      version: "1.8.9",
      releaseDate: "09/12/2015",
      type: "release" as const,
      isInstalled: false,
      size: "165 MB"
    },
    {
      version: "1.7.10",
      releaseDate: "26/06/2014",
      type: "release" as const,
      isInstalled: false,
      size: "150 MB"
    },
    {
      version: "1.6.4",
      releaseDate: "19/09/2013",
      type: "release" as const,
      isInstalled: false,
      size: "135 MB"
    },
    {
      version: "1.5.2",
      releaseDate: "02/05/2013",
      type: "release" as const,
      isInstalled: false,
      size: "120 MB"
    },
    {
      version: "1.5.1",
      releaseDate: "21/03/2013",
      type: "release" as const,
      isInstalled: false,
      size: "118 MB"
    },
    {
      version: "1.5",
      releaseDate: "13/03/2013",
      type: "release" as const,
      isInstalled: false,
      size: "115 MB"
    }
  ];

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-4 container mx-auto animate-page-transition">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Versões do Minecraft</h1>
          <p className="text-muted-foreground">Instale e gerencie versões oficiais e snapshots</p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar versões..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
          <Button variant="outline" className="gap-2" onClick={handleRefreshVersions} disabled={isRefreshing}>
            {isRefreshing ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            Atualizar
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Baixar Versão
          </Button>
        </div>
        
        {/* Version Categories */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          <Button variant="default">Todas</Button>
          <Button variant="outline">Lançamentos</Button>
          <Button variant="outline">Snapshots</Button>
          <Button variant="outline">Beta</Button>
          <Button variant="outline">Instaladas</Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Version List */}
            <div className="space-y-4">
              {versions.slice(0, 5).map((version, index) => (
                <VersionCard
                  key={index}
                  version={version.version}
                  releaseDate={version.releaseDate}
                  type={version.type}
                  isInstalled={version.isInstalled}
                  size={version.size}
                />
              ))}
            </div>
          </div>
          
          <div>
            {/* Launcher Logs */}
            <LauncherLogs />
            
            {/* Quick Settings */}
            <div className="glass rounded-xl p-4 mt-6">
              <h3 className="text-lg font-medium mb-4">Configurações Rápidas</h3>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Memória RAM (GB)</label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">4</Button>
                    <Button variant="default" size="sm">8</Button>
                    <Button variant="outline" size="sm">16</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Java automático</label>
                  <div className="flex items-center h-6">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Otimizar performance</label>
                  <div className="flex items-center h-6">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações Avançadas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Versions;

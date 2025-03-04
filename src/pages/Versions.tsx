
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import VersionCard from '@/components/VersionCard';

const Versions = () => {
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
      version: "23w46a",
      releaseDate: "15/11/2023",
      type: "snapshot" as const,
      isInstalled: false,
      size: "380 MB"
    },
    {
      version: "23w42a",
      releaseDate: "18/10/2023",
      type: "snapshot" as const,
      isInstalled: false,
      size: "375 MB"
    },
    {
      version: "1.21-pre1",
      releaseDate: "20/01/2024",
      type: "beta" as const,
      isInstalled: false,
      size: "390 MB"
    },
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
        
        {/* Version List */}
        <div className="space-y-4">
          {versions.map((version, index) => (
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
      </main>
    </>
  );
};

export default Versions;

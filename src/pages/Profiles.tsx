
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';

const Profiles = () => {
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
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Perfil
          </Button>
        </div>
        
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
      </main>
    </>
  );
};

export default Profiles;

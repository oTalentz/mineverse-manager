
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Search } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import SkinViewer from '@/components/SkinViewer';

const Skins = () => {
  // Placeholders para as imagens de skins
  const placeholder1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='280' viewBox='0 0 200 280'%3E%3Crect width='200' height='280' fill='%23718096'/%3E%3Crect x='45' y='45' width='110' height='110' fill='%234A5568'/%3E%3Crect x='45' y='170' width='110' height='65' fill='%234A5568'/%3E%3C/svg%3E";
  const placeholder2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='280' viewBox='0 0 200 280'%3E%3Crect width='200' height='280' fill='%232D3748'/%3E%3Crect x='45' y='45' width='110' height='110' fill='%234A5568'/%3E%3Crect x='45' y='170' width='110' height='65' fill='%234A5568'/%3E%3C/svg%3E";
  const placeholder3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='280' viewBox='0 0 200 280'%3E%3Crect width='200' height='280' fill='%23553C9A'/%3E%3Crect x='45' y='45' width='110' height='110' fill='%234A5568'/%3E%3Crect x='45' y='170' width='110' height='65' fill='%234A5568'/%3E%3C/svg%3E";
  const placeholder4 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='280' viewBox='0 0 200 280'%3E%3Crect width='200' height='280' fill='%23805AD5'/%3E%3Crect x='45' y='45' width='110' height='110' fill='%234A5568'/%3E%3Crect x='45' y='170' width='110' height='65' fill='%234A5568'/%3E%3C/svg%3E";
  const placeholder5 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='280' viewBox='0 0 200 280'%3E%3Crect width='200' height='280' fill='%23DD6B20'/%3E%3Crect x='45' y='45' width='110' height='110' fill='%234A5568'/%3E%3Crect x='45' y='170' width='110' height='65' fill='%234A5568'/%3E%3C/svg%3E";
  const placeholder6 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='280' viewBox='0 0 200 280'%3E%3Crect width='200' height='280' fill='%2338A169'/%3E%3Crect x='45' y='45' width='110' height='110' fill='%234A5568'/%3E%3Crect x='45' y='170' width='110' height='65' fill='%234A5568'/%3E%3C/svg%3E";

  const skins = [
    {
      name: "Steve Clássico",
      skinUrl: placeholder1,
      isActive: true,
    },
    {
      name: "Alex Aventureira",
      skinUrl: placeholder2,
      isActive: false,
    },
    {
      name: "Guerreiro Noturno",
      skinUrl: placeholder3,
      isActive: false,
    },
    {
      name: "Mago Místico",
      skinUrl: placeholder4,
      isActive: false,
    },
    {
      name: "Exploradora",
      skinUrl: placeholder5,
      isActive: false,
    },
    {
      name: "Construtor Pro",
      skinUrl: placeholder6,
      isActive: false,
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-4 container mx-auto animate-page-transition">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Skins Personalizadas</h1>
          <p className="text-muted-foreground">Personalize seu personagem no jogo</p>
        </div>
        
        {/* Search and Upload */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar skins..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <Button className="gap-2">
            <Upload className="h-4 w-4" />
            Enviar Skin
          </Button>
        </div>
        
        {/* Skins Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skins.map((skin, index) => (
            <SkinViewer
              key={index}
              skinUrl={skin.skinUrl}
              name={skin.name}
              isActive={skin.isActive}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Skins;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Gamepad2, Layers, Palette, Settings, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';
import FeatureBox from '@/components/FeatureBox';
import Navbar from '@/components/Navbar';

const Index = () => {
  const features = [
    {
      title: 'Gerenciamento de Versões',
      description: 'Instale e gerencie facilmente múltiplas versões do Minecraft',
      icon: <Layers className="w-6 h-6" />,
      delay: 0,
    },
    {
      title: 'Suporte a Mods',
      description: 'Instale e organize mods com apenas alguns cliques',
      icon: <Gamepad2 className="w-6 h-6" />,
      delay: 100,
    },
    {
      title: 'Personalizações',
      description: 'Altere skins, texturas e shaders facilmente',
      icon: <Palette className="w-6 h-6" />,
      delay: 200,
    },
    {
      title: 'Performance Otimizada',
      description: 'Configurações automáticas para melhor desempenho do jogo',
      icon: <Zap className="w-6 h-6" />,
      delay: 300,
    },
    {
      title: 'Segurança Avançada',
      description: 'Autenticação segura com sua conta oficial',
      icon: <ShieldCheck className="w-6 h-6" />,
      delay: 400,
    },
    {
      title: 'Configurações Avançadas',
      description: 'Personalize cada aspecto do jogo e do launcher',
      icon: <Settings className="w-6 h-6" />,
      delay: 500,
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-4 container mx-auto animate-page-transition">
        {/* Hero Section */}
        <section className="py-16 md:py-32 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            A melhor maneira de jogar Minecraft
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl animate-blur-in">
            <span className="text-gradient">MineVerse Launcher</span> - Gerenciador Premium para Minecraft
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up">
            O launcher mais completo para gerenciar todas as suas versões, mods e personalizações do Minecraft em um único lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-pop" style={{ animationDelay: '300ms' }}>
            <Button className="text-base px-8 py-6" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Baixar Launcher
            </Button>
            <Button variant="outline" className="text-base px-8 py-6" size="lg">
              <ArrowRight className="mr-2 h-5 w-5" />
              Explorar
            </Button>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recursos Poderosos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O MineVerse oferece tudo que você precisa para personalizar sua experiência no Minecraft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureBox
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={feature.delay}
              />
            ))}
          </div>
        </section>
        
        {/* Quick Access Section */}
        <section className="py-16 glass rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Comece a Jogar Agora</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore nossas principais seções para configurar rapidamente seu jogo.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/versions">
              <Button variant="outline" className="gap-2">
                <Layers className="w-5 h-5" />
                Versões
              </Button>
            </Link>
            <Link to="/profiles">
              <Button variant="outline" className="gap-2">
                <Gamepad2 className="w-5 h-5" />
                Perfis
              </Button>
            </Link>
            <Link to="/skins">
              <Button variant="outline" className="gap-2">
                <Palette className="w-5 h-5" />
                Skins
              </Button>
            </Link>
            <Link to="/news">
              <Button variant="outline" className="gap-2">
                <Settings className="w-5 h-5" />
                Notícias
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;

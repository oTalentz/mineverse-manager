
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const News = () => {
  // Placeholders para as imagens de notícias
  const placeholder1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23718096'/%3E%3Ctext x='400' y='200' font-family='sans-serif' font-size='40' text-anchor='middle' fill='white'%3ENotícias do Minecraft%3C/text%3E%3C/svg%3E";
  const placeholder2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%232D3748'/%3E%3Ctext x='400' y='200' font-family='sans-serif' font-size='40' text-anchor='middle' fill='white'%3EAtualizações%3C/text%3E%3C/svg%3E";
  const placeholder3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23553C9A'/%3E%3Ctext x='400' y='200' font-family='sans-serif' font-size='40' text-anchor='middle' fill='white'%3ENovos Recursos%3C/text%3E%3C/svg%3E";
  const placeholder4 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23805AD5'/%3E%3Ctext x='400' y='200' font-family='sans-serif' font-size='40' text-anchor='middle' fill='white'%3EComunidade%3C/text%3E%3C/svg%3E";
  const placeholder5 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23DD6B20'/%3E%3Ctext x='400' y='200' font-family='sans-serif' font-size='40' text-anchor='middle' fill='white'%3EMods Populares%3C/text%3E%3C/svg%3E";
  const placeholder6 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%2338A169'/%3E%3Ctext x='400' y='200' font-family='sans-serif' font-size='40' text-anchor='middle' fill='white'%3EDicas e Guias%3C/text%3E%3C/svg%3E";

  const news = [
    {
      title: "Minecraft 1.20.5 Anunciado com Novos Recursos",
      date: "15 de Maio, 2024",
      excerpt: "A Mojang anunciou a próxima atualização do Minecraft, trazendo novos biomas, criaturas e sistemas de jogo.",
      imageUrl: placeholder1,
      url: "#",
    },
    {
      title: "Guia de Otimização para Mods de Alta Performance",
      date: "10 de Maio, 2024",
      excerpt: "Aprenda como otimizar seu Minecraft para rodar mods pesados sem comprometer a performance do jogo.",
      imageUrl: placeholder2,
      url: "#",
    },
    {
      title: "Os 10 Melhores Mods de Aventura para 2024",
      date: "5 de Maio, 2024",
      excerpt: "Confira nossa seleção dos melhores mods que transformam a experiência de aventura no Minecraft.",
      imageUrl: placeholder3,
      url: "#",
    },
    {
      title: "Minecraft Festival 2024 Anunciado - Veja os Detalhes",
      date: "28 de Abril, 2024",
      excerpt: "O festival anual de Minecraft está chegando com atividades, anúncios e eventos da comunidade.",
      imageUrl: placeholder4,
      url: "#",
    },
    {
      title: "Novos Shaders Revolucionam os Gráficos do Minecraft",
      date: "22 de Abril, 2024",
      excerpt: "Os últimos pacotes de shaders elevam o visual do Minecraft a um novo patamar de realismo.",
      imageUrl: placeholder5,
      url: "#",
    },
    {
      title: "Técnicas Avançadas de Redstone para Construtores",
      date: "15 de Abril, 2024",
      excerpt: "Aprenda técnicas e designs avançados para criar mecanismos complexos com redstone.",
      imageUrl: placeholder6,
      url: "#",
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16 px-4 container mx-auto animate-page-transition">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Notícias e Atualizações</h1>
          <p className="text-muted-foreground">Fique por dentro das últimas novidades do Minecraft</p>
        </div>
        
        {/* Destaque */}
        <div className="mb-10 glass rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={placeholder1}
                alt="Minecraft 1.20.5" 
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
            <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Minecraft 1.20.5 Anunciado</h2>
              <p className="text-muted-foreground mb-6">
                A Mojang revelou sua próxima grande atualização com biomas expandidos, novas criaturas e mecânicas de jogo inovadoras. A atualização prevista para julho trará mudanças significativas no ecossistema do jogo.
              </p>
              <div>
                <Button className="gap-2">
                  Ler Matéria Completa 
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              imageUrl={item.imageUrl}
              url={item.url}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default News;

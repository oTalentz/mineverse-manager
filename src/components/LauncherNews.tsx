
import React from 'react';
import { ChevronRight, Gift } from 'lucide-react';

const LauncherNews: React.FC = () => {
  const news = [
    {
      id: 1,
      title: "Temporada de Impostos",
      description: "JUNTE-SE AO DISCORD PARA REIVINDICAR emotes, auras, tênis e mais!",
      image: "https://i.imgur.com/Z3FUGW1.png",
      reward: true,
      color: "green"
    },
    {
      id: 2,
      title: "Resumo Mensal",
      description: "FEVEREIRO: Nova interface, mods skyblock, mundos hospedados e mais!",
      image: "https://i.imgur.com/EYnrXnP.png",
      reward: false,
      color: "red"
    },
    {
      id: 3,
      title: "Atualizações em breve",
      description: "Confira as novidades que estão chegando ao MineVerse!",
      image: "https://i.imgur.com/1Zv9rZT.png",
      reward: false,
      color: "blue"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {news.map((item) => (
        <div 
          key={item.id} 
          className="bg-[#1E1E24] border border-white/10 rounded-lg overflow-hidden relative h-48"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%), url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {item.reward && (
            <div className="absolute top-2 right-2 bg-purple-700 text-white px-2 py-1 rounded-md text-xs flex items-center">
              <Gift className="h-3 w-3 mr-1" />
              Inclui Recompensa
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 p-3 w-full">
            <h3 className={`font-bold text-lg text-${item.color}-400`}>{item.title}</h3>
            <p className="text-white text-sm">{item.description}</p>
          </div>
          
          <div className="absolute bottom-2 right-2">
            <button className="bg-white/10 hover:bg-white/20 rounded-full p-1">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LauncherNews;

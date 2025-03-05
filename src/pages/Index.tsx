import React from "react";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import DownloadButton from '@/components/DownloadButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1F1E26] to-[#141319] text-white">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center text-lg font-bold">
          <Rocket className="mr-2 h-6 w-6 text-primary" />
          MineVerse
        </Link>
        <div className="space-x-4">
          <Link to="/versions" className="hover:text-gray-300">
            Versões
          </Link>
          <Link to="/profiles" className="hover:text-gray-300">
            Perfis
          </Link>
          <Link to="/skins" className="hover:text-gray-300">
            Skins
          </Link>
          <Link to="/news" className="hover:text-gray-300">
            Notícias
          </Link>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              MineVerse
              <span className="text-primary"> Launcher</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              A melhor experiência para jogar Minecraft com mods, texturas e servidores.
              Personalize seu jogo como quiser e jogue com seus amigos.
            </p>
            
            <DownloadButton />
            
            <div className="flex items-center space-x-4">
              <Link
                to="/launcher"
                className="bg-primary hover:bg-primary-focus text-white font-bold py-3 px-8 rounded-md transition-colors"
              >
                Acessar Launcher Online
              </Link>
              <a
                href="https://discord.gg/example"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-discord hover:bg-discord-focus text-white font-bold py-3 px-8 rounded-md transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img
              src="/hero-image.png"
              alt="Minecraft com MineVerse Launcher"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <section className="mt-16 py-12 border-t border-gray-700">
          <h2 className="text-3xl font-bold mb-8">Recursos do MineVerse Launcher</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Suporte a Mods</h3>
              <p className="text-gray-300">
                Instale e gerencie mods facilmente com o nosso sistema integrado.
                Compatível com Forge, Fabric e muito mais.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Skins Personalizadas</h3>
              <p className="text-gray-300">
                Use qualquer skin que você quiser e personalize seu personagem
                ao máximo.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Múltiplas Versões</h3>
              <p className="text-gray-300">
                Jogue em qualquer versão do Minecraft, desde as mais antigas
                até as mais recentes.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="container mx-auto px-4 py-6 text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} MineVerse. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Index;

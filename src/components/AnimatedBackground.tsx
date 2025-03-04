
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-br from-background via-background to-background/80" />
      
      {/* Formas flutuantes decorativas */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: '-3s' }}
      />
      <div 
        className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-minecraft-grass/10 blur-3xl animate-float"
        style={{ animationDelay: '-7s' }}
      />
      
      {/* Linhas de grade decorativas */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
};

export default AnimatedBackground;

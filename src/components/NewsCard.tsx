
import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import GlassCard from './GlassCard';

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  excerpt,
  imageUrl,
  url,
}) => {
  return (
    <GlassCard 
      className="overflow-hidden flex flex-col animate-pop h-full"
      onClick={() => window.open(url, '_blank')}
    >
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="mt-auto flex items-center text-primary font-medium">
          <span>Ler mais</span>
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </GlassCard>
  );
};

export default NewsCard;

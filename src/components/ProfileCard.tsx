
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Edit, Trash2 } from 'lucide-react';
import GlassCard from './GlassCard';

interface ProfileCardProps {
  name: string;
  version: string;
  lastPlayed: string;
  mods?: number;
  icon?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  version,
  lastPlayed,
  mods = 0,
  icon,
}) => {
  return (
    <GlassCard className="p-5 animate-pop">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${icon ? '' : 'bg-minecraft-grass'}`}>
          {icon ? (
            <img src={icon} alt={name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="w-8 h-8 bg-white/90 rounded-sm"></div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Versão {version}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <span>Última vez: {lastPlayed}</span>
            {mods > 0 && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>{mods} mods</span>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="text-destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button className="gap-2">
            <Play className="h-4 w-4" />
            <span>Jogar</span>
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProfileCard;

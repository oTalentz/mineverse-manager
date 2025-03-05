
import React from 'react';
import { User, MessageSquare, UserPlus } from 'lucide-react';

const FriendsList: React.FC = () => {
  // Lista simulada de amigos
  const friends = [
    { id: 1, name: "MineGamer123", online: true, playing: "SkyBlock" },
    { id: 2, name: "CraftMaster", online: true, playing: "Survival" },
    { id: 3, name: "DiamondMiner", online: false, lastSeen: "3h atrás" },
    { id: 4, name: "RedstoneWizard", online: true, playing: "PvP" },
    { id: 5, name: "EnderDragon", online: false, lastSeen: "1d atrás" },
  ];

  return (
    <div>
      <p className="text-sm text-white/70 mb-4">
        Converse com amigos, envie convites e muito mais!
      </p>
      
      <div className="space-y-3">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-8 h-8 bg-[#2A2A32] rounded-md flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                
                {friend.online && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1A1A22]"></div>
                )}
              </div>
              
              <div className="ml-2">
                <div className="text-sm font-medium">{friend.name}</div>
                <div className="text-xs text-white/60">
                  {friend.online ? `Jogando ${friend.playing}` : friend.lastSeen}
                </div>
              </div>
            </div>
            
            <button className="text-white/60 hover:text-white">
              <MessageSquare className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10">
        <button className="flex items-center text-sm text-white/70 hover:text-white">
          <UserPlus className="h-4 w-4 mr-2" />
          Adicionar seu primeiro amigo
        </button>
      </div>
    </div>
  );
};

export default FriendsList;

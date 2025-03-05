
import React from 'react';
import { User } from 'lucide-react';

const OnlineUsers: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
      <span className="font-medium text-sm text-white/90">28,300 Online</span>
    </div>
  );
};

export default OnlineUsers;

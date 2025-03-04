
import React, { useState, useEffect } from 'react';
import { Cpu, Database, Memory, HardDrive } from 'lucide-react';

const SystemMonitor: React.FC = () => {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [ramUsage, setRamUsage] = useState(0);
  const [diskUsage, setDiskUsage] = useState(0);
  
  useEffect(() => {
    // Simulate changing system stats
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 35) + 5);  // 5% - 40%
      setRamUsage(Math.floor(Math.random() * 45) + 25); // 25% - 70%
      setDiskUsage(Math.floor(Math.random() * 20) + 40); // 40% - 60%
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getUsageColor = (percentage: number): string => {
    if (percentage < 30) return 'text-green-500';
    if (percentage < 70) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  const getProgressBarColor = (percentage: number): string => {
    if (percentage < 30) return 'bg-green-500';
    if (percentage < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="glass rounded-xl p-4">
      <h3 className="text-lg font-medium mb-4">Uso do Sistema</h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-blue-500" />
              <span className="text-sm">CPU</span>
            </div>
            <span className={`text-sm font-medium ${getUsageColor(cpuUsage)}`}>{cpuUsage}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${getProgressBarColor(cpuUsage)}`} 
              style={{ width: `${cpuUsage}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <Memory className="h-4 w-4 text-purple-500" />
              <span className="text-sm">RAM</span>
            </div>
            <span className={`text-sm font-medium ${getUsageColor(ramUsage)}`}>{ramUsage}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${getProgressBarColor(ramUsage)}`} 
              style={{ width: `${ramUsage}%` }}
            ></div>
          </div>
          <div className="flex justify-end text-xs text-muted-foreground mt-1">
            <span>4.5 GB / 8 GB</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-indigo-500" />
              <span className="text-sm">Disco</span>
            </div>
            <span className={`text-sm font-medium ${getUsageColor(diskUsage)}`}>{diskUsage}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${getProgressBarColor(diskUsage)}`} 
              style={{ width: `${diskUsage}%` }}
            ></div>
          </div>
          <div className="flex justify-end text-xs text-muted-foreground mt-1">
            <span>51.2 GB livre</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Java: 1.17.0</span>
          <span>DirectX: 12</span>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;

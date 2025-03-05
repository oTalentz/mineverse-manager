
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProfileSelectorProps {
  selectedProfile: string;
  setSelectedProfile: (profile: string) => void;
  selectedVersion: string;
  setSelectedVersion: (version: string) => void;
}

const ProfileSelector: React.FC<ProfileSelectorProps> = ({
  selectedProfile,
  setSelectedProfile,
  selectedVersion,
  setSelectedVersion
}) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showVersionDropdown, setShowVersionDropdown] = useState(false);
  
  const profiles = ['Vanilla', 'OptiFine', 'Forge', 'Fabric', 'PvP', 'Skyblock'];
  const versions = ['1.20.4', '1.19.4', '1.18.2', '1.17.1', '1.16.5', '1.15.2', '1.14.4', '1.12.2', '1.8.9', '1.7.10'];
  
  return (
    <div className="bg-green-500 text-white px-6 py-3 rounded-md flex items-center gap-2 relative">
      <span className="font-bold">MINEVERSE CLIENT</span>
      <span className="text-white/80 mx-1">{selectedVersion}</span>
      <span className="mx-1">com</span>
      
      <div className="relative">
        <button 
          className="flex items-center font-bold"
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
        >
          {selectedProfile}
          <ChevronDown className="h-4 w-4 ml-1" />
        </button>
        
        {showProfileDropdown && (
          <div className="absolute top-full left-0 mt-2 bg-[#1E1E24] border border-white/10 rounded-md shadow-lg z-50 w-40">
            {profiles.map((profile) => (
              <button
                key={profile}
                className={`block w-full text-left px-4 py-2 hover:bg-white/10 ${
                  profile === selectedProfile ? 'bg-primary/20 text-primary' : ''
                }`}
                onClick={() => {
                  setSelectedProfile(profile);
                  setShowProfileDropdown(false);
                }}
              >
                {profile}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="relative ml-auto">
        <button 
          className="flex items-center text-white/90"
          onClick={() => setShowVersionDropdown(!showVersionDropdown)}
        >
          <ChevronDown className="h-4 w-4" />
        </button>
        
        {showVersionDropdown && (
          <div className="absolute top-full right-0 mt-2 bg-[#1E1E24] border border-white/10 rounded-md shadow-lg z-50 w-32">
            {versions.map((version) => (
              <button
                key={version}
                className={`block w-full text-left px-4 py-2 hover:bg-white/10 ${
                  version === selectedVersion ? 'bg-primary/20 text-primary' : ''
                }`}
                onClick={() => {
                  setSelectedVersion(version);
                  setShowVersionDropdown(false);
                }}
              >
                {version}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSelector;

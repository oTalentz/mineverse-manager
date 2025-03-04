
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Layers, 
  Users, 
  Palette, 
  Newspaper,
  Settings,
  LogIn
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Versões', path: '/versions', icon: <Layers className="w-5 h-5" /> },
    { name: 'Perfis', path: '/profiles', icon: <Users className="w-5 h-5" /> },
    { name: 'Skins', path: '/skins', icon: <Palette className="w-5 h-5" /> },
    { name: 'Notícias', path: '/news', icon: <Newspaper className="w-5 h-5" /> },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-2 glass shadow-md" : "py-4 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-minecraft-green p-2 rounded">
            <div className="w-6 h-6 bg-white/90 rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-gradient">MineVerse</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2",
                location.pathname === link.path 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "hover:bg-primary/5 text-foreground/80 hover:text-foreground"
              )}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button className="gap-2">
            <LogIn className="w-4 h-4" />
            <span>Entrar</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

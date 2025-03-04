
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen flex items-center justify-center animate-page-transition">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-gradient mb-6">404</h1>
          <p className="text-2xl mb-8">Oops! Página não encontrada</p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            A página que você está tentando acessar não existe ou foi movida para outro local.
          </p>
          <Link to="/">
            <Button className="gap-2">
              <Home className="w-4 h-4" />
              Voltar para a Página Inicial
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;

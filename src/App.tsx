
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Versions from "./pages/Versions";
import Profiles from "./pages/Profiles";
import Skins from "./pages/Skins";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import LauncherApp from "./pages/LauncherApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/news" element={<News />} />
          <Route path="/launcher" element={<LauncherApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

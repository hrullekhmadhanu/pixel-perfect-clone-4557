import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GeneralDentistry from "./pages/services/GeneralDentistry";
import PreventiveDentistry from "./pages/services/PreventiveDentistry";
import RestorativeDentistry from "./pages/services/RestorativeDentistry";
import CosmeticDentistry from "./pages/services/CosmeticDentistry";
import PeriodontalCare from "./pages/services/PeriodontalCare";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/services/preventive-dentistry" element={<PreventiveDentistry />} />
          <Route path="/services/restorative-dentistry" element={<RestorativeDentistry />} />
          <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/services/periodontal-care" element={<PeriodontalCare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

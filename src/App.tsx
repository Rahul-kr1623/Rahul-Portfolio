import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// QueryClient setup (React Query ke liye)
const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      {/* Humne TooltipProvider aur default Toaster hata diya hai 
          kyunki wo files humne delete kar di hain. 
          Ab sirf Sonner (toast notifications) active rahega.
      */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* 404 Page handling */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      {/* Sonner notifications ke liye */}
      <Sonner position="bottom-right" expand={false} richColors />
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
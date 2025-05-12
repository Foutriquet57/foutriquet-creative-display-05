
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import IndexPage from "./pages/Index";
import CourtMetragePage from "./pages/CourtMetrage";
import PhotoPage from "./pages/Photo";
import PublicitePage from "./pages/Publicite";
import MediaDetail from "./pages/MediaDetail";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthGuard from "./components/auth/AuthGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AuthGuard>
              <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/court-metrage" element={<CourtMetragePage />} />
                <Route path="/photo" element={<PhotoPage />} />
                <Route path="/publicite" element={<PublicitePage />} />
                <Route path="/media/:id" element={<MediaDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthGuard>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

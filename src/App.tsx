import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Contract from "./pages/Contract";
import Registration from "./pages/Registration";
import CustomerService from "./pages/CustomerService";
import NotFound from "./pages/NotFound";
import SEOMetadata from "./components/SEOMetadata";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Better for production
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SEOMetadata
        title="Community Agency for Content Creators & Models"
        description="EssenceFameFace is a community agency that helps models and content creators secure brand deals and monetize your content. Join our expert team to create quality ad videos for brands."
      />
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route index element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contract" element={<Contract />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shows from "./pages/Shows";
import ShowDetail from "./pages/ShowDetail";
import About from "./pages/About";
import Press from "./pages/Press";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:showId" element={<ShowDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

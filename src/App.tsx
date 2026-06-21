import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NextSteps from "@/components/NextSteps";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Leadership from "./pages/Leadership";
import Departments from "./pages/Departments";
import MinistryDetail from "./pages/MinistryDetail";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Give from "./pages/Give";
import Visit from "./pages/Visit";
import Sermons from "./pages/Sermons";
import PrayerRequest from "./pages/PrayerRequest";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/ministries" element={<Departments />} />
          <Route path="/ministries/:ministryId" element={<MinistryDetail />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:ministryId" element={<MinistryDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give" element={<Give />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/prayer" element={<PrayerRequest />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NextSteps />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

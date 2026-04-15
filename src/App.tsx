import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage.tsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.tsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.tsx"));
const SeoTipsPage = lazy(() => import("./pages/SeoTipsPage.tsx"));
const SeoLessonPage = lazy(() => import("./pages/SeoLessonPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/seo-patarimai" element={<SeoTipsPage />} />
            <Route path="/seo-patarimai/:lessonSlug" element={<SeoLessonPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

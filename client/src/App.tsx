import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import Chatbot from "@/components/Chatbot";
import AuthModal from "@/components/AuthModal";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import ProductsPage from "@/pages/ProductsPage";
import CartPage from "@/pages/CartPage";
import ContactPage from "@/pages/ContactPage";
import SizeGuidePage from "@/pages/SizeGuidePage";
import ShippingReturnsPage from "@/pages/ShippingReturnsPage";
import TrackOrderPage from "@/pages/TrackOrderPage";
import FAQPage from "@/pages/FAQPage";
import OurStoryPage from "@/pages/OurStoryPage";
import SustainabilityPage from "@/pages/SustainabilityPage";
import CareersPage from "@/pages/CareersPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import NotFound from "@/pages/not-found";

function Router() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header 
        onCartOpen={() => setIsCartOpen(true)}
        onAuthOpen={() => setIsAuthModalOpen(true)}
      />
      
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/products/:category" component={ProductsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/size-guide" component={SizeGuidePage} />
          <Route path="/shipping-returns" component={ShippingReturnsPage} />
          <Route path="/track-order" component={TrackOrderPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/our-story" component={OurStoryPage} />
          <Route path="/sustainability" component={SustainabilityPage} />
          <Route path="/careers" component={CareersPage} />
          <Route path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route path="/terms-of-service" component={TermsOfServicePage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

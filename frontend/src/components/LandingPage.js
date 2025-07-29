import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhyQnet from "./WhyQnet";
import ProductsSection from "./ProductsSection";
import CompensationPlan from "./CompensationPlan";
import Testimonials from "./Testimonials";
import EventsSection from "./EventsSection";
import LeadForm from "./LeadForm";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

const LandingPage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Show chatbot after 5 seconds
    const timer = setTimeout(() => {
      setShowChatbot(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <WhyQnet />
      <ProductsSection />
      <CompensationPlan />
      <Testimonials />
      <EventsSection />
      <LeadForm />
      <Footer />
      {showChatbot && <Chatbot />}
    </div>
  );
};

export default LandingPage;
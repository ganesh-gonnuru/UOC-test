import React from "react";
import HeroSection from "./HeroSection";
import TestimonialCarousel from "./TestimonialCarousel";
import FAQSection from "./FAQSection";
import ContactForm from "./ContactForm";
import MapSection from "./MapSection";
import TrustBadges from "./TrustBadges";
import ScholarshipBanner from "./ScholarshipBanner";
import BlogSection from "./BlogSection";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToTopButton from "./ScrollToTopButton";
import AboutUs from "./AboutUs";
import HomeSlider from "./HomeSlider";


export default function Home() {
  return (
    <>

   
      <HeroSection />
      <WhatsAppButton />
      <TrustBadges />
      <ScholarshipBanner />
      <AboutUs />
      <BlogSection />
      <TestimonialCarousel />
      <HomeSlider />
      <FAQSection />
      <ContactForm />
      <MapSection />
      <ScrollToTopButton />
      
      
    </>
  );
}

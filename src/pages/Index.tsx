
import React from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-garden-background">
      <Header />
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

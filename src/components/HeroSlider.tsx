
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Mock data for the slider
const sliderData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80',
    title: 'Ihr Traumgarten in guten Händen',
    subtitle: 'Professionelle Gartengestaltung in Hamburg-Altona'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80',
    title: 'Natürliche Ruheoasen schaffen',
    subtitle: 'Für Ihren Privatgarten oder Gewerbeflächen'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80',
    title: 'Lassen Sie Ihren Garten erblühen',
    subtitle: 'Individuelle Pflanzenkonzepte nach Ihren Wünschen'
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen">
      <div className="overflow-hidden h-full">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-garden-primary/30 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-4xl md:text-6xl font-serif mb-4 max-w-4xl animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-slide-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                <Button className="btn-secondary">Kostenlose Gartenberatung</Button>
                <Button className="bg-white text-garden-primary hover:bg-gray-100 rounded-full px-6 py-3 font-medium shadow-md hover:shadow-lg">
                  Unsere Leistungen
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-garden-yellow w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Mock data for the slider
const sliderData = [
  {
    id: 1,
    image: '/altona-garten-zauber/images/hero_5.png',
    title: 'Ihr Traumgarten in guten Händen',
    subtitle: 'Professionelle Gartengestaltung in Hamburg-Altona'
  },
  {
    id: 2,
    image: '/altona-garten-zauber/images/hero_4.png',
    title: 'Natürliche Ruheoasen schaffen',
    subtitle: 'Für Ihren Privatgarten oder Gewerbeflächen'
  },
  {
    id: 3,
    image: '/altona-garten-zauber/images/hero_3.png',
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <Button className="bg-garden-primary hover:bg-garden-primary/90">
                Jetzt Beratung anfordern
              </Button>
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

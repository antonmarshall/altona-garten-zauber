
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-garden-primary text-2xl font-serif font-bold">
            <span className="text-garden-yellow">Altona</span>-Garten-Zauber
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Leistungen</a></li>
            <li><a href="#about" className="nav-link">Über uns</a></li>
            <li><a href="#gallery" className="nav-link">Referenzen</a></li>
            <li><a href="#testimonials" className="nav-link">Kundenstimmen</a></li>
            <li><a href="#contact" className="nav-link">Kontakt</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-garden-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="py-4 px-4 space-y-4">
            <li><a href="#home" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#services" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Leistungen</a></li>
            <li><a href="#about" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Über uns</a></li>
            <li><a href="#gallery" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Referenzen</a></li>
            <li><a href="#testimonials" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Kundenstimmen</a></li>
            <li><a href="#contact" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Kontakt</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

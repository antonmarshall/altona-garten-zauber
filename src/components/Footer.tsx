
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-garden-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 flex items-center">
              <Leaf className="mr-2" />
              Altona-Garten-Zauber
            </h3>
            <p className="mb-4 text-white/80">
              Ihr professioneller Partner für Garten- und Landschaftsbau in Hamburg-Altona und Umgebung.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-garden-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-garden-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-garden-yellow transition-colors">Gartenplanung</a></li>
              <li><a href="#services" className="text-white/80 hover:text-garden-yellow transition-colors">Gartenpflege</a></li>
              <li><a href="#services" className="text-white/80 hover:text-garden-yellow transition-colors">Pflanzarbeiten</a></li>
              <li><a href="#services" className="text-white/80 hover:text-garden-yellow transition-colors">Terrassenbau</a></li>
              <li><a href="#services" className="text-white/80 hover:text-garden-yellow transition-colors">Erdarbeiten</a></li>
              <li><a href="#services" className="text-white/80 hover:text-garden-yellow transition-colors">Saisonale Bepflanzung</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Kontakt</h3>
            <address className="not-italic text-white/80">
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-4">22765 Hamburg-Altona</p>
              <p className="mb-2">Tel: (040) 123 456 789</p>
              <p>E-Mail: info@altona-garten-zauber.de</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Altona-Garten-Zauber. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-garden-yellow transition-colors">Impressum</a>
            <a href="#" className="hover:text-garden-yellow transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-garden-yellow transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

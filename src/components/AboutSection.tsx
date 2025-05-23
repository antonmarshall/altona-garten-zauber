import React from 'react';
import { Badge } from './ui/badge';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-garden-primary/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">Über uns</h2>
            <p className="mb-4 text-gray-700">
              Altona-Garten-Zauber ist ein familiengeführter Betrieb mit über 15 Jahren Erfahrung im Garten- und Landschaftsbau. Unser Team besteht aus qualifizierten Gärtnermeistern und Fachkräften, die ihre Leidenschaft für Natur und Gestaltung in jeden Auftrag einbringen.
            </p>
            <p className="mb-6 text-gray-700">
              Wir legen besonderen Wert auf nachhaltige Arbeitsweise, umweltfreundliche Materialien und standortgerechte Pflanzenauswahl. Unser Ziel ist es, Gärten zu schaffen, die nicht nur schön aussehen, sondern auch ökologisch wertvoll sind und wenig Pflege benötigen.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-garden-secondary text-white">Zertifizierter Meisterbetrieb</Badge>
              <Badge className="bg-garden-secondary text-white">Umweltbewusste Arbeitsweise</Badge>
              <Badge className="bg-garden-secondary text-white">Regionale Pflanzen</Badge>
              <Badge className="bg-garden-secondary text-white">Termingerechte Ausführung</Badge>
              <Badge className="bg-garden-secondary text-white">Umfassende Garantie</Badge>
            </div>
            
            <a 
              href="#contact" 
              className="btn-primary inline-flex"
            >
              Kontaktieren Sie uns
            </a>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img 
              src="/altona-garten-zauber/images/über_uns_1.png" 
              alt="Unser Team bei der Arbeit" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="/altona-garten-zauber/images/über_uns 2 .png" 
              alt="Gestalteter Garten" 
              className="rounded-lg shadow-md w-full h-64 object-cover mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

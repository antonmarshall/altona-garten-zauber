
import React from 'react';
import { Badge } from '@/components/ui/badge';

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
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80" 
              alt="Unser Team bei der Arbeit" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80" 
              alt="Gestalteter Garten" 
              className="rounded-lg shadow-md w-full h-64 object-cover mt-12"
            />
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80" 
              alt="Naturnahe Gartengestaltung" 
              className="rounded-lg shadow-md w-full h-64 object-cover -mt-12"
            />
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80" 
              alt="Teichanlage" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

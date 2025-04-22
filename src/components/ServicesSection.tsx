
import React from 'react';
import { Leaf, Shrub, Plant, Shovel, Tractor, Flower } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Gartenplanung',
    description: 'Individuelle Konzepte für Ihren Traumgarten, von der ersten Skizze bis zum detaillierten Pflanzplan.',
    icon: Leaf
  },
  {
    id: 2,
    title: 'Gartenpflege',
    description: 'Regelmäßige und saisonale Pflege für Ihren Garten, damit er das ganze Jahr über in voller Pracht erstrahlt.',
    icon: Shrub
  },
  {
    id: 3,
    title: 'Pflanzarbeiten',
    description: 'Fachgerechtes Setzen von Bäumen, Sträuchern, Stauden und Blumen nach Ihren Wünschen.',
    icon: Plant
  },
  {
    id: 4,
    title: 'Terrassenbau',
    description: 'Planung und Umsetzung von Terrassen, Wegen und anderen Gartenelementen in verschiedenen Materialien.',
    icon: Shovel
  },
  {
    id: 5,
    title: 'Erdarbeiten',
    description: 'Professionelle Bodenbearbeitung, Entwässerung und Vorbereitung für alle Gartenprojekte.',
    icon: Tractor
  },
  {
    id: 6,
    title: 'Saisonale Bepflanzung',
    description: 'Jahreszeitlich angepasste Bepflanzung für dauerhaft attraktive Gartenbeete und Kübel.',
    icon: Flower
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Unsere Leistungen</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700">
          Wir bieten ein umfassendes Spektrum an Garten- und Landschaftsbaudienstleistungen für Private und Gewerbliche Kunden in Hamburg-Altona und Umgebung.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="mb-4 w-14 h-14 bg-garden-primary/10 rounded-full flex items-center justify-center text-garden-primary group-hover:bg-garden-yellow/20 transition-colors">
                <service.icon className="w-7 h-7 animate-leaf-sway" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-garden-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

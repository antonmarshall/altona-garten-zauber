
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    content: "Die Zusammenarbeit mit Altona-Garten-Zauber war von Anfang bis Ende perfekt. Unser verwilderter Stadtgarten wurde in eine grüne Oase verwandelt, die wir jetzt täglich genießen. Besonders die Pflanzenauswahl hat uns begeistert.",
    name: "Familie Müller",
    location: "Hamburg-Ottensen"
  },
  {
    id: 2,
    content: "Als Immobilienverwaltung schätzen wir besonders die Zuverlässigkeit und die hervorragenden Ergebnisse von Altona-Garten-Zauber. Die Außenanlagen unserer Objekte werden regelmäßig gepflegt und sehen stets gepflegt aus.",
    name: "Hamburger Immobilienverwaltung GmbH",
    location: "Hamburg"
  },
  {
    id: 3,
    content: "Unser Firmengarten ist durch die Expertise von Altona-Garten-Zauber zum echten Hingucker geworden. Die Mitarbeitenden nutzen die neue Außenanlage gerne für Pausen und sogar für kreative Meetings im Freien.",
    name: "Michael Schmidt",
    location: "Geschäftsführer, Creative Solutions Hamburg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-garden-primary/5">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Kundenstimmen</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700">
          Was unsere Kunden über unsere Arbeit sagen - authentische Erfahrungen aus erster Hand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="testimonial-card">
              <CardContent className="pt-6">
                <div className="mb-4 text-garden-yellow">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">"{testimonial.content}"</p>
                <div className="font-medium">
                  <p className="text-garden-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

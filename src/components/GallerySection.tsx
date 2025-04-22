
import React, { useState } from 'react';

// Mock data for gallery
const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80',
    title: 'Naturgarten mit Teichanlage',
    description: 'Familie M., Hamburg-Altona'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80',
    title: 'Moderner Stadtgarten',
    description: 'Architekturbüro K., Hamburg'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80',
    title: 'Blühende Staudenbeete',
    description: 'Familie B., Hamburg-Ottensen'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
    title: 'Wassergarten mit Naturpool',
    description: 'Hotel S., Hamburg'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80',
    title: 'Japanisch inspirierter Garten',
    description: 'Familie N., Hamburg-Blankenese'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80',
    title: 'Pflegeleichte Dachterrasse',
    description: 'Bürogemeinschaft T., Hamburg-Altona'
  }
];

const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Unsere Referenzen</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700">
          Entdecken Sie eine Auswahl unserer abgeschlossenen Projekte. Jeder Garten erzählt seine eigene Geschichte und spiegelt die Persönlichkeit seiner Besitzer wider.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => setSelectedItem(item.id)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500"
              />
              <div className="gallery-item-overlay">
                <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {galleryItems.find(item => item.id === selectedItem) && (
              <>
                <img 
                  src={galleryItems.find(item => item.id === selectedItem)?.image} 
                  alt={galleryItems.find(item => item.id === selectedItem)?.title}
                  className="max-h-[80vh] w-auto"
                />
                <div className="bg-garden-primary p-4 text-white">
                  <h3 className="text-xl font-serif">{galleryItems.find(item => item.id === selectedItem)?.title}</h3>
                  <p>{galleryItems.find(item => item.id === selectedItem)?.description}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

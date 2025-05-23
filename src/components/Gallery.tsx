
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      alt: "Wildlife in Samburu",
      category: "Wildlife"
    },
    {
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80",
      alt: "Zebras and antelopes",
      category: "Wildlife"
    },
    {
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
      alt: "Camels in the landscape",
      category: "Landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      alt: "Lodge accommodation",
      category: "Accommodation"
    },
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      alt: "Comfortable lodge interior",
      category: "Accommodation"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      alt: "Samburu landscape",
      category: "Landscape"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Gallery
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty of Samburu through our collection of stunning images showcasing wildlife, landscapes, and lodge experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary px-2 py-1 rounded text-sm font-medium">
                    {image.category}
                  </span>
                  <p className="mt-2 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-earth-800 mb-6 font-playfair">
              Guest Testimonials
            </h3>
            <div className="space-y-6">
              <blockquote className="bg-earth-50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-earth-700 italic leading-relaxed mb-4">
                  "Staying at Samburu Elephant Lodge was a dream come true! The views of the river, the herds of elephants, and the impeccable service made this trip truly unforgettable."
                </p>
                <cite className="text-primary font-semibold">— Sarah M, USA</cite>
              </blockquote>
              
              <blockquote className="bg-earth-50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-earth-700 italic leading-relaxed mb-4">
                  "The guided visit to a Samburu village was eye-opening. Learning about their traditions while staying in such a stunning location made this trip extraordinary."
                </p>
                <cite className="text-primary font-semibold">— Liam T, Canada</cite>
              </blockquote>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
              alt="Wildlife experience"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

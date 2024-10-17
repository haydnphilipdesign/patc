import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858', alt: 'Kitchen', caption: 'Modern Kitchen' },
  { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', alt: 'Bedroom', caption: 'Cozy Bedroom' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', alt: 'Living Room', caption: 'Spacious Living Room' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea', alt: 'Bathroom', caption: 'Elegant Bathroom' },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto max-w-container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="text-lg font-semibold">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
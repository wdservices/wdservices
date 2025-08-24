import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const clients = [
    { name: 'Anaco Prime Sport', logo: '/anaco prime sport.png' },
    { name: 'Bakebook', logo: '/bakebook.png' },
    { name: 'EmergenSee', logo: '/emergensee.png' },
    { name: 'Golden Tulip Hotel', logo: '/golden tulip hotel.png' },
    { name: 'Oak Park and Gardens', logo: '/oakpagrk and gardens.png' },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Amazing Companies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've successfully delivered over <span className="font-bold text-primary">756+ products</span> including websites, 
            mobile apps, and custom tools for our valued clients worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="relative w-full h-32"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div 
                className={`bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm w-full h-full flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index ? 'opacity-60' : 'opacity-100'
                }`}
              >
                <motion.img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                />
              </div>
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {client.name}
                </motion.div>
              )}
            </motion.div>
          ))}
          <div className="col-span-full mt-4 text-gray-500 dark:text-gray-400 text-sm">
            ...and many more trusted partners worldwide
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;

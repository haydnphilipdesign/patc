import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '1000+', label: 'Closings Overseen' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
];

const Statistics: React.FC = () => {
  return (
    <section className="py-16 bg-forest-green text-white">
      <div className="container mx-auto max-w-container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
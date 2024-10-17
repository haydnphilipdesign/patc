import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero-section h-screen flex items-center justify-center text-white relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}></div>
      <div className="text-center z-10 max-w-3xl px-4">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PA Real Estate Support Services, LLC
        </motion.h1>
        <motion.p 
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expert Transaction Coordination for Real Estate Professionals in the Pocono Mountains
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/services" className="glassmorphism px-8 py-4 rounded-full text-lg font-semibold bg-forest-green text-white hover:bg-opacity-90 transition duration-300">
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
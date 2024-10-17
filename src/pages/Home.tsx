import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-container px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome to PA Real Estate Support Services, LLC</h2>
          <p className="text-center mb-8">
            We are your trusted partner in real estate transaction coordination, serving Keller Williams Agents and other real estate professionals in the Pocono Mountains of Pennsylvania.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-2">
                {['Transaction Coordination', 'Document Management', 'Timeline Monitoring', 'Compliance Review'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-forest-green mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2">
                {['30+ Years of Experience', 'Dedicated Support', 'Streamlined Processes', 'Local Market Knowledge'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-forest-green mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/about" className="inline-block bg-forest-green text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Learn More About Us <ChevronRight className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      <Services />
      <Testimonials />
      <Statistics />
      
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto max-w-container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Real Estate Transactions?</h2>
          <p className="mb-8">Let us handle the details while you focus on growing your business.</p>
          <Link to="/contact" className="inline-block bg-white text-forest-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
            Contact Us Today <ChevronRight className="inline ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
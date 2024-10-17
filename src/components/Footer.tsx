import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, LinkedIn, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto max-w-container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">PA Real Estate Support Services, LLC</h3>
            <p className="mb-4">Your trusted partner in real estate transaction coordination in the Pocono Mountains.</p>
            <p>Serving the Real Estate Industry for over 30 years!</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-forest-green transition duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-forest-green transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-forest-green transition duration-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-forest-green transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2" />
                <a href="tel:5705884637" className="hover:text-forest-green transition duration-300">(570) 588-4637</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" />
                <a href="mailto:debbie@parealestatesupport.com" className="hover:text-forest-green transition duration-300">debbie@parealestatesupport.com</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-forest-green transition duration-300"><Facebook /></a>
              <a href="#" className="hover:text-forest-green transition duration-300"><LinkedIn /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} PA Real Estate Support Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
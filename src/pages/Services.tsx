import React from 'react';
import { FileText, Calendar, Phone, Users, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

// ... (rest of the imports and constants)

const Services: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive Transaction Coordination for Real Estate Professionals"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      {/* ... (rest of the component remains the same) */}
    </div>
  );
};

export default Services;
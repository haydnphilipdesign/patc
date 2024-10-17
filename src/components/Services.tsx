import React from 'react';
import { FileText, Calendar, Phone, Users } from 'lucide-react';

const services = [
  { icon: FileText, title: 'Document Management', description: 'Efficient handling of all transaction paperwork' },
  { icon: Calendar, title: 'Timeline Management', description: 'Keeping your transactions on schedule' },
  { icon: Phone, title: 'Communication', description: 'Seamless coordination between all parties' },
  { icon: Users, title: 'Client Support', description: 'Dedicated assistance throughout the process' },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-container px-4">
        <h2 className="text-h2 font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <service.icon className="w-12 h-12 text-forest-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
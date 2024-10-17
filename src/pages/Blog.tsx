import React from 'react';
import { Search, Calendar, User, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';

// ... (rest of the code remains the same)

const Blog: React.FC = () => {
  return (
    <div className="bg-light-gray">
      <PageHero 
        title="Our Blog" 
        subtitle="Insights and Updates from PA Real Estate Support Services"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      <section className="py-16">
        {/* ... (rest of the component remains the same) */}
      </section>
    </div>
  );
};

export default Blog;
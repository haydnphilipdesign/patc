import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative h-64 flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{backgroundImage: `url(${backgroundImage})`}}
      ></div>
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
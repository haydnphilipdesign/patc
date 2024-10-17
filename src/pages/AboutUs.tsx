import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Timeline from '../components/Timeline';

const achievements = [
  "30+ years of real estate experience",
  "Expertise in PA real estate transactions",
  "Certified Transaction Coordinator",
  "Former Compliance Review Officer at Keller Williams",
  "Experience with diverse real estate roles"
];

const timelineEvents = [
  { year: 1985, event: "Started career as Closing Administrator at Associates Abstract, Inc." },
  { year: 1989, event: "Office Manager at MAC Mortgage Co., Inc." },
  { year: 2000, event: "Executive Assistant and VP at Homes of Distinction, Inc." },
  { year: 2005, event: "Obtained PA Real Estate License" },
  { year: 2006, event: "Joined Keller Williams as Transaction Coordinator" },
  { year: 2013, event: "Founded PA Real Estate Support Services, LLC" }
];

const AboutUs: React.FC = () => {
  return (
    <div className="bg-light-gray">
      <PageHero 
        title="About PA Real Estate Support Services, LLC" 
        subtitle="Your Trusted Partner in Real Estate Transaction Coordination"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <img src="/debbie_obrien.jpg" alt="Debbie O'Brien" className="w-full h-auto rounded-lg shadow-md mb-6" />
              <h2 className="text-3xl font-bold mb-6">Meet Debbie O'Brien</h2>
              <p className="mb-4">
                With over 30 years of experience in all aspects of PA real estate, Debbie O'Brien is the founder and president of PA Real Estate Support Services, LLC. Her extensive background and expertise make her an invaluable asset to real estate professionals throughout Pennsylvania.
              </p>
              <p className="mb-4">
                Debbie's career spans various roles in the real estate industry, including transaction coordination, compliance review, and executive assistance. Her diverse experience allows her to provide comprehensive support to agents and brokers, ensuring smooth and compliant transactions.
              </p>
              <p className="mb-4">
                As a Certified Transaction Coordinator, Debbie is committed to streamlining the real estate transaction process, allowing agents to focus on building client relationships and growing their business.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <ul className="list-none space-y-2 mb-8">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-forest-green mr-2" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
              <h3 className="text-2xl font-bold mb-4">Debbie's Journey in Real Estate</h3>
              <Timeline events={timelineEvents} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto max-w-container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to streamline your real estate transactions?</h2>
          <Link to="/contact" className="glassmorphism inline-block px-8 py-4 rounded-full text-lg font-semibold bg-white text-forest-green hover:bg-opacity-90 transition duration-300">
            Contact Us <ChevronRight className="inline ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
import React from 'react';
import { Activity, Users, Settings } from 'react-feather'; // Import specific Feather icons
import { Helmet } from 'react-helmet'; // Import react-helmet for SEO management
import { motion } from 'framer-motion'; // Import framer-motion for animations

// Define feature data outside the component to avoid re-creation on each render
const features = [
  {
    title: 'AI-Powered Forecasting',
    description: 'Predict project outcomes and deadlines with unparalleled accuracy.',
    icon: <Activity className="h-12 w-12 text-gray-500" />, // Use Feather icons with sizing and color
  },
  {
    title: 'Real-Time Collaboration',
    description: 'Work seamlessly with your team, no matter where you are.',
    icon: <Users className="h-12 w-12 text-gray-500" />, // Use Feather icons with sizing and color
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks to save time and focus on what matters.',
    icon: <Settings className="h-12 w-12 text-gray-500" />, // Use Feather icons with sizing and color
  },
];

// FeatureCard component to reduce repetition
const FeatureCard = ({ title, description, icon }) => (
  <motion.article
    className="p-8 bg-gradient-to-r from-primary to-secondary shadow-xl rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    aria-label={`Feature: ${title}`}
  >
    <div className="mb-4 text-center">{icon}</div>
    <h3 className="text-xl font-semibold text-text-heading mb-3">{title}</h3>
    <p className="text-sm text-card-text/80">{description}</p>
  </motion.article>
);

const Features = () => (
  <section className="py-20 bg-background card-shine-effect">
    <Helmet>
      <meta
        name="description"
        content="Explore Projex's features like AI-powered forecasting, real-time collaboration, and workflow automation to improve your project management."
      />
      <meta name="keywords" content="project management, AI, forecasting, collaboration, automation" />
      <meta name="robots" content="index, follow" />
      <title>Features - Projex</title>
    </Helmet>
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-10 leading-tight">
        Features That <span className="text-primary">Empower</span> You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 card-shine-effect">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features;

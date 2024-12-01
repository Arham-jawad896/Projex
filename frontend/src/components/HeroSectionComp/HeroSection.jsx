import React, { memo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load the Helmet component to optimize rendering
const Helmet = lazy(() => import('react-helmet'));

const HeroSection = () => {
  return (
    <motion.section
      className="py-28 lg:py-40 max-w-7xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      {/* Lazy load Helmet for SEO improvement */}
      <Suspense fallback={null}>
        <Helmet>
          <meta
            name="description"
            content="Revolutionize project management with AI-powered tools. Use smart forecasting, real-time collaboration, and automation to streamline your projects."
          />
          <meta
            name="keywords"
            content="project management, AI tools, real-time collaboration, forecasting, workflow automation"
          />
          <meta name="robots" content="index, follow" />
          <title>Revolutionize Project Management with AI-Powered Tools</title>
        </Helmet>
      </Suspense>

      {/* Title with subtle fade-in effect */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Revolutionize{' '}
        <span className="text-text-heading">Project Management</span> with AI-Powered Tools
      </motion.h1>

      {/* Description with subtle fade-in and upward motion */}
      <motion.p
        className="text-lg sm:text-xl mb-6 text-text-primary/95"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        Harness AI, smart forecasting, real-time collaboration, and advanced workflow automation to streamline your projects and achieve your goals faster.
      </motion.p>

      {/* Button with subtle scale-up on hover */}
      <motion.button
        onClick={() => window.location.href = '#signup'}
        className="bg-button-cyanButton hover:bg-button-cyanButtonHover text-text-heading py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
      >
        Get Started Today
      </motion.button>
    </motion.section>
  );
};

export default memo(HeroSection);

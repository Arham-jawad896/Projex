import React, { memo, lazy, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';

// Lazy load the Helmet component to optimize rendering
const Helmet = lazy(() => import('react-helmet'));

const About = () => {
  // Memoize the feature and section data to avoid unnecessary recalculations on every render
  const sections = useMemo(() => [
    {
      title: 'Our Vision',
      description: 'To make project management effortless and intelligent, empowering teams with AI tools for success.',
    },
    {
      title: 'What Sets Us Apart',
      description: 'We integrate AI-driven insights, automate repetitive tasks, and scale solutions for all team sizes.',
    },
    {
      title: 'AI Insights',
      description: 'Unlock smarter decision-making with AI-generated analytics.',
    },
    {
      title: 'Scalable',
      description: 'Flexible solutions for teams of any size, from solo projects to enterprises.',
    },
    {
      title: 'User-Friendly',
      description: 'Intuitive design ensures seamless navigation and productivity.',
    }
  ], []);

  return (
    <section className="bg-background py-20 relative mt-[-85px]">
      {/* Lazy load Helmet for SEO improvement */}
      <Suspense fallback={null}>
        <Helmet>
          <meta
            name="description"
            content="Learn more about Projex, a project management platform built to empower teams with AI and seamless workflows."
          />
          <meta name="keywords" content="about, Projex, project management, enterprise, team collaboration" />
          <meta name="robots" content="index, follow" />
          <title>About - Projex</title>
        </Helmet>
      </Suspense>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-text-heading mb-8">About Projex</h2>
        <p className="text-xl text-card-text/80 mb-16 max-w-2xl mx-auto">
          Projex simplifies team collaboration with AI-powered tools, enhancing productivity and workflow efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {sections.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              className="px-8 py-10 bg-gradient-to-br from-primary to-secondary shadow-2xl rounded-3xl text-white overflow-hidden relative transform transition-all duration-500 ease-in-out hover:scale-105 card-shine-effect"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 bg-black/30 z-0"></div>
              <h3 className="text-2xl font-semibold mb-4 relative z-10">{item.title}</h3>
              <p className="text-lg relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-text-heading mb-10">Why Choose Projex?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {sections.slice(2).map((item) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center justify-center px-8 py-10 bg-gradient-to-br from-primary to-secondary rounded-3xl text-white shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 card-shine-effect"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                <p className="text-lg text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);

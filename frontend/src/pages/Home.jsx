import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet'; // For SEO
import { lazy } from 'react';

// Lazy load components to improve performance
const HeroSection = lazy(() => import('../components/HeroSectionComp/HeroSection'));
const Features = lazy(() => import('../components/HighLightFeature/Features'));
const Pricing = lazy(() => import('../components/PricingComp/PricingSection'));
const About = lazy(() => import('../components/AboutComp/AboutSection'));
const Footer = lazy(() => import('../components/FooterComp/FooterSection'));

const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Projex helps teams manage projects efficiently, collaborate in real-time, and leverage AI for forecasting." />
        <meta name="keywords" content="Projex, Project Management, AI, Team Collaboration, Pricing" />
        <meta name="robots" content="index, follow" />
        <title>Projex - Optimize Your Project Management</title>

        {/* Open Graph Meta Tags for Social Media sharing */}
        <meta property="og:title" content="Projex - Project Management Made Easy" />
        <meta property="og:description" content="Projex helps teams manage projects efficiently, collaborate in real-time, and leverage AI for forecasting." />
        <meta property="og:image" content="path_to_image.jpg" />
        <meta property="og:url" content="https://www.projex.com" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Projex - Project Management Made Easy" />
        <meta name="twitter:description" content="Projex helps teams manage projects efficiently, collaborate in real-time, and leverage AI for forecasting." />
        <meta name="twitter:image" content="path_to_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <div id="about">
          <About />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;

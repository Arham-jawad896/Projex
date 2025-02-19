import React, { memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/clerk-react";

// Lazy load the Helmet component to optimize rendering
const Helmet = lazy(() => import("react-helmet"));

const HeroSection = () => {
  return (
    <motion.section
      className="py-28 lg:py-40 max-w-7xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
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
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Revolutionize{" "}
        <span className="text-text-heading">Project Management</span> with
        AI-Powered Tools
      </motion.h1>

      {/* Description with subtle fade-in and upward motion */}
      <motion.p
        className="text-lg sm:text-xl mb-6 text-text-primary/95"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Harness AI, smart forecasting, real-time collaboration, and advanced
        workflow automation to streamline your projects and achieve your goals
        faster.
      </motion.p>

      {/* Button with subtle scale-up on hover */}
      <SignUpButton>
        <button
          className="bg-cyan-500/10 text-cyan-400 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-xl hover:bg-cyan-500/20 border border-cyan-500/30 transition-all font-semibold tracking-wider uppercase text-xs sm:text-sm"
          aria-label="Sign Up"
          type="button"
        >
          Get Started Today
        </button>
      </SignUpButton>
    </motion.section>
  );
};

export default memo(HeroSection);

import React from 'react';
import { Twitter, Facebook, Instagram } from 'react-feather'; // Import Feather icons for social media
import { Helmet } from 'react-helmet'; // For SEO management
import { motion } from 'framer-motion'; // For animations

const Footer = () => {
  let date = new Date()
  return (
  <footer className="bg-gradient-to-t from-primary to-secondary text-text-footer py-16">
    <Helmet>
      <meta
        name="description"
        content="Projex footer, stay connected with us through social media and explore our platform."
      />
      <meta name="keywords" content="Projex, project management, contact, social media, footer" />
      <meta name="robots" content="index, follow" />
      <title>Footer - Projex</title>
    </Helmet>

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-text-heading mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Projex
          </motion.h3>
          <p className="text-sm text-card-text/80">
            Projex helps teams manage projects efficiently, collaborate in real-time, and leverage AI for forecasting. Our mission is to improve project outcomes.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-text-heading mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Quick Links
          </motion.h3>
          <ul className="text-sm text-card-text/80">
            <li className="mb-2">
              <a href="#about" className="hover:text-primary transition duration-200">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#features" className="hover:text-primary transition duration-200">Features</a>
            </li>
            <li className="mb-2">
              <a href="#pricing" className="hover:text-primary transition duration-200">Pricing</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition duration-200">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-text-heading mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Connect With Us
          </motion.h3>
          <div className="flex space-x-6 justify-center sm:justify-start">
            {/* Social Media Icons */}
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl hover:text-primary transform transition-all duration-300 hover:scale-110"
            >
              <Twitter />
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl hover:text-primary transform transition-all duration-300 hover:scale-110"
            >
              <Facebook />
            </motion.a>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl hover:text-primary transform transition-all duration-300 hover:scale-110"
            >
              <Instagram />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="border-t border-card-text/10 mt-16 pt-6 text-center">
        <p className="text-sm text-card-text/80">
          © {date.getFullYear} Projex. All rights reserved. |{' '}
          <a href="/privacy" className="hover:text-primary">Privacy Policy</a> |{' '}
          <a href="/terms" className="hover:text-primary">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
);
}
export default Footer;

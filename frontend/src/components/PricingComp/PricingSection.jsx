import React from "react";
import { DollarSign, Package, Shield } from "react-feather"; // Import relevant Feather icons
import { Helmet } from "react-helmet"; // For SEO management
import { motion } from "framer-motion"; // For animations

// Pricing tier data
const pricingTiers = [
  {
    title: "Basic Plan",
    price: "Free",
    description:
      "Perfect for individuals who need the basic project management tools.",
    icon: <DollarSign className="h-12 w-12 text-gray-500" />,
    features: ["1 Project", "Basic AI Tools", "Email Support"],
  },
  {
    title: "Startup Plan",
    price: "$19.99/month",
    description:
      "Designed for startups with advanced features and integrations.",
    icon: <Package className="h-12 w-12 text-gray-500" />,
    features: ["5 Projects", "Advanced AI Tools", "Priority Support"],
  },
  {
    title: "Professional Plan",
    price: "$39.99/month",
    description:
      "Tailored for large teams with professional-level solutions and automation.",
    icon: <Shield className="h-12 w-12 text-gray-500" />,
    features: ["Unlimited Projects", "Custom AI Features", "24/7 Support"],
  },
];

// Pricing Card component for each tier
const PricingCard = ({ tier }) => (
  <motion.div
    className="flex flex-col bg-card-background shadow-lg rounded-xl p-6 md:p-8 transform transition-all hover:scale-105 hover:shadow-2xl card-shine-effect"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    }}
  >
    <div className="flex justify-center mb-4">{tier.icon}</div>
    <h3 className="text-card-text text-xl md:text-2xl font-semibold mb-2">
      {tier.title}
    </h3>
    <p className="text-card-text/70 text-sm md:text-base">{tier.description}</p>
    <h4 className="text-xl font-bold text-text-heading my-4">{tier.price}</h4>
    <ul className="text-card-text/70 mb-4 text-sm md:text-base">
      {tier.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="py-2 px-6 bg-button-primary hover:bg-button-hover text-white rounded-lg">
      Get Started
    </button>
  </motion.div>
);

const Pricing = () => (
  <section className="mb-16">
    <Helmet>
      <meta
        name="description"
        content="Explore Projex's pricing plans for all types of teams, from individuals to large enterprises."
      />

      <meta
        name="keywords"
        content="pricing, project management, plans, enterprise, AI"
      />

      <meta name="robots" content="index, follow" />
      <title>Pricing - Projex</title>
    </Helmet>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
        Choose the <span className="text-text-heading">Best Plan</span> for You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.title} tier={tier} />
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;

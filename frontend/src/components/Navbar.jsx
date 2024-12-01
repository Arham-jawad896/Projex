import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

// Critical CSS with improved responsive design
const criticalCSS = `
  :root {
    --bg-dark: #0A0E14;
    --text-primary: #FFFFFF;
    --accent-color: #06b6d4;
    --hover-color: #1A1F2B;
    --active-link-color: #2C3142;
    --transition-speed: 300ms;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    background-color: var(--bg-dark);
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    overscroll-behavior-x: none;
  }
  @media (max-width: 768px) {
    body {
      overflow-x: hidden;
    }
  }
`;

// SVG Icons as Functional Components
const Icon = ({ icon }) => {
  const icons = {
    home: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    pricing: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </>
    ),
    features: (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    ),
    about: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
      </>
    ),
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="nav-icon"
    >
      {icons[icon]}
    </svg>
  );
};

// Optimized Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  
  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home", icon: "home" },
      { label: "About", href: "#about", icon: "about" },
      { label: "Features", href: "#features", icon: "features" },
      { label: "Pricing", href: "#pricing", icon: "pricing" },
    ],
    []
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Prevent scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore our innovative platform for managing projects, pricing, and features. Join us for an enhanced experience!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Helmet>
      <style>{criticalCSS}</style>
      <nav
        aria-label="Main Navigation"
        data-testid="main-navigation"
        role="navigation"
        className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-dark)] backdrop-blur-xl border-b border-[#1c1c1c]/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center max-w-7xl">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
              <span className="text-cyan-400 font-bold text-base sm:text-xl">Σ</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 items-center flex-1 justify-center">
            {navItems.map(({ label, href, icon }) => (
              <li key={label} className="group relative">
                <a
                  href={href}
                  className="flex items-center gap-2 text-neutral-400 hover:text-[var(--hover-color)] transition-colors duration-300 px-2 lg:px-3 py-2 rounded-xl group-hover:text-[var(--active-link-color)]"
                  rel="noopener"
                  aria-label={`Navigate to ${label}`}
                >
                  <Icon icon={icon} />
                  <span className="font-medium tracking-wide text-sm lg:text-base">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              className="hidden sm:block bg-cyan-500/10 text-cyan-400 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-xl hover:bg-cyan-500/20 border border-cyan-500/30 transition-all font-semibold tracking-wider uppercase text-xs sm:text-sm"
              aria-label="Sign In"
              type="button"
            >
              Sign In
            </button>
            <button
              className="hidden sm:block bg-gray-800 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-xl hover:bg-gray-700 border border-gray-600 transition-all font-semibold tracking-wider uppercase text-xs sm:text-sm shadow-md"
              aria-label="Sign Up"
              type="button"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cyan-400 hover:text-white transition-colors z-60"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden flex justify-center items-center z-50"
          aria-hidden={!isMenuOpen}
        >
          <div className="bg-[var(--bg-dark)] w-4/5 max-w-md mx-auto p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-3 text-white text-xl"
              onClick={toggleMobileMenu}
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="space-y-6">
              {navItems.map(({ label, href, icon }) => (
                <li key={label} className="text-xl">
                  <a
                    href={href}
                    className="flex items-center space-x-4 text-neutral-400 hover:text-[var(--hover-color)] transition-colors duration-300"
                  >
                    <Icon icon={icon} />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button className="w-full bg-cyan-500/10 text-cyan-400 px-4 py-2.5 rounded-xl mb-3">Sign In</button>
              <button className="w-full bg-gray-800 text-white px-4 py-2.5 rounded-xl">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

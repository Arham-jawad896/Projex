import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet";


// Critical CSS (consider extracting to an external CSS file for production)
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

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#", icon: "home" },
      { label: "Pricing", href: "#", icon: "pricing" },
      { label: "Features", href: "#", icon: "features" },
      { label: "About", href: "#", icon: "about" },
    ],
    []
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const preloadAssets = [
      {
        rel: "preload",
        href: "/fonts/inter-variable.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "preload", href: "/logo.svg", as: "image" },
    ];

    preloadAssets.forEach(({ rel, href, as, type, crossOrigin }) => {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    document.body.classList.remove("loading");
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore our innovative platform for managing projects, pricing, and features. Join us for an enhanced experience!"
        />
      </Helmet>
      <style>{criticalCSS}</style>
      <nav
        aria-label="Main Navigation"
        data-testid="main-navigation"
        role="navigation"
        className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-dark)] backdrop-blur-xl border-b border-[#1c1c1c]/50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
              <span className="text-cyan-400 font-bold text-xl">Σ</span>
            </div>
          </div>
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map(({ label, href, icon }) => (
              <li key={label} className="group relative">
                <a
                  href={href}
                  className="flex items-center gap-2 text-neutral-400 hover:text-[var(--hover-color)] transition-colors duration-300 px-3 py-2 rounded-xl group-hover:text-[var(--active-link-color)]"
                  rel="noopener"
                  aria-label={`Navigate to ${label}`}
                >
                  <Icon icon={icon} />
                  <span className="font-medium tracking-wide">{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <button
              className="bg-cyan-500/10 text-cyan-400 px-6 py-2.5 rounded-xl hover:bg-cyan-500/20 border border-cyan-500/30 transition-all font-semibold tracking-wider uppercase text-sm"
              aria-label="Sign In"
              type="button"
            >
              Sign In
            </button>
            <button
              className="bg-gray-800 text-white px-6 py-2.5 rounded-xl hover:bg-gray-700 border border-gray-600 transition-all font-semibold tracking-wider uppercase text-sm shadow-md"
              aria-label="Sign Up"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <button
            className="md:hidden text-cyan-400 hover:text-white transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[var(--bg-dark)]/95 md:hidden z-40 flex flex-col items-center justify-center">
            <ul className="space-y-6 text-center text-cyan-400 text-2xl">
              {navItems.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="block py-3 hover:text-white transition-colors flex items-center justify-center gap-3"
                    onClick={toggleMobileMenu}
                  >
                    <Icon icon={icon} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default React.memo(Navbar);

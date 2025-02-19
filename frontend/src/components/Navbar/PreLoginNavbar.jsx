import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import { Helmet } from "react-helmet";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

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
const Icon = React.memo(({ icon, className = "" }) => {
  const icons = useMemo(
    () => ({
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

      contact: (
        <>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </>
      ),

      login: (
        <>
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />

          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </>
      ),
    }),
    [],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`nav-icon ${className}`}
    >
      {icons[icon]}
    </svg>
  );
});

// Optimized Responsive Navbar Component
const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home", icon: "home" },
      { label: "About", href: "#about", icon: "about" },
      { label: "Features", href: "#features", icon: "features" },
      { label: "Pricing", href: "#pricing", icon: "pricing" },
      { label: "Contact", href: "#contact", icon: "contact" },
    ],

    [],
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen, closeMobileMenu]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore our innovative platform for managing projects, pricing, and features. Join us for an enhanced experience!"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Helmet>
      <style>{criticalCSS}</style>

      {/* Main Navbar */}
      <nav
        aria-label="Main Navigation"
        data-testid="main-navigation"
        role="navigation"
        className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-dark)] backdrop-blur-xl border-b border-[#1c1c1c]/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
              <span className="text-cyan-400 font-bold text-base sm:text-xl">
                Σ
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 lg:space-x-6 items-center flex-1 justify-center">
            {navItems.map(({ label, href, icon }) => (
              <li key={label} className="group relative">
                <a
                  href={href}
                  className="flex items-center gap-2 text-neutral-400 hover:text-[var(--hover-color)] transition-colors duration-300 px-2 lg:px-3 py-2 rounded-xl group-hover:text-[var(--active-link-color)]"
                  rel="noopener"
                  aria-label={`Navigate to ${label}`}
                  onClick={closeMobileMenu}
                >
                  <Icon icon={icon} />
                  <span className="font-medium tracking-wide text-sm lg:text-base">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Authentication and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-6">
            <SignedOut>
              <SignInButton>
                <button
                  className="bg-cyan-500/10 text-cyan-400 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-xl hover:bg-cyan-500/20 border border-cyan-500/30 transition-all font-semibold tracking-wider uppercase text-xs sm:text-sm"
                  aria-label="Sign In"
                  type="button"
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  className="bg-cyan-500/10 text-cyan-400 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-xl hover:bg-cyan-500/20 border border-cyan-500/30 transition-all font-semibold tracking-wider uppercase text-xs sm:text-sm"
                  aria-label="Sign Up"
                  type="button"
                >
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="md:hidden text-cyan-400 hover:text-white transition-colors z-60"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed inset-0 transition-all duration-300 transform z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Solid Background Layer */}
          <div className="absolute inset-0 bg-[#0A0E14]" />

          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 z-50 text-cyan-400 hover:text-white transition-colors"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="container mx-auto px-4 py-8 h-full flex flex-col relative z-40">
            {/* Mobile Logo */}
            <div className="flex justify-center mb-12">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-2xl">Σ</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="space-y-6 flex-grow">
              {navItems.map(({ label, href, icon }) => (
                <li
                  key={label}
                  className="bg-[#1A1F2B] rounded-xl mb-2 hover:bg-[#2C3142] transition-all duration-300"
                >
                  <a
                    href={href}
                    className="flex items-center gap-4 text-neutral-200 hover:text-cyan-400 transition-colors duration-300 px-4 py-4 rounded-xl text-lg"
                    onClick={closeMobileMenu}
                  >
                    <Icon icon={icon} className="w-6 h-6" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Authentication Buttons */}
            <div className="space-y-4 pb-8">
              <SignedOut>
                <SignInButton>
                  <button
                    className="w-full bg-[#1A1F2B] text-cyan-400 px-6 py-3 rounded-xl hover:bg-[#2C3142] border border-cyan-500/30 transition-all font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <Icon icon="login" />
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button
                    className="w-full bg-[#1A1F2B] text-cyan-400 px-6 py-3 rounded-xl hover:bg-[#2C3142] border border-cyan-500/30 transition-all font-semibold tracking-wider uppercase mt-4 flex items-center justify-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="w-full flex justify-center">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNavbar;

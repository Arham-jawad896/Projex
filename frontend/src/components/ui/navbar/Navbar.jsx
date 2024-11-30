import React, { useState } from 'react';
import { 
  Home as HomeIcon, 
  Layers, 
  DollarSign, 
  Info, 
  LogIn, 
  UserPlus, 
  Menu 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      name: 'home', 
      label: 'Home', 
      icon: HomeIcon,
      to: '/' 
    },
    { 
      name: 'features', 
      label: 'Features', 
      icon: Layers,
      to: '/features' 
    },
    { 
      name: 'pricing', 
      label: 'Pricing', 
      icon: DollarSign,
      to: '/pricing' 
    },
    { 
      name: 'about', 
      label: 'About', 
      icon: Info,
      to: '/about' 
    }
  ];

  return (
    <div>
      {/* Apply the padding-top directly to the content wrapper */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B1A] backdrop-blur-xl bg-opacity-90 border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">Px</span>
              </div>
              <span className="text-xl font-semibold text-gray-100 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 transition-all">
                Projex
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 group ${activeTab === item.name ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab(item.name)}
              >
                <item.icon size={18} strokeWidth={2} className="group-hover:scale-110 transition-transform group-hover:text-indigo-400" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all group">
              <LogIn size={18} strokeWidth={2} className="group-hover:text-indigo-400" />
              <span className="text-sm font-medium">Sign In</span>
            </Link>

            <Link to="/signup" className="flex items-center space-x-2 bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-600 transition-all group">
              <UserPlus size={18} strokeWidth={2} className="group-hover:scale-110" />
              <span>Sign Up</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-400 hover:text-white transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0A0B1A] backdrop-blur-xl bg-opacity-95 shadow-2xl border-b border-white/5">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                  onClick={() => { setActiveTab(item.name); setIsMobileMenuOpen(false); }}
                >
                  <item.icon size={20} strokeWidth={2} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}

              <div className="border-t border-white/10 pt-4 space-y-2">
                <Link to="/login" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all">
                  <LogIn size={20} strokeWidth={2} />
                  <span className="text-sm font-medium">Sign In</span>
                </Link>

                <Link to="/signup" className="flex items-center justify-center space-x-3 px-4 py-3 rounded-lg bg-indigo-700 text-white hover:bg-indigo-600 transition-all">
                  <UserPlus size={20} strokeWidth={2} />
                  <span className="text-sm font-medium">Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* This padding ensures the main content starts below the navbar */}
      <div className="pt-16"> {/* Adjust pt-16 to match your navbar height */}
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default Navbar;

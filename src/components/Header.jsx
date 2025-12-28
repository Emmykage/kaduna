import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Leadership', path: '/directors' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-xl' : 'bg-slate-900 py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Hexagon className="text-green-500 fill-green-500/20 w-10 h-10 transform group-hover:rotate-90 transition-transform duration-500" strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-wide uppercase leading-none">
              Kaduna
            </span>
            <span className="text-xs font-semibold text-green-500 uppercase tracking-[0.2em] leading-none mt-1">
              Factory
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-5 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                isActive(item.path) 
                  ? 'text-green-400' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <motion.div
                  layoutId="desktop-indicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <Link to="/contact" className="ml-6">
            <button className="bg-green-600 hover:bg-green-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors border-l-4 border-green-800">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 top-[72px] bg-slate-900 z-40 md:hidden flex flex-col p-8"
            >
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-bold uppercase tracking-wide ${
                      isActive(item.path) ? 'text-green-500' : 'text-slate-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="mt-8">
                  <button className="w-full bg-green-600 text-white font-bold uppercase tracking-widest py-4">
                    Get Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
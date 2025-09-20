import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary-900 text-white py-3 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <a href="tel:+919876543210" className="flex items-center space-x-2 hover:text-rosegold transition-colors duration-300">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:contact@advocateaniruddhjani.com" className="flex items-center space-x-2 hover:text-rosegold transition-colors duration-300">
              <Mail size={14} />
              <span>contact@advocateaniruddhjani.com</span>
            </a>
          </div>
          <div className="text-sm text-primary-100">
            Practicing in Ahmedabad, Gandhinagar, Kalol & across Gujarat
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect shadow-2xl py-3' 
          : 'bg-white/95 backdrop-blur-sm py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-900 to-primary-700 p-3 rounded-2xl group-hover:from-rosegold group-hover:to-accent transition-all duration-500 shadow-lg group-hover:shadow-xl transform group-hover:scale-110">
                  <Scale className="h-7 w-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-900 group-hover:text-primary-800 transition-colors duration-300">
                  Advocate Aniruddh Jani
                </h1>
                <p className="text-sm text-primary-600 font-medium">Legal Consultant</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold transition-all duration-300 hover:text-primary-900 relative group ${
                    location.pathname === item.path
                      ? 'text-primary-900'
                      : 'text-primary-700'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rosegold to-accent transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rosegold to-accent text-white px-8 py-3 rounded-full font-semibold hover:from-accent hover:to-rosegold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Book Consultation
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-primary-50 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} className="text-primary-900" /> : <Menu size={24} className="text-primary-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t shadow-2xl animate-fade-in-down">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-semibold transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary-900'
                      : 'text-primary-700 hover:text-primary-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-gradient-to-r from-rosegold to-accent text-white px-8 py-4 rounded-full font-semibold text-center hover:from-accent hover:to-rosegold transition-all duration-300 shadow-lg"
              >
                Book Consultation
              </Link>
              <div className="pt-6 border-t border-primary-100">
                <a href="tel:+919876543210" className="flex items-center space-x-3 text-primary-600 hover:text-primary-900 transition-colors duration-300 py-3">
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:contact@advocateaniruddhjani.com" className="flex items-center space-x-3 text-primary-600 hover:text-primary-900 transition-colors duration-300 py-3">
                  <Mail size={18} />
                  <span>contact@advocateaniruddhjani.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
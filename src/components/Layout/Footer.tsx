import React from 'react';
import { Scale, Phone, Mail, MapPin, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-rosegold to-accent p-3 rounded-2xl shadow-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">Advocate Aniruddh Jani</h3>
                <p className="text-primary-200">Legal Consultant</p>
              </div>
            </div>
            <p className="text-primary-100 mb-8 leading-relaxed max-w-md text-lg">
              Providing expert legal services across Ahmedabad, Gandhinagar, Kalol, and Gujarat. 
              Committed to delivering justice and protecting your legal rights with integrity and dedication.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800/50 p-4 rounded-xl hover:bg-gradient-to-r hover:from-rosegold hover:to-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800/50 p-4 rounded-xl hover:bg-green-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold mb-6 font-serif text-rosegold">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-primary-200 hover:text-rosegold transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-semibold mb-6 font-serif text-rosegold">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-rosegold/20 p-2 rounded-lg group-hover:bg-rosegold/30 transition-colors duration-300">
                  <Phone size={18} className="text-rosegold" />
                </div>
                <div>
                  <p className="text-white font-medium">+91 98765 43210</p>
                  <p className="text-primary-300 text-sm">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="bg-rosegold/20 p-2 rounded-lg group-hover:bg-rosegold/30 transition-colors duration-300">
                  <Mail size={18} className="text-rosegold" />
                </div>
                <div>
                  <p className="text-white font-medium">contact@advocateaniruddhjani.com</p>
                  <p className="text-primary-300 text-sm">Email Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="bg-rosegold/20 p-2 rounded-lg group-hover:bg-rosegold/30 transition-colors duration-300">
                  <MapPin size={18} className="text-rosegold" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    Law Chamber Complex<br />
                    Ahmedabad, Gujarat
                  </p>
                  <p className="text-primary-300 text-sm">Main Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700/50 mt-12 pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 text-sm">
              © 2025 Advocate Aniruddh Jani. All rights reserved.
            </p>
            <div className="flex items-center space-x-8 mt-4 md:mt-0">
              <span className="text-primary-400 text-sm">Practicing Areas:</span>
              <span className="text-primary-200 text-sm font-medium">Ahmedabad • Gandhinagar • Kalol • Gujarat</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Bluwaves Technologies Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold">Bluwaves Technologies</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transforming businesses through innovative digital solutions. From AI-powered tools 
              to custom development, we're your partner in digital success.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello.wdservices@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>08108510085</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Road 12, first avenue off location/ Ada George Port Harcourt, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <Link 
                  to="/academy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Academy
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <Link 
                  to="/admin/login"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  ARFed
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  PrepMate
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  BakeBook
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  MathsGenius
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Bluwaves Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

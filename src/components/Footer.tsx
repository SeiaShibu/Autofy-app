import React from 'react';
import { Bot, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Bot className="w-8 h-8 text-indigo-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
                AUTOFY
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transform your business with intelligent automation solutions. 
              Streamline operations, reduce costs, and boost efficiency.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Placeholder */}
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300 cursor-pointer">
                <div className="w-5 h-5 bg-gray-400"></div>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300 cursor-pointer">
                <div className="w-5 h-5 bg-gray-400"></div>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300 cursor-pointer">
                <div className="w-5 h-5 bg-gray-400"></div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Workflow Automation',
                'Process Automation (RPA)',
                'AI Chatbots',
                'Data Analytics',
                'Document Automation',
                'Custom Solutions'
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-bold mb-6">Industries</h4>
            <ul className="space-y-3">
              {[
                'Restaurants',
                'Hotels & Resorts',
                'Retail & Malls',
                'Startups',
                'Educational',
                'SME Businesses'
              ].map((industry, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('industries')}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {industry}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">hello@autofy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">Remote-first, Global</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Project
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AUTOFY. All rights reserved. Built with precision and care.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
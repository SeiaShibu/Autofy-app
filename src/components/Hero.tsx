import React from 'react';
import { ArrowRight, Zap, Bot, Workflow } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-40 w-12 h-12 bg-orange-200 rounded-full opacity-20 animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* 3D Logo Animation */}
<div className="mb-8 flex justify-center">
  <div className="relative transform hover:scale-110 transition-all duration-500">
    <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500">
      <img src="/logo.png" alt="My Logo" className="w-12 h-12 object-contain" />
    </div>
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
      <Zap className="w-4 h-4 text-white" />
    </div>
  </div>
</div>


          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent leading-tight">
            AUTOPHY
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Transform Your Business with
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Intelligent Automation Solutions
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            From workflow automation to AI-powered chatbots, we help businesses across industries 
            streamline operations, reduce costs, and boost efficiency with cutting-edge automation technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Quote
              <Workflow className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
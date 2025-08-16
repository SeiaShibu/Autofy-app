import React from 'react';
import { CheckCircle, Zap, Target, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast Implementation',
      description: 'Quick deployment with minimal disruption to your existing workflows'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precision Automation',
      description: 'Tailored solutions that perfectly match your business requirements'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure smooth operations'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Proven Results',
      description: 'Track record of successful automation implementations'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without additional workforce',
    'Improve customer satisfaction and response times',
    'Generate detailed analytics and insights'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">AUTOFY</span>?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We specialize in creating intelligent automation solutions that transform how businesses operate. 
              Our expertise spans across industries, delivering measurable results that drive growth and efficiency.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Automation Journey
            </button>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
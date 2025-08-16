import React from 'react';
import { 
  Workflow, 
  Bot, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Zap,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks including reports, scheduling, emails, and approval processes to save time and reduce errors.',
      features: ['Report Generation', 'Email Automation', 'Scheduling Systems', 'Approval Workflows']
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Process Automation (RPA)',
      description: 'Streamline business processes with robotic process automation for form filling, invoice generation, and HR tasks.',
      features: ['Form Automation', 'Invoice Processing', 'HR Task Automation', 'Data Entry']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'AI Chatbots & Intelligence',
      description: 'Deploy intelligent chatbots and AI solutions for recommendations, demand forecasting, and fraud detection.',
      features: ['Smart Chatbots', 'Recommendation Systems', 'Demand Forecasting', 'Fraud Detection']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Analysis & Dashboards',
      description: 'Transform raw data into actionable insights with automated data cleaning, analysis, and dashboard creation.',
      features: ['Data Cleaning', 'Analytics Automation', 'Dashboard Creation', 'Report Generation']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Document Automation',
      description: 'Automate document generation and processing including contracts, invoices, and receipts for seamless operations.',
      features: ['Contract Generation', 'Invoice Automation', 'Receipt Processing', 'Document Templates']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Custom Automation',
      description: 'Tailored automation solutions designed specifically for your unique business needs and industry requirements.',
      features: ['Custom Workflows', 'API Integrations', 'System Connections', 'Scalable Solutions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">Automation</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive automation solutions designed to transform your business operations 
            and drive efficiency across every department.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-50 to-teal-50 text-indigo-600 py-3 rounded-xl font-semibold hover:from-indigo-100 hover:to-teal-100 transition-all duration-300 flex items-center justify-center gap-2 group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
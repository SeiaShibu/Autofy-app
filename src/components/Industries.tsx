import React from 'react';
import { 
  Coffee, 
  Building, 
  ShoppingBag, 
  Rocket, 
  GraduationCap, 
  Briefcase,
  ArrowRight 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Cafes & Restaurants',
      description: 'Streamline dining experiences with smart automation',
      solutions: [
        'Self-order kiosks & tablet menus',
        'Automated billing & digital receipts',
        'AI-driven recommendation systems',
        'Chatbot for reservations & FAQs'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Hotels & Resorts',
      description: 'Enhance guest experiences with automated services',
      solutions: [
        'Self check-in/check-out systems',
        'AI-powered customer service chatbots',
        'Automated housekeeping schedules',
        'Feedback collection automation'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Malls & Retail',
      description: 'Personalize shopping with intelligent automation',
      solutions: [
        'AI-based personalized offers',
        'Smart inventory management',
        'Customer behavior analytics',
        'Automated marketing campaigns'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Startups & Companies',
      description: 'Scale efficiently with comprehensive automation',
      solutions: [
        'Automated HR onboarding processes',
        'Workflow automation for approvals',
        'AI-powered business dashboards',
        'Customer support chatbots'
      ],
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Schools & Colleges',
      description: 'Modernize education with smart systems',
      solutions: [
        'Attendance automation (RFID, face recognition)',
        'Automated timetable generation',
        'Online assignment & auto-grading',
        'Fee payment reminders & receipts'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Businesses (SMEs)',
      description: 'Optimize operations for sustainable growth',
      solutions: [
        'Invoice generation & accounting',
        'Automated email & social campaigns',
        'Sales tracking dashboards',
        'Stock/inventory automation'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Industries We <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized automation solutions tailored for diverse industries, 
            helping businesses of all sizes achieve operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden relative"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${industry.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{industry.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full bg-gradient-to-r ${industry.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group opacity-90 hover:opacity-100`}>
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
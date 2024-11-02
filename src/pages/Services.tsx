import React from 'react';
import { Cloud, Smartphone, Code, CheckCircle, BarChart2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      icon: <Code className="h-10 w-10 text-indigo-500" />,
      description: 'We create tailored software solutions that align with your business goals, using cutting-edge technologies to deliver scalable, maintainable applications.',
      features: ['Custom Web Applications', 'Enterprise Software', 'API Development', 'Legacy System Modernization']
    },
    {
      title: 'Cloud Solutions',
      icon: <Cloud className="h-10 w-10 text-indigo-500" />,
      description: 'Transform your business with our comprehensive cloud services. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency.',
      features: ['Cloud Migration', 'Cloud Architecture', 'DevOps Services', 'Cloud Security']
    },
    {
      title: 'Mobile App Development',
      icon: <Smartphone className="h-10 w-10 text-indigo-500" />,
      description: 'Create powerful mobile experiences with our expert mobile development services. We build native and cross-platform applications for exceptional performance.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'Mobile App Strategy']
    },
    {
      title: 'Analytics',
      icon: <BarChart2 className="h-10 w-10 text-indigo-500" />,
      description: 'Our analytics solutions turn data into insights, empowering businesses to make data-driven decisions and achieve measurable outcomes.',
      features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Data Warehousing']
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#00539f] mb-4">Our Services</h1>
          <p className="text-xl text-gray-700">Comprehensive software solutions for modern businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center mb-4">
                <div className="mr-3">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-[#00539f]">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

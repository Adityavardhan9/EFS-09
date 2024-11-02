import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'We create tailored software solutions that perfectly align with your business objectives and requirements. Our experienced team uses cutting-edge technologies to deliver scalable and maintainable applications.',
      features: ['Custom Web Applications', 'Enterprise Software', 'API Development', 'Legacy System Modernization']
    },
    {
      title: 'Cloud Solutions',
      description: 'Transform your business with our comprehensive cloud services. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency and scalability.',
      features: ['Cloud Migration', 'Cloud Architecture', 'DevOps Services', 'Cloud Security']
    },
    {
      title: 'Mobile App Development',
      description: 'Create powerful mobile experiences for your users with our expert mobile development services. We build native and cross-platform applications that deliver exceptional performance.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'Mobile App Strategy']
    }
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90">Comprehensive software solutions for modern businesses</p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-lg mb-6 opacity-90">{service.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
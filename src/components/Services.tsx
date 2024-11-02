import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      image: 'https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?auto=format&fit=crop&q=80&w=800',
      description: 'Tailored solutions that perfectly match your business requirements.',
    },
    {
      title: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
      description: 'Scalable cloud infrastructure and migration services.',
    },
    {
      title: 'Mobile App Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      description: 'Native and cross-platform mobile applications.',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#00539f] sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Comprehensive solutions for modern businesses
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-[#00539f] p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-200">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-indigo-200 hover:text-indigo-100"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

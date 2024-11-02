import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Rocket, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-indigo-500" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and advanced encryption to protect your data.',
    },
    {
      icon: <Rocket className="h-12 w-12 text-indigo-500" />,
      title: 'Lightning Fast',
      description: 'Optimized performance and scalable architecture for rapid deployment.',
    },
    {
      icon: <Cpu className="h-12 w-12 text-indigo-500" />,
      title: 'Smart Solutions',
      description: 'Innovative AI-powered features that adapt to your business needs.',
    },
  ];

  return (
    <div className="py-24 bg-slate-800">
      <Helmet>
        <title>Why Choose EpicForge? - Advanced Features and Solutions</title>
        <meta
          name="description"
          content="Explore the unique features of EpicForge Software, including enterprise security, fast deployment, and smart AI solutions that meet your business needs."
        />
        <meta name="keywords" content="EpicForge, Enterprise Security, Fast Deployment, AI Solutions, Technology Services" />
        <link rel="canonical" href="https://epicforgesoftware.com/features" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Why Choose EpicForge? - Advanced Features and Solutions" />
        <meta
          property="og:description"
          content="Discover why EpicForge Software is the best choice with features like bank-grade security, rapid deployment, and AI-powered solutions."
        />
        <meta property="og:url" content="https://epicforgesoftware.com/features" />
        <meta property="og:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Choose EpicForge? - Advanced Features and Solutions" />
        <meta
          name="twitter:description"
          content="Discover why EpicForge Software is the best choice with features like bank-grade security, rapid deployment, and AI-powered solutions."
        />
        <meta name="twitter:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
            Why Choose EpicForge?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We combine cutting-edge technology with exceptional service
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-8 py-12 bg-slate-900 rounded-lg">
                  <div className="flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-medium text-center text-white">{feature.title}</h3>
                    <p className="mt-2 text-gray-300 text-center">{feature.description}</p>
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

export default Features;

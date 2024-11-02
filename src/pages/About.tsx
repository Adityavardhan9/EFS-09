import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="pt-24 pb-12">
      <Helmet>
        <title>About EpicForge Software Pvt Ltd - Forging The Future Of Innovation</title>
        <meta
          name="description"
          content="Learn more about EpicForge Software Pvt Ltd, a leader in innovative software solutions. Discover our story, values, and expertise in custom software development."
        />
        <meta name="keywords" content="EpicForge Software, About EpicForge, Software Development, Innovation, Technology" />
        <link rel="canonical" href="https://epicforgesoftware.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About EpicForge Software Pvt Ltd - Forging The Future Of Innovation" />
        <meta
          property="og:description"
          content="Learn more about EpicForge Software Pvt Ltd, a leader in innovative software solutions. Discover our story, values, and expertise in custom software development."
        />
        <meta property="og:url" content="https://epicforgesoftware.com/about" />
        <meta property="og:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About EpicForge Software Pvt Ltd - Forging The Future Of Innovation" />
        <meta
          name="twitter:description"
          content="Learn more about EpicForge Software Pvt Ltd, a leader in innovative software solutions. Discover our story, values, and expertise in custom software development."
        />
        <meta name="twitter:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About EpicForge Software</h1>
          <p className="text-xl opacity-90">Forging the Future of Innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-lg opacity-90">
              Founded with a vision to transform the digital landscape, EpicForge Software has been at the forefront of technological innovation since our inception. We combine technical expertise with creative problem-solving to deliver exceptional software solutions.
            </p>
            <p className="text-lg opacity-90">
              Our team of passionate developers, designers, and strategists works tirelessly to help businesses navigate the complex world of technology and achieve their digital ambitions.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="opacity-90">We constantly push the boundaries of what's possible in software development.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="opacity-90">We maintain the highest standards in every project we undertake.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="opacity-90">We believe in working closely with our clients to achieve the best results.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Modern Technologies</h3>
              <p className="opacity-90">We stay current with the latest technologies and best practices in software development.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p className="opacity-90">Our solutions are built to grow with your business and adapt to changing needs.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Security First</h3>
              <p className="opacity-90">We prioritize security in every aspect of our development process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

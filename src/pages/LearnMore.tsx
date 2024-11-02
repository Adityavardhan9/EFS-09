// src/pages/LearnMore.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

const LearnMore = () => {
  return (
    <div className="pt-24 pb-12 text-center bg-gradient-to-b from-blue-900 to-blue-600 text-white min-h-screen">
      <Helmet>
        <title>Learn More About EpicForge Software</title>
        <meta
          name="description"
          content="Discover more about EpicForge Software's mission and our expertise in delivering innovative software solutions."
        />
        <link rel="canonical" href="https://epicforgesoftware.com/learn-more" />
      </Helmet>
      <h1 className="text-4xl font-bold text-indigo-300 mb-4">Learn More About EpicForge Software</h1>
      <p className="text-lg text-gray-100 mb-6">
        Explore our services, expertise, and what makes us the right partner for your business needs.
      </p>
      <a href="/services" className="text-white bg-indigo-500 px-6 py-3 rounded-md shadow hover:bg-indigo-600 transition">
        Our Services
      </a>
    </div>
  );
};

export default LearnMore;

// src/pages/GetStarted.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="pt-24 pb-12 text-center bg-gradient-to-b from-blue-900 to-blue-600 text-white min-h-screen">
      <Helmet>
        <title>Get Started with EpicForge Software</title>
        <meta
          name="description"
          content="Start your journey with EpicForge Software today. Learn how we can help transform your ideas into innovative software solutions."
        />
        <link rel="canonical" href="https://epicforgesoftware.com/get-started" />
      </Helmet>

      <h1 className="text-4xl font-bold text-indigo-300 mb-4">Get Started with EpicForge Software</h1>
      <p className="text-lg text-gray-100 mb-6">
        We're here to help you turn your ideas into reality. Contact us to get started on your next big project.
      </p>
      <Link
        to="/contact"
        className="text-white bg-indigo-500 px-6 py-3 rounded-md shadow hover:bg-indigo-600 transition"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default GetStarted;

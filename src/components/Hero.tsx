import React from 'react';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <Helmet>
        <title>EpicForge Software - Transform Your Ideas Into Powerful Software Solutions</title>
        <meta
          name="description"
          content="EpicForge Software crafts cutting-edge software solutions that drive innovation and deliver exceptional user experiences. Let's build something amazing together."
        />
        <meta name="keywords" content="EpicForge Software, Software Development, Custom Software Solutions, Innovation, Technology Services" />
        <link rel="canonical" href="https://epicforgesoftware.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EpicForge Software - Transform Your Ideas Into Powerful Software Solutions" />
        <meta property="og:description" content="EpicForge Software offers innovative software solutions to turn your ideas into reality. Join us in building exceptional digital experiences." />
        <meta property="og:url" content="https://epicforgesoftware.com/" />
        <meta property="og:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EpicForge Software - Transform Your Ideas Into Powerful Software Solutions" />
        <meta name="twitter:description" content="EpicForge Software crafts cutting-edge software solutions that drive innovation and deliver exceptional user experiences." />
        <meta name="twitter:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Ideas Into</span>
            <span className="block text-indigo-300">Powerful Software Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We craft cutting-edge software solutions that drive innovation and deliver exceptional user experiences. Let's build something amazing together.
          </p>
          {/* <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/get-started"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/learn-more"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-slate-800"></div>
    </div>
  );
};

export default Hero;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ServicesSection from '../components/Services';
import Approach from '../components/Approach';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EpicForge Software - Forging The Future Of Innovation</title>
        <meta
          name="description"
          content="EpicForge Software provides tailored software solutions, cloud infrastructure, and mobile development services to drive business transformation and efficiency."
        />
        <meta name="keywords" content="EpicForge, Software Development, Cloud Solutions, Mobile Development, Custom Software" />
        <link rel="canonical" href="https://epicforgesoftware.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="EpicForge Software Pvt Ltd - Forging The Future Of Innovation" />
        <meta
          property="og:description"
          content="EpicForge Software provides tailored software solutions, cloud infrastructure, and mobile development services to drive business transformation and efficiency."
        />
        <meta property="og:url" content="https://epicforgesoftware.com/" />
        <meta property="og:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EpicForge Software Pvt Ltd - Forging The Future Of Innovation" />
        <meta
          name="twitter:description"
          content="EpicForge Software provides tailored software solutions, cloud infrastructure, and mobile development services to drive business transformation and efficiency."
        />
        <meta name="twitter:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />
      </Helmet>

      <Hero />
      <Features />
      <ServicesSection />
      <Approach />
    </div>
  );
};

export default Home;

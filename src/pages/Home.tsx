import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ServicesSection from '../components/Services';
import Approach from '../components/Approach';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ServicesSection />
      <Approach />
    </div>
  );
};

export default Home;
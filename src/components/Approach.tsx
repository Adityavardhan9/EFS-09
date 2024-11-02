import React from 'react';
import { Helmet } from 'react-helmet-async';

const Approach = () => {
  const steps = [
    {
      number: '01',
      title: 'Brainstorming with the expert team',
      description: "Team's exceptional domain knowledge helps find disruptive solutions",
      image: '/setup_img1.png'
    },
    {
      number: '02',
      title: 'Very Lean team. Agile approach',
      description: 'Team tracks every task and seeks immediate feedback',
      image: '/setup_img2.png'
    },
    {
      number: '03',
      title: 'Projects delivered on time',
      description: 'Deliver right, deliver on time is our motto and we adhere to it always',
      image: '/setup_img3.png'
    }
  ];

  return (
    <div className="py-24 bg-[#00539f]">
      <Helmet>
        <title>Our Approach - EpicForge Software Pvt Ltd</title>
        <meta
          name="description"
          content="Discover our unique approach to project management at EpicForge Software Pvt Ltd. We ensure seamless communication, lean processes, and timely delivery."
        />
        <meta name="keywords" content="EpicForge Software, Project Management, Agile Approach, Timely Delivery, Client Collaboration" />
        <link rel="canonical" href="https://epicforgesoftware.com/approach" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Approach - EpicForge Software Pvt Ltd" />
        <meta
          property="og:description"
          content="Learn how EpicForge Software Pvt Ltd approaches project management to ensure quality, collaboration, and timely delivery."
        />
        <meta property="og:url" content="https://epicforgesoftware.com/approach" />
        <meta property="og:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Approach - EpicForge Software Pvt Ltd" />
        <meta
          name="twitter:description"
          content="Learn how EpicForge Software Pvt Ltd approaches project management to ensure quality, collaboration, and timely delivery."
        />
        <meta name="twitter:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
          <h2 className="text-3xl font-bold mb-6">How we work on projects</h2>
          <p className="text-lg opacity-90">
            We work alongside clients throughout the process to ensure constant feedback and improvement.
          </p>
        </div>

        <div className="setup_inner">
          {steps.map((step, index) => (
            <div key={index} className={`setup_item row ${index % 2 === 1 ? 'flex-row-reverse' : ''} mb-16`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5">
                  <div className="setup_img">
                    <img
                      src={step.image}
                      alt={step.title}
                      width="271"
                      height="241"
                      className="rounded-md shadow-lg"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="s_number">
                    <div className="round">{step.number}</div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="setup_content">
                    <h5 className="text-xl font-semibold mb-4">{step.title}</h5>
                    <p className="text-lg opacity-90">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && <div className="line bottom_half"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;

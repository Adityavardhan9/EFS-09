import React from 'react';

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

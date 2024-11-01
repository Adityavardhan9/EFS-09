import React from 'react';

const Approach = () => {
  const steps = [
    {
      number: '01',
      title: 'Brainstorming with the expert team',
      description: "Team's exceptional domain knowledge helps find disruptive solutions",
      svg: (
        <svg width="200" height="250" xmlns="http://www.w3.org/2000/svg">
          {/* Background */}
          <rect x="10" y="180" width="180" height="20" fill="#e0e7f5" />
          
          {/* Bars */}
          <rect x="30" y="140" width="40" height="60" fill="#2c77f4" />
          <rect x="80" y="110" width="40" height="90" fill="#7e83ff" />
          <rect x="130" y="80" width="40" height="120" fill="#27d8c4" />
          
          {/* Character on tallest bar */}
          <circle cx="150" cy="70" r="10" fill="#654321" /> {/* Head */}
          <rect x="145" y="80" width="10" height="20" fill="#ffffff" /> {/* Body */}
          <line x1="145" y1="100" x2="135" y2="120" stroke="#000000" strokeWidth="2" /> {/* Left leg */}
          <line x1="155" y1="100" x2="165" y2="120" stroke="#000000" strokeWidth="2" /> {/* Right leg */}
        </svg>
      )
    },
    {
      number: '02',
      title: 'Very Lean team. Agile approach',
      description: 'Team tracks every task and seeks immediate feedback',
      svg: (
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          {/* Mobile Device Background */}
          <rect x="30" y="30" width="140" height="140" rx="15" fill="#e0e7f5" />
          
          {/* Arrows representing progress */}
          <path d="M60,100 L60,140 L80,140 L80,110" fill="#2c77f4" />
          <path d="M110,80 L110,140 L130,140 L130,90" fill="#7e83ff" />
          <path d="M160,60 L160,140 L180,140 L180,70" fill="#27d8c4" />
          
          {/* Person walking beside the mobile */}
          <circle cx="50" cy="160" r="10" fill="#654321" /> {/* Head */}
          <rect x="45" y="170" width="10" height="20" fill="#ffffff" /> {/* Body */}
        </svg>
      )
    },
    {
      number: '03',
      title: 'Projects delivered on time',
      description: 'Deliver right, deliver on time is our motto and we adhere to it always',
      svg: (
        <svg width="200" height="250" xmlns="http://www.w3.org/2000/svg">
          {/* Network Background */}
          <circle cx="100" cy="80" r="50" fill="#e0f7fa" />
          
          {/* Nodes and connections */}
          <circle cx="75" cy="55" r="10" fill="#f06292" /> {/* Node 1 */}
          <circle cx="125" cy="55" r="10" fill="#4db6ac" /> {/* Node 2 */}
          <circle cx="100" cy="105" r="10" fill="#ba68c8" /> {/* Node 3 */}
          
          <line x1="100" y1="80" x2="75" y2="55" stroke="#90a4ae" strokeWidth="2" />
          <line x1="100" y1="80" x2="125" y2="55" stroke="#90a4ae" strokeWidth="2" />
          <line x1="100" y1="80" x2="100" y2="105" stroke="#90a4ae" strokeWidth="2" />
          
          {/* People around the network */}
          <circle cx="40" cy="160" r="10" fill="#654321" /> {/* Person 1 Head */}
          <rect x="35" y="170" width="10" height="20" fill="#ffffff" /> {/* Person 1 Body */}
          <circle cx="160" cy="160" r="10" fill="#654321" /> {/* Person 2 Head */}
          <rect x="155" y="170" width="10" height="20" fill="#ffffff" /> {/* Person 2 Body */}
        </svg>
      )
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
                    {step.svg}
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

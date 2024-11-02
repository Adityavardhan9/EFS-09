import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const jobOpenings = [
  { title: 'Jr. Flutter Developer', experience: '0 - 1 yr', openings: 2 },
  { title: 'UX Developer', experience: '0 - 2 yrs', openings: 1 },
  { title: 'React Developer', experience: '0 - 2 yrs', openings: 2 },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
  };

  return (
    <div className="pt-24 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Careers - EpicForge Software Pvt Ltd</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at EpicForge Software Pvt Ltd. Join us and help shape the future of digital innovation."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Adjusted heading color to match the logo color */}
          <h1 className="text-4xl font-bold text-indigo-500 mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600">
            At EpicForge Software, we're always looking for talented individuals to join us on our journey of digital innovation.
          </p>
        </div>

        <div className="space-y-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-4">
                Experience: {job.experience} | Openings: {job.openings}
              </p>
              <button
                onClick={() => handleApplyClick(job.title)}
                className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Apply Now
              </button>

              {/* Conditional rendering of application details */}
              {selectedJob === job.title && (
                <div className="mt-4 p-4 bg-indigo-50 border-l-4 border-indigo-400 text-indigo-800 rounded">
                  <p className="font-medium">
                    To apply, please send your resume and a cover letter to{' '}
                    <a href="mailto:hr@epicforgesoftware.com" className="text-indigo-600 underline">
                      hr@epicforgesoftware.com
                    </a>.
                  </p>
                  <p className="mt-2 text-sm">
                    Make sure to mention the job title in the subject line of your email.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;

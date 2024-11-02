import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      <Helmet>
        <title>EpicForge Software - Building the Future of Digital Experiences</title>
        <meta
          name="description"
          content="EpicForge Software - We transform ideas into powerful software solutions, specializing in enterprise applications, cloud solutions, and digital transformation."
        />
        <meta name="keywords" content="EpicForge Software, Software Solutions, Enterprise Software, Digital Transformation, Technology Company" />
        <link rel="canonical" href="https://epicforgesoftware.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EpicForge Software - Building the Future of Digital Experiences" />
        <meta
          property="og:description"
          content="EpicForge Software - Transforming ideas into powerful software solutions for modern businesses. Explore our services in custom software and digital transformation."
        />
        <meta property="og:url" content="https://epicforgesoftware.com/" />
        <meta property="og:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EpicForge Software - Building the Future of Digital Experiences" />
        <meta
          name="twitter:description"
          content="EpicForge Software - Transforming ideas into powerful software solutions for modern businesses. Explore our services in custom software and digital transformation."
        />
        <meta name="twitter:image" content="https://epicforgesoftware.com/EFS_latest_app_icon-1.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold">EpicForge Software</span>
            </div>
            <p className="mt-4 text-gray-300">
              Transforming ideas into powerful software solutions. We build the future of digital experiences.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="https://github.com/your-github" className="text-gray-400 hover:text-gray-300" aria-label="Github">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/your-linkedin" className="text-gray-400 hover:text-gray-300" aria-label="Linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/your-twitter" className="text-gray-400 hover:text-gray-300" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li> {/* New Careers link */}
              <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="/press" className="text-gray-300 hover:text-white">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/documentation" className="text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="/status" className="text-gray-300 hover:text-white">API Status</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} EpicForge Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

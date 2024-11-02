import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show a toast notification
    toast.info(
      "Thank you for reaching out! This service will be live soon. Meanwhile, you can directly contact us at info@epicforgesoftware.com.",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );

    // Simulate saving to a JSON file (for illustration)
    console.log("Simulated saved form submission:", JSON.stringify(formData, null, 2));

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  // Check if all fields have values to enable the button
  const isFormEmpty = !formData.name || !formData.email || !formData.message;

  return (
    <div className="pt-24 pb-12">
      <Helmet>
        <title>Contact EpicForge Software Pvt Ltd - Forging The Future Of Innovation</title>
        <meta
          name="description"
          content="Get in touch with EpicForge Software Pvt Ltd to discuss your software needs. Contact us for custom software solutions, cloud services, and innovative technology."
        />
        <meta
          name="keywords"
          content="EpicForge Software, Contact, Software Solutions, Custom Software, Cloud Services"
        />
        <link rel="canonical" href="https://epicforgesoftware.com/contact" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  <span>info@epicforgesoftware.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  <span>Shalimar Swayam, Indore, Madhya Pradesh, 452010</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md transition-colors ${
                  isFormEmpty
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-[#00539f] hover:bg-gray-100"
                }`}
                disabled={isFormEmpty}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/about/section-header';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-surface  p-8 rounded-lg shadow-lg">
      <SectionHeader
        title="Send us a Message"
        subtitle="Fill out the form below and we'll get back to you soon"
      />

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-vertical"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white font-semibold py-3 px-8 rounded-lg hover:bg-accent-light  text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;



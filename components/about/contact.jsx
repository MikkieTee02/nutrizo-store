import { SectionHeader } from './section-header';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="text-center bg-green-100 py-10 md:py-14 rounded-lg shadow-lg mb-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have questions or want to partner with us? We'd love to hear from you."
          className="mb-8"
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 text-lg">
          <a href="mailto:hello@nutrizo.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
            <Mail className="w-6 h-6 text-accent" />
            <span>hello@nutrizo.com</span>
          </a>
          <a href="tel:+263773565689" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
            <Phone className="w-6 h-6 text-accent" />
            <span>+263 773 565 689</span>
          </a>
        </div>
        <button className="bg-accent text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors text-lg">
          Contact Page
        </button>
      </div>
    </section>
  );
}

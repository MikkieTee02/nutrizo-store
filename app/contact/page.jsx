import React from 'react';
import ContactForm from '@/components/contact/contact-form';
import { SectionHeader } from '@/components/about/section-header';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-green-100 via-pink-100 to-orange-100">
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primaryanimate-fade-in-down">
              Get In Touch
            </h1>
            <div className="flex justify-center mt-2  mb-6">
              <div className="w-24 h-1 bg-primary  "></div>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-up animation-delay-300">
              Have questions about our organic products or want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 px-16 md:px-20 md:py-24 bg-center bg-cover [background-image:url('https://res.cloudinary.com/dmlavu7is/image/upload/v1763110045/Pngtree_diagonal_fruit_flat-lay_for_clean_16818640_vejyi4.jpg')]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 ">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <SectionHeader
                title="Contact Information"
                subtitle="Reach out to us through any of these channels"
              />

              <div className=" grid md:grid-cols-2 space-y-6 mt-8">
                <div className=" gap-4 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Email Us</h3>
                    <p className="text-foreground/80 mb-1">hello@nutrizo.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className=" gap-4 p-6  rounded-lg  hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Call Us</h3>
                    <p className="text-foreground/80 mb-1">+263 773 565 689</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>

                <div className=" gap-4 p-6   rounded-lg  hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Visit Us</h3>
                    <p className="text-foreground/80 mb-1">123 Organic Street</p>
                    <p className="text-foreground/80 mb-1">Harare, Zimbabwe</p>
                    <p className="text-sm text-muted-foreground">Find us on Google Maps</p>
                  </div>
                </div>

                <div className=" gap-4 p-6  rounded-lg  hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Business Hours</h3>
                    <p className="text-foreground/80 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-foreground/80 mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-foreground/80">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-300">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary animate-fade-in-down">Find Us</h2>
            <div className="flex justify-center mt-2 mb-6 ">
              <div className="w-24 h-1 bg-primary"></div>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-300">
              <p className="text-muted-foreground">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
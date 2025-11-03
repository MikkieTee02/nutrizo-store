import React from 'react';
import { motion } from 'framer-motion';

const BentoGridBanner = () => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-primary">Discover More</h3>
          <h2 className="text-3xl font-bold text-text-primary">Why Choose Nutrizo?</h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-primary"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            className="bg-surface border border-border-color rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full flex flex-col justify-center text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">100% Organic</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                All our products are sourced from certified organic farms, ensuring the highest quality and nutritional value for your health.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-surface border border-border-color rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-full flex flex-col justify-center text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Energy Boost</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Packed with natural energy sources to keep you active throughout the day.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-surface border border-border-color rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-full flex flex-col justify-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Heart Healthy</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Designed to support cardiovascular health with natural ingredients.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BentoGridBanner;
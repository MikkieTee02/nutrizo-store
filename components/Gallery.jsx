import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="text-center space-y-2 pt-8 pb-2">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary">Insta Gallery</h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-primary"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
        
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263853/abdul-raheem-kannath-5FI13O3MXJk-unsplash_gu8xmw.jpg"
            alt="Bitcoin"
            className="h-56 w-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263843/dhiren-maru-vN1YusQcUJ4-unsplash_toq0k7.jpg"
            alt="Bitcoin"
            className="h-56 w-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263844/mk-s-p-QPZfuBrbQ-unsplash_vfrqss.jpg"
            alt="Bitcoin"
            className="h-56 w-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263858/anita-austvika--nn3rdCcQ8w-unsplash_t7xrek.jpg"
            alt="Bitcoin"
            className="h-56 w-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263847/yu-jinyang-6DCnXJJbYfA-unsplash_z9n0pq.jpg"
            alt="Bitcoin"
            className="h-56 w-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263844/mk-s-62aBfbZb5EA-unsplash_tmn04d.jpg"
            alt="Bitcoin"
            className="h-56 w-full object-cover"
          />
        
      </div>
    </div>
  );
};

export default Gallery;

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

        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263853/abdul-raheem-kannath-5FI13O3MXJk-unsplash_gu8xmw.jpg"
            alt="Fresh organic fruits"
            className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <p className="text-sm font-semibold">Fresh organic fruits</p>
              <p className="text-xs">#HealthyEating #Nutrizo</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263843/dhiren-maru-vN1YusQcUJ4-unsplash_toq0k7.jpg"
            alt="Delicious snacks"
            className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <p className="text-sm font-semibold">Delicious snacks</p>
              <p className="text-xs">#Snacks #Nutrizo</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263844/mk-s-p-QPZfuBrbQ-unsplash_vfrqss.jpg"
            alt="Juicy mango splash"
            className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <p className="text-sm font-semibold">Juicy mango splash</p>
              <p className="text-xs">#Tropical #Fresh</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263858/anita-austvika--nn3rdCcQ8w-unsplash_t7xrek.jpg"
            alt="Strawberry delight"
            className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <p className="text-sm font-semibold">Strawberry delight</p>
              <p className="text-xs">#Berries #Sweet</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263847/yu-jinyang-6DCnXJJbYfA-unsplash_z9n0pq.jpg"
            alt="Plums and berries"
            className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <p className="text-sm font-semibold">Plums and berries</p>
              <p className="text-xs">#Superfoods #Antioxidants</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762263844/mk-s-62aBfbZb5EA-unsplash_tmn04d.jpg"
            alt="Tortilla chips"
            className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <p className="text-sm font-semibold">Tortilla chips</p>
              <p className="text-xs">#KaleSpinach #HealthySnacks</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;

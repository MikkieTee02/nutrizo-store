import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Anytime Juice",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Taste the goodness",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Stay strong and fit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary">Featured Products</h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-primary"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto md:h-96 object-cover  rounded-lg"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-accent px-4 py-2 rounded-lg font-semibold">
                Buy now <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;

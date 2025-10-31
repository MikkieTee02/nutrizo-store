import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({ subsets: ['latin'], weight: ['700'], style: 'normal' });

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "SNACK WELL, WORK WELL!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "GRAB AND GO NOW!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "HEALTHY MEANS WEALTHY!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-background py-8 md:px-14 px-5 h-[80vh] min-w-full"
          >
           <div className={`md:pl-8 mt-10 md:mt-0 transition-all duration-1000 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <p className={`md:text-base text-primary pb-2 transition-all duration-1000 delay-200 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>{slide.offer}</p>
              <h1 className={`${josefinSans.className} max-w-lg md:text-[75px] md:leading-[68px] text-2xl font-semibold transition-all duration-1000 delay-300 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                {slide.title}
              </h1>
              <div className={`flex items-center mt-4 md:mt-6 transition-all duration-1000 delay-500 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-primary rounded-full text-white font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon} alt="arrow_icon" />
                </button>
              </div>
            </div>
           <div className={`flex items-center flex-1 justify-center transition-all duration-1000 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <Image
                className="md:w-72 w-48"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
                  currentSlide === index ? "bg-accent" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;

import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({ subsets: ['latin'], weight: ['700'], style: 'normal' });

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "A SPLASH OF GOODNESS!",
      offer: "DISCOVER 100% ORGANIC",
      buttonText1: "Buy now",
      description: "Every sip offers something big, whether it’s digestive support, an immunity boost or a lotta nutrients.",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "GRAB AND GO NOW!",
      offer: "HURRY UP ONLY A FEW LEFT",
      buttonText1: "Shop Now",
      description: "Every sip offers something big, whether it’s digestive support, an immunity boost or a lotta nutrients.",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "HEALTHY MEANS WEALTHY!",
      offer: "HEALTHY ON A BUDGET",
      buttonText1: "Order Now",
      description: "Every sip offers something big, whether it’s digestive support, an immunity boost or a lotta nutrients.",
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
    <div className="overflow-hidden relative w-full pb-16">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-background py-12 md:px-16 px-6 h-[80vh] min-w-full"
          >
           <div className={`md:pl-8 mt-10 md:mt-0 transition-all duration-1000 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <p className={`md:text-base text-primary pb-4 transition-all duration-1000 delay-200 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>{slide.offer}</p>
              <h1 className={`${josefinSans.className} max-w-lg md:text-[75px] md:leading-[68px] text-2xl font-semibold text-primary-dark transition-all duration-1000 delay-300 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                {slide.title}
              </h1>
                  <p className={`md:text-md  pb-4 transition-all duration-1000 delay-200 md:w-96 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>{slide.description}</p>
              <div className={`flex items-center mt-4 md:mt-5 gap-4 transition-all duration-1000 delay-500 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <button className="md:px-12 px-8 md:py-3 py-2.5 bg-primary rounded-lg text-white font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg">
                  {slide.buttonText1}
                </button>
              
              </div>
            </div>
           <div className={`flex items-center flex-1 justify-center transition-all duration-1000 ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
             <Image
               className="md:w-3/4 w-72 drop-shadow-md"
               src={slide.imgSrc}
               alt={`Slide ${index + 1}`}
             />
           </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 absolute bottom-6 left-1/2 transform -translate-x-1/2">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentSlide === index ? "bg-primary scale-125" : "bg-border-color hover:bg-primary/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" mt-20 flex flex-col md:flex-row items-center justify-between  py-14 md:py-0 bg-green-100 my-16  overflow-hidden">
      <div className=" w-56 lg:w-[50%] h-full relative ">
        <Image
          className="  relative w-56 lg:w-full h-full z-40 "
          src={assets.jbl_soundbox_image}
          alt="jbl_soundbox_image"
        />

        <img
          src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762413944/shape_gi2z08.png"
          alt="Bitcoin"
          className=" hidden md:block lg:w-[80%] z-10 lg:z-0 object-cover absolute top-0 "
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
          Organic Only
        </h2>
        <p className="max-w-[450px] font-medium text-2xl text-text-secondary">
          We supply high quality organic product
        </p>

        <p className="max-w-[343px]  text-text-secondary">
          Eius causae omittantur nec id, consulatu reformidans at nam, deleniti
          inciderint intellegebat ex ius. Ne delectus voluptaria vituperata qui.
          In elitr congue est, in nam quis brute menandri.
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-accent rounded-lg text-white font-semibold">
          Buy now
          <Image
            className="group-hover:translate-x-1 transition"
            src={assets.arrow_icon_white}
            alt="arrow_icon_white"
          />
        </button>
      </div>

      <div className=" w-56 lg:w-[50%] h-full relative ">
        <Image
          className="  relative w-56 lg:w-full h-full z-40 "
          src={assets.md_controller_image}
          alt="md_controller_image"
        />

        <img
          src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762413942/shape-pink_lshc7w.png"
          alt="Bitcoin"
          className=" hidden md:block lg:w-[80%] z-10 lg:z-0 object-cover absolute top-0 lg:right-0 "
        />
      </div>

      <Image
        className="hidden"
        src={assets.sm_controller_image}
        alt="sm_controller_image"
      />
    </div>
  );
};

export default Banner;

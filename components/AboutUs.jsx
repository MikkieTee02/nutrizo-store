"use client";
import Image from "next/image";
import React from "react";
import orangeJuice from "../assets/orange-juice.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative mt-10 py-10 overflow-hidden rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary rounded-full transform scale-75 opacity-20"></div>
            <Image
              src={orangeJuice}
              alt="Orange Juice"
              className="relative mx-auto w-3/4"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-start mb-12">
              <h2 className="text-3xl font-bold text-text-primary">About Us</h2>
              <div className="flex justify-start mt-2">
                <div className="w-24 h-1 bg-primary"></div>
              </div>
            </div>
            <p className="text-text-secondary mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at.
            </p>

              <p className="text-text-secondary mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at.
            </p>
            <button className="bg-accent text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              About More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

"use client";
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import FeaturedCategories from '@/components/FeaturedCategories';
import BentoGridBanner from '@/components/BentoGridBanner';
import Gallery from "@/components/Gallery";


const Home = () => {
  return (
    <>
      <Navbar />
      <HeaderSlider />
      <div className="px-6 md:px-16 lg:px-20">
        <FeaturedCategories />
        <AboutUs />
         <HomeProducts />
         <BentoGridBanner />
        <FeaturedProduct />
           </div>
        <Banner />
        <NewsLetter />
   
       <Gallery/>
      <Footer />
    </>
  );
};

export default Home;


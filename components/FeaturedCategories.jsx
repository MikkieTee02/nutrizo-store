import React from 'react';
import { motion } from 'framer-motion';
import { FaGlassMartini, FaLeaf } from 'react-icons/fa';
import { GiChipsBag, GiPowder } from 'react-icons/gi';
import { MdOutlineIcecream } from 'react-icons/md';
import { MdOutlineNoFood } from "react-icons/md";

const categories = [
  { name: 'Juices', icon: <FaGlassMartini />, color: 'bg-orange-200' },
  { name: 'Energy Bars', icon:<MdOutlineNoFood />, color: 'bg-amber-200' },
  { name: 'Chips', icon: <GiChipsBag />, color: 'bg-yellow-200' },
  { name: 'Fruit Snacks', icon: <MdOutlineIcecream />, color: 'bg-red-200' },
  { name: 'Powder', icon: <GiPowder />, color: 'bg-blue-200' },
  { name: 'Vegetables', icon: <FaLeaf />, color: 'bg-green-200' },
];

const FeaturedCategories = () => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-primary">Shop By Categories</h3>
          <h2 className="text-3xl font-bold text-text-primary">Featured Categories</h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-primary"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative inline-block">
                <div className={`w-32 h-32 rounded-full p-4 ${category.color} flex justify-center items-center`}>
                  <div className="text-4xl text-gray-700">{category.icon}</div>
                </div>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-text-primary">{category.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
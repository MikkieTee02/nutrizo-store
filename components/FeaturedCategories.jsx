import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Juices', icon: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1720779743/flour_h2a5na.png' },
  { name: 'Energy Bars', icon: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1720779743/fruits_u81qak.png' },
  { name: 'Chips', icon: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1720779743/jam_v3a9ha.png' },
  { name: 'Fruit Snacks', icon: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1720779743/meat_t5sloo.png' },
  { name: 'Powder', icon: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1720779743/milk_eggs_n7fcdz.png' },
  { name: 'Vegetables', icon: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1720779743/vegetables_y9v6qj.png' },
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
                <div className='w-32 h-32 rounded-full p-4 bg-gray-200/50 flex justify-center items-center'>
                  <img src={category.icon} alt={category.name} className="w-20 h-20 object-contain" />
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
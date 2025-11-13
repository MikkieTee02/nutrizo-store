"use client";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
  const { products } = useAppContext();

  return (
    <>
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-end pt-12">
          <h2 className="text-3xl font-medium text-text-primary">
            All products
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-primary"></div>
          </div>
        </div>
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;

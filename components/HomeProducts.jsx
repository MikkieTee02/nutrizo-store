import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-14 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary">Popular products</h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-primary"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {products.slice(0, 8).map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
      <button onClick={() => { router.push('/all-products') }} className="px-12 py-2.5 border border-border-color rounded-lg text-text-secondary font-semibold hover:bg-accent hover:text-text-primary transition-all duration-200">
        See more
      </button>
    </div>
  );
};

export default HomeProducts;

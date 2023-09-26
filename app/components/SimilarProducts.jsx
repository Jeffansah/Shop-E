"use client";

import { BiLoader } from "react-icons/bi";
import Product from "./Product";
import { useEffect, useState } from "react";

const SimilarProducts = ({ cart }) => {
  const [products, setProducts] = useState([]);

  const getRandomProducts = async () => {
    try {
      const response = await fetch("/api/products/similar-products");
      const result = await response.json();

      if (result) {
        setProducts(result);
        return;
      }

      setProducts([]);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    getRandomProducts();
  }, []);

  return (
    <>
      <div className="border-b py-1 max-w-[1200px] lg:mx-auto" />
      <div className="max-w-[1200px] lg:mx-auto">
        <div className="font-semibold text-2xl py-2 my-2 max-lg:px-2 max-md:font-medium">
          {cart ? "Popular" : "Similar"} sponsored items
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-5 gap-4 max-md:flex flex-1 max-lg:px-2 max-md:overflow-x-scroll scrollbar-hide">
            {products.map((product) => (
              <Product similar={true} key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-4 font-semibold">
              <BiLoader size={30} className="text-blue-400 animate-spin" />
              Loading Products...
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SimilarProducts;

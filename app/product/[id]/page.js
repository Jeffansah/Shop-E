"use client";

import SimilarProducts from "@/app/components/SimilarProducts";
import MainLayout from "@/app/layouts/MainLayout";
import Image from "next/image";
import { BiBold } from "react-icons/bi";

const Product = ({ params }) => {
  const product = {
    id: 1,
    title: "Brown Leather Bag",
    description: "Some lorem epson",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {product?.url ? (
              <div className="w-[40%] rounded-lg overflow-hidden h-[300px] relative">
                <Image
                  layout="fill"
                  src={`${product?.url}/280`}
                  objectFit="cover"
                />
              </div>
            ) : (
              <div className="w-[40%]"></div>
            )}

            <div className="px-4 w-full">
              <div className="font-bold text-xl">{product.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Brand New - Full Warranty
              </div>
              <div className="border-b py-1" />
              <div className="pt-3 pb-2">
                <div className="">
                  Condition:{" "}
                  <span className="font-bold text-[17px] ml-2">New</span>
                </div>
              </div>
              <div className="border-b py-1" />
              <div className="pt-3">
                <div className="w-[50%] flex items-center justify-between">
                  <div className="flex items-center whitespace-nowrap">
                    Price:{" "}
                    {product?.price ? (
                      <div className="font-bold text-[20px] ml-2">
                        GBP £{(product?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button className="bg-[#3498C9] text-white py-2 px-12 rounded-full cursor-pointer whitespace-nowrap">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="border-b py-1" />
              <div className="pt-3">
                <div className="font-semibold pb-1">Description:</div>
                <div className="text-sm">{product?.description}</div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </MainLayout>
    </>
  );
};

export default Product;

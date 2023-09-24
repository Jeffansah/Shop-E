"use client";

import SimilarProducts from "../../components/SimilarProducts";
import { useCart } from "../../context/cart";
import useIsLoading from "@/app/hooks/useIsLoading";
import MainLayout from "@/app/layouts/MainLayout";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiBold } from "react-icons/bi";
import { toast } from "react-toastify";

const Product = ({ params }) => {
  const cart = useCart();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    useIsLoading(true);
    setProduct({});

    const response = await fetch(`/api/product/${params.id}`);
    const prod = await response.json();

    setProduct(prod);
    cart.isItemAddedToCart(prod);
    useIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

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
              <div className="font-semibold text-xl mt-2">{product.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Brand New - Full Warranty
              </div>
              <div className="border-b py-1" />
              <div className="pt-3 pb-2">
                <div className="text-sm">
                  Condition:{" "}
                  <span className="font-bold text-[17px] ml-2 text-blue-500">
                    New
                  </span>
                </div>
              </div>
              <div className="border-b py-1" />
              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center whitespace-nowrap text-sm">
                    Price:{" "}
                    {product?.price ? (
                      <div className="font-semibold text-[18px] ml-2">
                        GBP £{(product?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button
                    onClick={() => {
                      if (cart.isItemAdded) {
                        cart.removeFromCart(product);
                        toast.info("Removed from cart", { autoClose: 3000 });
                      } else {
                        cart.addToCart(product);
                        toast.success("Added To Cart", { autoClose: 3000 });
                      }
                    }}
                    className={`${
                      cart.isItemAdded
                        ? "bg-[#e9a321] hover:bg-[#bf851a]"
                        : "bg-[#3498C9] hover:bg-[#277298]"
                    }  text-white py-2 px-8 rounded-full cursor-pointer whitespace-nowrap text-sm flex gap-1.5 items-center`}
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                    {cart.isItemAdded ? "Remove From Cart" : "Add To Cart"}
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

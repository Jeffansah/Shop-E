"use client";

import Image from "next/image";
import Link from "next/link";

const Product = ({ product, similar }) => {
  return (
    <>
      <Link
        href={`/product/${product.id}`}
        className="max-w-[200px] p-1.5 hover:shadow-md hover:bg-gray-50 focus:outline-none bg-white rounded mx-auto flex flex-col flex-1"
      >
        {product?.url ? (
          <Image
            className={`rounded cursor-pointer ${
              similar &&
              "max-md:max-h-24 max-md:max-w-[100px] md:h-[160px] md:w-[190px]"
            }`}
            src={`${product.url}/190`}
            width={190}
            height={190}
          />
        ) : null}
        <div className="pt-2 px-1">
          <div className="font-medium text-[14px] hover:underline cursor-pointer whitespace-nowrap max-lg:whitespace-normal">
            {product.title}
          </div>
          <div className="font-bold text-[16px]">
            £{(product?.price / 100).toFixed(2)}
          </div>
          <div className="relative flex lg:items-center text-xs text-gray-500 max-md:flex-col">
            <div className="line-through">
              £{((product?.price * 1.2) / 100).toFixed(2)}
            </div>
            <div className="px-2 max-md:hidden">-</div>
            <div className="max-md:w-11 bg-green-500 px-[2px] py-[1px] text-white text-[10px] rounded-sm whitespace-nowrap">
              20% off
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;

"use client";

import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <>
      <Link
        href={`/product/${product.id}`}
        className="max-w-[200px] p-1.5 hover:shadow-md hover:bg-gray-50 focus:outline-none bg-white rounded mx-auto flex flex-col flex-1"
      >
        {product?.url ? (
          <img
            className="rounded cursor-pointer"
            src={`${product.url}/190`}
            width={190}
            height={190}
          />
        ) : null}
        <div className="pt-2 px-1">
          <div className="font-medium text-[14px] hover:underline cursor-pointer whitespace-nowrap">
            {product.title}
          </div>
          <div className="font-bold text-[16px]">
            £{(product?.price / 100).toFixed(2)}
          </div>
          <div className="relative flex items-center text-xs text-gray-500">
            <div className="line-through">
              £{((product?.price * 1.2) / 100).toFixed(2)}
            </div>
            <div className="px-2">-</div>
            <div className=" bg-green-500 px-[2px] py-[1px] text-white text-[10px] rounded-sm">
              20% off
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const CheckoutItem = ({ product }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-start rounded-lg mb-2 border p-4 max-md:w-full">
        <Image
          width={150}
          height={150}
          src={`${product.url}/150`}
          className="rounded-md max-md:h-[80px] max-md:w-[80px]"
        />
        <div className="overflow-hidden pl-2">
          <div className="font-medium">{product.title}</div>
          <div className="font-semibold text-lg">
            <span className="font-bold">
              £{(product?.price / 100).toFixed(2)}
            </span>
          </div>
          <div className="relative flex items-center text-sm text-gray-400">
            <div className="line-through">
              {((product?.price * 1.2) / 100).toFixed(2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
          <div className="text-xs mt-2">
            {product?.description.substring(0, 130)}
            {product?.description.length > 130 ? "..." : ""}
          </div>
          {pathname == "/cart" ? (
            <div className="text-sm mt-2 w-full flex justify-end hover:underline text-blue-500 cursor-pointer">
              Remove
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;

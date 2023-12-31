"use client";

import Image from "next/image";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";

const CartItem = ({ product }) => {
  const cart = useCart();

  const removeItemFromCart = () => {
    let res = confirm(
      `Are you sure you want to remove this? "${product.title}"`
    );
    if (res) {
      cart.removeFromCart(product);
      toast.info("Removed from cart", { autoClose: 3000 });
    }
  };

  return (
    <>
      <div className="relative flex justify-start my-2 w-full p-6">
        <Image
          width={150}
          height={150}
          src={`${product?.url}/150`}
          objectFit="cover"
          className="rounded-md"
        />
        <div className="overflow-hidden pl-2 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center font-medium justify-between w-[400px] text-[16px] underline">
              {product?.title}
            </div>
            <div className="font-bold text-lg">
              £{(product?.price / 100).toFixed(2)}
            </div>
          </div>
          <div className="font-semibold mt-2 text-blue-500">NEW</div>
          <div className="text-xs mt-2">
            {product?.description.substring(0, 150)}
            {product?.description.length > 150 ? "..." : ""}
          </div>
          <div className="absolute right-0 bottom-0 p-4 text-sm">
            <button
              onClick={() => removeItemFromCart()}
              className="hover:underline text-blue-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

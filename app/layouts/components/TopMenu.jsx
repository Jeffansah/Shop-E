"use client";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import ukBanner from "/public/images/uk.png";
import { useUser } from "@/app/context/user";
import { useState } from "react";
import { useCart } from "@/app/context/cart";
import ClientOnly from "@/app/components/ClientOnly";

const TopMenu = () => {
  const user = useUser();
  const { loading } = useUser();

  const [isMenu, setIsMenu] = useState(false);

  const cart = useCart();

  const isLoggedIn = () => {
    if (loading) return <div>Loading...</div>;
    else if (user && user?.id) {
      return (
        <button
          onClick={() => setIsMenu(!isMenu)}
          className="flex items-center gap-2 hover:underline cursor-pointer"
        >
          <div>Hi, {user.name.split(" ")[0]}</div>
          {!isMenu ? <BsChevronDown /> : <BsChevronUp />}
        </button>
      );
    }
    return (
      <Link
        href="/auth"
        className="flex items-center gap-2 hover:underline cursor-pointer"
      >
        <div>Login</div>
        <BsChevronDown />
      </Link>
    );
  };

  return (
    <div id="TopMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-0 max-w-[1300px]">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-[11px] text-[#333333] h-8"
        >
          <li className="relative px-3">
            {isLoggedIn()}
            <div
              id="AuthDropdown"
              className={`${
                !isMenu && "hidden"
              } absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg`}
            >
              <div className="flex items-center justify-start gap-1 p-3">
                <Image
                  width={50}
                  height={50}
                  src={`${
                    !user.picture
                      ? "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                      : user.picture
                  }`}
                  className="rounded-full"
                />
                <div className="ml-2 font-bold text-[13px]">
                  {!user.name ? "" : user?.name}
                </div>
              </div>
              <div className="border-b" />
              <ul className="bg-white">
                <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                  <Link href="/orders">My Orders</Link>
                </li>
                <li
                  onClick={() => {
                    user.signOut();
                    setIsMenu(false);
                  }}
                  className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                  Sign out
                </li>
              </ul>
            </div>
          </li>
          <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
          <li className="px-3 hover:underline cursor-pointer">
            Help and contact
          </li>
        </ul>
        <ul
          id="TopMenuRight"
          className="flex items-center text-[11px] text-[#333333] h-8"
        >
          <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
            <Image width={32} src={ukBanner} height={32} />
            Ship to
          </li>
          <ClientOnly>
            <Link href={"/cart"}>
              <li className="px-3 hover:underline cursor-pointer">
                <div className="relative">
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cart.cartCount() > 0 ? (
                    <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                      <div className=" flex items-center justify-center -mt-[1px]">
                        {cart.cartCount()}
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </li>
            </Link>
          </ClientOnly>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;

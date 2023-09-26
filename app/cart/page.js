"use client";

import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import CartItem from "../components/CartItem";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cart";
import { useEffect } from "react";
import useIsLoading from "../hooks/useIsLoading";
import { toast } from "react-toastify";
import ClientOnly from "../components/ClientOnly";
import Image from "next/image";
import emptyCart from "/public/images/empty-cart.png";
import { useUser } from "../context/user";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const page = () => {
  const router = useRouter();
  const cart = useCart();
  const user = useUser();

  useEffect(() => {
    useIsLoading(true);
    cart.getCart();
    cart.cartTotal();
    useIsLoading(false);
  }, [cart]);

  const goToCheckout = () => {
    if (!user.id) {
      toast.info("Please sign in to continue at checkout.");
      setTimeout(() => {
        router.push("/auth"), 2000;
      });
    }
    if (!cart.cartTotal()) {
      toast.warning("You don't have any item in your cart.");
      return;
    }
    router.push("/checkout");
  };

  return (
    <>
      <>
        <MainLayout>
          <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
            {!user.id && (
              <div className="h-[100px] md:h-[60px] bg-blue-500 p-3 flex gap-2 md:items-center lg:mt-2">
                <InformationCircleIcon className="h-10 w-10 md:h-6 md:w-6 bg-blue-500 text-white" />
                <p className="text-sm max-md:mt-2 text-white">
                  You're signed out right now. To save these items or see your
                  previously saved items,{" "}
                  <span>
                    <Link href={"/auth"} className="underline font-semibold">
                      sign in
                    </Link>
                  </span>
                </p>
              </div>
            )}
            <div className="text-2xl font-semibold my-4 max-lg:mb-0 max-lg:px-2">
              Shopping cart
            </div>
            <div className="relative flex lg:items-baseline lg:justify-between gap-2 max-lg:flex-col">
              <ClientOnly>
                <div className="lg:w-[65%]">
                  {cart.getCart().length < 1 ? (
                    <div className="flex w-[750px] h-[200px] items-center justify-center flex-col gap-5">
                      <Image src={emptyCart} width={60} height={60}></Image>
                      <p className="text-gray-700">Cart is Empty</p>
                    </div>
                  ) : (
                    cart
                      .getCart()
                      .map((product) => (
                        <CartItem key={product.id} product={product} />
                      ))
                  )}
                </div>
              </ClientOnly>
              <div
                id="GoToCheckout"
                className="lg:w-[33%] lg:absolute lg:top-0 lg:right-0 max-lg:mx-2"
              >
                <ClientOnly>
                  <div className="bg-white p-4 border">
                    <button
                      onClick={() => goToCheckout()}
                      className="flex items-center justify-center bg-blue-500 w-full text-white font-semibold p-3 rounded-full mt-4 text-base"
                    >
                      Go to checkout
                    </button>
                    <div className="flex items-center justify-between mt-4 text-sm mb-1">
                      <div>Items ({cart.getCart().length})</div>
                      <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                    </div>
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div>Shipping:</div>
                      <div>Free</div>
                    </div>
                    <div className="border-b border-gray-300" />
                    <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                      <div>Subtotal: </div>
                      <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                    </div>
                  </div>
                </ClientOnly>
              </div>
            </div>
          </div>
          <SimilarProducts cart={true} />
        </MainLayout>
      </>
    </>
  );
};

export default page;

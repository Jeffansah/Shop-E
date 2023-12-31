"use client";

import Link from "next/link";
import { TruckIcon } from "@heroicons/react/24/outline";
import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import { useUser } from "../context/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment/moment";
import useIsLoading from "../hooks/useIsLoading";
import { BiLoaderCircle } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";

const page = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState(null);

  const getOrders = async () => {
    try {
      if (!user && !user?.id) return;
      const response = await fetch("/api/orders");
      const result = await response.json();
      setOrders(result);
      useIsLoading(false);
    } catch (error) {
      toast.error("Something went wrong", { autoClose: 3000 });
      useIsLoading(false);
    }
  };

  console.log(orders);

  useEffect(() => {
    useIsLoading(true);
    getOrders();
  }, [user]);

  return (
    <>
      <MainLayout>
        <div
          id="OrdersPage"
          className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
        >
          <div className="bg-white w-full p-6 min-h-[150px]">
            <div className="flex items-center text-xl">
              <TruckIcon className="w-8 h-8 text-green-500" />
              <span className="pl-3 max-lg:pl-2">Orders</span>
            </div>
            {!orders ? (
              <div className="p-3">
                <AiOutlineLoading size={40} className="animate-spin" />
                <div>loading orders...</div>
              </div>
            ) : orders.length < 1 ? (
              <div className="flex items-center justify-center max-lg:mt-2 text-gray-800">
                You have no order history
              </div>
            ) : (
              orders.map((order) => (
                <div key={order?.id} className="text-sm lg:pl-[50px]">
                  <div className="border-b border-gray-200 py-3">
                    <div className="pt-2">
                      <span className="font-bold mr-2 whitespace-nowrap">
                        Order ID:
                      </span>
                      {order?.stripe_id}
                    </div>
                    <div className="pt-2">
                      <span className="font-bold mr-2">Delivery Address:</span>
                      {order?.name}, {order?.address}, {order?.zipcode},{" "}
                      {order?.city}, {order?.country}
                    </div>
                    <div className="pt-2">
                      <span className="font-bold mr-2">Total:</span>£
                      {(order?.total / 100).toFixed(2)}
                    </div>
                    <div className="pt-2">
                      <span className="font-bold mr-2">Order Created:</span>
                      {moment(order?.created_at).calendar()}
                    </div>
                    <div className="pt-2">
                      <span className="font-bold mr-2">Delivery Time:</span>
                      {moment(order?.created_at).add(3, "days").calendar()}
                    </div>
                    <div className="flex items-center lg:gap-4 max-lg:gap-3 max-lg:overflow-x-scroll scrollbar-hide mt-2">
                      {order?.orderItem?.map((item) => (
                        <div key={item.id} className="flex items-center">
                          <Link
                            href={`/product/${item.product_id}`}
                            className="py-1 hover:underline text-blue-500 font-bold"
                          >
                            <Image
                              width={120}
                              height={120}
                              className="rounded"
                              src={`${item.product.url}/120`}
                            />
                            <p className="">{item.product.title}</p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default page;

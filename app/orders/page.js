"use client";

import Link from "next/link";
import { TruckIcon } from "@heroicons/react/24/outline";
import MainLayout from "../layouts/MainLayout";
import Image from "next/image";

const page = () => {
  const orders = [
    {
      id: 1,
      stripeId: "1213",
      name: "test",
      address: "test",
      zipcode: "test",
      city: "test",
      country: "test",
      total: 2000,
      orderItems: [
        {
          id: 1,
          title: "Brown Leather Bag",
          url: "https://picsum.photos/id/7",
        },
        {
          id: 1,
          title: "Brown Leather Bag",
          url: "https://picsum.photos/id/7",
        },
      ],
    },
  ];

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
              <span className="pl-3">Orders</span>
            </div>
            {orders.length < 1 ? (
              <div className="flex items-center justify-center">
                You have no order history
              </div>
            ) : null}
            {orders.map((order) => (
              <div key={order?.id} className="text-sm pl-[50px]">
                <div className="border-b py-1">
                  <div className="pt-2">
                    <span className="font-bold mr-2">Stripe ID:</span>
                    {order?.stripeId}
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
                  <div className="flex items-center gap-4">
                    {order?.orderItems.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <Link
                          href="/"
                          className="py-1 hover:underline text-blue-500 font-bold"
                        >
                          <Image
                            width={120}
                            height={120}
                            className="rounded"
                            src={`${item.url}/120`}
                          />
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default page;

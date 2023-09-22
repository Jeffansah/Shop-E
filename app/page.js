"use client";

import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import { useUser } from "./context/user";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description: "Some lorem epson",
      url: "https://picsum.photos/id/7",
      price: 2500,
    },
    {
      id: 2,
      title: "School books",
      description: "Some lorem epson",
      url: "https://picsum.photos/id/20",
      price: 1999,
    },
  ];

  return (
    <MainLayout>
      <CarouselComp />
      <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </MainLayout>
  );
}

"use client";

import { useEffect, useState } from "react";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import { useUser } from "./context/user";
import MainLayout from "./layouts/MainLayout";
import useIsLoading from "./hooks/useIsLoading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    useIsLoading(true);

    const response = await fetch("/api/products");
    const prods = await response.json();
    const shuffledProds = [...prods];

    for (let i = shuffledProds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProds[i], shuffledProds[j]] = [
        shuffledProds[j],
        shuffledProds[i],
      ];
    }

    setProducts([]);
    setProducts(shuffledProds);
    useIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    draggable: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <MainLayout>
      <CarouselComp />
      <div className="text-2xl font-semibold mt-10 mb-6 px-4 flex items-center">
        Products{" "}
        <Link href={"/products"}>
          <button className="ml-5 flex items-center text-sm gap-2 font-medium">
            See all
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </Link>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Slider>
    </MainLayout>
  );
}

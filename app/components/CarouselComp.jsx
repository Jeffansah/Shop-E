"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "/public/images/banner/1.png";
import banner2 from "/public/images/banner/2.png";
import banner3 from "/public/images/banner/beautyproducts1.png";

const CarouselComp = () => {
  return (
    <>
      <div className="mx-0">
        <Carousel
          showArrows={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <Image src={banner1} />
          </div>
          <div>
            <Image src={banner2} />
          </div>
          <div>
            <Image src={banner3} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;

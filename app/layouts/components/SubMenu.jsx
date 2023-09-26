"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SubMenu = () => {
  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Saved" },
    { id: 3, name: "Electronics" },
    { id: 4, name: "Motors" },
    { id: 5, name: "Fashion" },
    { id: 6, name: "Collectables and Art" },
    { id: 7, name: "Sports" },
    { id: 8, name: "Health & Beauty" },
    { id: 9, name: "Industrial Equipment" },
    { id: 10, name: "Home & Garden" },
    { id: 11, name: "Sell" },
  ];

  return (
    <>
      <div id="SubMenu" className="lg:border-b">
        <div className="flex lg:justify-center lg:mx-auto max-w-[1200px] whitespace-nowrap">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[13px] text-[#333333] lg:px-2 h-8 max-lg:overflow-x-auto max-lg:scrollbar-hide"
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="px-3 hover:text-blue-500 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubMenu;

"use client";

import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import logo from "/public/images/logo.svg";
import { useState } from "react";
import { debounce } from "debounce";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MainHeader = () => {
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchName = debounce(async (event) => {
    if (event.target.value == "") {
      setItems([]);
      return;
    }

    setIsSearching(true);

    try {
      const response = await fetch(
        `/api/products/search-by-name/${event.target.value}`
      );
      const result = await response.json();

      if (result) {
        setItems(result);
        setIsSearching(false);
        return;
      }
      setItems([]);
      setIsSearching(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, 500);

  return (
    <>
      <div id="MainHeader" className="border-b">
        <div className="flex items-center justify-between w-full mx-0 max-w-[1300px]">
          <div className="flex items-center w-full bg-white">
            <div className="flex lg:justify-start max-md:items-center md:justify-between max-md:gap-4 md:gap-10 max-w-[1300px] w-full px-3 max-lg:px-2 py-5 mx-0">
              <Link href="/">
                <h1 className="font-bold text-5xl whitespace-nowrap max-md:text-3xl">
                  SHOP-E
                </h1>
              </Link>
              <div className="w-full">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="relative flex items-center border-2 border-gray-900 w-full p-2 max-md:py-1">
                      <button className="flex items-center max-md:hidden">
                        <AiOutlineSearch size={22} />
                      </button>
                      <input
                        onChange={handleSearchName}
                        type="text"
                        placeholder="Search for anything"
                        className="w-full placeholder:text-gray-400 text-sm max-md:text-base pl-3 focus:outline-none max-md:p-0"
                      />
                      {isSearching === false && items.length < 1 && (
                        <button className="flex items-center md:hidden">
                          <AiOutlineSearch size={22} />
                        </button>
                      )}

                      <button className="flex items-center">
                        <XMarkIcon
                          onClick={() => setItems([])}
                          className={`w-6 h-6 ${
                            items.length === 0 && "hidden"
                          } ${isSearching && "hidden"}`}
                        />
                      </button>
                      {isSearching && (
                        <BiLoaderCircle className="mr-2 animate-spin w-6 h-6" />
                      )}

                      {items.length > 0 && (
                        <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                          {items.map((item) => (
                            <div className="p-1" key={item.id}>
                              <Link
                                href={`/product/${item?.id}`}
                                className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2 text-xs"
                              >
                                <div className="flex items-center">
                                  <img
                                    className="rounded-md"
                                    width="40"
                                    src={item?.url + "/40"}
                                  />
                                  <div className="truncate ml-2">
                                    {item?.title}
                                  </div>
                                </div>
                                <div className="truncate">
                                  £{(item?.price / 100).toFixed(2)}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <button className="flex items-center bg-blue-500 max-md:hidden text-sm font-semibold text-white p-[11px] ml-2 px-14">
                      Search
                    </button>
                    <div className="text-xs px-2 hover:text-blue-500 cursor-pointer max-md:hidden">
                      Advanced
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;

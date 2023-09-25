"use client";

import Link from "next/link";

const Footer = () => {
  const footerData = [
    {
      title: "Buy",
      links: [
        "Registration",
        "Shop-E Money Back Guarantee",
        "Bidding & buying help",
        "Stores",
      ],
    },
    {
      title: "Sell",
      links: ["Start selling", "Learn to sell", "Affiliates"],
    },
    {
      title: "About Shop-E",
      links: [
        "Company info",
        "News",
        "Investors",
        "Careers",
        "Government relations",
        "Policies",
      ],
    },
    {
      title: "Support",
      links: [
        "Customer Service",
        "Contact Us",
        "Help & Contact",
        "Site Map",
        "Feedback",
      ],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "User Agreement", "Copyright", "Security"],
    },
  ];

  const mobileFooterData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Sign in/Register",
      link: "/auth",
    },
    {
      name: "Orders",
      link: "/orders",
    },
    {
      name: "Help & Contact",
      link: "",
    },
    {
      name: "Download the app",
      link: "",
    },
  ];

  return (
    <>
      <div id="Footer" className="border-t mt-20 px-2 max-lg:hidden">
        <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
          {footerData.map((section, index) => (
            <ul className="text-gray-700" key={index}>
              <li className="font-bold text-lg">{section.title}</li>
              {section.links.map((link, linkIndex) => (
                <li
                  className="lg:mt-2 py-1 text-xs hover:underline cursor-pointer"
                  key={linkIndex}
                >
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="w-full text-[11px] py-8 flex justify-center items-center">
          <p>
            Copyright © 2010-{new Date().getFullYear()} Shop-E. All Rights
            Reserved.
          </p>
          <div className="flex items-center text-gray-500">
            <p className="underline"> Accessibility,</p>
            <p className="underline"> User Agreement,</p>
            <p className="underline"> Privacy,</p>
            <p className="underline"> Payments Terms of Use,</p>
            <p className="underline"> Cookies,</p>
            <p className="underline"> Your Privacy Choices</p>
          </div>
        </div>
      </div>
      <div
        id="Footer"
        className="border-t mt-10 md:mt-14 px-4 py-6 pb-1 bg-black lg:hidden text-sm"
      >
        <div className="max-w-screen-sm gap-y-4 flex flex-col py-4 pb-6">
          {mobileFooterData.map((item) => (
            <Link href={item.link}>
              <p className="text-white">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className="border-[0.5px] border-gray-500 w-full" />
        <div className="w-full text-xs py-8 flex flex-col text-gray-300 items-center">
          <div className="flex justify-center flex-wrap max-w-[200px] gap-1">
            <p className="underline"> Accessibility,</p>
            <p className="underline"> User Agreement,</p>
            <p className="underline"> Privacy,</p>
            <p className="underline"> Payments Terms of Use,</p>
            <p className="underline"> Cookies,</p>
            <p className="underline"> Your Privacy Choices</p>
          </div>
          <p className="mt-2">
            Copyright © 2010-{new Date().getFullYear()} Shop-E. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

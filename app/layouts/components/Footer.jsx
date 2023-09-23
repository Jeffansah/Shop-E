"use client";

const Footer = () => {
  // footerData.js

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

  return (
    <>
      <div id="Footer" className="border-t mt-20 px-2">
        <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
          {footerData.map((section, index) => (
            <ul className="text-gray-700" key={index}>
              <li className="font-bold text-lg">{section.title}</li>
              {section.links.map((link, linkIndex) => (
                <li
                  className="mt-2 py-1 text-xs hover:underline cursor-pointer"
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
    </>
  );
};

export default Footer;

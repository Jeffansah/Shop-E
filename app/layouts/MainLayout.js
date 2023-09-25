"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";
import SubMenu from "./components/SubMenu";
import TopMenu from "./components/TopMenu";
import Loading from "../components/Loading";

const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", () => {
      let res = localStorage.getItem("isLoading");
      res === "false" ? setIsLoading(false) : setIsLoading(true);
    });
  }, []);

  return (
    <>
      <div
        id="Mainlayout"
        className="lg:min-w-[1050px] lg:max-w-[1300px] mx-auto max-md:max-w-screen-sm md:max-w-screen-lg max-lg:overflow-x-hidden"
      >
        {isLoading && <Loading />}
        <TopMenu />
        <MainHeader />
        <SubMenu />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

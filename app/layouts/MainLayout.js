"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";
import SubMenu from "./components/SubMenu";
import TopMenu from "./components/TopMenu";
import Loading from "../components/loading";

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
      <div id="Mainlayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
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

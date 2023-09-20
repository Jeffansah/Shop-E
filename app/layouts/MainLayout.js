"use client";

import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";
import SubMenu from "./components/SubMenu";
import TopMenu from "./components/TopMenu";

const MainLayout = ({ children }) => {
  return (
    <>
      <div id="Mainlayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
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

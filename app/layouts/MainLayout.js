"use client";

import MainHeader from "./components/MainHeader";
import TopMenu from "./components/TopMenu";

const MainLayout = ({ children }) => {
  return (
    <>
      <div id="Mainlayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <TopMenu />
        <MainHeader />
      </div>
    </>
  );
};

export default MainLayout;

"use client";

import { AiOutlineCheckCircle } from "react-icons/ai";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

const page = () => {
  return (
    <>
      <MainLayout>
        <div id="SuccessPage" className="mt-12 max-w-[1200px] mx-auto px-2">
          <div className="bg-white w-full min-h-[50vh] p-6 flex items-center justify-center">
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center text-xl">
                <AiOutlineCheckCircle className="text-green-500" size={35} />
                <span className="pl-4">Payment Successful</span>
              </div>
              <p className="text-sm">Thank you! We've received your payment.</p>
              <Link href={"/"} className="w-full">
                <div className="w-full text-center bg-blue-600 text-sm font-semibold text-white p-[11px] mt-2">
                  Back to shop
                </div>
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default page;

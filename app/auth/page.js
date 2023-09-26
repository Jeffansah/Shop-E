"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

const page = () => {
  const supabase = createClientComponentClient();

  return (
    <>
      <div
        id="AuthPage"
        className="w-full min-h-screen bg-white flex items-center justify-center flex-col"
      >
        <div className="flex flex-col flex-grow items-center justify-center">
          <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
            <Link href="/" className="min-w-[170px]">
              <h3 className="font-bold text-5xl">SHOP-E</h3>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center p-5 border-b-gray-300 cursor-default text-sm text-gray-800">
            Login / Register
          </div>
          <div className="max-w-[400px] mx-auto px-2">
            <Auth
              onlyThirdPartyProviders
              redirectTo={`https://shop-e-io.vercel.app/auth/callback`}
              supabaseClient={supabase}
              providers={["google"]}
              appearance={{ theme: ThemeSupa }}
            />
          </div>
        </div>

        <div className="w-full text-[11px] py-8 flex justify-center items-center text-xs max-lg:flex-col  border-t border-gray-300">
          <p className="max-lg:hidden">
            Copyright © 2010-{new Date().getFullYear()} Shop-E. All Rights
            Reserved.
          </p>
          <div className="flex items-center text-gray-500 max-lg:justify-center max-lg:flex-wrap max-lg:max-w-[200px] max-lg:gap-1">
            <p className="underline"> Accessibility,</p>
            <p className="underline"> User Agreement,</p>
            <p className="underline"> Privacy,</p>
            <p className="underline"> Payments Terms of Use,</p>
            <p className="underline"> Cookies,</p>
            <p className="underline"> Your Privacy Choices</p>
          </div>
          <p className="lg:hidden mt-2">
            Copyright © 2010-{new Date().getFullYear()} Shop-E. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;

import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop-E",
  description: "E-commerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

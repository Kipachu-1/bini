import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import {
  Sofia_Sans,
  Roboto_Condensed,
  Ubuntu,
  Signika,
} from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
import RQProviders from "@/utils/RQprovider";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/Loaders/SplashScreen";
const RobotoS = Roboto_Condensed({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Jewelry store BI~NI",
  themeColor: "#0c2e2b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={RobotoS.className}>
        <SplashScreen />
        <NextTopLoader color="#f2cd88" />
        <Providers>
          <RQProviders>
            <Navbar />
            {children}
            <Footer className="text-[black] bg-white" />
          </RQProviders>
        </Providers>
      </body>
    </html>
  );
}

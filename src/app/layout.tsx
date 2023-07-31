import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import RQProviders from "@/utils/RQprovider";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
import PageWithTransition from "@/components/PageWithTransitions";
import type { AppProps } from "next/app";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
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

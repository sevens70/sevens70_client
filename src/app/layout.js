"use client";
import { Jost, Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "../components/ReduxProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import { isAuthPage } from "../lib/utils/routeUtils";
const jost = Jost({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const shouldDisplayLayout = !isAuthPage(pathname);
  // console.log("shouldDisplayLayout", shouldDisplayLayout, pathname);
  return (
    <html lang="en" className={`${jost.variable} ${montserrat.variable}`}>
      <body className={jost.className}>
        <ReduxProvider>
          {" "}
          {shouldDisplayLayout && <Header />}
          <Toaster position="top-center" />
          {children}
          {shouldDisplayLayout && <Footer />}
        </ReduxProvider>{" "}
      </body>
    </html>
  );
}

import { Jost, Montserrat } from "next/font/google";
import Script from "next/script"; // Import the Script component
import "./globals.css";
import { ReduxProvider } from "../components/ReduxProvider";
import { Toaster } from "react-hot-toast";

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
  return (
    <html lang="en" className={`${jost.variable} ${montserrat.variable}`}>
      <body className={jost.className}>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
        {/* <Script src="https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js" /> */}
        <Script src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js" />

        {/* Main Application */}
        <ReduxProvider>
          <Toaster position="top-center" />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

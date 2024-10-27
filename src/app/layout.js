
import { Jost, Montserrat } from "next/font/google";
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
        <ReduxProvider>
          {" "}
          <Toaster position="top-center" />
          {children}
        </ReduxProvider>{" "}
      </body>
    </html>
  );
}

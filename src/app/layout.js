import { Jost, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
const jost = Jost({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})
 
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${montserrat.variable}`}>
      <body className={jost.className}>
        {" "}
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

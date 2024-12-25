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
        <Script src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js" />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        {/* Main Application */}
        <ReduxProvider>
          <Toaster position="top-center" />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import CartModal from "@/components/modals/CartModal";
import CheckoutModal from "@/components/modals/CheckoutModal";
import Overlay from "@/components/header/Overlay";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Audiophile Shop",
    default: "Audiophile Shop",
  },
  description:
    "This is an ecommerce website for audiophiles shop that sells high-quality audio products.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}  antialiased`}>
        <Header />
        <main className="mx-auto overflow-hidden">{children}</main>
        <Footer />
        <CartModal />
        <CheckoutModal />
        <Overlay />

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: { fontSize: ".8rem", padding: "1.4rem 2.4rem" },
          }}
        />
      </body>
    </html>
  );
}

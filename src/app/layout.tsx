import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";


import "./globals.css";
import HeaderBar from "./_components/HeaderBar";

const noto = Noto_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
  variable: "--noto-sans",
});


export const metadata: Metadata = {
  title: "0.3音樂教室",
  icons: "/Logo.png",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
          <HeaderBar/>
          {children}
      </body>
    </html>
  );
}

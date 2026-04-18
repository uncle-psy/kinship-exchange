import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  variable: "--font-avenir",
  display: "swap",
  src: [
    { path: "../assets/fonts/avenir/avenir-light.ttf", weight: "300", style: "normal" },
    { path: "../assets/fonts/avenir/avenir-book.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/avenir/avenir-regular.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/avenir/avenir-heavy.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/avenir/avenir-black.ttf", weight: "900", style: "normal" },
  ],
});

const goudy = localFont({
  variable: "--font-goudy",
  display: "swap",
  src: [
    { path: "../assets/fonts/goudy/goudy_heavyface_bt.ttf", weight: "400", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Kinship Exchange",
  description:
    "A movement funding exchange. Join and fund the movements you want to belong to.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${avenir.variable} ${goudy.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

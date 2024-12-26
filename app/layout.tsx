import "./ui/global.css";
import { raleway, exo2 } from "./ui/fonts";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>GaiaWear</title>
      <body className={`${exo2.className} antialiased min-h-[100dvh]`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

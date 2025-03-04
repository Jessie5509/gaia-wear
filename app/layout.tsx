import "./ui/global.css";
import { raleway, exo2 } from "./ui/fonts";
import React, { Suspense } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "./loading";

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
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}

import "./ui/global.css";
import { raleway, exo2 } from "./ui/fonts";
import NavBar from "./ui/dashboard/nav-links";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>GaiaWear</title>
      <body className={`${exo2.className} antialiased`}>
        <NavBar />
        {children}

        <footer className="bg-[#8ca87c] h-20">Footer</footer>
      </body>
    </html>
  );
}

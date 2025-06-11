import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Kritsadagorn's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tl from-[#e0e0e0] to-[#F6F6F6} min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        {/* <footer className="flex justify-center items-center py-4">
          Footer
        </footer> */}
      </body>
    </html>
  );
}
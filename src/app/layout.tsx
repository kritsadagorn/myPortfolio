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
        <main className="flex-grow">{children}</main>
        {/* Footer */}
        <footer className="mt-12">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center space-y-4">
              <p className="text-slate-500 text-sm">
                Crafted with care and attention to detail
              </p>
              <div className="w-12 h-px bg-slate-300 mx-auto" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

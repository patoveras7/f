import type { Metadata } from "next";
import "./globals.css";
import Narvbar from "@/components/navbar/Narvbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
      <Narvbar/>
      <div className="flex-grow">{children}</div>
      <Footer/> 
      </body>
    </html>
  );
}




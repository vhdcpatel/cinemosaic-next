import type { Metadata } from "next";
import "./globals.css";
import HeaderBar from "@/components/HeaderBar/HeaderBar";

export const metadata: Metadata = {
  title: "CineMosaic",
  description: "Explore the world of cinema with CineMosaic",
  icons: {
    icon: "/icons/mainLogo.png",
    apple: "/icons/mainLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased w-full max-w-[1200px] mx-auto px-5">
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}

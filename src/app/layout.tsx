import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Bob's Portfolio",
  description: "Code for Hire ;)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}

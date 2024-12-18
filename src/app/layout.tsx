import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peerlist Coding App",
  description: "Generated by SHREY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

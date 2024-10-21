import React from "react";
import "../public/globals.css";
import { Navbar } from '@/components/Navbar';


const geistSans = {
  fontFamily: "Geist Sans",
  fontWeight: "100 900",
};

const geistMono = {
  fontFamily: "Geist Mono",
  fontWeight: "100 900",
};

export const metadata = {
  title: "Mostafijur Rahman",
  description: "Mostafijur Rahman's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body style={{ ...geistSans, ...geistMono }} className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

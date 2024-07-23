import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Developer Indicatti",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-figtree bg-palette_dark`}>{children}</body>
    </html>
  );
}

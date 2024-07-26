import type { Metadata } from "next";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

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
      <body className={`font-figtree bg-palette_dark _text`}>{children}</body>
    </html>
  );
}

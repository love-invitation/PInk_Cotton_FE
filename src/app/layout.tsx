import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pink Cotton",
  description: "결혼식 청첩장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

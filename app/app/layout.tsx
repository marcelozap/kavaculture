import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kava Culture Ordering API",
  description: "Next.js API scaffold for the Kava Culture ordering upgrade.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

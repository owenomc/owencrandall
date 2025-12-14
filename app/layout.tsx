import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/public/globals.css";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Owen Crandall",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

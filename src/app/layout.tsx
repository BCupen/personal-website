import type { Metadata } from "next";
import { Geist, Geist_Mono, Arvo, Raleway } from "next/font/google";
import "./globals.css";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arvo",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Brittney Cupen | Software Engineer",
  description: "Portfolio website for Brittney Cupen, a software engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${arvo.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

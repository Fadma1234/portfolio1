import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Fadma Portfolio",
    default: "Fadma Portfolio",
  },
  description:
    "Modern portfolio website featuring selected work, a concise bio, and a clear contact path for potential collaborators and employers.",
  metadataBase: new URL("https://portfolio.example.com"),
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

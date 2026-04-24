import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactElement, ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Fadma's Portfolio",
    default: "Fadma's Portfolio",
  },
  description:
    "Fadma's portfolio features selected work, a concise bio, and a clear contact path for potential collaborators and employers.",
  metadataBase: new URL("https://portfolio1-delta-gules-52.vercel.app"),
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

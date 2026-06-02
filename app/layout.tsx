import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditi Shailesh Joshi — Portfolio",
  description:
    "Computer Science portfolio for Aditi Shailesh Joshi: backend engineering, data systems, AI research, projects, and certifications.",
  openGraph: {
    title: "Aditi Shailesh Joshi — Portfolio",
    description:
      "Backend engineering, data systems, AI research, projects, and certifications.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

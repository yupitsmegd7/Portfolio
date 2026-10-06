import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gourav Dutta · Engineer, Writer & Curious Mind",
  description: "The personal portfolio of Gourav Dutta — Computer Science at KIIT, aspiring Machine Learning Engineer, writer, and builder of useful digital experiences.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

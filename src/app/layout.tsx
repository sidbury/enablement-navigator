import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enablement Navigator",
  description: "Find the right sales and CS asset for any situation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

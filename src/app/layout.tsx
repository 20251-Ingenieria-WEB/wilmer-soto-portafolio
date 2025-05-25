import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Portafolio Wilmer Soto",
  description: "Pagina del portafolio de Wilmer Soto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

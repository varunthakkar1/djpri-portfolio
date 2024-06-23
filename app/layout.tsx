import type { Metadata } from "next";
import { Inter, Lato, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: "700"
})

export const metadata: Metadata = {
  title: "DJ PRII",
  description: "DJ PRII",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className} style={{ margin: '0px', padding: '0px' }}>{children}</body>
    </html>
  );
}

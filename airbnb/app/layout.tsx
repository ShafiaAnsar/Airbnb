import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import  Navbar from './components/Navbar/Navbar'
export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};
const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}

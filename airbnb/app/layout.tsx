import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import  Navbar from './components/Navbar/Navbar'
import Modal from "./components/modals/Modal";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProviders from "./providers/ToasterProviders";
export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
  icons: {
    icon: '/favicon.ico',
  },
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
        <ClientOnly>
        <ToasterProviders/>
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}

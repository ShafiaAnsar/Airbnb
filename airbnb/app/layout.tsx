import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import  Navbar from './components/Navbar/Navbar'
import Modal from "./components/modals/Modal";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProviders from "./providers/ToasterProviders";
import LoginModal from "./components/modals/LoginModal";
import  getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToasterProviders/>
        <SearchModal/>
        <RentModal/>
        <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
        {children}
        </div>
        </body>
    </html>
  );
}

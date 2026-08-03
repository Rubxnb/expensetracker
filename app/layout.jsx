import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/layout/LayoutClient";
import { TransactionsProvider } from "@/context/TransactionsContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Control de gastos e ingresos",
  description: "Control de gastos e ingresos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
      <body className="flex h-screen overflow-hidden bg-[#F6F8F6]">
        <TransactionsProvider>
          <LayoutClient>
            {children}
          </LayoutClient>
        </TransactionsProvider>
      </body>
    </html>
  );
}
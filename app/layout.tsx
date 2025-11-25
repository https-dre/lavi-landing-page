import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configurando a fonte
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lavi - Gerenciador de Lavanderias",
  description: "Otimize sua lavagem com segurança",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

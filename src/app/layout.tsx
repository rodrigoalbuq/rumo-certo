import type { Metadata } from "next";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import '@/app/styles/globals.css';

export const metadata: Metadata = {
  title: "Rumo Certo - Portal de Viagens",
  description: "Descubra os melhores destinos turísticos do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

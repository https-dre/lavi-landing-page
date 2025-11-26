import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppDownload from "@/components/AppDownload"; // Novo
import Contact from "@/components/Contact"; // Novo
import ToFounders from "@/components/ToFounders";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />

      {/* Novos Componentes adicionados aqui */}
      <ToFounders />
      <AppDownload />
      <Contact />
    </main>
  );
}

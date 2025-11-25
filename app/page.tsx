import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Importance from "@/components/Importance"; // Novo
import AppDownload from "@/components/AppDownload"; // Novo
import Contact from "@/components/Contact"; // Novo

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />

      {/* Novos Componentes adicionados aqui */}
      <Importance />
      <AppDownload />
      <Contact />

      {/* O rodapé copyright pode ficar no final do Contact ou separado aqui */}
      <footer className="w-full text-center py-8 bg-white text-gray-400 text-sm">
        © 2024 Lavi. Todos os direitos reservados.
      </footer>
    </main>
  );
}

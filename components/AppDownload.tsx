import { Play, Apple } from "lucide-react";
import Image from "next/image";

export default function AppDownload() {
  return (
    <section id="app" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Lado Esquerdo: Mockups dos Celulares */}
        <div className="relative flex justify-center md:justify-start gap-4">
          {/* Celular 1 - Tela Escura (Placeholder) */}
          <div className="w-[140px] h-[280px] md:w-[180px] md:h-[360px] bg-gray-900 rounded-[2rem] border-8 border-gray-800 shadow-xl flex items-center justify-center overflow-hidden">
            {/* Coloque a imagem da tela aqui depois */}
            <span className="text-white text-xs text-center px-2">
              Print do App 1
            </span>
          </div>

          {/* Celular 2 - Tela Clara (Placeholder movido um pouco para baixo) */}
          <div className="w-[140px] h-[280px] md:w-[180px] md:h-[360px] bg-gray-100 rounded-[2rem] border-8 border-gray-200 shadow-xl mt-12 flex items-center justify-center overflow-hidden">
            {/* Coloque a imagem da tela aqui depois */}
            <span className="text-gray-400 text-xs text-center px-2">
              Print do App 2
            </span>
          </div>
        </div>

        {/* Lado Direito: Texto e Botões */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            O Protótipo já está disponível!
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Botões das Lojas */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Botão Google Play Simulado */}
            <button className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              <Play className="fill-white w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-medium">
                  Disponível no
                </p>
                <p className="text-sm font-bold leading-none">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

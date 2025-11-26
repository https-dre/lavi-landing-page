import { Play, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AppDownload() {
  return (
    <section id="app" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Lado Esquerdo: Mockups dos Celulares */}
        <div className="relative flex justify-center md:justify-start gap-4">
          <div className="w-[140px] h-[280px] md:w-[180px] md:h-[360px] bg-gray-900 rounded-[2rem] border-8 border-gray-800 shadow-xl flex items-center justify-center overflow-hidden">
            <Image src="/app-1.png" alt="tela do app" width={500} height={500}/>
          </div>

          {/* Celular 2 - Tela Clara (Placeholder movido um pouco para baixo) */}
          <div className="w-[140px] h-[280px] md:w-[180px] md:h-[360px] bg-gray-100 rounded-[2rem] border-8 border-gray-200 shadow-xl mt-12 flex items-center justify-center overflow-hidden">
          <Image src="/app-2.png" alt="tela do app" width={300} height={300}/>
          </div>
        </div>

        {/* Lado Direito: Texto e Botões */}
        <div className="space-y-6">
          <h2 className="text-3xl text-gray-900">
            O Protótipo já está disponível!
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            Para empreendedores, é a gestão completa do seu negócio na palma da mão. Para clientes, praticidade para solicitar serviços, acompanhar pedidos e receber tudo com rapidez.
            <br></br>
            <b>Instale agora e simplifique sua rotina.</b>
          </p>

          {/* Botões das Lojas */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Botão Google Play Simulado */}
            <Link 
            href="https://github.com/laundry-lavi/lavi-frontend"
            className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              <Play className="fill-white w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-medium">
                  Disponível no
                </p>
                <p className="text-sm font-bold leading-none">Google Play</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

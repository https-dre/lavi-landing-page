import { INSTAGRAM_URL } from "@/conf/env";
import { Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contato" className="py-5 bg-white mb-20">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo: Infos */}
        <div className="space-y-6">
          <span className="text-purple-600 font-medium text-lg">Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tire suas dúvidas!
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-md">
            Tem dúvidas, sugestões ou quer saber mais sobre a plataforma? Estamos aqui para ajudar.
            <br/>
            Entre em contato e teremos o prazer de atender você.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href={INSTAGRAM_URL}
              className="w-12 h-12 border border-gray-400 rounded flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition text-gray-600"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Lado Direito: Imagem com Círculo Decorativo */}
        <div className="relative flex justify-center md:justify-end">
          {/* Círculo Roxo Decorativo */}
          {/* <div className="absolute -bottom-6 -right-6 md:right-10 md:-bottom-10 w-40 h-40 bg-purple-500 rounded-full z-0"></div>
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200">
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
              Foto Mãe/Filha
            </div>
          </div> */}
          <Image src="/mae_filha.gif" alt="mãe e filha" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}

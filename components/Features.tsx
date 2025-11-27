import { MapPin, Star, Clock } from "lucide-react"; // Instale: npm install lucide-react
import Image from "next/image";

export default function Features() {
  return (
    <section id="introducao" className="bg-white overflow-hidden">
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Coluna 1: Texto e Proposta de Valor */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-2">
              Sobre a Laví
            </h2>
            <h3 className="text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
              Revolucionando a forma como você cuida das suas roupas.
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Chega de procurar lavanderias confiáveis sem sucesso. A{" "}
              <strong>Laví</strong> conecta você aos melhores serviços de lavanderia da
              região, centralizando avaliações, agendamentos e pagamentos em um
              só lugar. Praticidade para quem usa, organização para quem
              oferece.
            </p>

            {/* Ícones de Destaque (Mini Features) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mb-3">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-gray-800">Geolocalização</h4>
                <p className="text-sm text-gray-500">
                  Encontre o que está perto.
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mb-3">
                  <Star size={24} />
                </div>
                <h4 className="font-bold text-gray-800">Confiabilidade</h4>
                <p className="text-sm text-gray-500">Avaliações reais.</p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mb-3">
                  <Clock size={24} />
                </div>
                <h4 className="font-bold text-gray-800">Economia</h4>
                <p className="text-sm text-gray-500">Poupe seu tempo.</p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Imagem Ilustrativa (Placeholder) */}
          <div className="lg:w-1/2 w-full">
            <Image src="/community.svg" alt="Conexões" width={450} height={200} />
          </div>
        </div>
      </div>

      <div
        id="features"
        className="relative z-0 w-full max-w-5xl mx-auto h-[500px] md:h-[600px] flex justify-center mt-10"
      >
        {/* A Linha Curva (Background) */}
        <div className="absolute top-[80px] w-[80%] h-[400px] border-b-4 border-l-4 border-r-4 border-purple-600 rounded-b-full opacity-80 pointer-events-none -z-0"></div>

        {/* Círculo Central */}
        <div className="absolute top-0 z-10">
          <div className="w-64 h-32 md:w-80 md:h-40 bg-gradient-to-b from-purple-600 to-purple-400 rounded-b-full rounded-t-none shadow-2xl flex items-start justify-center text-center pt-8">
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
              Funcionalidades <br /> do Aplicativo
            </h3>
          </div>
        </div>

        {/* Satélite 01 */}
        <div className="absolute left-[5%] md:left-[10%] top-[200px] bg-white w-40 h-40 rounded-full border-4 border-purple-600 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10 transition-transform hover:scale-110 cursor-default">
          <span className="text-purple-700 font-bold text-xl">01</span>
          <span className="text-gray-700 text-sm font-medium leading-tight mt-1">
            Localização de lavanderias
          </span>
        </div>

        {/* Satélite 02 */}
        <div className="absolute left-[20%] md:left-[25%] bottom-[50px] bg-white w-40 h-40 rounded-full border-4 border-purple-600 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10 transition-transform hover:scale-110 cursor-default">
          <span className="text-purple-700 font-bold text-xl">02</span>
          <span className="text-gray-700 text-sm font-medium leading-tight mt-1">
            Agendamento de Pedidos
          </span>
        </div>

        {/* Satélite 03 */}
        <div className="absolute right-[20%] md:right-[25%] bottom-[50px] bg-white w-40 h-40 rounded-full border-4 border-purple-600 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10 transition-transform hover:scale-110 cursor-default">
          <span className="text-purple-700 font-bold text-xl">03</span>
          <span className="text-gray-700 text-sm font-medium leading-tight mt-1">
            Gerenciamento de Pedidos
          </span>
        </div>

        {/* Satélite 04 */}
        <div className="absolute right-[5%] md:right-[10%] top-[200px] bg-white w-40 h-40 rounded-full border-4 border-purple-600 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10 transition-transform hover:scale-110 cursor-default">
          <span className="text-purple-700 font-bold text-xl">04</span>
          <span className="text-gray-700 text-sm font-medium leading-tight mt-1">
            Chat Integrado
          </span>
        </div>
      </div>
    </section>
  );
}

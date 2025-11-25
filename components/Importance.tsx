import { MonitorPlay } from "lucide-react"; // Ícone representando o monitor/chart

export default function Importance() {
  return (
    <section className="relative w-full py-20 bg-gray-900 text-white overflow-hidden">
      {/* Imagem de Fundo (Placeholder - substitua a URL ou use Next/Image) */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=2071&auto=format&fit=crop')", // Foto de lavanderia genérica
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Por que o projeto é <br /> importante?
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Ícone Grande (Monitor com Gráfico) */}
        <div className="flex justify-center md:justify-end">
          {/* Estou usando um SVG inline para desenhar algo parecido com o ícone da imagem, 
              pois é bem específico. */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 border-4 border-white rounded-lg p-4 flex items-end">
            <div className="w-full h-px bg-white absolute bottom-8 left-0"></div>
            <div className="w-[1px] h-full bg-white absolute left-8 top-0"></div>

            {/* Barras do gráfico */}
            <div className="w-8 h-12 bg-white/20 mx-1 mb-4 rounded-t"></div>
            <div className="w-8 h-24 bg-white/50 mx-1 mb-4 rounded-t"></div>
            <div className="w-8 h-16 bg-white/80 mx-1 mb-4 rounded-t"></div>

            {/* Seta caindo (ícone decorativo) */}
            <MonitorPlay className="absolute -right-8 -top-8 w-20 h-20 text-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
}

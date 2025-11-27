import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b-1 border-gray-400 relative w-full min-h-[500px] flex overflow-hidden bg-white">
      {/* CAMADA 0: O Gradiente (Fundo Base) 
          z-0: Fica no nível mais baixo possível.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-400 z-0"></div>

      {/* CAMADA 1: A Grade (Pattern)
          z-1: Forçamos ela a ficar ACIMA do gradiente branco. 
          Assim, mesmo se a tela mudar, o branco nunca vai cobrir a grade.
      */}
      <div
        className="absolute inset-0 z-1 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          width: "100%",
          height: "100%",
        }}
      ></div>

      {/* CAMADA 10: A Imagem da Mulher
          z-10: Fica acima da grade. Como a imagem é PNG transparente, 
          você verá a grade através das partes transparentes dela.
      */}
      <div className="absolute bottom-0 right-0 w-full h-[50%] md:h-[90%] md:w-[50%] z-10 pointer-events-none flex items-end justify-end">
        <div className="relative w-full h-full">
          <Image
            src="/woman.png"
            alt="Mulher sorrindo com cesto de roupas"
            fill
            className="object-contain object-bottom-right"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* CAMADA 20: O Texto
          z-20: Garante que botões e textos fiquem clicáveis e legíveis.
      */}
      <div className="container mt-20 md:px-12 relative z-20 md:pt-0">
        <div className="w-full md:w-[55%] space-y-8">
          <h1 className="text-5xl 2xl:text-7xl text-purple-950 leading-[1.1] tracking-tight">
            Gerenciador e Localizador de <br />
            Lavanderias
          </h1>

          <div className="space-y-6">
            <p className="text-gray-500 text-lg md:text-xl border-l-4 border-purple-200 pl-4">
              Otimize sua lavagem com segurança na Laví
            </p>

            <Link
              href="https://github.com/laundry-lavi"
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-purple-200 hover:-translate-y-1 text-lg pointer-events-auto"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

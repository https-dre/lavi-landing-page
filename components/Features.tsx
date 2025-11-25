export default function Features() {
  return (
    <section className="py-20 bg-white">
      {/* Introdução */}
      <div className="container mx-auto px-6 text-center mb-24 max-w-3xl">
        <h2 className="text-purple-800 font-bold text-xl mb-6">Introdução</h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          O projeto propõe o desenvolvimento de um aplicativo mobile capaz de
          localizar lavanderias próximas ao usuário, além de oferecer
          ferramentas de organização, avaliação e gerenciamento de serviços. A
          solução aborda a dificuldade de encontrar lavanderias confiáveis e bem
          avaliadas, especialmente em áreas urbanas densas. Sua relevância está
          na praticidade e na centralização das informações, facilitando o
          acesso a serviços essenciais do cotidiano.
        </p>
      </div>

      {/* Diagrama de Funcionalidades */}
      <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] flex justify-center">
        {/* A Linha Curva (O arco roxo) */}
        {/* Usamos um div gigante com borda arredondada apenas embaixo para simular o sorriso/arco */}
        <div className="absolute top-[120px] w-[80%] h-[400px] border-b-4 border-l-4 border-r-4 border-purple-600 rounded-b-full opacity-80 pointer-events-none -z-0"></div>

        {/* Círculo Central Principal */}
        <div className="absolute top-0 z-10">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-purple-600 to-purple-400 rounded-full shadow-2xl flex items-center justify-center text-center p-8 border-4 border-white ring-4 ring-purple-100">
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              Funcionalidades <br /> do Aplicativo
            </h3>
          </div>
        </div>

        {/* Satélite 01 - Esquerda Superior */}
        <div className="absolute left-[5%] md:left-[10%] top-[200px] bg-white w-40 h-40 rounded-full border-4 border-purple-600 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10">
          <span className="text-purple-700 font-bold text-xl">01</span>
          <span className="text-gray-700 text-sm font-medium leading-tight">
            Localização de lavanderias
          </span>
        </div>

        {/* Satélite 02 - Esquerda Inferior */}
        <div className="absolute left-[20%] md:left-[25%] bottom-[50px] bg-white w-40 h-40 rounded-full border-4 border-purple-600 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10">
          <span className="text-purple-700 font-bold text-xl">02</span>
          <span className="text-gray-700 text-sm font-medium leading-tight">
            Agendamento de Pedidos
          </span>
        </div>

        {/* Satélite 03 - Direita Inferior */}
        <div className="absolute right-[20%] md:right-[25%] bottom-[50px] bg-white w-40 h-40 rounded-full border-4 border-purple-600 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10">
          <span className="text-purple-700 font-bold text-xl">03</span>
          <span className="text-gray-700 text-sm font-medium leading-tight">
            Gerenciamento de Pedidos
          </span>
        </div>

        {/* Satélite 04 - Direita Superior */}
        <div className="absolute right-[5%] md:right-[10%] top-[200px] bg-white w-40 h-40 rounded-full border-4 border-purple-600 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10">
          <span className="text-purple-700 font-bold text-xl">04</span>
          <span className="text-gray-700 text-sm font-medium leading-tight">
            Chat Integrado
          </span>
        </div>
      </div>
    </section>
  );
}

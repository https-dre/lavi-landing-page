export default function Features() {
  return (
    <section id="introducao" className="bg-white">
      {/* Introdução */}
      <div className="pt-20 pb-12 container z-10 border-b-1 border-gray-400 mx-auto px-6 text-center w-full">
        <h2 className="text-purple-800 font-bold text-xl mb-6">Sobre nós</h2>
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
      <div id="features" className="relative z-0 w-full max-w-5xl mx-auto h-[500px] md:h-[600px] flex justify-center">
        
        {/* A Linha Curva (Background) */}
        <div className="absolute top-[80px] w-[80%] h-[400px] border-b-4 border-l-4 border-r-4 border-purple-600 rounded-b-full opacity-80 pointer-events-none -z-0"></div>

        {/* Círculo Central (Meia lua invertida / Tigela) 
            ALTERAÇÕES:
            - rounded-b-full / rounded-t-none: Arredonda embaixo, reto em cima.
            - items-start / pt-8: Alinha o texto no topo (parte larga).
            - border-t-0: Remove a borda de cima para parecer cortado.
        */}
        <div className="absolute top-0 z-10">
          <div className="w-64 h-32 md:w-80 md:h-40 bg-gradient-to-b from-purple-600 to-purple-400 rounded-b-full rounded-t-none shadow-2xl flex items-start justify-center text-center pt-8">
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
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
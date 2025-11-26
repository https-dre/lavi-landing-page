import React from 'react';
import { CreditCard, FileText, Link as LinkIcon } from 'lucide-react';

// Ícone do Pix Customizado (Replicando o formato oficial/da imagem)
const PixIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.5 6.5L12 2L7.5 6.5L12 11L16.5 6.5ZM7.5 6.5L3 11L7.5 15.5L12 11L7.5 6.5ZM16.5 6.5L21 11L16.5 15.5L12 11L16.5 6.5ZM12 11L7.5 15.5L12 20L16.5 15.5L12 11Z" />
  </svg>
);

const FounderFeatures = () => {
  const features = [
    {
      title: "Pagamentos via Pix",
      description: "Sistema de pagamento via Pix integrado no Aplicativo.",
      icon: <PixIcon className="w-6 h-6 text-slate-800" />,
      borderClass: "border-b md:border-r" // Borda inferior no mobile, direita no desktop
    },
    {
      title: "Comissão Adaptável",
      description: "Com um modelo de comissão adaptável para incentivar tickets altos.",
      icon: <CreditCard className="w-6 h-6 text-slate-800" />,
      borderClass: "border-b" // Borda inferior (mobile e desktop superior)
    },
    {
      title: "Geração de Relatórios",
      description: "Solicitar relatórios de forma rápida e prática, facilitando a gestão do seu negócio.",
      // Usando FileText com um cifrão estilizado seria o ideal, mas FileText é o padrão visual mais próximo de "Documento"
      icon: <div className="relative">
              <FileText className="w-6 h-6 text-slate-800" />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-800 mt-[2px]">$</span>
            </div>,
      borderClass: "border-b md:border-b-0 md:border-r" // Borda inferior mobile, direita desktop, sem borda inferior desktop
    },
    {
      title: "Link e QR codes",
      description: "Também é possível criar links e QR Codes de pagamento personalizados, ideais para vendas rápidas e remotas.",
      icon: <LinkIcon className="w-6 h-6 text-slate-800" />,
      borderClass: "" // Sem bordas extras no último item
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-8 border-dashed border-gray-200 ${feature.borderClass}`}
            >
              {/* Header do Card: Barra Verde + Ícone */}
              <div className="flex items-start gap-4 mb-4">
                {/* A barra verde lateral */}
                <div className="w-1 h-8 bg-purple-700 rounded-full shrink-0" />
                
                {/* O ícone */}
                <div className="mt-1">
                  {feature.icon}
                </div>
              </div>

              {/* Conteúdo de Texto */}
              <div className="pl-5"> {/* Pequeno padding para alinhar com o ícone visualmente */}
                <h3 className="text-xl font-medium text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderFeatures;
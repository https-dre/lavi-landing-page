import FounderFeatures from "./FounderFeatures";

export default function ToFounders() {
  return (
    <section id="founder-features" className="pt-20">
      <div className="w-full max-w-5xl mx-auto mb-10">
        <small className="text-purple-600 text-2xl">
          Pensada não só para usuários, mas também para empreendedores.
        </small>
        <h1 className="text-4xl ">
          Faça seu negócio processar e <br /> atender milhares de pedidos.
        </h1>
      </div>

      <FounderFeatures />
    </section>
  )
}
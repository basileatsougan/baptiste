import Image from "next/image";

export default function Pastor() {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6 text-center">
      <div className="mx-auto max-w-4xl">
        <p className="font-sacramento text-brand-orange text-4xl md:text-5xl mb-2">Notre Pasteur</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-black">
          Rencontrez Emmanuel Kola, notre cher pasteur
        </h2>
        
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
          <Image 
            src="/images/pastor.png"
            alt="Pastor Emmanuel Kola"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}


import Image from "next/image";

export default function Mission() {
  return (
    <div className="relative">
      {/* Angled White Section */}
      <section className="bg-white py-12 px-6 ">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl md:text-5xl text-black font-bold mb-0">
            Notre Mission <span className="text-brand-orange">et objectif</span>
          </h2>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div 
        className="h-32 w-full bg-black [clip-path:polygon(0_100%,100%_40%,100%_100%)] md:[clip-path:polygon(0_100%,100%_30%,100%_100%)]"
      />

      {/* Black Section with Mission & Vision */}
      <section className="bg-black text-white py-24 px-6 -mt-0">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          
          {/* Mission Card */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-sacramento text-brand-orange text-3xl md:text-4xl mb-2">Notre mission</p>
              <h3 className="text-2xl md:text-4xl font-bold">Nous croyons en la puissance de Dieu</h3>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
              <Image 
                src="/images/notre_mission.png"
                alt="Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col gap-6">
            <div className="">
              <p className="font-sacramento text-brand-orange text-3xl md:text-4xl mb-2">Notre vision</p>
              <h3 className="text-2xl md:text-4xl font-bold">Nous diffusons l'Évangile de Jésus</h3>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl ">
              <Image 
                src="/images/notre_vision.png"
                alt="Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}


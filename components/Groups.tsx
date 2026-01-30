import Image from "next/image";

export default function Groups() {
  const groups = [
    {
      title: "Groupe Musicale",
      image: "/images/groupe_musicale.png",
    },
    {
      title: "Groupe Chorale",
      image: "/images/groupe_chorale.png",
    }
  ];

  return (
    <section className="bg-[#F7F4EA] py-8 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-brand-orange text-center text-2xl md:text-4xl font-semibold mb-12">
          Le corps du christ
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image 
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-black text-center text-semibold">{group.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-brand-orange text-white px-10 py-3 rounded-full font-bold hover:bg-brand-amber transition-colors">
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
}


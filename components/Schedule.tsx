export default function Schedule() {
  const schedule = [
    {
      day: "Dimanche",
      times: [
        { time: "09:00 - 11:00", event: "Culte" },
        { time: "11:30 - 13:00", event: "Réunion des Jeunes" },
        { time: "15:00 - 17:00", event: "Réunion des Jeunes" },
      ],
    },
    {
      day: "Lundi",
      times: [
        { time: "09:00 - 11:00", event: "Culte" },
        { time: "11:30 - 13:00", event: "Réunion des Jeunes" },
        { time: "15:00 - 17:00", event: "Réunion des Jeunes" },
      ],
    },
    {
      day: "Mardi",
      times: [
        { time: "09:00 - 11:00", event: "Culte" },
        { time: "11:30 - 13:00", event: "Réunion des Jeunes" },
        { time: "15:00 - 17:00", event: "Réunion des Jeunes" },
      ],
    },
    {
      day: "Mercredi",
      times: [
        { time: "09:00 - 11:00", event: "Culte" },
        { time: "11:30 - 13:00", event: "Prière" },
        { time: "15:00 - 17:00", event: "Prière" },
      ],
    },
    {
      day: "Jeudi",
      times: [
        { time: "09:00 - 11:00", event: "Culte" },
        { time: "11:30 - 13:00", event: "Réunion des Jeunes" },
        { time: "15:00 - 17:00", event: "Réunion des Jeunes" },
      ],
    },
    {
      day: "Vendredi",
      times: [
        { time: "09:00 - 11:00", event: "Culte" },
        { time: "11:30 - 13:00", event: "Réunion des Jeunes" },
        { time: "15:00 - 17:00", event: "Réunion des Jeunes" },
      ],
    },
    {
      day: "Samedi",
      times: [
        { time: "09:00 - 11:00", event: "Culte" },
        { time: "11:30 - 13:00", event: "Prière" },
        { time: "15:00 - 17:00", event: "Réunion des Jeunes" },
      ],
    },
  ];

  return (
    <section id="annonces" className="bg-black text-white py-8 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-brand-orange text-center text-2xl md:text-4xl font-bold mb-12">
          Annonces de la semaine
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {schedule.map((item) => (
            <div key={item.day} className="flex flex-col gap-6">
              <h3 className="text-brand-orange text-xl font-bold border-b border-brand-orange/30 pb-2">
                {item.day}
              </h3>
              <div className="flex flex-col gap-4">
                {item.times.map((t, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="block font-bold mb-1 uppercase">{t.time}</span>
                    <span className="text-white/60">{t.event}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-brand-orange text-white px-10 py-3 rounded-full font-bold hover:bg-brand-amber transition-colors">
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
}


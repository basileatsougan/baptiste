export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-12 text-center">
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            l'église Bapstiste de Kohe
          </h2>
          <div className="h-1 w-24 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="p-3 bg-brand-orange/10 rounded-full hover:bg-brand-orange/20 transition-colors">
            <div className="w-6 h-6 flex items-center justify-center font-bold text-brand-orange">YT</div>
          </a>
          <a href="#" className="p-3 bg-brand-orange/10 rounded-full hover:bg-brand-orange/20 transition-colors">
            <div className="w-6 h-6 flex items-center justify-center font-bold text-brand-orange">FB</div>
          </a>
          <a href="#" className="p-3 bg-brand-orange/10 rounded-full hover:bg-brand-orange/20 transition-colors">
            <div className="w-6 h-6 flex items-center justify-center font-bold text-brand-orange">TK</div>
          </a>
        </div>

        <div className="text-white/60 text-sm md:text-base flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <p>Eglise Baptiste à Kohé | vers zossimé</p>
          <div className="hidden md:block w-1.5 h-1.5 bg-brand-orange rounded-full" />
          <p>+228 97 46 00 28</p>
        </div>
        
        <p className="text-white/30 text-xs mt-8">
          © {new Date().getFullYear()} l'église Baptiste de Kohé. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}


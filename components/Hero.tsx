export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-sacramento text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in">
          Bienvenue à l'église baptiste
        </h1>
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto font-light tracking-wide">
          un endroit sûr pour explorer et se connecter à Dieu
        </p>
      </div>
    </section>
  );
}


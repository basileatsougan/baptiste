import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { label: "Accueil", href: "#top" },
    { label: "A Propos", href: "#" },
    { label: "Annonces", href: "#annonces" },
    { label: "Contact", href: "#" },
    { label: "Don", href: "#" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white backdrop-blur-sm px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Simple Logo Placeholder */}
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white font-bold text-xl">
            B
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black hover:text-brand-orange transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu button could go here */}
      </div>
    </nav>
  );
}


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Pastor from "@/components/Pastor";
import Groups from "@/components/Groups";
import Schedule from "@/components/Schedule";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white font-sans selection:bg-brand-orange selection:text-black">
      <Navbar />
      <Hero />
      <Mission />
      <Pastor />
      <Groups />
      <Schedule />
      <MapSection />
      <Footer />
    </main>
  );
}

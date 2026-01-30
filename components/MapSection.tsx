"use client";

import { useState } from "react";

export default function MapSection() {
  const placeName = "Première Église Baptiste du Togo - Kohe";
  const address = "Kohe, Togo";
  const phoneNumber = "+228 XX XX XX XX"; // Replace with actual phone number
  const googleMapsUrl = "https://www.google.com/maps/place/Première+Église+Baptiste+du+Togo+-+Doulassame";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeName)}`;
  
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: placeName,
      text: `Visitez ${placeName}`,
      url: googleMapsUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${placeName}\n${googleMapsUrl}`);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <section className="bg-[#FAF9F6] py-24 px-6">
      <div className="mx-auto max-w-7xl text-center bg-white p-6 border border-black">
        <h2 className="text-brand-orange text-2xl md:text-5xl font-semibold mb-4 leading-relaxed">
          Notre Localisation
        </h2>
        <p className="text-black text-base md:text-2xl mb-12">
          Trouvez-nous facilement grâce à cette carte interactive
        </p>
        
        <div className="relative w-full h-[500px] bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126942.48812113213!2d1.0748282972656236!3d6.137050300000021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e13ad8c5682d%3A0xb43d04d07b7f13f1!2sPremi%C3%A8re%20%C3%89glise%20Baptiste%20du%20Togo%20-%20Doulassame!5e0!3m2!1sen!2stg!4v1769788399207!5m2!1sen!2stg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl"
          />
        </div>

        {/* Address Display */}
        <div className="mb-8">
          <div className="flex flex-col items-center gap-2 text-black">
            <p className="font-bold text-lg">{placeName}</p>
            <p className="text-base text-black/70">{address}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-amber transition-colors flex items-center gap-2 min-h-[48px] min-w-[120px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Itinéraire
          </a>
          
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-orange border-2 border-brand-orange px-8 py-3 rounded-xl font-bold hover:bg-brand-orange/10 transition-colors flex items-center gap-2 text-sm sm:text-base whitespace-nowrap min-h-[48px] min-w-[120px]"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">Ouvrir dans </span>Google Maps
          </a>

          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="bg-white text-brand-orange border-2 border-brand-orange px-8 py-3 rounded-xl font-bold hover:bg-brand-orange/10 transition-colors flex items-center gap-2 min-h-[48px] min-w-[120px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler
          </a>

          <button
            onClick={handleShare}
            className="bg-white text-brand-orange border-2 border-brand-orange px-8 py-3 rounded-xl font-bold hover:bg-brand-orange/10 transition-colors flex items-center gap-2 relative min-h-[48px] min-w-[120px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.885 12.938 9 12.482 9 12c0-.482-.115-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            {shareSuccess ? "Copié!" : "Partager"}
          </button>
        </div>
      </div>
    </section>
  );
}


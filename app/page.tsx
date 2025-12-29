import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-slate-900">
      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-12">
        {/* Logo at the top */}
        <header className="w-full flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={240}
            height={80}
            className="object-contain"
            priority
          />
        </header>

        {/* Vimeo embed */}
        <section className="mt-10 w-full">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1150126676?h=2b9851b0d2&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="IS Nordic_vs1"
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
        </section>
      </main>
    </div>
  );
}

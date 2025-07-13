import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen pt-2 sm:pt-4 pb-20 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-4">
        <h1 className="text-6xl md:text-7xl font-black font-['SF_Pro_Rounded','SF_Pro',-apple-system,system-ui,sans-serif] text-white drop-shadow-[0_5px_4px_rgba(0,0,0,0.25)]">
          Scramble
        </h1>
      </header>
      <main className="flex flex-col gap-6 row-start-2 items-center text-center">
        <Image
          src="/scramble3.png"
          alt="Scramble gameplay screenshot"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 object-contain mx-auto"
        />
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-center font-semibold text-gray-300">Available for iPhone</p>
          <a
            href="https://apps.apple.com/app/id6748549424"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </a>
        </div>
      </main>
      <footer className="mt-10 text-center text-sm text-gray-400 mb-6 px-4">
        <p className="space-x-2">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <span>•</span>
            <a href="mailto:support@playscramblegame.com" className="hover:underline">Support</a>
        </p>
        <p className="mt-2">© 2025 Play Scamble Game</p>
      </footer>
    </div>
  );
}

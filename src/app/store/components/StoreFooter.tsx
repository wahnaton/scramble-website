import Link from "next/link";

export function StoreFooter() {
  return (
    <footer className=" border-t">
      <div className="p-4 text-left">
        <nav className="text-sm text-black font-light">
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <span className="mx-2">|</span>
          <a
            href="mailto:support@playscramblegame.com"
            className="hover:underline"
          >
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}



import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <div className="max-w-prose text-left space-y-6">
        <p>
          This is the placeholder privacy policy for the Scramble iOS app. We are committed to protecting your data and ensuring transparency in how we use it.
        </p>
        <p>
          We do not collect any personally identifiable information unless you explicitly provide it. Your game progress is stored locally and never shared.
        </p>
        <p>
          This placeholder will be replaced with the final privacy terms before launch.
        </p>
      </div>

      <Link href="/" className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300">
        ← Back to home
      </Link>
    </main>
  );
}
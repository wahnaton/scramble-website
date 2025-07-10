

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-3xl font-bold">Terms of Service</h1>

      <div className="max-w-prose text-left space-y-6">
        <p>
          This is the placeholder Terms of Service for the Scramble iOS app. By using the app, you agree to the terms outlined here.
        </p>
        <p>
          Use of the app is provided as-is without any warranties. The game content is intended for personal entertainment only.
        </p>
        <p>
          These terms are subject to change prior to official launch and will be updated here.
        </p>
      </div>

      <Link href="/" className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300">
        ← Back to home
      </Link>
    </main>
  );
}
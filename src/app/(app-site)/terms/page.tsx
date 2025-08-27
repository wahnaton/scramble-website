

import Link from "next/link";

export const metadata = {
  title: "Terms of Service – Scramble",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-3xl font-bold">Terms of Service</h1>

      <div className="max-w-prose text-left space-y-6">
        <p className="italic text-sm">Last updated: July&nbsp;11&nbsp;2025</p>

        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using the Scramble mobile game (the “Game”) you agree to be
          bound by these Terms of Service (“Terms”). If you do not agree, do not use the Game.
        </p>

        <h2 className="text-xl font-semibold">2. Eligibility</h2>
        <p>
          You must be <strong>13&nbsp;years of age or older</strong> to use the Game. By using the Game,
          you represent that you meet this requirement.
        </p>

        <h2 className="text-xl font-semibold">3. Limited License</h2>
        <p>
          Subject to these Terms, <strong>WilLance LLC</strong> (“we,” “our,” “us”)
          grants you a personal, non‑exclusive, non‑transferable, revocable license to use one copy of
          the Game on an iOS device that you own or control, solely for your personal entertainment.
        </p>

        <h2 className="text-xl font-semibold">4. In‑App Purchases</h2>
        <p>
          The Game offers an optional one‑time purchase to remove ads (“Ad‑Free Upgrade”). All
          in‑app purchases are processed by Apple. <em>All sales are final.</em> We do not handle nor
          store any payment information.
        </p>

        <h2 className="text-xl font-semibold">5. Ads &amp; Third‑Party Services</h2>
        <p>
          Banner ads are served via Google&nbsp;AdMob. See our&nbsp;
          <Link href="/privacy" className="underline">
            Privacy&nbsp;Policy
          </Link>{" "}
          for details on data used to deliver non‑personalized ads.
        </p>

        <h2 className="text-xl font-semibold">6. Ownership</h2>
        <p>
          We retain all right, title, and interest in and to the Game, including all content and
          intellectual property rights. These Terms do not grant you any ownership rights.
        </p>

        <h2 className="text-xl font-semibold">7. Prohibited Conduct</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Reverse‑engineer, decompile, or otherwise attempt to derive the Game’s source code.</li>
          <li>Use the Game for commercial purposes without our prior written consent.</li>
          <li>Interfere with or disrupt the Game or its ad services.</li>
        </ul>

        <h2 className="text-xl font-semibold">8. Termination</h2>
        <p>
          We may suspend or terminate your access to the Game at any time if we believe you have
          violated these Terms. Upon termination, the license granted hereunder ends immediately.
        </p>

        <h2 className="text-xl font-semibold">9. Disclaimer of Warranties</h2>
        <p>
          THE GAME IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON‑INFRINGEMENT. YOUR USE IS AT YOUR SOLE RISK.
        </p>

        <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATING TO THE GAME OR THESE TERMS.
          OUR TOTAL LIABILITY WILL NOT EXCEED USD&nbsp;10 OR THE AMOUNT YOU PAID (IF ANY) FOR THE
          AD‑FREE UPGRADE.
        </p>

        <h2 className="text-xl font-semibold">11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the United States and the State in which WilLance LLC is based without
          regard to conflict‑of‑laws rules.
        </p>

        <h2 className="text-xl font-semibold">12. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. Updated Terms will be posted in‑app and become
          effective upon posting. Continued use of the Game after changes means you accept the new
          Terms.
        </p>

        <h2 className="text-xl font-semibold">13. External Links</h2>
        <p>
          Scramble may contain links to external sites including our website (https://playscramblegame.com) and social media. We do not control or endorse external content.
        </p>

        <h2 className="text-xl font-semibold">14. Contact</h2>
        <p>
          <strong>WilLance LLC</strong>
          <br />
          Email:&nbsp;
          <a
            href="mailto:support@playscramblegame.com"
            className="underline"
          >
            support@playscramblegame.com
          </a>
        </p>
      </div>

      <Link
        href="/"
        className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
      >
        ← Back to home
      </Link>
    </main>
  );
}
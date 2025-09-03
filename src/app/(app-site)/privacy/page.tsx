import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – Scramble",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <div className="max-w-prose text-left space-y-6">
        <p className="italic text-sm">Last updated: July&nbsp;11&nbsp;2025</p>

        <p>
          {" "}
          This Privacy Policy ("Policy") governs the collection, use,
          disclosure, and management of user data by WilLance LLC ("we," "us,"
          or "our") in relation to your use of the Scramble application
          ("Scramble", "Scramble Game", or "App"). It is essential that you
          carefully read and understand this Policy as it outlines our practices
          regarding your personal information and how we handle and safeguard
          it. By using Scramble, you explicitly consent to the collection, use,
          and disclosure of your personal information as described herein.
        </p>

        <h2 className="text-xl font-semibold">1. What We Collect</h2>
        <p>
          <strong>On‑device only:</strong> gameplay preferences (such as high
          scores) are stored solely on your iPhone. They never leave your
          device.
        </p>
        <p>
          <strong>Google&nbsp;AdMob:</strong> Advertising Identifier (IDFA),
          IP&nbsp;address, device details, coarse location, interaction data,
          and ad‑performance metrics are sent directly to Google’s servers to
          serve and measure in‑game ads.
        </p>

        <h2 className="text-xl font-semibold">2. How Data Is Used</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Local data remains on the device and is read only by the game to
            remember your settings and scores.
          </li>
          <li>
            AdMob data is used by Google to deliver, personalise (when you allow
            tracking), and limit the frequency of ads.
          </li>
        </ul>
        <p>
          We do <em>not</em> create accounts, transmit gameplay data to our
          servers, or share data with other third parties.
        </p>

        <h2 className="text-xl font-semibold">3. Legal Bases</h2>
        <p>
          In the EEA/UK we rely on legitimate interest for non‑personalised ads
          and your consent (via Apple’s App Tracking Transparency prompt) for
          personalised ads. In California we do not “sell” personal information
          as defined by the CCPA/CPRA.
        </p>

        <h2 className="text-xl font-semibold">4. Children’s Privacy</h2>
        <p>
          The game is intended for a general audience and is not directed to
          children under 13. Parents who believe personal data has been
          collected should contact us and we will work with Google to delete it.
        </p>

        <h2 className="text-xl font-semibold">5. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you can request access to or deletion
          of AdMob data, object to ad personalisation, or withdraw consent at
          any time (disable “Allow Apps to Request to Track” in iOS settings or
          reset your Advertising Identifier).
        </p>

        <h2 className="text-xl font-semibold">6. Security</h2>
        <p>
          We rely on iOS sandboxing and Google’s secure infrastructure. No user
          data is stored on our own servers.
        </p>

        <h2 className="text-xl font-semibold">7. International Transfers</h2>
        <p>
          AdMob may process data on servers outside your country. Google
          participates in the EU‑US Data Privacy Framework.
        </p>

        <h2 className="text-xl font-semibold">8. Changes</h2>
        <p>
          We will post changes in‑app and update the date at the top of this
          policy. Continued use of the game after changes means you accept the
          revised policy.
        </p>

        <h2 className="text-xl font-semibold">9. Contact</h2>
        <p>
          <strong>WilLance LLC</strong>
          <br />
          Email:&nbsp;
          <a href="mailto:support@playscramblegame.com" className="underline">
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

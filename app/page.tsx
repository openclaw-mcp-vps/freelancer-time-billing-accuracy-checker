export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Invoice &amp; Billing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Verify Freelancer<br />
          <span className="text-[#58a6ff]">Time Billing Accuracy</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Analyze screen activity, app usage, and keystroke patterns to validate billable hours and detect time inflation before you pay.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $13/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["Screen Captures", "Timestamped activity proof"],
            ["App Usage Logs", "Track every tool used"],
            ["Keystroke Patterns", "Detect idle inflation"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per client</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited freelancer monitoring",
              "Real-time accuracy reports",
              "Suspicious pattern alerts",
              "Dashboard analytics",
              "Desktop agent included",
              "Export reports as PDF"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the accuracy checker work?",
              "A lightweight desktop agent runs on the freelancer's machine, capturing periodic screenshots, logging active applications, and measuring keystroke cadence. This data is analyzed server-side to produce an accuracy score for each billed hour."
            ],
            [
              "Does the freelancer know they are being monitored?",
              "Yes. The agent requires explicit installation and consent from the freelancer. Transparency is built in — both parties see the same reports, building trust rather than suspicion."
            ],
            [
              "What counts as a suspicious pattern?",
              "Long idle periods logged as active, repetitive low-effort keystrokes, or apps unrelated to the project running during billed time are all flagged automatically with confidence scores."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Freelancer Time Billing Accuracy Checker. All rights reserved.
      </footer>
    </main>
  );
}

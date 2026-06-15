import type { Metadata } from "next";
import Link from "next/link";
import { Scale, HeartHandshake, AlertTriangle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Free & Fair Use Rules | ToolsAtZero",
  description:
    "Review the Terms of Service for ToolsAtZero. 100% free client-side tools for commercial and personal operations under an absolute liability disclaimer.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-24 pt-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider hover:underline mb-8"
        >
          ← Return to Workbench
        </Link>

        {/* Page Header */}
        <div className="space-y-4 mb-10">
          <span className="neon-badge px-3 py-1 text-xs">
            TERMS & DISCLOSURES
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight border-b-2 border-black pb-6">
            Terms of Service
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase">
            Effective Date: June 16, 2026 | Document Reference: TA-TERMS-2026-V1
          </p>
        </div>

        {/* Highlight Block */}
        <div className="bg-accent border-2 border-black p-6 sm:p-8 text-black mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-mono text-sm sm:text-base font-black uppercase tracking-wider leading-relaxed">
            ⚖️ FAIR & TRANSPARENT TERMS: No logins, no paywalls, no hidden usage caps. You run the code locally, you control the output.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 font-sans text-sm sm:text-base leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight border-b border-black pb-2 flex items-center gap-2">
              <HeartHandshake className="w-6 h-6" /> Fair and Unlimited Use
            </h2>
            <p>
              ToolsAtZero is dedicated to providing friction-free, client-side developer and document utilities to everyone.
            </p>
            <ul className="list-none space-y-3 font-mono text-xs sm:text-sm pl-2">
              <li className="flex items-start gap-2">
                <span className="text-accent bg-black px-1.5 py-0.5 font-bold">✓</span>
                <span><strong>Individual Use:</strong> Fully authorized for any personal optimization project.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent bg-black px-1.5 py-0.5 font-bold">✓</span>
                <span><strong>Educational Use:</strong> Allowed for classroom teaching, universities, and student workshops.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent bg-black px-1.5 py-0.5 font-bold">✓</span>
                <span><strong>Commercial Enterprise Use:</strong> Fully authorized for production business workflows, corporate data manipulations, and client assets. There are no volume restrictions or pricing structures.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight border-b border-black pb-2 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" /> Disclaimer of Liability
            </h2>
            <p className="font-mono text-xs uppercase bg-secondary border border-black p-4 leading-relaxed">
              ⚠️ ATTENTION DEVS & ENTERPRISES: All processing calculations, document splits, base64 encodes, and database queries run exclusively on your own machine. We compile the static logic, and your browser executes it.
            </p>
            <p>
              Therefore, the following conditions apply:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-xs sm:text-sm font-mono pl-2">
              <li>
                <strong>"As-Is" Provision:</strong> ToolsAtZero provides all features, scripts, and layout elements "as-is" without warranty of any kind, express or implied.
              </li>
              <li>
                <strong>Performance & Compute Limits:</strong> Since tools run on your local machine, processing speeds, memory limits, and timeouts are dependent on your device hardware and browser sandboxing policies.
              </li>
              <li>
                <strong>Liability Cap:</strong> ToolsAtZero, its maintainers, and open-source contributors shall not be held liable for any data loss, file corruption, computation errors, server downtime, or loss of profits arising out of your use or inability to use our tools.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight border-b border-black pb-2 flex items-center gap-2">
              <FileText className="w-6 h-6" /> Intellectual Property & Forking
            </h2>
            <p>
              All core scripts, tools templates, and styling assets of ToolsAtZero are open-source. You are permitted and encouraged to audit the algorithms, suggest improvements, or clone and host the toolset for offline air-gapped corporate usage.
            </p>
            <p>
              Refer to our repository for licenses associated with specific libraries we employ (such as <code>pdf-lib</code> or Lucide icon packages).
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight border-b border-black pb-2 flex items-center gap-2">
              <Scale className="w-6 h-6" /> Governance & Changes
            </h2>
            <p>
              We reserve the right to add, modify, or deprecate utilities from the core index at any time without notice. Since we do not maintain email distribution databases, changes will be directly reflected on the live static deployment and our code repository.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

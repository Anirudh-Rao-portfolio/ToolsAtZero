import type { Metadata } from "next";
import Link from "next/link";
import { Shield, EyeOff, KeyRound, ServerOff } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Cookie Statement | ToolsAtZero",
  description:
    "ToolsAtZero guarantees absolute data privacy and security through 100% browser-side processing, zero cookies, and zero server uploads.",
};

export default function PrivacyPolicyPage() {
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
            100% LOCAL COMPUTE FRAME
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight border-b-2 border-black pb-6">
            Privacy Policy & Cookie Statement
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase">
            Effective Date: June 16, 2026 | Document Reference: TA-PRIV-2026-V1
          </p>
        </div>

        {/* Giant Neon Yellow Banner */}
        <div className="bg-accent border-2 border-black p-6 sm:p-8 text-black mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-mono text-sm sm:text-base font-black uppercase tracking-wider leading-relaxed">
            🔒 BROWSER-ISOLATED SECURITY: We physically cannot log, sell, or leak your documents because we do not have a server backend to send them to.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 font-sans text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight border-b border-black pb-2 flex items-center gap-2">
              <ServerOff className="w-6 h-6" /> Zero Data Collection
            </h2>
            <p>
              ToolsAtZero is architected from the ground up as a pure client-side utility suite. Unlike standard online conversion portals that require you to upload files to remote databases, every tool in our index executes exclusively inside your browser tab's active process space.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="border border-black p-5 bg-background">
                <h3 className="font-mono text-xs uppercase font-black text-muted-foreground mb-2">
                  Temporary Memory Sandbox
                </h3>
                <p className="text-xs">
                  Files you drag-and-drop (including PDFs, Excel spreadsheets, PNG images, and text strings) are loaded directly into browser memory (RAM).
                </p>
              </div>
              <div className="border border-black p-5 bg-background">
                <h3 className="font-mono text-xs uppercase font-black text-muted-foreground mb-2">
                  Instant Tab-Close Destruction
                </h3>
                <p className="text-xs">
                  Closing the browser tab completely terminates the sandboxed memory frame, permanently destroying all loaded resources. Nothing persists on our end.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight border-b border-black pb-2 flex items-center gap-2">
              <EyeOff className="w-6 h-6" /> Cookie Statement
            </h2>
            <p>
              We believe online utilities should be toolboxes, not surveillance mechanisms. Therefore:
            </p>
            <ul className="list-none space-y-3 font-mono text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent bg-black px-1.5 py-0.5 font-bold">✓</span>
                <span><strong>No Analytics Cookies:</strong> We do not deploy Google Analytics, Hotjar, Mixpanel, or any tracking libraries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent bg-black px-1.5 py-0.5 font-bold">✓</span>
                <span><strong>No Advertising Pixels:</strong> There are no Facebook, TikTok, or Google remarketing tags.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent bg-black px-1.5 py-0.5 font-bold">✓</span>
                <span><strong>No Third-Party Scripts:</strong> All utility algorithms are bundled natively in our static build.</span>
              </li>
            </ul>

            <h3 className="font-mono text-xs uppercase font-bold tracking-widest text-muted-foreground mt-6">
              Permitted Local Storage (localStorage) usage
            </h3>
            <p className="text-sm">
              The only persistence technology we deploy is browser-native <code>localStorage</code>. This runs strictly on your machine and is used for exactly two purposes:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm font-mono pl-2">
              <li>Remembering your localized UI layout settings (such as active light/dark mode configuration).</li>
              <li>Keeping a local cache of your command palette search history to speed up your workbench navigation.</li>
            </ol>
            <p className="text-xs text-muted-foreground font-mono">
              Note: You can easily purge this configuration cache at any time simply by clearing your browser site data or cookies.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight border-b border-black pb-2 flex items-center gap-2">
              <KeyRound className="w-6 h-6" /> Operational Compliance
            </h2>
            <p>
              Because we do not ingest personal identifier records, customer email indexes, or billing details, we operate completely outside the scope of databases that attract security vulnerabilities. ToolsAtZero complies with the strict security demands of <strong>GDPR</strong>, <strong>CCPA</strong>, and corporate compliance frameworks since no data processing is delegated to external parties.
            </p>
            <p>
              Your data never crosses a network boundary. It stays under your own administrative control.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight border-b border-black pb-2 flex items-center gap-2">
              <Shield className="w-6 h-6" /> Local Verification
            </h2>
            <p>
              ToolsAtZero operates entirely inside your browser's sandboxed tab memory. You can inspect your browser's Network Tab at any time to verify that zero outbound API or network requests are initiated when processing documents.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

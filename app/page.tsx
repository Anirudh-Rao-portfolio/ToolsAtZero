import type { Metadata } from "next";
import { Logo } from "@/components/logo";
import { Cpu, Eye, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "ToolsAtZero | The Zero-Server Workbench | Launching June 18th",
  description:
    "Official Launch Announcement: ToolsAtZero is coming June 18th. 52+ premium client-side utilities with 100% local processing and absolute data privacy.",
};

export default function HomePage() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-between bg-background text-foreground pb-12 sm:pb-24 pt-6 sm:pt-12">
      
      {/* ════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════ */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 max-w-4xl mx-auto space-y-10 animate-fade-in-scale">
        
        {/* Styled Logo Container */}
        <div className="w-20 h-20 bg-accent border-2 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
          <Logo className="w-12 h-12 text-black transition-transform duration-1000 hover:rotate-180" />
        </div>

        {/* Big Bold Headline */}
        <div className="space-y-4">
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight uppercase font-black">
            The Zero-Server Workbench.
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
            A standalone client-side toolkit designed for speed, utility, and ironclad data privacy. Your files and inputs never touch a server.
          </p>
        </div>

        {/* Neon Launch Date Banner */}
        <div className="bg-accent border-2 border-black px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full">
          <p className="font-mono text-base sm:text-lg font-black uppercase tracking-widest text-black">
            🚀 Launching June 18th
          </p>
        </div>

      </section>

      {/* ════════════════════════════════════════
          VALUE PROPOSITIONS GRID
          ════════════════════════════════════════ */}
      <section className="px-4 max-w-5xl mx-auto w-full mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black bg-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Column 1 */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-accent border border-black flex items-center justify-center text-black">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="font-editorial text-2xl font-bold uppercase tracking-tight text-foreground">
                52+ Premium Utilities
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlock instant access to a suite of PDF editors, developer encoders, cryptographic hashes, formatting systems, and graphic tools.
              </p>
            </div>
            <span className="font-mono text-[9px] font-black uppercase border border-black px-2 py-0.5 w-fit">
              Ready Day One
            </span>
          </div>

          {/* Column 2 */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-accent border border-black flex items-center justify-center text-black">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="font-editorial text-2xl font-bold uppercase tracking-tight text-foreground">
                100% Local Processing
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every calculation executes locally in your browser memory. No external API uploads, zero network leaks, absolute verification.
              </p>
            </div>
            <span className="font-mono text-[9px] font-black uppercase border border-black px-2 py-0.5 w-fit">
              GDPR-Compliant Sandbox
            </span>
          </div>

          {/* Column 3 */}
          <div className="p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-accent border border-black flex items-center justify-center text-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="font-editorial text-2xl font-bold uppercase tracking-tight text-foreground">
                Zero Cost. Zero Ads.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Free for everyone—individuals, classrooms, and enterprise setups. No logins, no tracking, no cookie walls, and no paywalls.
              </p>
            </div>
            <span className="font-mono text-[9px] font-black uppercase border border-black px-2 py-0.5 w-fit">
              100% Independent
            </span>
          </div>

        </div>
      </section>

    </main>
  );
}

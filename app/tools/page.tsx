import Link from "next/link";
import type { Metadata } from "next";
import { toolsRegistry } from "@/config/toolsRegistry";
import { ArrowRight, Sparkles, LayoutGrid } from "lucide-react";

export const metadata: Metadata = {
  title: "All Free AI & Developer Tools | ToolsAtZero",
  description:
    "Explore our complete high-density directory of 100+ free online developer, office, PDF, image, and utility tools. 100% browser-based processing.",
  alternates: {
    canonical: "/tools",
  },
};

export const dynamic = "force-static";

export default function AllToolsPage() {
  const readyTools = toolsRegistry.filter((t) => t.isReady);

  const categories = [
    {
      key: "pdf",
      title: "PDF Suite",
      description: "Compress, merge, split, crop, and password-protect PDF documents 100% locally.",
    },
    {
      key: "developer",
      title: "Developer Tools",
      description: "Format JSON, encode Base64, decode JWT tokens, minify code, and test Regex patterns.",
    },
    {
      key: "office",
      title: "Office & Text Tools",
      description: "Analyze readability, count words, format text lists, and edit text blocks client-side.",
    },
    {
      key: "image",
      title: "Image Tools",
      description: "Compress images, remove backgrounds, run local OCR, and convert between JPG/PNG/WebP.",
    },
    {
      key: "web",
      title: "Web Tools",
      description: "Minify files, parse URL structures, format SQL, and simulate DNS lookups.",
    },
    {
      key: "time",
      title: "Time Tools",
      description: "Calculate business days, compare timezone differences, convert epoch timestamps, and track dates.",
    },
    {
      key: "calculator",
      title: "Calculators",
      description: "Compute financial compound interest, loan EMIs, BMI indices, and business break-even ratios.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      {/* Header Banner */}
      <section className="pt-16 pb-12 border-b border-black">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <span className="neon-badge px-3 py-1 text-xs uppercase font-mono border border-black flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <LayoutGrid className="w-3.5 h-3.5" /> Directory Index
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {readyTools.length} Tools Available
            </span>
          </div>
          
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.1]">
            All Free AI & Developer Tools | ToolsAtZero
          </h1>
          
          <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            A centralized, high-density index of our client-side utility catalog. No tracking cookies, no server uploads, no pricing tiers. Every utility runs locally in your browser memory sandbox.
          </p>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-8 bg-accent border-b border-black text-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
          <div className="flex items-center gap-3">
            <span className="text-xl">⚡</span>
            <p className="font-mono text-xs font-bold uppercase tracking-wider">
              Single-Click Crawl Path Optimization for Search Bots and Indexers
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase font-black border border-black px-2 py-1 bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Static Render Active
          </div>
        </div>
      </section>

      {/* Categories Directory */}
      <section className="pt-16 max-w-6xl mx-auto space-y-24">
        {categories.map((cat) => {
          const categoryTools = readyTools.filter((t) => t.category === cat.key);
          if (categoryTools.length === 0) return null;

          return (
            <div key={cat.key} id={cat.key} className="space-y-8 scroll-mt-24">
              {/* Category Header */}
              <div className="border-b border-black pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="space-y-1.5">
                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight flex items-center gap-3">
                    {cat.title}
                    <span className="neon-badge px-2.5 py-0.5 text-[10px] sm:text-xs tracking-normal shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] border border-black">
                      {categoryTools.length}
                    </span>
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {cat.description}
                  </p>
                </div>
                <Link
                  href={`/${cat.key === "calculator" ? "calculators" : `${cat.key}-tools`}`}
                  className="font-mono text-xs uppercase font-bold text-muted-foreground hover:text-black transition-colors shrink-0 flex items-center gap-1 hover:underline"
                >
                  View Category Page <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="editorial-card p-6 flex flex-col justify-between border border-black group h-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <div className="space-y-4">
                        <div className="card-icon text-black bg-secondary p-2.5 border border-black w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-background transition-colors">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="space-y-1">
                          <h3 className="card-title font-bold text-sm block group-hover:underline leading-snug">
                            {tool.name}
                          </h3>
                          <p className="card-description text-muted-foreground text-[11px] leading-normal line-clamp-2">
                            {tool.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-black/10 mt-4 font-mono text-[9px] uppercase font-bold tracking-wider text-muted-foreground group-hover:text-black">
                        <span>Local Run</span>
                        <ArrowRight size={12} className="card-arrow transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

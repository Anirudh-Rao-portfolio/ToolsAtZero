"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools } from "@/lib/tools";
import { Logo } from "@/components/logo";

export function Footer() {
  const pathname = usePathname();

  // Find if we are on a tool page
  const currentTool = tools.find(t => pathname === t.href || pathname.endsWith(t.slug));

  return (
    <footer className="editorial-border-t bg-background mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        {/* Dynamic section based on path */}
        {pathname === "/" ? (
          /* Condition A: Homepage link columns across all 6 categories */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 pb-12 border-b border-black">
            <div>
              <h4 className="font-mono text-xs font-bold uppercase mb-4 border-b border-black pb-1">Free Online PDF Tools</h4>
              <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <li><Link href="/tools/protect-pdf" className="hover:underline hover:text-foreground">Free Protect PDF</Link></li>
                <li><Link href="/tools/unlock-pdf" className="hover:underline hover:text-foreground">Free Unlock PDF</Link></li>
                <li><Link href="/tools/compress-pdf" className="hover:underline hover:text-foreground">Free Compress PDF</Link></li>
                <li><Link href="/tools/merge-pdf" className="hover:underline hover:text-foreground">Free Merge PDF</Link></li>
                <li><Link href="/tools/split-pdf" className="hover:underline hover:text-foreground">Free Split PDF</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase mb-4 border-b border-black pb-1">Free Developer Tools</h4>
              <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <li><Link href="/tools/json-formatter" className="hover:underline hover:text-foreground">Free JSON Formatter</Link></li>
                <li><Link href="/tools/base64-encoder-decoder" className="hover:underline hover:text-foreground">Free Base64 Encoder</Link></li>
                <li><Link href="/tools/jwt-decoder" className="hover:underline hover:text-foreground">Free JWT Decoder</Link></li>
                <li><Link href="/tools/sql-formatter" className="hover:underline hover:text-foreground">Free SQL Formatter</Link></li>
                <li><Link href="/tools/uuid-generator" className="hover:underline hover:text-foreground">Free UUID Generator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase mb-4 border-b border-black pb-1">Free Text Tools</h4>
              <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <li><Link href="/tools/case-converter" className="hover:underline hover:text-foreground">Free Case Converter</Link></li>
                <li><Link href="/tools/csv-to-json" className="hover:underline hover:text-foreground">Free CSV to JSON</Link></li>
                <li><Link href="/tools/csv-to-excel" className="hover:underline hover:text-foreground">Free CSV to Excel</Link></li>
                <li><Link href="/tools/word-counter" className="hover:underline hover:text-foreground">Free Word Counter</Link></li>
                <li><Link href="/tools/find-replace" className="hover:underline hover:text-foreground">Free Find & Replace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase mb-4 border-b border-black pb-1">Free Image Tools</h4>
              <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <li><Link href="/tools/image-compressor" className="hover:underline hover:text-foreground">Free Compressor</Link></li>
                <li><Link href="/tools/image-resizer" className="hover:underline hover:text-foreground">Free Resizer</Link></li>
                <li><Link href="/tools/png-to-jpg" className="hover:underline hover:text-foreground">Free PNG to JPG</Link></li>
                <li><Link href="/tools/jpg-to-png" className="hover:underline hover:text-foreground">Free JPG to PNG</Link></li>
                <li><Link href="/tools/image-cropper" className="hover:underline hover:text-foreground">Free Image Cropper</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase mb-4 border-b border-black pb-1">Free Web Tools</h4>
              <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <li><Link href="/tools/url-encoder-decoder" className="hover:underline hover:text-foreground">Free URL Encoder</Link></li>
                <li><Link href="/tools/html-minifier" className="hover:underline hover:text-foreground">Free HTML Minify</Link></li>
                <li><Link href="/tools/css-minifier" className="hover:underline hover:text-foreground">Free CSS Minify</Link></li>
                <li><Link href="/tools/javascript-minifier" className="hover:underline hover:text-foreground">Free JS Minify</Link></li>
                <li><Link href="/tools/meta-tag-generator" className="hover:underline hover:text-foreground">Free Meta Tags</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase mb-4 border-b border-black pb-1">Free Time Tools</h4>
              <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <li><Link href="/tools/epoch-converter" className="hover:underline hover:text-foreground">Free Epoch Converter</Link></li>
                <li><Link href="/tools/time-zone-converter" className="hover:underline hover:text-foreground">Free Timezones</Link></li>
                <li><Link href="/tools/date-difference" className="hover:underline hover:text-foreground">Free Date Difference</Link></li>
                <li><Link href="/tools/time-calculator" className="hover:underline hover:text-foreground">Free Time Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase mb-4 border-b border-black pb-1">Free Calculators</h4>
              <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <li><Link href="/tools/gst-calculator" className="hover:underline hover:text-foreground">Free GST Calculator</Link></li>
                <li><Link href="/tools/emi-calculator" className="hover:underline hover:text-foreground">Free EMI Calculator</Link></li>
                <li><Link href="/tools/sip-calculator" className="hover:underline hover:text-foreground">Free SIP Calculator</Link></li>
                <li><Link href="/tools/scientific-calculator" className="hover:underline hover:text-foreground">Free Scientific</Link></li>
                <li><Link href="/tools/bmi-calculator" className="hover:underline hover:text-foreground">Free BMI Calculator</Link></li>
              </ul>
            </div>
          </div>
        ) : currentTool ? (
          /* Condition B: Sibling tools loop for active category */
          <div className="pb-12 border-b border-black space-y-6">
            <div>
              <h3 className="font-editorial text-2xl font-bold uppercase">
                Suggested Utilities in Free {currentTool.category.toUpperCase()} Suite
              </h3>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                Explore sibling tools in this workspace category. Run 100% locally.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {tools
                .filter(t => t.category === currentTool.category && t.slug !== currentTool.slug)
                .slice(0, 6)
                .map(sibling => (
                  <Link
                    key={sibling.slug}
                    href={sibling.href}
                    className="editorial-card p-3 flex flex-col justify-between font-mono text-[11px] uppercase font-bold hover:bg-accent transition-all hover:-translate-y-0.5"
                  >
                    <span className="truncate">{sibling.name}</span>
                    <span className="text-[9px] text-muted-foreground mt-2 block">Launch Free →</span>
                  </Link>
                ))}
            </div>
          </div>
        ) : null}

        {/* Global Base Tier */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <Logo className="w-5 h-5 text-foreground" />
              <span className="text-lg font-editorial text-foreground font-black">
                ToolsAtZero
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xl text-center md:text-left leading-relaxed">
              🔒 100% LOCAL PROCESSING: Your documents and snippets never cross a server boundary. Everything runs inside browser sandboxed memory.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              All Tools
            </Link>
            <Link href="/compare" className="hover:text-foreground transition-colors">
              Compare
            </Link>
            <Link href="/guides" className="hover:text-foreground transition-colors">
              Guides
            </Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-black text-center text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} ToolsAtZero. 100% Client-Side Local Compute Frame.
        </div>
      </div>
    </footer>
  );
}

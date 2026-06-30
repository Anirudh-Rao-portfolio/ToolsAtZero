"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { CommandPalette } from "@/components/command-palette";
import { useState } from "react";
import { Logo } from "@/components/logo";

export function Header() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background editorial-border-b">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          {/* Left Side: Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="w-6 h-6 text-foreground transition-transform duration-500 group-hover:rotate-45" />
            <span className="font-editorial text-xl font-black tracking-tight text-foreground uppercase">
              ToolsAtZero
            </span>
          </Link>

          {/* Center: Sleek Border-Mapped Search Box */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 justify-center">
            <button
              onClick={() => setCommandOpen(true)}
              className="w-full flex items-center justify-between px-4 py-1.5 border border-black bg-background text-muted-foreground hover:bg-accent hover:text-black transition-all font-mono text-xs cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-foreground" />
                <span>Quick search workbench...</span>
              </div>
              <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-secondary text-[9px] font-mono text-foreground border border-black">
                Ctrl K
              </kbd>
            </button>
          </div>

          <nav className="hidden lg:flex items-center h-full">
            <div className="flex items-center h-full border-r border-black">
              <Link href="/#tools" className="px-4 text-xs font-mono uppercase font-bold text-foreground hover:bg-accent h-14 flex items-center transition-colors border-l border-black">
                PDF Suite
              </Link>
              <Link href="/#tools" className="px-4 text-xs font-mono uppercase font-bold text-foreground hover:bg-accent h-14 flex items-center transition-colors border-l border-black">
                Dev Suite
              </Link>
              <Link href="/#tools" className="px-4 text-xs font-mono uppercase font-bold text-foreground hover:bg-accent h-14 flex items-center transition-colors border-l border-black">
                Text Suite
              </Link>
              <Link href="/#calculators" className="px-4 text-xs font-mono uppercase font-bold text-foreground hover:bg-accent h-14 flex items-center transition-colors border-l border-black">
                Calculators
              </Link>
            </div>
          </nav>

          {/* Mobile & Tablet Interface */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Search Icon tap for Mobile */}
            <button
              onClick={() => setCommandOpen(true)}
              className="p-2 border border-black hover:bg-accent transition-colors"
              title="Search"
            >
              <Search className="w-4 h-4 text-foreground" />
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="p-2 border border-black hover:bg-accent transition-colors"
              title="Menu"
            >
              {drawerOpen ? <X className="w-4 h-4 text-foreground" /> : <Menu className="w-4 h-4 text-foreground" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed top-14 right-0 bottom-0 z-40 w-64 bg-background border-l border-black p-6 flex flex-col justify-between lg:hidden animate-fade-in-scale">
            <div className="space-y-6">
              <h3 className="font-mono text-[10px] uppercase font-bold text-muted-foreground border-b border-black pb-2">
                Navigation Menu
              </h3>
              <ul className="space-y-4 font-mono text-sm font-bold uppercase">
                <li>
                  <Link href="/#tools" onClick={() => setDrawerOpen(false)} className="block hover:bg-accent p-2 border border-transparent hover:border-black transition-all">
                    PDF Suite
                  </Link>
                </li>
                <li>
                  <Link href="/#tools" onClick={() => setDrawerOpen(false)} className="block hover:bg-accent p-2 border border-transparent hover:border-black transition-all">
                    Developer Suite
                  </Link>
                </li>
                <li>
                  <Link href="/#tools" onClick={() => setDrawerOpen(false)} className="block hover:bg-accent p-2 border border-transparent hover:border-black transition-all">
                    Office Suite
                  </Link>
                </li>
                <li>
                  <Link href="/#tools" onClick={() => setDrawerOpen(false)} className="block hover:bg-accent p-2 border border-transparent hover:border-black transition-all">
                    Image Tools
                  </Link>
                </li>
                <li>
                  <Link href="/#tools" onClick={() => setDrawerOpen(false)} className="block hover:bg-accent p-2 border border-transparent hover:border-black transition-all">
                    Web Tools
                  </Link>
                </li>
                <li>
                  <Link href="/#tools" onClick={() => setDrawerOpen(false)} className="block hover:bg-accent p-2 border border-transparent hover:border-black transition-all">
                    Time Tools
                  </Link>
                </li>
                <li>
                  <Link href="/#calculators" onClick={() => setDrawerOpen(false)} className="block hover:bg-accent p-2 border border-transparent hover:border-black transition-all">
                    Calculators
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-border">
      <nav className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-[#5eead4] text-bg font-extrabold text-sm">
            AB
          </span>
          <span>
            AI Builder <span className="text-accent">Lab</span>
          </span>
        </Link>

        <ul className={`md:flex gap-8 list-none ${menuOpen ? "flex flex-col absolute top-16 left-0 right-0 bg-bg/95 backdrop-blur-xl p-6 gap-4 border-b border-border" : "hidden"}`}>
          <li>
            <a href="#learn" onClick={() => setMenuOpen(false)} className="text-sm text-text-muted hover:text-accent transition-colors">
              学習内容
            </a>
          </li>
          <li>
            <a href="#curriculum" onClick={() => setMenuOpen(false)} className="text-sm text-text-muted hover:text-accent transition-colors">
              カリキュラム
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="text-sm text-text-muted hover:text-accent transition-colors">
              FAQ
            </a>
          </li>
        </ul>

        <Link href="/login" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-dark transition-all hover:-translate-y-0.5">
          ログイン
        </Link>

        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="メニュー"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-text rounded-sm transition-all" />
          <span className="block w-6 h-0.5 bg-text rounded-sm transition-all" />
          <span className="block w-6 h-0.5 bg-text rounded-sm transition-all" />
        </button>
      </nav>
    </header>
  );
}

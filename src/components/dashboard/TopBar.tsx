"use client";

import { useAuth } from "@/lib/mock-auth";
import { Menu } from "lucide-react";

export default function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const { user } = useAuth();

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-bg/90 backdrop-blur-xl border-b border-border z-30 flex items-center justify-between px-4">
      <button onClick={onMenuClick} className="text-text-muted hover:text-text">
        <Menu className="w-6 h-6" />
      </button>
      <span className="text-sm font-bold">
        AI Builder <span className="text-accent">Lab</span>
      </span>
      <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">
        {user?.name?.charAt(0) || "U"}
      </div>
    </header>
  );
}

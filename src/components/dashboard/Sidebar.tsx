"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/mock-auth";
import { LayoutDashboard, BookOpen, Settings, LogOut, X } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "ダッシュボード", icon: LayoutDashboard },
  { href: "/dashboard/curriculum", label: "カリキュラム", icon: BookOpen },
  { href: "/dashboard/settings", label: "設定", icon: Settings },
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <>
      {/* Backdrop (mobile) */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[260px] bg-[#0d1321] border-r border-border z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-2.5 font-bold">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-accent to-[#5eead4] text-bg font-extrabold text-xs">
              AB
            </span>
            <span className="text-sm">
              AI Builder <span className="text-accent">Lab</span>
            </span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-text-muted hover:text-text">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-accent/15 text-accent border-l-2 border-accent"
                    : "text-text-muted hover:text-text hover:bg-bg-card"
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{user?.name || "ユーザー"}</p>
              <p className="text-xs text-text-dim truncate">{user?.email || ""}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-xs text-text-dim hover:text-red-400 transition-colors w-full"
          >
            <LogOut className="w-3.5 h-3.5" />
            ログアウト
          </button>
        </div>
      </aside>
    </>
  );
}

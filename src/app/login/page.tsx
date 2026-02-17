"use client";

import { useState } from "react";
import { useAuth } from "@/lib/mock-auth";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("demo@aibuilderlab.com");
  const [password, setPassword] = useState("demo1234");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-[#5eead4] text-bg font-extrabold text-sm">
            AB
          </span>
          <span className="text-xl font-bold">
            AI Builder <span className="text-accent">Lab</span>
          </span>
        </div>

        {/* Login Card */}
        <div className="bg-bg-card border border-border rounded-xl p-8">
          <h1 className="text-xl font-bold mb-6 text-center">ログイン</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-text-muted mb-1.5">メールアドレス</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-text-muted mb-1.5">パスワード</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-accent text-bg font-bold text-sm hover:bg-accent-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  ログイン中...
                </>
              ) : (
                "ログイン"
              )}
            </button>
          </form>
          <p className="text-xs text-text-dim text-center mt-4">
            デモ用アカウントで体験できます
          </p>
        </div>
      </div>
    </div>
  );
}

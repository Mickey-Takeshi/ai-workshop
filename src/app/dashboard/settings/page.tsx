"use client";

import { useState } from "react";
import { useAuth } from "@/lib/mock-auth";
import { Save, LogOut } from "lucide-react";

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    browser: false,
    weekly: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleNotif = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold mb-1">設定</h1>
        <p className="text-text-muted text-sm">アカウント・通知設定</p>
      </div>

      {/* Profile */}
      <div className="bg-bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="font-bold mb-4">プロフィール</h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xl font-bold">
            {name.charAt(0) || "U"}
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-text-dim">{user?.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-text-muted mb-1.5">表示名</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-text text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-text-muted mb-1.5">メールアドレス</label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full px-4 py-2.5 rounded-lg bg-bg border border-border text-text-dim text-sm cursor-not-allowed"
            />
          </div>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-bold text-sm hover:bg-accent-dark transition-colors"
          >
            <Save className="w-4 h-4" />
            {saved ? "保存しました!" : "保存"}
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="font-bold mb-4">通知設定</h2>
        <div className="space-y-4">
          <Toggle
            label="メール通知"
            desc="学習リマインダーをメールで受け取る"
            checked={notifications.email}
            onChange={() => toggleNotif("email")}
          />
          <Toggle
            label="ブラウザ通知"
            desc="ブラウザのプッシュ通知を有効にする"
            checked={notifications.browser}
            onChange={() => toggleNotif("browser")}
          />
          <Toggle
            label="週間レポート"
            desc="毎週の学習レポートをメールで受け取る"
            checked={notifications.weekly}
            onChange={() => toggleNotif("weekly")}
          />
        </div>
      </div>

      {/* Account */}
      <div className="bg-bg-card border border-border rounded-xl p-6">
        <h2 className="font-bold mb-4">アカウント</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">現在のプラン</p>
              <p className="text-xs text-text-dim">スタンダードプラン</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold">
              Standard
            </span>
          </div>
          <div className="border-t border-border pt-4">
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              ログアウト
            </button>
          </div>
          <div className="border-t border-border pt-4">
            <button
              disabled
              className="text-sm text-text-dim cursor-not-allowed"
            >
              アカウント削除（この機能は準備中です）
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  label,
  desc,
  checked,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-text-dim">{desc}</p>
      </div>
      <button
        onClick={onChange}
        className={`w-11 h-6 rounded-full relative transition-colors ${
          checked ? "bg-accent" : "bg-border-light"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

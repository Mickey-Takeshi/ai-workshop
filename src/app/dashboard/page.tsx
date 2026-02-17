"use client";

import { useAuth } from "@/lib/mock-auth";
import { mockProgress, curriculum } from "@/lib/mock-data";
import { Target, BookOpen, Clock, Flame, CheckCircle, Play, Award, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const progress = mockProgress;
  const pct = Math.round((progress.completedPhases / progress.totalPhases) * 100);

  const currentPart = curriculum
    .flatMap((s) => s.parts)
    .find((p) => p.id === progress.currentPart);

  const currentPhase = currentPart?.phases.find(
    (ph) => ph.id === progress.currentPhase
  );

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold mb-1">ダッシュボード</h1>
        <p className="text-text-muted text-sm">
          お帰りなさい、{user?.name}さん
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<Target className="w-5 h-5" />}
          label="全体進捗"
          value={`${pct}%`}
          sub={`${progress.completedPhases} / ${progress.totalPhases} フェーズ`}
        />
        <StatCard
          icon={<BookOpen className="w-5 h-5" />}
          label="学習中"
          value={`PART ${progress.currentPart}`}
          sub={currentPart?.title || ""}
        />
        <StatCard
          icon={<Clock className="w-5 h-5" />}
          label="学習時間"
          value={`${progress.totalStudyHours}h`}
          sub="累計学習時間"
        />
        <StatCard
          icon={<Flame className="w-5 h-5" />}
          label="連続学習"
          value={`${progress.streakDays}日`}
          sub="連続ログイン"
        />
      </div>

      {/* Section Progress */}
      <h2 className="text-lg font-bold mb-4">セクション別進捗</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {curriculum.map((sec) => {
          const sp = progress.sectionProgress[sec.id];
          const secPct = sp.total > 0 ? Math.round((sp.completed / sp.total) * 100) : 0;
          const gradClass =
            sec.id === "core"
              ? "from-accent to-[#5eead4]"
              : sec.id === "maintenance"
              ? "from-[#38bdf8] to-[#7dd3fc]"
              : "from-accent to-[#38bdf8]";
          return (
            <div key={sec.id} className="bg-bg-card border border-border rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-sm">{sec.title} / {sec.titleJa}</h3>
                  <p className="text-xs text-text-dim">{sec.partRange}</p>
                </div>
                <span className="text-xs font-bold text-accent">{secPct}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-border overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${gradClass} transition-all`}
                  style={{ width: `${secPct}%` }}
                />
              </div>
              <p className="text-xs text-text-dim mt-2">
                {sp.completed} / {sp.total} フェーズ完了
              </p>
            </div>
          );
        })}
      </div>

      {/* Continue Learning */}
      {currentPart && currentPhase && (
        <div className="bg-bg-card border border-accent/30 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold mb-2">学習を続ける</h2>
          <p className="text-text-muted text-sm mb-4">
            PART {currentPart.id}: {currentPart.title} - {currentPhase.title}
          </p>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-bg font-bold text-sm hover:bg-accent-dark transition-colors">
              続きから始める
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-text-dim">
              推定 {currentPhase.estimatedMinutes}分
            </span>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <h2 className="text-lg font-bold mb-4">最近のアクティビティ</h2>
      <div className="bg-bg-card border border-border rounded-xl divide-y divide-border">
        {progress.recentActivity.map((act) => (
          <div key={act.id} className="flex items-center gap-3 px-5 py-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              act.type === "phase_completed"
                ? "bg-green-500/15 text-green-400"
                : act.type === "part_started"
                ? "bg-accent/15 text-accent"
                : "bg-orange-500/15 text-orange-400"
            }`}>
              {act.type === "phase_completed" ? (
                <CheckCircle className="w-4 h-4" />
              ) : act.type === "part_started" ? (
                <Play className="w-4 h-4" />
              ) : (
                <Award className="w-4 h-4" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{act.title}</p>
              <p className="text-xs text-text-dim">
                {new Date(act.timestamp).toLocaleDateString("ja-JP", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
          {icon}
        </div>
        <span className="text-xs text-text-muted font-medium">{label}</span>
      </div>
      <p className="text-2xl font-extrabold mb-0.5">{value}</p>
      <p className="text-xs text-text-dim">{sub}</p>
    </div>
  );
}

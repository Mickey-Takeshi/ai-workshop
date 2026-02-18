"use client";

import { useState } from "react";
import { curriculum } from "@/lib/mock-data";
import type { SectionId } from "@/types";
import { ChevronDown, CheckCircle, PlayCircle, Lock, Circle } from "lucide-react";

type FilterTab = "all" | SectionId;

const tabs: { id: FilterTab; label: string }[] = [
  { id: "all", label: "すべて" },
  { id: "core", label: "Core (PART 1-9)" },
  { id: "maintenance", label: "Maintenance (PART 10-16)" },
  { id: "growth", label: "Growth (PART 17-30)" },
];

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [openPart, setOpenPart] = useState<number | null>(null);

  const filtered =
    activeTab === "all"
      ? curriculum
      : curriculum.filter((s) => s.id === activeTab);

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold mb-1">カリキュラム</h1>
        <p className="text-text-muted text-sm">
          3セクション・30パート・89フェーズ
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-accent/15 text-accent border border-accent/30"
                : "bg-bg-card border border-border text-text-muted hover:text-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sections */}
      {filtered.map((section) => {
        const gradClass =
          section.id === "core"
            ? "from-accent to-[#5eead4]"
            : section.id === "maintenance"
            ? "from-[#38bdf8] to-[#7dd3fc]"
            : "from-accent to-[#38bdf8]";
        const badgeGrad =
          section.id === "core"
            ? "bg-gradient-to-br from-accent to-[#5eead4]"
            : section.id === "maintenance"
            ? "bg-gradient-to-br from-[#38bdf8] to-[#7dd3fc]"
            : "bg-gradient-to-br from-accent to-[#38bdf8]";

        return (
          <div key={section.id} className="mb-10">
            {/* Section Header */}
            <div className={`rounded-xl p-5 mb-4 bg-gradient-to-r ${gradClass} text-bg`}>
              <span className="text-xs font-bold opacity-70">{section.partRange}</span>
              <h2 className="text-lg font-extrabold">
                {section.title} / {section.titleJa}
              </h2>
              <p className="text-sm opacity-80">
                {section.totalPhases}フェーズ / {section.estimatedHours}時間
              </p>
            </div>

            {/* Parts */}
            <div className="space-y-2">
              {section.parts.map((part) => {
                const isOpen = openPart === part.id;
                const completed = part.phases.filter(
                  (ph) => ph.status === "completed"
                ).length;
                const allDone = completed === part.phases.length;

                return (
                  <div
                    key={part.id}
                    className="bg-bg-card border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenPart(isOpen ? null : part.id)}
                      className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-bg-card-hover transition-colors"
                    >
                      <span
                        className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded text-[0.7rem] font-bold text-bg shrink-0 ${badgeGrad}`}
                      >
                        PART {part.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-sm">{part.title}</span>
                        <span className="text-text-muted text-xs ml-3 max-sm:hidden">
                          {part.subtitle}
                        </span>
                      </div>
                      <span className="text-xs text-text-dim shrink-0">
                        {completed}/{part.phases.length}
                      </span>
                      {allDone && (
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      )}
                      <ChevronDown
                        className={`w-4 h-4 text-text-dim shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-border px-5 py-3 space-y-1">
                        {part.phases.map((phase) => (
                          <div
                            key={phase.id}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                              phase.status === "locked"
                                ? "opacity-50"
                                : "hover:bg-bg-card-hover cursor-pointer"
                            }`}
                          >
                            {phase.status === "completed" ? (
                              <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                            ) : phase.status === "in_progress" ? (
                              <PlayCircle className="w-4 h-4 text-accent shrink-0 animate-pulse" />
                            ) : phase.status === "locked" ? (
                              <Lock className="w-3.5 h-3.5 text-text-dim shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-text-muted shrink-0" />
                            )}
                            <span
                              className={`flex-1 ${
                                phase.status === "completed"
                                  ? "text-text-muted line-through"
                                  : phase.status === "in_progress"
                                  ? "text-accent font-medium"
                                  : ""
                              }`}
                            >
                              {phase.title}
                            </span>
                            <span className="text-xs text-text-dim shrink-0">
                              {phase.estimatedMinutes}分
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export interface User {
  id: string;
  name: string;
  email: string;
  plan: "free_trial" | "standard" | "premium";
  joinedAt: string;
}

export type SectionId = "core" | "maintenance" | "growth";

export interface Phase {
  id: string;
  title: string;
  estimatedMinutes: number;
  status: "locked" | "available" | "in_progress" | "completed";
}

export interface Part {
  id: number;
  title: string;
  subtitle: string;
  section: SectionId;
  phases: Phase[];
}

export interface CurriculumSection {
  id: SectionId;
  title: string;
  titleJa: string;
  partRange: string;
  totalPhases: number;
  estimatedHours: string;
  parts: Part[];
}

export interface UserProgress {
  completedPhases: number;
  totalPhases: number;
  currentPart: number;
  currentPhase: string;
  streakDays: number;
  totalStudyHours: number;
  sectionProgress: Record<SectionId, { completed: number; total: number }>;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: "phase_completed" | "part_started" | "streak";
  title: string;
  timestamp: string;
  partId: number;
}

import { User, CurriculumSection, UserProgress } from "@/types";

export const mockUser: User = {
  id: "user_001",
  name: "田中太郎",
  email: "demo@aibuilderlab.com",
  plan: "standard",
  joinedAt: "2026-01-15T00:00:00Z",
};

function p(partId: number, phaseNum: number, title: string, min: number, status: "locked" | "available" | "in_progress" | "completed") {
  return { id: `p${partId}-${phaseNum}`, title, estimatedMinutes: min, status };
}

export const curriculum: CurriculumSection[] = [
  {
    id: "core",
    title: "Core",
    titleJa: "基盤構築",
    partRange: "PART 1-9",
    totalPhases: 26,
    estimatedHours: "15〜25",
    parts: [
      // PART 1: Foundation - Phase 0-2
      { id: 1, title: "Foundation", subtitle: "スターター、タスク機能、設定ページ", section: "core", phases: [
        p(1,0,"スターター構築 + 本番公開",60,"completed"), p(1,1,"タスク機能",45,"completed"), p(1,2,"設定ページ",30,"completed"),
      ]},
      // PART 2: Database - Phase 3-5
      { id: 2, title: "Database", subtitle: "Supabase、Auth、ワークスペース", section: "core", phases: [
        p(2,3,"Supabase セットアップ",45,"completed"), p(2,4,"Supabase Auth",60,"completed"), p(2,5,"ワークスペース + ロール",60,"completed"),
      ]},
      // PART 3: CRM - Phase 6-8
      { id: 3, title: "CRM", subtitle: "リード、クライアント、アプローチ", section: "core", phases: [
        p(3,6,"リード管理",60,"completed"), p(3,7,"クライアント管理",45,"completed"), p(3,8,"アプローチ履歴",45,"completed"),
      ]},
      // PART 4: 3-Layer - Phase 9-11
      { id: 4, title: "3-Layer", subtitle: "Task 4象限、Action Map、OKR", section: "core", phases: [
        p(4,9,"Task 4象限",60,"completed"), p(4,10,"Action Map",90,"completed"), p(4,11,"OKR",60,"completed"),
      ]},
      // PART 5: Google - Phase 12-14
      { id: 5, title: "Google", subtitle: "OAuth拡張、Calendar、Tasks", section: "core", phases: [
        p(5,12,"Google Calendar/Tasks 連携",90,"completed"), p(5,13,"Calendar 同期",60,"in_progress"), p(5,14,"Tasks 同期",60,"available"),
      ]},
      // PART 6: Business - Phase 15-17
      { id: 6, title: "Business", subtitle: "Brand、Lean Canvas、MVV", section: "core", phases: [
        p(6,15,"Brand Strategy",45,"available"), p(6,16,"Lean Canvas",45,"locked"), p(6,17,"MVV",30,"locked"),
      ]},
      // PART 7: Admin - Phase 18-19
      { id: 7, title: "Admin", subtitle: "Workspace Admin、Super Admin", section: "core", phases: [
        p(7,18,"Workspace Admin",45,"locked"), p(7,19,"Super Admin (SA)",60,"locked"),
      ]},
      // PART 8: Non-Func - Phase 20-22
      { id: 8, title: "Non-Func", subtitle: "セキュリティ、テスト戦略、デプロイ", section: "core", phases: [
        p(8,20,"セキュリティ",60,"locked"), p(8,21,"テスト戦略 + ログ監視",90,"locked"), p(8,22,"デプロイ + パフォーマンス",45,"locked"),
      ]},
      // PART 9: PWA & LP - Phase 23-25
      { id: 9, title: "PWA & LP", subtitle: "PWA設定、ランディングページ、卒業のお祝い", section: "core", phases: [
        p(9,23,"PWA設定",60,"locked"), p(9,24,"ランディングページ作成",90,"locked"), p(9,25,"UI改善 & 卒業のお祝い",90,"locked"),
      ]},
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    titleJa: "運用・保守",
    partRange: "PART 10-16",
    totalPhases: 21,
    estimatedHours: "10〜20",
    parts: [
      // PART 10: Operations - Phase 26-28
      { id: 10, title: "Operations", subtitle: "運用・監視（バージョン管理、DB、ログ）", section: "maintenance", phases: [
        p(10,26,"バージョン管理",60,"locked"), p(10,27,"DBメンテナンス",45,"locked"), p(10,28,"監視・障害対応",45,"locked"),
      ]},
      // PART 11: DevEnv - Phase 29-31
      { id: 11, title: "DevEnv", subtitle: "開発環境（テスト環境、Claude MAX、CI/CD）", section: "maintenance", phases: [
        p(11,29,"テスト環境構築 & 認証トラブルシューティング",90,"locked"), p(11,30,"Claude MAX マルチアカウント運用",30,"locked"), p(11,31,"CI/CD・GitHub Actions",90,"locked"),
      ]},
      // PART 12: Architecture - Phase 32-34
      { id: 12, title: "Architecture", subtitle: "アーキテクチャ（UX設計、コマンドパターン、状態管理）", section: "maintenance", phases: [
        p(12,32,"UX & アーキテクチャ改善",60,"locked"), p(12,33,"コマンドパターンによるデータ保存",90,"locked"), p(12,34,"状態管理パターン",90,"locked"),
      ]},
      // PART 13: Performance - Phase 35-37
      { id: 13, title: "Performance", subtitle: "パフォーマンス（クエリ、FE、キャッシュ・楽観的UI）", section: "maintenance", phases: [
        p(13,35,"クエリ最適化",90,"locked"), p(13,36,"フロントエンドパフォーマンス",90,"locked"), p(13,37,"キャッシュ戦略・楽観的UI",90,"locked"),
      ]},
      // PART 14: Code Quality - Phase 38-40
      { id: 14, title: "Code Quality", subtitle: "コード品質（整理、デバッグ、レビュー）", section: "maintenance", phases: [
        p(14,38,"重複ファイル・孤立ファイル整理",45,"locked"), p(14,39,"デバッグ手法と HAR ファイル分析",60,"locked"), p(14,40,"コードレビュー・リファクタリング",90,"locked"),
      ]},
      // PART 15: Security - Phase 41-43
      { id: 15, title: "Security", subtitle: "セキュリティ（脆弱性対応、バックアップ、認証・認可）", section: "maintenance", phases: [
        p(15,41,"セキュリティ監視と脆弱性対応",45,"locked"), p(15,42,"バックアップと災害復旧（3層）",45,"locked"), p(15,43,"認証・認可の深掘り",90,"locked"),
      ]},
      // PART 16: Documentation - Phase 44-46
      { id: 16, title: "Documentation", subtitle: "ドキュメント（ランブック、FW移行、運用ドキュメント）", section: "maintenance", phases: [
        p(16,44,"ドキュメント更新・ランブック作成",60,"locked"), p(16,45,"Next.js 16 移行ガイド",60,"locked"), p(16,46,"運用ドキュメント",60,"locked"),
      ]},
    ],
  },
  {
    id: "growth",
    title: "Growth",
    titleJa: "事業成長",
    partRange: "PART 17-30",
    totalPhases: 42,
    estimatedHours: "20〜40",
    parts: [
      // PART 17: Billing - Phase 47-49
      { id: 17, title: "Billing", subtitle: "課金・決済（Stripe、サブスクリプション、請求管理）", section: "growth", phases: [
        p(17,47,"決済基盤の設計と実装",120,"locked"), p(17,48,"価格設定とStripe商品登録",90,"locked"), p(17,49,"課金状態の管理",90,"locked"),
      ]},
      // PART 18: Google OAuth認可 - Phase 50-52
      { id: 18, title: "Google OAuth認可", subtitle: "本番認可取得（OAuth同意画面、利用規約、審査申請）", section: "growth", phases: [
        p(18,50,"OAuth同意画面の設定",30,"locked"), p(18,51,"プライバシーポリシーと利用規約の作成",60,"locked"), p(18,52,"審査申請と対応",45,"locked"),
      ]},
      // PART 19: Product Strategy - Phase 53-55
      { id: 19, title: "Product Strategy", subtitle: "プロダクト戦略（PMF計測、価格戦略、機能開発優先度）", section: "growth", phases: [
        p(19,53,"プロダクト戦略の基礎",60,"locked"), p(19,54,"ロードマップと優先順位",60,"locked"), p(19,55,"プライシング戦略",60,"locked"),
      ]},
      // PART 20: Customer Lifecycle - Phase 56-58
      { id: 20, title: "Customer Lifecycle", subtitle: "顧客ライフサイクル（オンボーディング、解約防止、NPS）", section: "growth", phases: [
        p(20,56,"オンボーディング設計",90,"locked"), p(20,57,"リテンション施策",90,"locked"), p(20,58,"チャーン防止",90,"locked"),
      ]},
      // PART 21: Analytics - Phase 59-61
      { id: 21, title: "Analytics", subtitle: "分析・計測（イベントトラッキング、ファネル分析、コホート）", section: "growth", phases: [
        p(21,59,"分析基盤の構築",90,"locked"), p(21,60,"KPIダッシュボード",90,"locked"), p(21,61,"A/Bテストと実験",90,"locked"),
      ]},
      // PART 22: AI Integration - Phase 62-64
      { id: 22, title: "AI Integration", subtitle: "AI統合（Claude API、プロンプト設計、レスポンス処理）", section: "growth", phases: [
        p(22,62,"AI機能の設計",90,"locked"), p(22,63,"AI機能の実装",120,"locked"), p(22,64,"AIのUXとガードレール",90,"locked"),
      ]},
      // PART 23: AI Ops - Phase 65-67
      { id: 23, title: "AI Ops", subtitle: "AI運用・監視（コスト管理、品質モニタリング、ガードレール）", section: "growth", phases: [
        p(23,65,"AI監視とコスト管理",90,"locked"), p(23,66,"AI品質管理",90,"locked"), p(23,67,"AI障害対応",90,"locked"),
      ]},
      // PART 24: Scaling - Phase 68-70
      { id: 24, title: "Scaling", subtitle: "スケーリング（負荷対策、マルチリージョン、キャパシティ）", section: "growth", phases: [
        p(24,68,"データベーススケーリング",90,"locked"), p(24,69,"アプリケーションスケーリング",90,"locked"), p(24,70,"負荷テストと監視",90,"locked"),
      ]},
      // PART 25: Team - Phase 71-73
      { id: 25, title: "Team", subtitle: "チーム開発（ブランチ戦略、コードオーナー、知識共有）", section: "growth", phases: [
        p(25,71,"開発プロセスの標準化",90,"locked"), p(25,72,"チームコラボレーション",90,"locked"), p(25,73,"オンボーディングと知識共有",90,"locked"),
      ]},
      // PART 26: Founder OS - Phase 74-76
      { id: 26, title: "Founder OS", subtitle: "創業者の仕組み化（経営ダッシュボード、プロセス、時間管理）", section: "growth", phases: [
        p(26,74,"経営ダッシュボード",90,"locked"), p(26,75,"プロセスの仕組み化",90,"locked"), p(26,76,"創業者の時間管理",90,"locked"),
      ]},
      // PART 27: Compliance - Phase 77-79
      { id: 27, title: "Compliance", subtitle: "法令遵守（利用規約、GDPR、監査ログ）", section: "growth", phases: [
        p(27,77,"利用規約・プライバシーポリシー",90,"locked"), p(27,78,"GDPR / 個人情報保護法対応",90,"locked"), p(27,79,"監査ログ・コンプライアンスレポート",90,"locked"),
      ]},
      // PART 28: i18n - Phase 80-82
      { id: 28, title: "i18n", subtitle: "国際化（多言語対応、ローカライズ）", section: "growth", phases: [
        p(28,80,"国際化基盤（next-intl設定）",90,"locked"), p(28,81,"翻訳ワークフロー",90,"locked"), p(28,82,"ローカライズ（通貨・日付・文化）",90,"locked"),
      ]},
      // PART 29: Mobile - Phase 83-85
      { id: 29, title: "Mobile", subtitle: "モバイル対応（React Native、プッシュ通知）", section: "growth", phases: [
        p(29,83,"React Native / Expo 基盤",90,"locked"), p(29,84,"モバイル最適化UI",90,"locked"), p(29,85,"プッシュ通知・オフライン対応",90,"locked"),
      ]},
      // PART 30: React Performance - Phase 86-88
      { id: 30, title: "React Performance", subtitle: "Reactパフォーマンス最適化（非同期並列化、バンドルサイズ、再レンダリング）", section: "growth", phases: [
        p(30,86,"非同期ウォーターフォール排除",45,"locked"), p(30,87,"バンドルサイズ最適化",45,"locked"), p(30,88,"再レンダリング最適化",45,"locked"),
      ]},
    ],
  },
];

export const mockProgress: UserProgress = {
  completedPhases: 13,
  totalPhases: 89,
  currentPart: 5,
  currentPhase: "p5-13",
  streakDays: 7,
  totalStudyHours: 23.5,
  sectionProgress: {
    core: { completed: 13, total: 26 },
    maintenance: { completed: 0, total: 21 },
    growth: { completed: 0, total: 42 },
  },
  recentActivity: [
    { id: "a1", type: "phase_completed", title: "Google Calendar/Tasks 連携完了", timestamp: "2026-02-17T10:30:00Z", partId: 5 },
    { id: "a2", type: "part_started", title: "PART 5: Google を開始", timestamp: "2026-02-16T14:00:00Z", partId: 5 },
    { id: "a3", type: "phase_completed", title: "OKR 完了", timestamp: "2026-02-15T16:45:00Z", partId: 4 },
    { id: "a4", type: "streak", title: "7日連続ログイン達成!", timestamp: "2026-02-14T00:00:00Z", partId: 0 },
    { id: "a5", type: "phase_completed", title: "Action Map 完了", timestamp: "2026-02-13T11:20:00Z", partId: 4 },
  ],
};

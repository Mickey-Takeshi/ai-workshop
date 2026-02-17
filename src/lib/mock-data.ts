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
      { id: 1, title: "Foundation", subtitle: "スターター構築と本番公開", section: "core", phases: [
        p(1,1,"プロジェクト初期設定・Claude Code環境構築",45,"completed"), p(1,2,"Next.js + Supabase スターター構築",30,"completed"), p(1,3,"Vercel本番デプロイ",30,"completed"),
      ]},
      { id: 2, title: "Database", subtitle: "Supabaseでのスキーマ設計", section: "core", phases: [
        p(2,1,"Supabaseプロジェクト設定・テーブル設計",60,"completed"), p(2,2,"RLS（Row Level Security）ポリシー設計",45,"completed"), p(2,3,"リレーション・インデックス最適化",30,"completed"),
      ]},
      { id: 3, title: "CRM", subtitle: "顧客管理機能の実装", section: "core", phases: [
        p(3,1,"顧客一覧・検索画面",60,"completed"), p(3,2,"フィルター・ソート機能",45,"completed"), p(3,3,"顧客詳細・ステータス管理",45,"completed"),
      ]},
      { id: 4, title: "3-Layer", subtitle: "OKR → ActionMap → Task の設計", section: "core", phases: [
        p(4,1,"OKR設計と実装",60,"completed"), p(4,2,"ActionMap → Task連携",45,"completed"), p(4,3,"カンバンボード・ドラッグ&ドロップ",60,"completed"),
      ]},
      { id: 5, title: "Google", subtitle: "Calendar・Tasksとの統合", section: "core", phases: [
        p(5,1,"Google OAuth認証フロー",60,"completed"), p(5,2,"Google Calendar API連携",45,"in_progress"), p(5,3,"Google Tasks同期",45,"available"),
      ]},
      { id: 6, title: "Business", subtitle: "ブランド・戦略ツール", section: "core", phases: [
        p(6,1,"ブランドプロフィール管理",60,"available"), p(6,2,"競合分析ツール",45,"locked"), p(6,3,"戦略マップ作成",45,"locked"),
      ]},
      { id: 7, title: "Admin", subtitle: "管理機能・権限設計", section: "core", phases: [
        p(7,1,"管理者ダッシュボード",60,"locked"), p(7,2,"ユーザー管理・ロール制御",45,"locked"),
      ]},
      { id: 8, title: "Non-Func", subtitle: "セキュリティ・テスト・監視", section: "core", phases: [
        p(8,1,"セキュリティ対策・脆弱性チェック",45,"locked"), p(8,2,"ユニットテスト・E2Eテスト",60,"locked"), p(8,3,"エラーモニタリング・ログ監視",30,"locked"),
      ]},
      { id: 9, title: "PWA & LP", subtitle: "PWA化とランディングページ", section: "core", phases: [
        p(9,1,"Service Worker設定・PWA化",45,"locked"), p(9,2,"ランディングページ構築",60,"locked"), p(9,3,"SEO・OGP最適化",30,"locked"),
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
      { id: 10, title: "Operations", subtitle: "バージョン管理・DBメンテナンス・障害対応", section: "maintenance", phases: [
        p(10,1,"Git運用フロー・ブランチ管理",45,"locked"), p(10,2,"DBマイグレーション・バックアップ",60,"locked"), p(10,3,"インシデント対応・障害復旧",45,"locked"),
      ]},
      { id: 11, title: "DevEnv", subtitle: "テスト環境・マルチアカウント・CI/CD", section: "maintenance", phases: [
        p(11,1,"ステージング環境構築",60,"locked"), p(11,2,"GitHub Actions CI/CDパイプライン",60,"locked"), p(11,3,"マルチアカウント・自動テスト",45,"locked"),
      ]},
      { id: 12, title: "Architecture", subtitle: "UX改善・コマンドパターン・状態管理", section: "maintenance", phases: [
        p(12,1,"UX改善・ユーザビリティ向上",60,"locked"), p(12,2,"コマンドパターン・デザインパターン適用",45,"locked"), p(12,3,"グローバル状態管理の最適化",45,"locked"),
      ]},
      { id: 13, title: "Performance", subtitle: "クエリ最適化・フロントエンド・キャッシュ", section: "maintenance", phases: [
        p(13,1,"Supabaseクエリ最適化",60,"locked"), p(13,2,"Reactレンダリング最適化",45,"locked"), p(13,3,"キャッシュ戦略・CDN活用",45,"locked"),
      ]},
      { id: 14, title: "Code Quality", subtitle: "ファイル整理・デバッグ・レビュー", section: "maintenance", phases: [
        p(14,1,"ESLint/Prettier設定・コード規約",30,"locked"), p(14,2,"コードレビュープロセス構築",45,"locked"), p(14,3,"技術的負債の解消・リファクタリング",45,"locked"),
      ]},
      { id: 15, title: "Security", subtitle: "脆弱性対応・バックアップ・認証深掘り", section: "maintenance", phases: [
        p(15,1,"OWASP Top10対策",60,"locked"), p(15,2,"バックアップ・リストア戦略",45,"locked"), p(15,3,"Supabase RLS・認証の深掘り",45,"locked"),
      ]},
      { id: 16, title: "Documentation", subtitle: "ランブック・移行ガイド・運用ドキュメント", section: "maintenance", phases: [
        p(16,1,"運用ランブック作成",45,"locked"), p(16,2,"APIドキュメント整備",45,"locked"), p(16,3,"移行手順書・README",30,"locked"),
      ]},
    ],
  },
  {
    id: "growth",
    title: "Growth",
    titleJa: "事業成長",
    partRange: "PART 17-29",
    totalPhases: 39,
    estimatedHours: "20〜35",
    parts: [
      { id: 17, title: "Billing", subtitle: "課金・決済（Stripe、サブスクリプション）", section: "growth", phases: [
        p(17,1,"料金プラン設計・Stripe導入",45,"locked"), p(17,2,"Stripe Checkout・サブスクリプション",60,"locked"), p(17,3,"Webhook処理・請求管理",45,"locked"),
      ]},
      { id: 18, title: "Google OAuth認可", subtitle: "本番環境でのGoogle OAuth認可取得", section: "growth", phases: [
        p(18,1,"OAuth同意画面の設定",45,"locked"), p(18,2,"本番審査申請・スコープ設定",60,"locked"), p(18,3,"認可取得後のテスト・運用",45,"locked"),
      ]},
      { id: 19, title: "Product Strategy", subtitle: "PMF計測・価格戦略・機能優先度", section: "growth", phases: [
        p(19,1,"PMF計測・ユーザーインタビュー",45,"locked"), p(19,2,"価格戦略・プライシング設計",60,"locked"), p(19,3,"機能優先度マトリクス",30,"locked"),
      ]},
      { id: 20, title: "Customer Lifecycle", subtitle: "オンボーディング・解約防止・NPS", section: "growth", phases: [
        p(20,1,"オンボーディングフロー構築",60,"locked"), p(20,2,"チャーン分析・解約防止施策",45,"locked"), p(20,3,"NPS調査・カスタマーサクセス",30,"locked"),
      ]},
      { id: 21, title: "Analytics", subtitle: "イベントトラッキング・ファネル・コホート", section: "growth", phases: [
        p(21,1,"イベントトラッキング設計",60,"locked"), p(21,2,"ファネル分析ダッシュボード",45,"locked"), p(21,3,"コホート分析・KPIモニタリング",45,"locked"),
      ]},
      { id: 22, title: "AI Integration", subtitle: "Claude API・プロンプト設計・レスポンス処理", section: "growth", phases: [
        p(22,1,"Claude API統合・初期設定",60,"locked"), p(22,2,"プロンプトエンジニアリング",45,"locked"), p(22,3,"ストリーミングレスポンス処理",45,"locked"),
      ]},
      { id: 23, title: "AI Ops", subtitle: "コスト管理・品質モニタリング・ガードレール", section: "growth", phases: [
        p(23,1,"APIコスト最適化・レート制限",45,"locked"), p(23,2,"品質モニタリング・ログ分析",45,"locked"), p(23,3,"安全性ガードレール・フォールバック",45,"locked"),
      ]},
      { id: 24, title: "Scaling", subtitle: "負荷対策・マルチリージョン・キャパシティ", section: "growth", phases: [
        p(24,1,"負荷テスト・パフォーマンス計測",60,"locked"), p(24,2,"マルチリージョンデプロイ",45,"locked"), p(24,3,"キャパシティプランニング",45,"locked"),
      ]},
      { id: 25, title: "Team", subtitle: "ブランチ戦略・コードオーナー・知識共有", section: "growth", phases: [
        p(25,1,"ブランチ戦略設計（Git Flow/Trunk Based）",45,"locked"), p(25,2,"コードオーナー制度・PRプロセス",30,"locked"), p(25,3,"技術共有会・ナレッジベース構築",30,"locked"),
      ]},
      { id: 26, title: "Founder OS", subtitle: "経営ダッシュボード・プロセス・時間管理", section: "growth", phases: [
        p(26,1,"MRRダッシュボード・経営KPI",60,"locked"), p(26,2,"業務プロセス自動化",45,"locked"), p(26,3,"時間管理・創業者ワークフロー",30,"locked"),
      ]},
      { id: 27, title: "Compliance", subtitle: "利用規約・GDPR・監査ログ", section: "growth", phases: [
        p(27,1,"利用規約・プライバシーポリシー実装",45,"locked"), p(27,2,"GDPR対応・個人情報管理",45,"locked"), p(27,3,"監査ログ・データエクスポート",30,"locked"),
      ]},
      { id: 28, title: "i18n", subtitle: "多言語対応・ローカライズ", section: "growth", phases: [
        p(28,1,"多言語フレームワーク導入（next-intl）",60,"locked"), p(28,2,"翻訳ワークフロー・ロケール管理",45,"locked"), p(28,3,"RTL対応・地域別最適化",30,"locked"),
      ]},
      { id: 29, title: "Mobile", subtitle: "React Native・プッシュ通知・オフライン対応", section: "growth", phases: [
        p(29,1,"React Nativeセットアップ・UI構築",60,"locked"), p(29,2,"プッシュ通知・ディープリンク",45,"locked"), p(29,3,"オフライン対応・アプリストア申請",45,"locked"),
      ]},
    ],
  },
];

export const mockProgress: UserProgress = {
  completedPhases: 15,
  totalPhases: 86,
  currentPart: 5,
  currentPhase: "p5-2",
  streakDays: 7,
  totalStudyHours: 23.5,
  sectionProgress: {
    core: { completed: 14, total: 26 },
    maintenance: { completed: 0, total: 21 },
    growth: { completed: 0, total: 39 },
  },
  recentActivity: [
    { id: "a1", type: "phase_completed", title: "Google OAuth認証フロー完了", timestamp: "2026-02-17T10:30:00Z", partId: 5 },
    { id: "a2", type: "part_started", title: "PART 5: Google を開始", timestamp: "2026-02-16T14:00:00Z", partId: 5 },
    { id: "a3", type: "phase_completed", title: "カンバンボード・ドラッグ&ドロップ完了", timestamp: "2026-02-15T16:45:00Z", partId: 4 },
    { id: "a4", type: "streak", title: "7日連続ログイン達成!", timestamp: "2026-02-14T00:00:00Z", partId: 0 },
    { id: "a5", type: "phase_completed", title: "ActionMap → Task連携完了", timestamp: "2026-02-13T11:20:00Z", partId: 4 },
  ],
};

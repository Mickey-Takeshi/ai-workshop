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
        p(1,1,"プロジェクト初期設定",45,"completed"), p(1,2,"開発環境構築",30,"completed"), p(1,3,"Vercelデプロイ",30,"completed"),
      ]},
      { id: 2, title: "Database", subtitle: "Firebase でのスキーマ設計", section: "core", phases: [
        p(2,1,"Firestore データモデリング",60,"completed"), p(2,2,"セキュリティルール設計",45,"completed"), p(2,3,"インデックス最適化",30,"completed"),
      ]},
      { id: 3, title: "CRM", subtitle: "顧客管理機能の実装", section: "core", phases: [
        p(3,1,"顧客一覧画面",60,"completed"), p(3,2,"検索・フィルター機能",45,"completed"), p(3,3,"顧客詳細・ステータス管理",45,"completed"),
      ]},
      { id: 4, title: "Task System", subtitle: "OKR → Action → Task の設計", section: "core", phases: [
        p(4,1,"OKR設計と実装",60,"completed"), p(4,2,"タスクCRUD",45,"completed"), p(4,3,"カンバンボード",60,"completed"),
      ]},
      { id: 5, title: "Auth", subtitle: "認証・認可・セッション管理", section: "core", phases: [
        p(5,1,"OAuth認証フロー",60,"completed"), p(5,2,"セッション管理の実装",45,"in_progress"), p(5,3,"ロールベースアクセス制御",45,"available"),
      ]},
      { id: 6, title: "Integration", subtitle: "外部サービス連携", section: "core", phases: [
        p(6,1,"Google Calendar連携",60,"available"), p(6,2,"Slack通知",45,"locked"), p(6,3,"Webhook実装",45,"locked"),
      ]},
      { id: 7, title: "Admin", subtitle: "管理機能・権限設計", section: "core", phases: [
        p(7,1,"管理者ダッシュボード",60,"locked"), p(7,2,"ユーザー管理",45,"locked"),
      ]},
      { id: 8, title: "Quality", subtitle: "テスト・セキュリティ・監視", section: "core", phases: [
        p(8,1,"ユニットテスト",45,"locked"), p(8,2,"E2Eテスト",60,"locked"), p(8,3,"エラーモニタリング",30,"locked"),
      ]},
      { id: 9, title: "PWA & LP", subtitle: "PWA化とランディングページ", section: "core", phases: [
        p(9,1,"Service Worker設定",45,"locked"), p(9,2,"ランディングページ構築",60,"locked"),
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
        p(10,1,"Git運用フロー",45,"locked"), p(10,2,"DBマイグレーション",60,"locked"), p(10,3,"インシデント対応",45,"locked"),
      ]},
      { id: 11, title: "DevEnv", subtitle: "テスト環境・マルチアカウント・CI/CD", section: "maintenance", phases: [
        p(11,1,"ステージング環境構築",60,"locked"), p(11,2,"GitHub Actions CI/CD",60,"locked"), p(11,3,"自動テスト設定",45,"locked"),
      ]},
      { id: 12, title: "Architecture", subtitle: "UX改善・デザインパターン・状態管理", section: "maintenance", phases: [
        p(12,1,"コンポーネント設計改善",60,"locked"), p(12,2,"状態管理パターン",45,"locked"), p(12,3,"アクセシビリティ対応",45,"locked"),
      ]},
      { id: 13, title: "Performance", subtitle: "クエリ最適化・フロントエンド・キャッシュ", section: "maintenance", phases: [
        p(13,1,"Firestoreクエリ最適化",60,"locked"), p(13,2,"Reactレンダリング最適化",45,"locked"), p(13,3,"キャッシュ戦略",45,"locked"),
      ]},
      { id: 14, title: "Code Quality", subtitle: "ファイル整理・デバッグ・レビュー", section: "maintenance", phases: [
        p(14,1,"ESLint/Prettier設定",30,"locked"), p(14,2,"コードレビュープロセス",45,"locked"), p(14,3,"技術的負債の解消",45,"locked"),
      ]},
      { id: 15, title: "Security", subtitle: "脆弱性対応・バックアップ・認証深掘り", section: "maintenance", phases: [
        p(15,1,"OWASP Top10対策",60,"locked"), p(15,2,"バックアップ戦略",45,"locked"), p(15,3,"セキュリティルール深掘り",45,"locked"),
      ]},
      { id: 16, title: "Documentation", subtitle: "ランブック・移行ガイド・運用ドキュメント", section: "maintenance", phases: [
        p(16,1,"運用ランブック",45,"locked"), p(16,2,"APIドキュメント",45,"locked"), p(16,3,"移行手順書",30,"locked"),
      ]},
    ],
  },
  {
    id: "growth",
    title: "Growth",
    titleJa: "事業成長",
    partRange: "PART 17-29",
    totalPhases: 38,
    estimatedHours: "20〜35",
    parts: [
      { id: 17, title: "Pricing", subtitle: "料金プラン・Stripe連携", section: "growth", phases: [
        p(17,1,"料金プラン設計",45,"locked"), p(17,2,"Stripe Checkout",60,"locked"), p(17,3,"Webhook処理",45,"locked"),
      ]},
      { id: 18, title: "Billing", subtitle: "請求管理・インボイス対応", section: "growth", phases: [
        p(18,1,"サブスクリプション管理",60,"locked"), p(18,2,"インボイス発行",45,"locked"), p(18,3,"プラン変更処理",45,"locked"),
      ]},
      { id: 19, title: "Email", subtitle: "トランザクションメール・通知", section: "growth", phases: [
        p(19,1,"メールテンプレート設計",45,"locked"), p(19,2,"トランザクションメール",60,"locked"), p(19,3,"通知設定管理",30,"locked"),
      ]},
      { id: 20, title: "Customer Lifecycle", subtitle: "オンボーディング・解約防止・NPS", section: "growth", phases: [
        p(20,1,"オンボーディングフロー",60,"locked"), p(20,2,"チャーン分析",45,"locked"), p(20,3,"NPS調査実装",30,"locked"),
      ]},
      { id: 21, title: "Analytics", subtitle: "イベントトラッキング・ファネル・コホート", section: "growth", phases: [
        p(21,1,"イベントトラッキング",60,"locked"), p(21,2,"ファネル分析",45,"locked"), p(21,3,"コホート分析",45,"locked"),
      ]},
      { id: 22, title: "AI Integration", subtitle: "AI API・プロンプト設計・レスポンス処理", section: "growth", phases: [
        p(22,1,"Claude API統合",60,"locked"), p(22,2,"プロンプトエンジニアリング",45,"locked"), p(22,3,"ストリーミングレスポンス",45,"locked"),
      ]},
      { id: 23, title: "AI Ops", subtitle: "コスト管理・品質モニタリング・ガードレール", section: "growth", phases: [
        p(23,1,"APIコスト最適化",45,"locked"), p(23,2,"品質モニタリング",45,"locked"), p(23,3,"ガードレール設計",45,"locked"),
      ]},
      { id: 24, title: "Scaling", subtitle: "負荷対策・マルチリージョン・キャパシティ", section: "growth", phases: [
        p(24,1,"負荷テスト",60,"locked"), p(24,2,"CDN最適化",45,"locked"),
      ]},
      { id: 25, title: "Team", subtitle: "ブランチ戦略・コードオーナー・知識共有", section: "growth", phases: [
        p(25,1,"ブランチ戦略設計",45,"locked"), p(25,2,"コードオーナー制度",30,"locked"), p(25,3,"技術共有会の仕組み",30,"locked"),
      ]},
      { id: 26, title: "Founder OS", subtitle: "経営ダッシュボード・プロセス・時間管理", section: "growth", phases: [
        p(26,1,"MRRダッシュボード",60,"locked"), p(26,2,"業務プロセス自動化",45,"locked"),
      ]},
      { id: 27, title: "Compliance", subtitle: "利用規約・GDPR・監査ログ", section: "growth", phases: [
        p(27,1,"利用規約実装",45,"locked"), p(27,2,"監査ログ",45,"locked"),
      ]},
      { id: 28, title: "i18n", subtitle: "多言語対応・ローカライズ", section: "growth", phases: [
        p(28,1,"多言語フレームワーク導入",60,"locked"), p(28,2,"翻訳ワークフロー",45,"locked"),
      ]},
      { id: 29, title: "Mobile", subtitle: "React Native・プッシュ通知・オフライン対応", section: "growth", phases: [
        p(29,1,"React Nativeセットアップ",60,"locked"), p(29,2,"プッシュ通知",45,"locked"), p(29,3,"オフライン対応",45,"locked"),
      ]},
    ],
  },
];

export const mockProgress: UserProgress = {
  completedPhases: 15,
  totalPhases: 85,
  currentPart: 5,
  currentPhase: "p5-2",
  streakDays: 7,
  totalStudyHours: 23.5,
  sectionProgress: {
    core: { completed: 14, total: 26 },
    maintenance: { completed: 0, total: 21 },
    growth: { completed: 0, total: 38 },
  },
  recentActivity: [
    { id: "a1", type: "phase_completed", title: "OAuth認証フロー完了", timestamp: "2026-02-17T10:30:00Z", partId: 5 },
    { id: "a2", type: "part_started", title: "PART 5: Auth を開始", timestamp: "2026-02-16T14:00:00Z", partId: 5 },
    { id: "a3", type: "phase_completed", title: "カンバンボード実装完了", timestamp: "2026-02-15T16:45:00Z", partId: 4 },
    { id: "a4", type: "streak", title: "7日連続ログイン達成!", timestamp: "2026-02-14T00:00:00Z", partId: 0 },
    { id: "a5", type: "phase_completed", title: "タスクCRUD完了", timestamp: "2026-02-13T11:20:00Z", partId: 4 },
  ],
};

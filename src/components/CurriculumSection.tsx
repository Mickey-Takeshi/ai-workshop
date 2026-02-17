import Accordion from "./Accordion";

const coreItems = [
  { badge: "PART 1", title: "Foundation", desc: "スターター構築と本番公開", content: "プロジェクトの初期セットアップから、開発環境の構築、本番環境へのデプロイまでを一気通貫で学びます。AIエージェントと一緒にスターターテンプレートを作成し、Vercelへのデプロイまでを完了させます。" },
  { badge: "PART 2", title: "Database", desc: "Firebase でのスキーマ設計", content: "Firestoreのデータモデリング、コレクション設計、セキュリティルール、インデックス最適化など、NoSQLデータベースの実践的な設計手法を習得します。" },
  { badge: "PART 3", title: "CRM", desc: "顧客管理機能の実装", content: "顧客情報の管理画面、検索・フィルター機能、顧客ステータス管理、アクティビティログなど、CRM機能を一通り実装します。" },
  { badge: "PART 4", title: "Task System", desc: "OKR → Action → Task の設計", content: "目標管理からタスク管理まで、3層構造のタスクシステムを設計・実装します。ドラッグ&ドロップやカンバンボードも含みます。" },
  { badge: "PART 5", title: "Auth", desc: "認証・認可・セッション管理", content: "Firebase Authを使った認証基盤の構築。Google/GitHub OAuth、メールログイン、ロールベースアクセス制御、セッション管理を実装します。" },
  { badge: "PART 6", title: "Integration", desc: "外部サービス連携", content: "Google Calendar、Slack、メール送信サービスなど、外部APIとの連携方法を学びます。Webhook、OAuth2.0フローも含みます。" },
  { badge: "PART 7", title: "Admin", desc: "管理機能・権限設計", content: "管理者ダッシュボード、ユーザー管理、権限制御、システム設定画面など、管理系機能をまとめて実装します。" },
  { badge: "PART 8", title: "Quality", desc: "テスト・セキュリティ・監視", content: "ユニットテスト、E2Eテスト、セキュリティ監査、エラーモニタリングなど、プロダクション品質を担保する仕組みを構築します。" },
  { badge: "PART 9", title: "PWA & LP", desc: "PWA化とランディングページ", content: "Service Workerを使ったPWA対応、オフライン機能、ランディングページの構築、SEO対策を実装します。" },
];

const maintItems = [
  { badge: "PART 10", badgeClass: "maint" as const, title: "Operations", desc: "バージョン管理・DBメンテナンス・障害対応", content: "Git運用フロー、データベースマイグレーション、バックアップ戦略、インシデント対応の手順書作成など、運用に必要なスキルを学びます。" },
  { badge: "PART 11", badgeClass: "maint" as const, title: "DevEnv", desc: "テスト環境・マルチアカウント・CI/CD", content: "ステージング環境の構築、環境変数管理、GitHub Actionsを使ったCI/CDパイプライン、自動テスト・自動デプロイを実装します。" },
  { badge: "PART 12", badgeClass: "maint" as const, title: "Architecture", desc: "UX改善・デザインパターン・状態管理", content: "コンポーネント設計の改善、状態管理パターン、レスポンシブ対応、アクセシビリティ、ダークモード対応などを学びます。" },
  { badge: "PART 13", badgeClass: "maint" as const, title: "Performance", desc: "クエリ最適化・フロントエンド・キャッシュ", content: "Firestoreクエリの最適化、Reactレンダリング最適化、画像最適化、CDN活用、キャッシュ戦略を実践します。" },
  { badge: "PART 14", badgeClass: "maint" as const, title: "Code Quality", desc: "ファイル整理・デバッグ・レビュー", content: "ESLint/Prettier設定、コードレビュープロセス、デバッグ技法、技術的負債の解消方法を学びます。" },
  { badge: "PART 15", badgeClass: "maint" as const, title: "Security", desc: "脆弱性対応・バックアップ・認証深掘り", content: "OWASP Top10対策、XSS/CSRF防止、Firestoreセキュリティルールの深掘り、データバックアップ・リストア戦略を学びます。" },
  { badge: "PART 16", badgeClass: "maint" as const, title: "Documentation", desc: "ランブック・移行ガイド・運用ドキュメント", content: "運用ランブック、APIドキュメント、移行手順書、READMEテンプレートなど、チーム開発に必要なドキュメント整備を行います。" },
];

const growthItems = [
  { badge: "PART 17", badgeClass: "growth" as const, title: "Pricing", desc: "料金プラン・Stripe連携", content: "料金プランの設計、Stripe Checkout、サブスクリプション管理、Webhook処理、請求書発行の実装を行います。" },
  { badge: "PART 18", badgeClass: "growth" as const, title: "Billing", desc: "請求管理・インボイス対応", content: "利用量ベース課金、プラン変更処理、日割り計算、インボイス制度対応、領収書発行を実装します。" },
  { badge: "PART 19", badgeClass: "growth" as const, title: "Email", desc: "トランザクションメール・通知", content: "メールテンプレート設計、トランザクションメール送信、通知設定、メール配信管理を構築します。" },
  { badge: "PART 20", badgeClass: "growth" as const, title: "Customer Lifecycle", desc: "オンボーディング・解約防止・NPS", content: "ユーザーオンボーディングフロー、チャーン分析、解約防止施策、NPS調査、カスタマーサクセスの仕組みを構築します。" },
  { badge: "PART 21", badgeClass: "growth" as const, title: "Analytics", desc: "イベントトラッキング・ファネル・コホート", content: "カスタムイベントトラッキング、ファネル分析ダッシュボード、コホート分析、KPIモニタリングを実装します。" },
  { badge: "PART 22", badgeClass: "growth" as const, title: "AI Integration", desc: "AI API・プロンプト設計・レスポンス処理", content: "OpenAI / Claude APIの統合、プロンプトエンジニアリング、ストリーミングレスポンス、AI機能のUX設計を学びます。" },
  { badge: "PART 23", badgeClass: "growth" as const, title: "AI Ops", desc: "コスト管理・品質モニタリング・ガードレール", content: "APIコスト最適化、レスポンス品質モニタリング、安全性ガードレール、レート制限、フォールバック戦略を実装します。" },
  { badge: "PART 24", badgeClass: "growth" as const, title: "Scaling", desc: "負荷対策・マルチリージョン・キャパシティ", content: "負荷テスト、オートスケーリング、CDN最適化、データベースシャーディング、マルチリージョンデプロイを学びます。" },
  { badge: "PART 25", badgeClass: "growth" as const, title: "Team", desc: "ブランチ戦略・コードオーナー・知識共有", content: "Git Flow / Trunk Based Development、コードオーナー制度、PRレビュープロセス、技術共有会の仕組みを構築します。" },
  { badge: "PART 26", badgeClass: "growth" as const, title: "Founder OS", desc: "経営ダッシュボード・プロセス・時間管理", content: "MRRダッシュボード、経営KPI可視化、業務プロセスの自動化、時間管理ツールの構築を行います。" },
  { badge: "PART 27", badgeClass: "growth" as const, title: "Compliance", desc: "利用規約・GDPR・監査ログ", content: "利用規約・プライバシーポリシーの実装、GDPR対応、個人情報の取り扱い、監査ログ、データエクスポート機能を構築します。" },
  { badge: "PART 28", badgeClass: "growth" as const, title: "i18n", desc: "多言語対応・ローカライズ", content: "next-intl / i18next を使った多言語対応、翻訳ワークフロー、ロケール切替、RTL対応を実装します。" },
  { badge: "PART 29", badgeClass: "growth" as const, title: "Mobile", desc: "React Native・プッシュ通知・オフライン対応", content: "React Nativeでのモバイルアプリ構築、プッシュ通知、オフラインファースト設計、アプリストア申請を学びます。" },
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-accent font-bold text-xs tracking-widest text-center mb-3">
          CURRICULUM
        </p>
        <h2 className="text-center text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold mb-3 pb-4 border-b border-border-light max-w-[600px] mx-auto">
          カリキュラム構成
        </h2>
        <p className="text-center text-text-muted max-w-[640px] mx-auto mb-12 text-sm">
          3セクション・29パート・85フェーズの実践的なハンズオン形式で、段階的にスキルを習得します。
        </p>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <div className="rounded-xl p-7 text-bg bg-gradient-to-br from-accent to-[#5eead4]">
            <span className="text-xs font-bold opacity-70 block mb-2">PART 1-9</span>
            <h4 className="text-lg font-extrabold mb-1">Core / 基盤構築</h4>
            <p className="text-sm opacity-85 mb-3">作れる・デプロイできる</p>
            <span className="text-xs opacity-70">26フェーズ / 15〜25時間</span>
          </div>
          <div className="rounded-xl p-7 text-bg bg-gradient-to-br from-[#38bdf8] to-[#7dd3fc]">
            <span className="text-xs font-bold opacity-70 block mb-2">PART 10-16</span>
            <h4 className="text-lg font-extrabold mb-1">Maintenance / 運用・保守</h4>
            <p className="text-sm opacity-85 mb-3">壊れない・品質を保てる</p>
            <span className="text-xs opacity-70">21フェーズ / 10〜20時間</span>
          </div>
          <div className="rounded-xl p-7 text-bg bg-gradient-to-br from-accent to-[#38bdf8]">
            <span className="text-xs font-bold opacity-70 block mb-2">PART 17-29</span>
            <h4 className="text-lg font-extrabold mb-1">Growth / 事業成長</h4>
            <p className="text-sm opacity-85 mb-3">売れる・残る・勝てる・任せられる</p>
            <span className="text-xs opacity-70">39フェーズ / 20〜35時間</span>
          </div>
        </div>

        {/* Core */}
        <h3 className="text-lg font-bold mb-4 mt-12 pb-2 border-b-2 border-accent inline-block">
          Core（基盤構築）- PART 1-9
        </h3>
        <Accordion items={coreItems} />

        {/* Maintenance */}
        <h3 className="text-lg font-bold mb-4 mt-12 pb-2 border-b-2 border-accent inline-block">
          Maintenance（運用・保守）- PART 10-16
        </h3>
        <Accordion items={maintItems} />

        {/* Growth */}
        <h3 className="text-lg font-bold mb-4 mt-12 pb-2 border-b-2 border-accent inline-block">
          Growth（事業成長）- PART 17-29
        </h3>
        <Accordion items={growthItems} />
      </div>
    </section>
  );
}

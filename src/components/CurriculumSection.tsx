import Accordion from "./Accordion";

const coreItems = [
  { badge: "PART 1", title: "Foundation", desc: "スターター、タスク機能、設定ページ", content: "スターター構築と本番公開、タスク機能の実装、設定ページの作成まで。AIエージェントと一緒にプロジェクトの基盤を一気に構築します。" },
  { badge: "PART 2", title: "Database", desc: "Supabase、Auth、ワークスペース", content: "Supabaseセットアップ、Supabase Auth による認証基盤、ワークスペースとロール管理の実装を行います。" },
  { badge: "PART 3", title: "CRM", desc: "リード、クライアント、アプローチ", content: "リード管理、クライアント管理、アプローチ履歴の記録など、顧客管理に必要な機能を一通り実装します。" },
  { badge: "PART 4", title: "3-Layer", desc: "Task 4象限、Action Map、OKR", content: "Task 4象限による優先度管理、Action Map による戦略的タスク設計、OKRによる目標管理の3層構造を設計・実装します。" },
  { badge: "PART 5", title: "Google", desc: "OAuth拡張、Calendar、Tasks", content: "Google Calendar/Tasks連携の基盤構築、Calendar同期、Tasks同期など、Google APIとの統合方法を学びます。" },
  { badge: "PART 6", title: "Business", desc: "Brand、Lean Canvas、MVV", content: "Brand Strategy、Lean Canvas、MVV（Mission/Vision/Values）など、経営に必要なビジネスフレームワークツールを実装します。" },
  { badge: "PART 7", title: "Admin", desc: "Workspace Admin、Super Admin", content: "ワークスペース管理者機能とSuper Admin（SA）機能を実装。権限制御とシステム管理画面を構築します。" },
  { badge: "PART 8", title: "Non-Func", desc: "セキュリティ、テスト戦略、デプロイ", content: "セキュリティ対策、テスト戦略とログ監視、デプロイとパフォーマンスの最適化など、非機能要件を網羅的に実装します。" },
  { badge: "PART 9", title: "PWA & LP", desc: "PWA設定、ランディングページ、卒業のお祝い", content: "PWA設定によるオフライン対応、ランディングページ作成、UI改善と卒業のお祝いでCoreセクションを完了します。" },
];

const maintItems = [
  { badge: "PART 10", badgeClass: "maint" as const, title: "Operations", desc: "運用・監視（バージョン管理、DB、ログ）", content: "バージョン管理の運用フロー、DBメンテナンス、監視・障害対応など、本番運用に必要なスキルを習得します。" },
  { badge: "PART 11", badgeClass: "maint" as const, title: "DevEnv", desc: "開発環境（テスト環境、Claude MAX、CI/CD）", content: "テスト環境構築と認証トラブルシューティング、Claude MAXマルチアカウント運用、CI/CD・GitHub Actionsを実装します。" },
  { badge: "PART 12", badgeClass: "maint" as const, title: "Architecture", desc: "アーキテクチャ（UX設計、コマンドパターン、状態管理）", content: "UX & アーキテクチャ改善、コマンドパターンによるデータ保存、状態管理パターンの最適化を学びます。" },
  { badge: "PART 13", badgeClass: "maint" as const, title: "Performance", desc: "パフォーマンス（クエリ、FE、キャッシュ・楽観的UI）", content: "クエリ最適化、フロントエンドパフォーマンス改善、キャッシュ戦略・楽観的UIの実装を実践します。" },
  { badge: "PART 14", badgeClass: "maint" as const, title: "Code Quality", desc: "コード品質（整理、デバッグ、レビュー）", content: "重複・孤立ファイルの整理、デバッグ手法とHARファイル分析、コードレビュー・リファクタリングを行います。" },
  { badge: "PART 15", badgeClass: "maint" as const, title: "Security", desc: "セキュリティ（脆弱性対応、バックアップ、認証・認可）", content: "セキュリティ監視と脆弱性対応、バックアップと災害復旧（3層）、認証・認可の深掘りを学びます。" },
  { badge: "PART 16", badgeClass: "maint" as const, title: "Documentation", desc: "ドキュメント（ランブック、FW移行、運用ドキュメント）", content: "ドキュメント更新・ランブック作成、Next.js 16移行ガイド、運用ドキュメント整備を行います。" },
];

const growthItems = [
  { badge: "PART 17", badgeClass: "growth" as const, title: "Billing", desc: "課金・決済（Stripe、サブスクリプション、請求管理）", content: "決済基盤の設計と実装、価格設定とStripe商品登録、課金状態の管理を実装します。" },
  { badge: "PART 18", badgeClass: "growth" as const, title: "Google OAuth認可", desc: "本番認可取得（OAuth同意画面、利用規約、審査申請）", content: "OAuth同意画面の設定、プライバシーポリシーと利用規約の作成、審査申請と対応を行います。" },
  { badge: "PART 19", badgeClass: "growth" as const, title: "Product Strategy", desc: "プロダクト戦略（PMF計測、価格戦略、機能開発優先度）", content: "プロダクト戦略の基礎、ロードマップと優先順位、プライシング戦略を学びます。" },
  { badge: "PART 20", badgeClass: "growth" as const, title: "Customer Lifecycle", desc: "顧客ライフサイクル（オンボーディング、解約防止、NPS）", content: "オンボーディング設計、リテンション施策、チャーン防止など、顧客ライフサイクル全体を管理する仕組みを構築します。" },
  { badge: "PART 21", badgeClass: "growth" as const, title: "Analytics", desc: "分析・計測（イベントトラッキング、ファネル分析、コホート）", content: "分析基盤の構築、KPIダッシュボード、A/Bテストと実験を通じてデータ駆動の意思決定基盤を作ります。" },
  { badge: "PART 22", badgeClass: "growth" as const, title: "AI Integration", desc: "AI統合（Claude API、プロンプト設計、レスポンス処理）", content: "AI機能の設計、AI機能の実装、AIのUXとガードレール設計を学びます。" },
  { badge: "PART 23", badgeClass: "growth" as const, title: "AI Ops", desc: "AI運用・監視（コスト管理、品質モニタリング、ガードレール）", content: "AI監視とコスト管理、AI品質管理、AI障害対応など、AI機能の本番運用に必要なスキルを習得します。" },
  { badge: "PART 24", badgeClass: "growth" as const, title: "Scaling", desc: "スケーリング（負荷対策、マルチリージョン、キャパシティ）", content: "データベーススケーリング、アプリケーションスケーリング、負荷テストと監視を学びます。" },
  { badge: "PART 25", badgeClass: "growth" as const, title: "Team", desc: "チーム開発（ブランチ戦略、コードオーナー、知識共有）", content: "開発プロセスの標準化、チームコラボレーション、オンボーディングと知識共有の仕組みを構築します。" },
  { badge: "PART 26", badgeClass: "growth" as const, title: "Founder OS", desc: "創業者の仕組み化（経営ダッシュボード、プロセス、時間管理）", content: "経営ダッシュボード構築、プロセスの仕組み化、創業者の時間管理を実装します。" },
  { badge: "PART 27", badgeClass: "growth" as const, title: "Compliance", desc: "法令遵守（利用規約、GDPR、監査ログ）", content: "利用規約・プライバシーポリシー、GDPR/個人情報保護法対応、監査ログ・コンプライアンスレポートを構築します。" },
  { badge: "PART 28", badgeClass: "growth" as const, title: "i18n", desc: "国際化（多言語対応、ローカライズ）", content: "国際化基盤（next-intl設定）、翻訳ワークフロー、ローカライズ（通貨・日付・文化対応）を実装します。" },
  { badge: "PART 29", badgeClass: "growth" as const, title: "Mobile", desc: "モバイル対応（React Native、プッシュ通知）", content: "React Native / Expo基盤構築、モバイル最適化UI、プッシュ通知・オフライン対応を学びます。" },
  { badge: "PART 30", badgeClass: "growth" as const, title: "React Performance", desc: "Reactパフォーマンス最適化（非同期並列化、バンドルサイズ、再レンダリング）", content: "非同期ウォーターフォール排除によるレイテンシ削減、dynamic importとtree-shakingによるバンドルサイズ最適化、React.memoとuseCallbackによる再レンダリング最適化を実装します。" },
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
          3セクション・30パート・89フェーズの実践的なハンズオン形式で、段階的にスキルを習得します。
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
            <span className="text-xs font-bold opacity-70 block mb-2">PART 17-30</span>
            <h4 className="text-lg font-extrabold mb-1">Growth / 事業成長</h4>
            <p className="text-sm opacity-85 mb-3">売れる・残る・勝てる・任せられる</p>
            <span className="text-xs opacity-70">42フェーズ / 20〜40時間</span>
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
          Growth（事業成長）- PART 17-30
        </h3>
        <Accordion items={growthItems} />
      </div>
    </section>
  );
}

const categories = [
  {
    label: "Core / 基盤構築",
    cards: [
      { icon: "⌨️", title: "Claude Codeの使い方", desc: "AIエージェントへの効果的な指示の出し方、コードレビュー、リファクタリングの実践方法を学びます。" },
      { icon: "📚", title: "モダン技術スタック", desc: "Next.js、Supabase、Vercelのフルスタック構成を実践的に習得します。" },
      { icon: "👥", title: "SaaS機能の実装", desc: "認証、権限管理、Google連携、CRM、OKR管理など、実際のSaaSで必要な機能を一通り実装します。" },
    ],
  },
  {
    label: "Maintenance / 運用・保守",
    cards: [
      { icon: "🔧", title: "運用・監視", desc: "バージョン管理、DBメンテナンス、障害対応、CI/CD、パフォーマンス最適化など、本番運用に必要なスキルを習得します。" },
      { icon: "🛡️", title: "セキュリティ・品質", desc: "脆弱性対応、バックアップ、コードレビューによる品質維持の方法を学びます。" },
      { icon: "🏗️", title: "アーキテクチャ設計", desc: "UX改善、コマンドパターン、状態管理、キャッシュ戦略など、スケーラブルな設計手法を実践します。" },
    ],
  },
  {
    label: "Growth / 事業成長",
    cards: [
      { icon: "💳", title: "課金・決済", desc: "Stripe統合、サブスクリプション、請求・インボイス機能の実装を行います。" },
      { icon: "🤖", title: "AI統合・分析", desc: "Claude API統合、プロンプト設計、イベント追跡、分析機能など、差別化と成長のための機能を学びます。" },
      { icon: "📈", title: "スケーリング・チーム開発", desc: "負荷対策、マルチリージョン、チーム開発体制構築など、成長に対応する仕組みを構築します。" },
    ],
  },
];

export default function LearnSection() {
  return (
    <section id="learn" className="py-24 bg-gradient-to-b from-bg via-[#0d1321] to-bg">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-accent font-bold text-xs tracking-widest text-center mb-3">
          WHAT YOU&apos;LL LEARN
        </p>
        <h2 className="text-center text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold mb-3 pb-4 border-b border-border-light max-w-[600px] mx-auto">
          このワークショップで学べること
        </h2>
        <p className="text-center text-text-muted max-w-[640px] mx-auto mb-12 text-sm">
          実務で使えるモダンな開発スタックと、AI駆動開発の実践手法を体系的に学びます。
        </p>

        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-accent text-sm font-semibold mb-5 mt-12 first:mt-0">
              {cat.label}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
              {cat.cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-bg-card border border-border rounded-xl p-7 transition-all hover:bg-bg-card-hover hover:border-border-light hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 bg-accent/15 border border-accent/20">
                    {card.icon}
                  </div>
                  <h4 className="text-base font-bold mb-2">{card.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

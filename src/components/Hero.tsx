export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen pt-30 pb-20 text-center overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <p className="text-accent font-semibold text-sm tracking-wide mb-4">
          AI駆動開発を、実践で学ぶ
        </p>
        <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight mb-6 tracking-tight">
          AIエージェントと一緒に
          <br />
          Webアプリを作ろう
        </h1>
        <p className="max-w-[680px] mx-auto mb-10 text-text-muted text-sm leading-relaxed">
          React + Firebase + Vercel の技術スタックで、AIエージェントと共にWebアプリを構築。
          <br className="hidden md:block" />
          <strong className="text-text">設計 → 実装 → 運用 → 収益化</strong>
          まで、本番プロダクトに必要な全工程を
          <br className="hidden md:block" />
          実際のプロダクトコードを使って、ステップバイステップで学べます。
        </p>
        <a
          href="#cta"
          className="btn-accent-gradient inline-flex items-center gap-2 px-10 py-4 rounded-xl text-bg font-bold text-base shadow-[0_4px_24px_rgba(45,212,191,0.3)]"
        >
          🚀 無料で体験してみる
        </a>
        <p className="mt-4 text-xs text-text-dim">
          14日間無料ですべてのコンテンツを閲覧可能 / 招待制 / 月額 5万円
        </p>
      </div>
    </section>
  );
}

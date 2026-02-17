export default function CTASection() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-gradient-to-br from-accent to-[#38bdf8] rounded-2xl py-16 px-10 text-center text-bg">
          <h2 className="text-[clamp(1.3rem,3vw,1.8rem)] font-extrabold mb-2 pb-3 border-b border-white/30 inline-block">
            まずは無料で体験してみましょう
          </h2>
          <p className="text-sm opacity-90 mb-7">
            14日間、すべてのコンテンツを閲覧できます。
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-bg font-bold text-base hover:bg-gray-100 transition-all hover:-translate-y-0.5"
          >
            🚀 無料で体験してみる
          </a>
        </div>
      </div>
    </section>
  );
}

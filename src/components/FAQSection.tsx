import Accordion from "./Accordion";

const faqItems = [
  { badge: "", title: "必要な準備は何ですか？", desc: "", content: "Mac（Apple Silicon または Intel）、Cursor エディタ、Git、Node.jsのインストールが必要です。セットアップ手順はワークショップ内で案内します。※ Windows は非対応です。" },
  { badge: "", title: "推奨スペックはありますか？", desc: "", content: "Apple Silicon（M1以降）推奨、メモリ16GB以上、SSD 256GB以上を推奨します。Intel Macでも動作しますが、ビルド時間が長くなる場合があります。" },
  { badge: "", title: "Claude Codeのサブスクリプションは必要ですか？", desc: "", content: "はい、Claude Max（月額$200）またはTeam/Enterpriseプランが必要です。Claude Codeの利用にはサブスクリプションが必須となります。" },
  { badge: "", title: "ワークショップの所要時間はどのくらいですか？", desc: "", content: "全体で約45〜80時間が目安です。Core（15〜25時間）、Maintenance（10〜20時間）、Growth（20〜35時間）の3セクションで構成されています。自分のペースで進められるので、1日1〜2時間ずつでも問題ありません。" },
  { badge: "", title: "コンテンツは更新されますか？", desc: "", content: "はい。実装の進捗やフレームワークのアップデートに合わせて随時更新しています。新しいパートの追加も予定しています。" },
  { badge: "", title: "利用規約やAI機能利用規約はどこで確認できますか？", desc: "", content: "フッターのリンクから利用規約、AI機能利用規約をご確認いただけます。AI生成コンテンツは人間による事前レビューが必須です。ご不明な点はお問い合わせください。" },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-accent font-bold text-xs tracking-widest text-center mb-3">
          FAQ
        </p>
        <h2 className="text-center text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold mb-3 pb-4 border-b border-border-light max-w-[600px] mx-auto">
          よくある質問
        </h2>
        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}

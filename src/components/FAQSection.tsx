import Accordion from "./Accordion";

const faqItems = [
  { badge: "", title: "このワークショップはどんな人が対象ですか？", desc: "", content: "プログラミングの基礎知識がある方で、AIを活用した実践的なWeb開発スキルを身につけたい方が対象です。HTML/CSS/JavaScriptの基本がわかれば参加できます。" },
  { badge: "", title: "必要な準備は何ですか？", desc: "", content: "PC（Mac推奨）、Node.js、Git、VSCode、Googleアカウントがあれば始められます。各種アカウントの作成手順はワークショップ内で案内します。" },
  { badge: "", title: "推奨スペックはありますか？", desc: "", content: "メモリ8GB以上、SSD搭載のPCを推奨します。Mac / Windows / Linux いずれでも受講可能です。" },
  { badge: "", title: "AIツールのサブスクリプションは必要ですか？", desc: "", content: "一部のAI機能を使用するフェーズでは、AIサービスのAPIキーが必要になる場合があります。無料枠で対応できる範囲も多いですが、詳細は各パートで案内します。" },
  { badge: "", title: "ワークショップの所要時間はどのくらいですか？", desc: "", content: "全パートを通しで学習する場合、合計45〜80時間が目安です。自分のペースで進められるので、1日1〜2時間ずつでも問題ありません。" },
  { badge: "", title: "コンテンツは更新されますか？", desc: "", content: "はい。技術の進歩やツールのアップデートに合わせて、定期的にコンテンツを更新しています。新しいパートの追加も予定しています。" },
  { badge: "", title: "利用規約やAI機能利用規約はどこで確認できますか？", desc: "", content: "フッターのリンクから利用規約、AI機能利用規約、プライバシーポリシーをご確認いただけます。ご不明な点はお問い合わせください。" },
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

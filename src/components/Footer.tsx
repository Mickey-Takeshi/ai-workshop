import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <nav className="flex flex-wrap justify-center gap-6 mb-5 max-md:flex-col max-md:items-center max-md:gap-3">
          <Link href="#" className="text-xs text-text-muted hover:text-accent transition-colors">
            サービスについて
          </Link>
          <Link href="#" className="text-xs text-text-muted hover:text-accent transition-colors">
            利用規約
          </Link>
          <Link href="#" className="text-xs text-text-muted hover:text-accent transition-colors">
            AI機能利用規約
          </Link>
          <Link href="#" className="text-xs text-text-muted hover:text-accent transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="#" className="text-xs text-text-muted hover:text-accent transition-colors">
            特定商取引法に基づく表記
          </Link>
        </nav>
        <p className="text-xs text-text-dim">
          &copy; 2026 AI Builder Lab Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

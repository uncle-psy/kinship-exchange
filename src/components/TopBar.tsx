import Link from "next/link";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]"
          />
          <span className="font-display text-lg text-white">
            Kinship Exchange
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
          <a href="#movements" className="hover:text-white">
            Movements
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#launch" className="hover:text-white">
            Launch
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="#movements" className="btn-ghost hidden px-4 py-2 text-sm md:inline-flex">
            All Movements
          </Link>
          <button type="button" className="btn-primary px-4 py-2 text-sm">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

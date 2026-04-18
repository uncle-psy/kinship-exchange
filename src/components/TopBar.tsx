import Link from "next/link";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          <span className="font-display text-lg text-black">
            Kinship Exchange
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
          <a href="#communities" className="hover:text-black">
            Communities
          </a>
          <a href="#how-it-works" className="hover:text-black">
            How it works
          </a>
          <a href="#launch" className="hover:text-black">
            Launch
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#communities"
            className="hidden rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm text-black hover:bg-[color:var(--surface)] md:inline-block"
          >
            All Communities
          </Link>
          <button
            type="button"
            className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)]"
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

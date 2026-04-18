import type { Community } from "@/data/communities";

function formatMembers(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return n.toString();
}

export function CommunityCard({ c }: { c: Community }) {
  const pct = Math.min(100, Math.round((c.members / c.goal) * 100));
  return (
    <div className="flex flex-col gap-5 bg-[color:var(--surface)] p-6">
      <div className="flex items-start justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl font-display text-xl text-white"
          style={{ background: c.accent }}
          aria-hidden
        >
          {c.glyph}
        </div>
        <span className="label-caps rounded-full bg-[color:var(--background)] px-2.5 py-1">
          {c.status === "forming" ? "Forming" : "Open"}
        </span>
      </div>

      <div>
        <h3 className="font-display text-2xl text-black">{c.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
          {c.tagline}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-1">
        <div>
          <div className="font-display text-lg text-black">
            {formatMembers(c.members)}
          </div>
          <div className="label-caps mt-0.5">members</div>
        </div>
        <div className="text-right">
          <div className="font-display text-lg text-black">
            {formatMembers(c.goal)}
          </div>
          <div className="label-caps mt-0.5">goal</div>
        </div>
      </div>

      <div
        className="h-1.5 w-full rounded-full"
        style={{ background: "var(--background)" }}
        aria-label={`${pct}% toward goal`}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: c.accent }}
        />
      </div>

      <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--background)] p-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[color:var(--muted)]">Seat</span>
          <span className="text-black">${c.pricePerSeat}</span>
        </div>
        <button
          type="button"
          className="mt-2 w-full rounded-lg bg-[color:var(--accent)] py-2 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)]"
        >
          Join {c.symbol}
        </button>
      </div>
    </div>
  );
}

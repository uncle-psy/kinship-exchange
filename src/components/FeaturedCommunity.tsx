import { communities } from "@/data/communities";

function formatLarge(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

export function FeaturedCommunity({
  cumulativeMembers,
  cumulativeFunding,
}: {
  cumulativeMembers: number;
  cumulativeFunding: number;
}) {
  const featured = communities.find((c) => c.featured) ?? communities[0];

  return (
    <section className="px-6 pt-10">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[1.3fr_1fr]">
        <div className="surface-card rounded-xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="label-caps">Featured Community</span>
            <span className="text-xs text-[color:var(--muted-soft)]">
              Apply to be featured →
            </span>
          </div>
          <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-lg border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] p-6 text-white">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-md font-display text-lg"
                  style={{ background: featured.accent }}
                >
                  {featured.glyph}
                </div>
                <div className="label-caps text-white/70">
                  Founded by {featured.foundedBy}
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl">
                {featured.name}
              </h2>
              <p className="mt-2 max-w-md text-sm text-[color:var(--muted)]">
                {featured.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="surface-card rounded-xl p-6">
            <div className="label-caps">Cumulative Members</div>
            <div className="mt-2 font-display text-5xl text-white">
              {cumulativeMembers.toLocaleString()}
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <div className="label-caps">Committed</div>
                <div className="font-display text-xl text-white">
                  {formatLarge(cumulativeFunding)}
                </div>
              </div>
              <div className="text-right">
                <div className="label-caps">Communities</div>
                <div className="font-display text-xl text-white">
                  {communities.length}
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card flex flex-col gap-3 rounded-xl p-6">
            <div className="label-caps">Join {featured.symbol}</div>
            <p className="text-sm text-[color:var(--muted)]">
              {featured.description}
            </p>
            <div className="mt-1 flex items-center justify-between">
              <div>
                <div className="font-display text-lg text-white">
                  ${featured.pricePerSeat}
                </div>
                <div className="label-caps">per seat</div>
              </div>
              <button type="button" className="btn-primary px-5 py-2 text-sm">
                Join {featured.symbol}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

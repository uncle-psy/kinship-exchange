import { TopBar } from "@/components/TopBar";
import { FeaturedCommunity } from "@/components/FeaturedCommunity";
import { MembershipChart } from "@/components/MembershipChart";
import { CommunityCard } from "@/components/CommunityCard";
import { communities, totals } from "@/data/communities";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <TopBar />

      <section className="relative">
        <div className="hatch-left" aria-hidden />
        <div className="hatch-right" aria-hidden />

        <div className="mx-auto max-w-6xl px-6 pt-10">
          <div className="surface-card flex flex-col gap-4 rounded-2xl p-5 md:flex-row md:items-center md:justify-between" id="launch">
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" aria-hidden />
              <div>
                <div className="font-display text-xl text-black">Launch</div>
                <p className="text-sm text-[color:var(--muted)]">
                  Start a community that others want to fund from day one.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#how-it-works" className="text-sm text-[color:var(--muted)] hover:text-black">
                Learn more
              </a>
              <button
                type="button"
                className="rounded-full bg-[color:var(--accent)] px-5 py-2 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)]"
              >
                Start
              </button>
            </div>
          </div>
        </div>

        <FeaturedCommunity
          cumulativeMembers={totals.cumulativeMembers}
          cumulativeFunding={totals.cumulativeFunding}
        />

        <section className="mx-auto max-w-6xl px-6 pt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl text-black">
                Community ownership <em className="font-display italic text-[color:var(--accent)]">matters</em>
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[color:var(--muted)]">
                Communities compound when the people inside them have a real stake. Membership goals keep founders honest and give members something to build toward together.
              </p>
            </div>
          </div>
          <MembershipChart />
        </section>

        <section id="communities" className="mx-auto max-w-6xl px-6 pt-16">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-display text-3xl text-black">Join a community</h2>
            <span className="label-caps">
              {communities.length} live
            </span>
          </div>
          <div className="grid gap-4 border-t border-l border-[color:var(--border)] md:grid-cols-2 lg:grid-cols-3">
            {communities.map((c) => (
              <div
                key={c.slug}
                className="border-b border-r border-[color:var(--border)]"
              >
                <CommunityCard c={c} />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-20">
          <h2 className="font-display text-4xl text-black md:text-5xl">
            Launch a community <em className="font-display italic text-[color:var(--accent)]">the right way</em>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted)]">
            Skip the low-intent email list and the pay-to-play launch. Kinship Exchange rewards early believers and holds founders accountable to member-defined goals.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Fair launch",
                body: "Everyone gets the same seat price. No insider rounds, no whitelists."
              },
              {
                title: "Transparent",
                body: "Membership funds flow to a community treasury with public ledgers."
              },
              {
                title: "Raise more",
                body: "Members bring members. Communities that deliver raise the ceiling."
              },
              {
                title: "Real alignment",
                body: "Founders earn as members stay. Refunds protect early supporters."
              }
            ].map((v) => (
              <div key={v.title}>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent-soft)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden />
                </div>
                <h3 className="font-display text-lg text-black">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-6 pt-20 pb-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-black">For Members</h3>
              <ol className="mt-6 space-y-5">
                {[
                  { t: "Browse communities", b: "Explore the live exchange. Each community lists its goal, price, and the people behind it." },
                  { t: "Commit a seat", b: "Seats give you standing: voice in decisions, access to programs, and a share of shared resources." },
                  { t: "Raise or refund", b: "If a community hits its goal, you're in. If it falls short by the deadline, your commitment is returned." },
                  { t: "Show up", b: "Communities are evaluated on participation, not just funding. Members who contribute get credit that compounds." },
                  { t: "Governance that works", b: "Decision markets and member councils keep momentum honest. Trade signals, then decide." }
                ].map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded bg-black text-[11px] font-medium text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-medium text-black">{s.t}</div>
                      <p className="mt-1 text-sm text-[color:var(--muted)]">{s.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-display text-2xl text-black">For Community Founders</h3>
              <ol className="mt-6 space-y-5">
                {[
                  { t: "Submit your community", b: "Tell us who it's for, what the first year looks like, and what membership unlocks." },
                  { t: "Set the goal", b: "Choose the membership target that makes your community viable. Seats price accordingly." },
                  { t: "Raise with members", b: "A seven-day committed window. Pro-rata allocation, time-weighted to reward early conviction." },
                  { t: "Go live", b: "Hit the goal, unlock the treasury, and start delivering the programs members committed to." },
                  { t: "Grow with accountability", b: "Monthly updates. Transparent spend. Expansion requires member approval, not insider votes." }
                ].map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded bg-black text-[11px] font-medium text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-medium text-black">{s.t}</div>
                      <p className="mt-1 text-sm text-[color:var(--muted)]">{s.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </section>

      <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-[color:var(--accent)]" aria-hidden />
            <span className="font-display text-base text-black">
              Kinship Exchange
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm text-[color:var(--muted)]">
            <a href="#communities" className="hover:text-black">Communities</a>
            <a href="#how-it-works" className="hover:text-black">How it works</a>
            <a href="#launch" className="hover:text-black">Launch</a>
            <a href="https://kinship.systems" className="hover:text-black" target="_blank" rel="noreferrer">Kinship Systems</a>
          </div>
          <div className="text-xs text-[color:var(--muted)]">
            Prototype. Not an offer to sell securities.
          </div>
        </div>
      </footer>
    </div>
  );
}

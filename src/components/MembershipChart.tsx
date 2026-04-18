import { communities } from "@/data/communities";

export function MembershipChart() {
  const maxGoal = Math.max(...communities.map((c) => c.goal));
  const width = 720;
  const height = 260;
  const pad = { top: 20, right: 20, bottom: 40, left: 40 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const barW = chartW / communities.length - 10;

  const yTicks = 4;
  const tickStep = Math.ceil(maxGoal / yTicks / 1000) * 1000;

  return (
    <div className="surface-card rounded-2xl p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <div>
          <div className="label-caps">Membership Goals</div>
          <div className="font-display text-xl text-black">
            Progress across communities
          </div>
        </div>
        <div className="text-xs text-[color:var(--muted)]">
          Members vs target
        </div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Membership goals chart"
      >
        {Array.from({ length: yTicks + 1 }).map((_, i) => {
          const y = pad.top + (chartH / yTicks) * i;
          const value = tickStep * (yTicks - i);
          return (
            <g key={i}>
              <line
                x1={pad.left}
                x2={width - pad.right}
                y1={y}
                y2={y}
                stroke="#e4dfd3"
                strokeDasharray="2 4"
              />
              <text
                x={pad.left - 8}
                y={y + 3}
                textAnchor="end"
                fontSize="10"
                fill="#6b6760"
              >
                {value >= 1000 ? `${value / 1000}K` : value}
              </text>
            </g>
          );
        })}

        {communities.map((c, i) => {
          const x = pad.left + i * (chartW / communities.length) + 5;
          const goalH = (c.goal / maxGoal) * chartH;
          const memH = (c.members / maxGoal) * chartH;
          const goalY = pad.top + chartH - goalH;
          const memY = pad.top + chartH - memH;
          return (
            <g key={c.slug}>
              <rect
                x={x}
                y={goalY}
                width={barW}
                height={goalH}
                fill="#e4dfd3"
                rx="2"
              />
              <rect
                x={x}
                y={memY}
                width={barW}
                height={memH}
                fill={c.accent}
                rx="2"
              />
              <text
                x={x + barW / 2}
                y={height - pad.bottom + 14}
                textAnchor="middle"
                fontSize="9"
                fill="#6b6760"
              >
                {c.symbol}
              </text>
              <text
                x={x + barW / 2}
                y={height - pad.bottom + 26}
                textAnchor="middle"
                fontSize="9"
                fill="#111"
                fontWeight="500"
              >
                {Math.round((c.members / c.goal) * 100)}%
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 flex items-center gap-5 text-xs text-[color:var(--muted)]">
        <span className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-3 w-3 rounded-sm"
            style={{ background: "var(--accent)" }}
          />
          Current members
        </span>
        <span className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-3 w-3 rounded-sm bg-[#e4dfd3]"
          />
          Goal
        </span>
      </div>
    </div>
  );
}

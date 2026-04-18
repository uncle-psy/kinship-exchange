export type CommunityStatus = "open" | "forming" | "funded";

export type Community = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  symbol: string;
  glyph: string;
  accent: string;
  members: number;
  goal: number;
  pricePerSeat: number;
  foundedBy: string;
  status: CommunityStatus;
  featured?: boolean;
};

export const communities: Community[] = [
  {
    slug: "big-kaduna",
    name: "The Big KADUNA",
    tagline: "Living, evolving communities at scale",
    description:
      "A federation of communities that compound over time. KADUNA is the largest Kinship space, hosting member-run guilds, ongoing councils, and cross-community expeditions.",
    symbol: "KDNA",
    glyph: "K",
    accent: "#F2705E",
    members: 4820,
    goal: 7500,
    pricePerSeat: 120,
    foundedBy: "@kinship_labs",
    status: "open",
    featured: true,
  },
  {
    slug: "mapshifting",
    name: "Mapshifting",
    tagline: "Personal growth, professional development, organizational transformation",
    description:
      "For people rewiring how they work and lead. Practice circles, peer labs, and facilitated retreats anchored by working practitioners.",
    symbol: "MAP",
    glyph: "M",
    accent: "#E58A5A",
    members: 1340,
    goal: 2500,
    pricePerSeat: 96,
    foundedBy: "@mapshifters",
    status: "open",
  },
  {
    slug: "inner-clinic",
    name: "Inner Clinic",
    tagline: "Patient-powered health and wellbeing",
    description:
      "A community owned by the people it serves. Protocols, peer support, and pooled research funded by members who share outcomes.",
    symbol: "CLIN",
    glyph: "I",
    accent: "#C86A6A",
    members: 860,
    goal: 3000,
    pricePerSeat: 72,
    foundedBy: "@inner_clinic",
    status: "open",
  },
  {
    slug: "silicon-beach",
    name: "Silicon Beach Exchange",
    tagline: "Elevating the people, places, and experiences of the coast",
    description:
      "A regional exchange connecting founders, operators, and artists along the California coast. Salons, house parties, working weekends.",
    symbol: "SBX",
    glyph: "S",
    accent: "#D89A5E",
    members: 2150,
    goal: 4000,
    pricePerSeat: 88,
    foundedBy: "@silicon_beach",
    status: "open",
  },
  {
    slug: "activation-center",
    name: "Activation Center",
    tagline: "Start or join a movement that matters",
    description:
      "Infrastructure for organizers. Campaigns, working groups, and shared budgets with clear feedback loops for the people running them.",
    symbol: "ACTV",
    glyph: "A",
    accent: "#B86C5E",
    members: 740,
    goal: 2000,
    pricePerSeat: 60,
    foundedBy: "@activation",
    status: "forming",
  },
  {
    slug: "service-alliance",
    name: "Service Alliance",
    tagline: "Serving those who serve",
    description:
      "A community for veterans, first responders, teachers, and caregivers. Member-governed benefits, peer advocacy, and shared resources.",
    symbol: "SERV",
    glyph: "S",
    accent: "#7C8A6A",
    members: 980,
    goal: 2500,
    pricePerSeat: 48,
    foundedBy: "@service_alliance",
    status: "open",
  },
  {
    slug: "crypto-launch-codes",
    name: "Crypto Launch Codes",
    tagline: "Where decentralized organizations gain legal personhood",
    description:
      "Tooling and templates for turning a token community into a recognized legal entity. Shared counsel, shared filings, shared playbooks.",
    symbol: "CLC",
    glyph: "C",
    accent: "#5E8BB8",
    members: 1620,
    goal: 3500,
    pricePerSeat: 150,
    foundedBy: "@launch_codes",
    status: "open",
  },
  {
    slug: "feathered-nest",
    name: "The Feathered Nest",
    tagline: "Where families gather, grow, and thrive together",
    description:
      "A community for parents, caregivers, and chosen family. Pooled childcare, shared retreats, intergenerational programming.",
    symbol: "NEST",
    glyph: "N",
    accent: "#C98AA0",
    members: 1180,
    goal: 3000,
    pricePerSeat: 54,
    foundedBy: "@feathered_nest",
    status: "open",
  },
  {
    slug: "vibe-collective",
    name: "The Vibe Collective",
    tagline: "Culture that resonates at the frequency of life",
    description:
      "Musicians, makers, and mystics working in public. Shared studios, rotating residencies, member-funded releases.",
    symbol: "VIBE",
    glyph: "V",
    accent: "#8E6EB8",
    members: 2040,
    goal: 4500,
    pricePerSeat: 64,
    foundedBy: "@vibe_collective",
    status: "open",
  },
];

export const totals = {
  cumulativeMembers: communities.reduce((s, c) => s + c.members, 0),
  cumulativeFunding: communities.reduce((s, c) => s + c.members * c.pricePerSeat, 0),
  activeCommunities: communities.length,
};

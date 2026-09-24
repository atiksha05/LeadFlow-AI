export type LeadStage = "New" | "Qualified" | "Contacted" | "Demo" | "Won" | "Lost";

export type Lead = {
  id: number;
  name: string;
  company: string;
  role: string;
  email: string;
  source: string;
  stage: LeadStage;
  score: number;
  intent: "High" | "Medium" | "Low";
  employees: number;
  annualRevenue: string;
  lastActivity: string;
  owner: string;
  reason: string;
  nextBestAction: string;
};

export const leads: Lead[] = [
  {
    id: 1,
    name: "Maya Chen",
    company: "Vertex Labs",
    role: "VP of Growth",
    email: "maya@vertexlabs.io",
    source: "Pricing Page",
    stage: "Qualified",
    score: 94,
    intent: "High",
    employees: 420,
    annualRevenue: "$48M",
    lastActivity: "Viewed enterprise pricing 3x",
    owner: "Atiksha",
    reason: "High-fit company, repeated pricing activity, and executive-level buyer.",
    nextBestAction: "Send personalized enterprise ROI note within 2 hours."
  },
  {
    id: 2,
    name: "Daniel Brooks",
    company: "Northstar AI",
    role: "Head of RevOps",
    email: "daniel@northstar.ai",
    source: "Webinar",
    stage: "Contacted",
    score: 88,
    intent: "High",
    employees: 275,
    annualRevenue: "$31M",
    lastActivity: "Downloaded ROI calculator",
    owner: "Atiksha",
    reason: "Strong persona fit with multiple high-intent content interactions.",
    nextBestAction: "Offer a 20-minute workflow audit."
  },
  {
    id: 3,
    name: "Priya Shah",
    company: "Nimbus Cloud",
    role: "Growth Manager",
    email: "priya@nimbuscloud.com",
    source: "LinkedIn",
    stage: "Demo",
    score: 85,
    intent: "High",
    employees: 880,
    annualRevenue: "$102M",
    lastActivity: "Requested security documentation",
    owner: "Jordan",
    reason: "Enterprise account with buying signals and active evaluation behavior.",
    nextBestAction: "Prepare security + integration follow-up before demo."
  },
  {
    id: 4,
    name: "Ethan Kim",
    company: "ScaleForge",
    role: "Sales Ops Lead",
    email: "ethan@scaleforge.co",
    source: "Product Hunt",
    stage: "New",
    score: 77,
    intent: "Medium",
    employees: 145,
    annualRevenue: "$18M",
    lastActivity: "Created workspace and invited teammate",
    owner: "Sam",
    reason: "Good ICP match with meaningful early product engagement.",
    nextBestAction: "Trigger onboarding email featuring lead scoring automation."
  },
  {
    id: 5,
    name: "Sofia Martinez",
    company: "OrbitPay",
    role: "Demand Gen Director",
    email: "sofia@orbitpay.com",
    source: "Referral",
    stage: "Won",
    score: 96,
    intent: "High",
    employees: 610,
    annualRevenue: "$74M",
    lastActivity: "Contract signed",
    owner: "Jordan",
    reason: "Strong ICP, executive sponsorship, and repeated multi-user engagement.",
    nextBestAction: "Schedule implementation kickoff."
  },
  {
    id: 6,
    name: "Noah Williams",
    company: "BrightDesk",
    role: "Marketing Ops Manager",
    email: "noah@brightdesk.com",
    source: "Organic Search",
    stage: "New",
    score: 64,
    intent: "Medium",
    employees: 95,
    annualRevenue: "$9M",
    lastActivity: "Read lead scoring guide",
    owner: "Atiksha",
    reason: "Relevant persona and problem awareness, but limited product intent so far.",
    nextBestAction: "Nurture with lead-scoring benchmark content."
  },
  {
    id: 7,
    name: "Ava Patel",
    company: "LaunchGrid",
    role: "Founder",
    email: "ava@launchgrid.io",
    source: "Conference",
    stage: "Lost",
    score: 58,
    intent: "Low",
    employees: 34,
    annualRevenue: "$3M",
    lastActivity: "No activity in 21 days",
    owner: "Sam",
    reason: "Buyer authority is high, but company size and recent engagement are below target.",
    nextBestAction: "Move to quarterly nurture."
  },
  {
    id: 8,
    name: "Lucas Reed",
    company: "FlowPilot",
    role: "Revenue Operations",
    email: "lucas@flowpilot.com",
    source: "Partner",
    stage: "Qualified",
    score: 81,
    intent: "High",
    employees: 210,
    annualRevenue: "$24M",
    lastActivity: "Visited integrations page",
    owner: "Atiksha",
    reason: "High persona fit and strong integration intent from a mid-market account.",
    nextBestAction: "Send integration compatibility summary."
  }
];

export const funnel = [
  { stage: "New", count: 128 },
  { stage: "Qualified", count: 84 },
  { stage: "Contacted", count: 56 },
  { stage: "Demo", count: 31 },
  { stage: "Won", count: 18 }
];

export const weeklyPipeline = [
  { week: "W1", qualified: 31, demos: 12, won: 5 },
  { week: "W2", qualified: 38, demos: 14, won: 7 },
  { week: "W3", qualified: 44, demos: 19, won: 8 },
  { week: "W4", qualified: 52, demos: 22, won: 11 },
  { week: "W5", qualified: 61, demos: 27, won: 14 },
  { week: "W6", qualified: 68, demos: 31, won: 18 }
];

export const sourcePerformance = [
  { source: "Referral", conversion: 32 },
  { source: "Pricing Page", conversion: 27 },
  { source: "Partner", conversion: 23 },
  { source: "Webinar", conversion: 19 },
  { source: "Organic", conversion: 14 }
];

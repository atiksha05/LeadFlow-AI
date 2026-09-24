"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Filter,
  LayoutDashboard,
  LineChart,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  Users
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  Line,
  LineChart as ReLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { funnel, leads, sourcePerformance, weeklyPipeline } from "../lib/data";

type View = "Dashboard" | "Leads" | "Pipeline" | "Analytics";

const navItems: { label: View; icon: React.ComponentType<{ size?: number }> }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Leads", icon: Users },
  { label: "Pipeline", icon: TrendingUp },
  { label: "Analytics", icon: BarChart3 }
];

function scoreTone(score: number) {
  if (score >= 85) return "score score-high";
  if (score >= 70) return "score score-medium";
  return "score score-low";
}

export default function Home() {
  const [view, setView] = useState<View>("Dashboard");
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState("All");
  const [selectedLead, setSelectedLead] = useState(leads[0]);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesQuery =
        lead.name.toLowerCase().includes(query.toLowerCase()) ||
        lead.company.toLowerCase().includes(query.toLowerCase()) ||
        lead.role.toLowerCase().includes(query.toLowerCase());
      const matchesStage = stage === "All" || lead.stage === stage;
      return matchesQuery && matchesStage;
    });
  }, [query, stage]);

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><BrainCircuit size={22} /></div>
          <div>
            <strong>LeadFlowOS</strong>
            <span>Revenue Intelligence</span>
          </div>
        </div>

        <div className="workspace-card">
          <span className="eyebrow">Workspace</span>
          <strong>Growth Team</strong>
          <span>Enterprise SaaS</span>
        </div>

        <nav>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={view === item.label ? "nav-item active" : "nav-item"}
                onClick={() => setView(item.label)}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="ai-mini-card">
            <Sparkles size={18} />
            <div>
              <strong>AI Scoring is live</strong>
              <span>128 leads analyzed today</span>
            </div>
          </div>
          <div className="profile">
            <div className="avatar">AA</div>
            <div>
              <strong>Atiksha Antil</strong>
              <span>Product Workspace</span>
            </div>
          </div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <span className="eyebrow">Lead intelligence workspace</span>
            <h1>{view}</h1>
          </div>
          <div className="top-actions">
            <button className="ghost-button"><Filter size={17} /> Filters</button>
            <button className="primary-button"><Sparkles size={17} /> Ask LeadFlow AI</button>
          </div>
        </header>

        {view === "Dashboard" && (
          <>
            <section className="hero">
              <div>
                <span className="pill"><Sparkles size={14} /> AI-generated opportunity brief</span>
                <h2>Your pipeline has <span>4 high-intent accounts</span> worth immediate attention.</h2>
                <p>
                  LeadFlowOS detected repeated pricing, integration, and security activity across
                  qualified accounts. Prioritizing these accounts could reduce response lag and improve demo conversion.
                </p>
              </div>
              <button onClick={() => setView("Leads")} className="hero-cta">
                Review priority leads <ArrowUpRight size={18} />
              </button>
            </section>

            <section className="metric-grid">
              <MetricCard icon={Target} label="Qualified pipeline" value="84" delta="+18%" helper="vs. last 30 days" />
              <MetricCard icon={UserRoundCheck} label="High-intent leads" value="27" delta="+11%" helper="scored 80+" />
              <MetricCard icon={CircleDollarSign} label="Pipeline value" value="$418K" delta="+24%" helper="weighted value" />
              <MetricCard icon={Activity} label="Lead velocity" value="3.4d" delta="-0.8d" helper="time to qualification" />
            </section>

            <section className="dashboard-grid">
              <div className="panel wide-panel">
                <div className="panel-heading">
                  <div>
                    <span className="eyebrow">Growth trend</span>
                    <h3>Pipeline momentum</h3>
                  </div>
                  <span className="subtle">Last 6 weeks</span>
                </div>
                <div className="chart-wrap">
                  <ResponsiveContainer width="100%" height={280}>
                    <ReLineChart data={weeklyPipeline}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="qualified" strokeWidth={3} dot={false} />
                      <Line type="monotone" dataKey="demos" strokeWidth={3} dot={false} />
                      <Line type="monotone" dataKey="won" strokeWidth={3} dot={false} />
                    </ReLineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="panel">
                <div className="panel-heading">
                  <div>
                    <span className="eyebrow">AI priority queue</span>
                    <h3>Act next</h3>
                  </div>
                </div>
                <div className="priority-list">
                  {leads.slice(0, 4).map((lead) => (
                    <button key={lead.id} onClick={() => { setSelectedLead(lead); setView("Leads"); }} className="priority-row">
                      <div>
                        <strong>{lead.company}</strong>
                        <span>{lead.name} · {lead.role}</span>
                      </div>
                      <div className={scoreTone(lead.score)}>{lead.score}</div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="dashboard-grid">
              <div className="panel">
                <div className="panel-heading">
                  <div>
                    <span className="eyebrow">Conversion insight</span>
                    <h3>Lead source efficiency</h3>
                  </div>
                </div>
                <div className="chart-wrap compact">
                  <ResponsiveContainer width="100%" height={245}>
                    <BarChart data={sourcePerformance} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="source" width={85} />
                      <Tooltip />
                      <Bar dataKey="conversion" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="panel insight-panel">
                <span className="eyebrow">Product insight</span>
                <h3>Pricing-page leads convert 1.9× better than organic traffic.</h3>
                <p>
                  Recommend testing a high-intent routing rule: notify an owner when an ICP-fit account
                  visits pricing twice within seven days.
                </p>
                <div className="experiment-card">
                  <span>Suggested experiment</span>
                  <strong>Priority SLA: under 2 hours</strong>
                  <small>Primary metric: qualified → demo conversion</small>
                </div>
              </div>
            </section>
          </>
        )}

        {view === "Leads" && (
          <section className="lead-layout">
            <div className="panel lead-list-panel">
              <div className="toolbar">
                <div className="search-box">
                  <Search size={17} />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search leads, companies, roles..."
                  />
                </div>
                <select value={stage} onChange={(e) => setStage(e.target.value)}>
                  {["All", "New", "Qualified", "Contacted", "Demo", "Won", "Lost"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="table">
                <div className="table-row table-head">
                  <span>Lead</span><span>Stage</span><span>Source</span><span>Score</span><span></span>
                </div>
                {filteredLeads.map((lead) => (
                  <button
                    key={lead.id}
                    className={selectedLead.id === lead.id ? "table-row selected" : "table-row"}
                    onClick={() => setSelectedLead(lead)}
                  >
                    <span className="lead-cell">
                      <span className="company-icon"><Building2 size={16} /></span>
                      <span><strong>{lead.name}</strong><small>{lead.company} · {lead.role}</small></span>
                    </span>
                    <span><span className={"stage-tag stage-" + lead.stage.toLowerCase()}>{lead.stage}</span></span>
                    <span>{lead.source}</span>
                    <span><span className={scoreTone(lead.score)}>{lead.score}</span></span>
                    <span><ChevronRight size={17} /></span>
                  </button>
                ))}
              </div>
            </div>

            <aside className="panel detail-panel">
              <div className="detail-top">
                <div className="detail-avatar">{selectedLead.name.split(" ").map((part) => part[0]).join("")}</div>
                <div>
                  <h3>{selectedLead.name}</h3>
                  <p>{selectedLead.role} at {selectedLead.company}</p>
                  <span>{selectedLead.email}</span>
                </div>
              </div>

              <div className="score-card">
                <div>
                  <span className="eyebrow">LeadFlow score</span>
                  <strong>{selectedLead.score}/100</strong>
                </div>
                <span className="intent-badge">{selectedLead.intent} intent</span>
              </div>

              <div className="ai-explanation">
                <span className="pill"><Sparkles size={14} /> Why AI prioritized this lead</span>
                <p>{selectedLead.reason}</p>
              </div>

              <div className="detail-stats">
                <div><span>Employees</span><strong>{selectedLead.employees}</strong></div>
                <div><span>Annual revenue</span><strong>{selectedLead.annualRevenue}</strong></div>
                <div><span>Owner</span><strong>{selectedLead.owner}</strong></div>
                <div><span>Source</span><strong>{selectedLead.source}</strong></div>
              </div>

              <div className="activity-box">
                <span className="eyebrow">Latest activity</span>
                <strong>{selectedLead.lastActivity}</strong>
              </div>

              <div className="next-action">
                <span className="eyebrow">Recommended next action</span>
                <p>{selectedLead.nextBestAction}</p>
                <button>Mark as actioned</button>
              </div>
            </aside>
          </section>
        )}

        {view === "Pipeline" && (
          <section className="panel pipeline-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Revenue funnel</span>
                <h3>Stage conversion</h3>
              </div>
              <span className="subtle">Current quarter</span>
            </div>
            <div className="funnel-layout">
              <div className="chart-wrap">
                <ResponsiveContainer width="100%" height={420}>
                  <FunnelChart>
                    <Tooltip />
                    <Funnel dataKey="count" data={funnel} isAnimationActive>
                      <LabelList position="right" fill="#111827" dataKey="stage" />
                      {funnel.map((_, index) => <Cell key={index} />)}
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </div>
              <div className="funnel-notes">
                <div>
                  <span>Largest drop-off</span>
                  <strong>Contacted → Demo</strong>
                  <p>44.6% of contacted leads do not reach a demo.</p>
                </div>
                <div>
                  <span>Hypothesis</span>
                  <strong>Response timing + generic outreach</strong>
                  <p>High-intent accounts may be cooling before tailored outreach reaches them.</p>
                </div>
                <div>
                  <span>PM recommendation</span>
                  <strong>Test AI-personalized fast follow-up</strong>
                  <p>Route score 80+ leads into a two-hour SLA and measure demo conversion lift.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {view === "Analytics" && (
          <section className="analytics-grid">
            <div className="panel">
              <span className="eyebrow">North-star metric</span>
              <h3>Qualified leads reaching a demo</h3>
              <div className="north-star">36.9%</div>
              <p className="subtle">+6.4 percentage points over the previous period</p>
            </div>
            <div className="panel">
              <span className="eyebrow">Activation signal</span>
              <h3>Accounts with 2+ high-intent actions</h3>
              <div className="north-star">41%</div>
              <p className="subtle">Strongest predictor of demo conversion in this sample</p>
            </div>
            <div className="panel wide-panel">
              <div className="panel-heading">
                <div>
                  <span className="eyebrow">Source performance</span>
                  <h3>Conversion to won</h3>
                </div>
              </div>
              <div className="chart-wrap">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sourcePerformance}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="source" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="conversion" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  delta,
  helper
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
  delta: string;
  helper: string;
}) {
  return (
    <article className="metric-card">
      <div className="metric-icon"><Icon size={19} /></div>
      <span>{label}</span>
      <div className="metric-value">{value}</div>
      <div className="metric-footer"><strong>{delta}</strong><span>{helper}</span></div>
    </article>
  );
}

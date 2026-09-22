import React, { useMemo, useState } from "react";

type Metric = { value: string; label: string; detail: string };
type CaseStudy = {
  kicker: string;
  metric: string;
  title: string;
  summary: string;
  outcomes: string[];
  tags: string[];
  tone: "coral" | "teal" | "gold";
};
type Skill = { name: string; category: "Product" | "AI & automation" | "Analytics" | "Build" };

const metrics: Metric[] = [
  { value: "20+", label: "Enterprise products", detail: "AI, CRM, HRMS, commerce and workflow platforms led end to end." },
  { value: "INR 13 Cr+", label: "Savings delivered", detail: "Direct impact through automation, policy controls and digitisation." },
  { value: "800%", label: "Qualified lead growth", detail: "B2B lead-platform redesign backed by funnel and product analytics." },
  { value: "100M → 400M", label: "Organic traffic", detail: "Scaled high-intent EdTech journeys through product, SEO and UX." },
];

const caseStudies: CaseStudy[] = [
  {
    kicker: "Enterprise AI · Automation · Transformation",
    metric: "INR 13 Cr+ impact",
    title: "An AI-led operating system for enterprise workflows",
    summary: "At Dalmia Bharat, I own the roadmap connecting AI, automation and core enterprise systems across sales, HR, legal, travel and field operations.",
    outcomes: ["20+ enterprise applications led", "INR 8 Cr+ travel and expense savings", "30% improvement in customer satisfaction"],
    tags: ["Agentic AI", "RPA", "SAP", "Oracle HRMS", "CRM"],
    tone: "coral",
  },
  {
    kicker: "RetailTech · AI commerce · Omnichannel",
    metric: "70% revenue enabled",
    title: "Building the digital backbone for HippoHomes",
    summary: "I led product and technology for a full-stack commerce platform spanning AI search, POS, kiosks, OMS, payments, loyalty and customer engagement.",
    outcomes: ["Expanded from 2 to 7 stores in 8 months", "Reduced IT operating cost by 60%", "Introduced recommendations and predictive analytics"],
    tags: ["AI search", "Personalisation", "POS", "OMS", "RetailTech"],
    tone: "teal",
  },
  {
    kicker: "EdTech · AI/ML · Growth systems",
    metric: "12M registrations",
    title: "Scaling intelligent learning products nationwide",
    summary: "At Careers360, I led B2B and B2C transformation across acquisition, predictor products, learning journeys and high-scale content platforms.",
    outcomes: ["Grew annual registrations from 1M to 12M", "Reached 18M+ monthly organic QnA sessions", "Built AI/ML study planning and recommendations"],
    tags: ["AI/ML", "Growth", "SEO", "Recommendations", "Analytics"],
    tone: "gold",
  },
];

const skills: Skill[] = [
  { name: "Product strategy & GTM", category: "Product" },
  { name: "Roadmapping", category: "Product" },
  { name: "0→1 discovery", category: "Product" },
  { name: "PRDs & specifications", category: "Product" },
  { name: "Prioritisation", category: "Product" },
  { name: "User research", category: "Product" },
  { name: "Stakeholder leadership", category: "Product" },
  { name: "Agentic AI strategy", category: "AI & automation" },
  { name: "Generative AI / LLM", category: "AI & automation" },
  { name: "AI/ML product design", category: "AI & automation" },
  { name: "RPA & workflow automation", category: "AI & automation" },
  { name: "Conversational AI", category: "AI & automation" },
  { name: "Recommendation engines", category: "AI & automation" },
  { name: "Predictive analytics", category: "Analytics" },
  { name: "Funnel analytics", category: "Analytics" },
  { name: "Customer segmentation", category: "Analytics" },
  { name: "Power BI", category: "Analytics" },
  { name: "SQL & Snowflake", category: "Analytics" },
  { name: "GA & Firebase", category: "Analytics" },
  { name: "SAP integrations", category: "Build" },
  { name: "Oracle HRMS", category: "Build" },
  { name: "CRM & ERP", category: "Build" },
  { name: "MERN stack", category: "Build" },
  { name: "AWS", category: "Build" },
  { name: "Jira & Confluence", category: "Build" },
];

const operatingModel = [
  ["01", "Frame", "Separate symptoms from outcomes, map the journey and agree on the number that must move."],
  ["02", "Prioritise", "Size impact, complexity, dependencies and adoption effort before making roadmap commitments."],
  ["03", "Design", "Turn complex workflows into clear product behaviour, data events, edge cases and release scope."],
  ["04", "Ship", "Align product, engineering, QA, business, vendors and leadership around one delivery rhythm."],
  ["05", "Scale", "Measure adoption and impact, then automate, simplify or double down based on evidence."],
];

const roles = [
  {
    period: "Oct 2025 — Present",
    company: "Dalmia Bharat Limited",
    title: "Assistant General Manager — AI Product Manager & Digital Transformation",
    skills: ["Agentic AI", "Enterprise products", "Automation", "CRM", "Transformation"],
    bullets: [
      "Lead AI product strategy, agentic AI and automation use cases across enterprise functions.",
      "Own roadmaps spanning 20+ applications and integrations across SAP, Oracle HRMS, CRM and data systems.",
      "Delivered INR 13 Cr+ in direct savings through travel, manpower and workflow digitisation programs.",
    ],
  },
  {
    period: "Sep 2022 — Sep 2025",
    company: "HippoHomes — Dalmia Bharat Enterprise",
    title: "General Manager — Head of Product & Technology",
    skills: ["AI commerce", "Omnichannel", "POS", "OMS", "Product leadership"],
    bullets: [
      "Owned product, technology, QA, infrastructure and support across web, mobile, stores and operations.",
      "Built AI search, recommendations, POS, kiosks, payments, loyalty and customer-engagement journeys.",
      "Enabled 70% of business revenue through digital systems while reducing IT operating cost by 60%.",
    ],
  },
  {
    period: "Jan 2016 — Sep 2022",
    company: "Careers360",
    title: "Head of Product — Digital Transformation",
    skills: ["AI/ML", "EdTech", "Growth", "SEO", "Analytics"],
    bullets: [
      "Scaled acquisition, engagement, B2B lead systems and AI-powered learning products.",
      "Grew annual organic traffic from 100M to 400M and registrations from 1M to 12M.",
      "Led predictor tools, study planning, recommendation systems and high-volume content platforms.",
    ],
  },
];

const projects = [
  ["Field service digitisation", "Mobile-first field engineer tools for journey planning, lead creation, site visits and project conversion."],
  ["AI-powered lead conversion", "Lead scoring and automated tracking connecting technical field-service activity with sales execution."],
  ["HR technology overhaul", "AI-integrated HRMS, talent acquisition and digital onboarding workflows for distributed teams."],
  ["Legal & compliance", "AI-driven contract lifecycle management and dashboards for vendor and regulatory risk."],
  ["PWA, OMS & B2B orders", "Progressive web apps, inventory tracking and negotiated bulk-order workflows for retail."],
  ["Predictor & alert products", "College Predictor, Rank Predictor, exam alerts and comparison journeys at national scale."],
];

const recognition = [
  ["Top 1%", "Company-wide performer with a bespoke performance bonus."],
  ["2x quarterly", "Quarterly award winner at Careers360."],
  ["5x monthly", "Monthly award winner for product and growth impact."],
  ["INR 1.5 Cr", "Digital programme budget managed with less than 10% variance."],
];

const navItems = [["Work", "work"], ["Skills", "skills"], ["Approach", "approach"], ["Experience", "experience"], ["Contact", "contact"]];
const categories = ["All", "Product", "AI & automation", "Analytics", "Build"] as const;

const styles = `
  :root { --bg:#090a0c; --panel:#111216; --panel2:#15161b; --ink:#f6f3f0; --muted:#9a9697; --line:#29282d; --coral:#ff6848; --teal:#44c6b0; --gold:#f2b84b; --violet:#a98bff; }
  * { box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { margin:0; background:var(--bg); color:var(--ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; overflow-x:hidden; }
  button,input { font:inherit; }
  a { color:inherit; text-decoration:none; }
  .site-shell { min-height:100vh; background-color:var(--bg); position:relative; }
  .site-shell::before { content:""; position:absolute; inset:4rem 0 auto 0; height:700px; pointer-events:none; opacity:.55; background-image:url('/5590457.jpg'); background-size:cover; background-position:center; mix-blend-mode:screen; filter:hue-rotate(155deg) saturate(.55) brightness(.22); }
  .nav { align-items:center; background:rgba(9,10,12,.9); border-bottom:1px solid var(--line); backdrop-filter:blur(18px); display:flex; height:66px; justify-content:space-between; padding:0 max(24px,calc((100vw - 1180px)/2)); position:sticky; top:0; z-index:20; }
  .brand { align-items:center; display:flex; font-weight:800; gap:10px; }
  .brand-dot { width:9px; height:9px; background:var(--coral); border-radius:50%; box-shadow:0 0 16px rgba(255,104,72,.8); }
  .nav-links { display:flex; gap:30px; }
  .nav-links a { color:#aaa5a6; font-size:14px; transition:color .2s ease; }
  .nav-links a:hover { color:var(--ink); }
  .wrap { margin:0 auto; max-width:1180px; width:calc(100% - 48px); position:relative; }
  .hero { align-items:center; display:grid; gap:64px; grid-template-columns:minmax(0,1.12fr) 360px; min-height:660px; padding:76px 0 56px; }
  .availability { align-items:center; background:rgba(16,17,20,.8); border:1px solid var(--line); border-radius:999px; color:#b4afb0; display:inline-flex; font-size:13px; gap:9px; padding:8px 13px; }
  .availability::before { background:#56d58a; border-radius:50%; box-shadow:0 0 0 4px rgba(86,213,138,.12); content:""; height:8px; width:8px; }
  h1 { font-size:clamp(54px,7vw,88px); letter-spacing:0; line-height:.93; margin:28px 0 24px; max-width:760px; }
  .accent { color:var(--coral); }
  .hero-lede { color:#aaa6a6; font-size:clamp(17px,2vw,20px); line-height:1.55; margin:0; max-width:720px; }
  .hero-lede strong { color:var(--ink); }
  .hero-pitch { border-left:2px solid var(--coral); color:#aaa6a6; line-height:1.55; margin:22px 0 0; max-width:700px; padding-left:16px; }
  .hero-pitch strong { color:var(--ink); }
  .actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:28px; }
  .button { align-items:center; border:1px solid var(--line); border-radius:8px; color:var(--ink); display:inline-flex; font-size:14px; font-weight:700; justify-content:center; min-height:50px; padding:0 20px; transition:transform .2s ease,border-color .2s ease,background .2s ease; }
  .button:hover { border-color:#565158; transform:translateY(-2px); }
  .button.primary { background:var(--coral); border-color:var(--coral); color:#120b09; box-shadow:0 12px 34px rgba(255,104,72,.18); }
  .profile-card { background:rgba(19,20,24,.94); border:1px solid var(--line); border-radius:24px; padding:28px; text-align:center; }
  .portrait-ring { border:3px solid var(--coral); border-radius:50%; box-shadow:0 0 0 3px rgba(169,139,255,.65),0 0 32px rgba(255,104,72,.18); height:154px; margin:0 auto 20px; overflow:hidden; width:154px; }
  .portrait-ring img { height:100%; object-fit:cover; object-position:50% 18%; width:100%; }
  .profile-card h2 { font-size:21px; margin:0; }
  .profile-role { color:#817d80; margin:5px 0 22px; }
  .profile-links { display:grid; gap:10px; text-align:left; }
  .profile-links a { align-items:center; border:1px solid var(--line); border-radius:8px; display:flex; font-size:14px; font-weight:650; justify-content:space-between; padding:14px 16px; }
  .profile-links a:first-child { background:var(--coral); border-color:var(--coral); color:#160c09; }
  .profile-links span { color:inherit; opacity:.65; }
  .label { color:var(--coral); font-size:12px; font-weight:850; letter-spacing:.16em; margin:0 0 20px; text-transform:uppercase; }
  .highlights { padding:36px 0 84px; }
  .metric-grid { display:grid; gap:16px; grid-template-columns:repeat(4,minmax(0,1fr)); }
  .metric-card { background:rgba(17,18,22,.9); border:1px solid var(--line); border-radius:14px; min-height:225px; padding:26px; position:relative; overflow:hidden; }
  .metric-card::after { background:var(--coral); bottom:19px; content:""; height:3px; left:26px; opacity:.8; position:absolute; width:72%; }
  .metric-card:nth-child(2)::after { background:var(--teal); }.metric-card:nth-child(3)::after { background:var(--violet); }.metric-card:nth-child(4)::after { background:var(--gold); }
  .metric-card strong { color:var(--coral); display:block; font-size:31px; line-height:1; margin-bottom:14px; }
  .metric-card:nth-child(2) strong { color:var(--teal); }.metric-card:nth-child(3) strong { color:var(--violet); }.metric-card:nth-child(4) strong { color:var(--gold); }
  .metric-card b { display:block; font-size:15px; line-height:1.4; margin-bottom:8px; }
  .metric-card p { color:#777377; font-size:13px; line-height:1.55; margin:0 0 20px; }
  .section { border-top:1px solid #17181c; padding:100px 0; scroll-margin-top:64px; }
  .section-head { display:grid; gap:28px; grid-template-columns:minmax(0,1fr) minmax(280px,430px); margin-bottom:38px; }
  .section-head h2 { font-size:clamp(38px,5vw,58px); letter-spacing:0; line-height:1; margin:0; }
  .section-head p { align-self:end; color:var(--muted); line-height:1.65; margin:0; }
  .case-grid { display:grid; gap:18px; grid-template-columns:repeat(3,minmax(0,1fr)); }
  .case-card { background:var(--panel); border:1px solid var(--line); border-radius:14px; display:flex; flex-direction:column; min-height:560px; overflow:hidden; transition:transform .25s ease,border-color .25s ease; }
  .case-card:hover { border-color:#48444b; transform:translateY(-4px); }
  .case-art { align-items:flex-end; background:#181215; border-bottom:1px solid var(--line); display:flex; height:170px; overflow:hidden; padding:22px; position:relative; }
  .case-art::before,.case-art::after { border:1px solid rgba(255,104,72,.55); border-radius:50%; content:""; height:150px; position:absolute; right:-25px; top:25px; width:150px; }
  .case-art::after { height:92px; right:50px; top:-20px; width:92px; }
  .teal .case-art { background:#101918; }.teal .case-art::before,.teal .case-art::after { border-color:rgba(68,198,176,.55); }
  .gold .case-art { background:#191710; }.gold .case-art::before,.gold .case-art::after { border-color:rgba(242,184,75,.55); }
  .case-metric { color:var(--coral); font-size:26px; font-weight:850; position:relative; z-index:1; }.teal .case-metric{color:var(--teal)}.gold .case-metric{color:var(--gold)}
  .case-body { display:flex; flex:1; flex-direction:column; padding:24px; }
  .case-kicker { color:#7e797d; font-size:11px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
  .case-card h3 { font-size:25px; line-height:1.12; margin:12px 0; }
  .case-summary { color:#969194; font-size:14px; line-height:1.6; margin:0 0 18px; }
  .outcomes { display:grid; gap:9px; list-style:none; margin:0 0 22px; padding:0; }
  .outcomes li { color:#cbc6c7; font-size:13px; line-height:1.4; padding-left:17px; position:relative; }.outcomes li::before{color:var(--coral);content:"+";font-weight:900;left:0;position:absolute}.teal .outcomes li::before{color:var(--teal)}.gold .outcomes li::before{color:var(--gold)}
  .tags { display:flex; flex-wrap:wrap; gap:7px; margin-top:auto; }.tags span,.skill-chip { background:#191a1f; border:1px solid var(--line); border-radius:6px; color:#aaa5a8; font-size:12px; padding:7px 9px; }
  .skill-tools { background:var(--panel); border:1px solid var(--line); border-radius:14px; overflow:hidden; }
  .filter-bar { align-items:center; border-bottom:1px solid var(--line); display:flex; flex-wrap:wrap; gap:8px; padding:18px; }
  .filter-bar button { background:transparent; border:1px solid var(--line); border-radius:999px; color:#918d90; cursor:pointer; padding:9px 14px; }
  .filter-bar button.active { background:var(--coral); border-color:var(--coral); color:#180d09; font-weight:800; }
  .skill-cloud { display:flex; flex-wrap:wrap; gap:11px; min-height:190px; padding:28px; }
  .skill-chip { align-items:center; display:inline-flex; font-size:15px; padding:11px 14px; transition:border-color .2s,color .2s; }.skill-chip:hover{border-color:var(--coral);color:var(--ink)}
  .technology-strip { border-top:1px solid var(--line); color:#777377; display:flex; flex-wrap:wrap; font-size:12px; font-weight:800; gap:22px; letter-spacing:.08em; padding:18px 28px; text-transform:uppercase; }
  .operating-grid { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); }
  .operating-step { border-left:1px solid var(--line); min-height:280px; padding:24px; }.operating-step:last-child{border-right:1px solid var(--line)}
  .step-number { color:var(--coral); font-size:12px; font-weight:900; letter-spacing:.14em; }.operating-step h3{font-size:23px;margin:34px 0 13px}.operating-step p{color:#8f8a8d;font-size:14px;line-height:1.65;margin:0}
  .project-grid { display:grid; gap:12px; grid-template-columns:repeat(2,minmax(0,1fr)); margin-top:22px; }.project-item{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:20px}.project-item strong{display:block;margin-bottom:8px}.project-item p{color:#8f8a8d;font-size:14px;line-height:1.55;margin:0}
  .timeline { display:grid; gap:18px; }.role-card{background:var(--panel);border:1px solid var(--line);border-radius:14px;display:grid;gap:24px;grid-template-columns:240px minmax(0,1fr);padding:28px}.role-period{color:var(--coral);font-size:13px;font-weight:800}.company{color:#8f8a8d;font-size:14px;margin-top:8px}.role-card h3{font-size:24px;line-height:1.2;margin:0 0 15px}.role-card ul{display:grid;gap:10px;list-style:none;margin:18px 0 0;padding:0}.role-card li{color:#aaa5a7;line-height:1.5;padding-left:20px;position:relative}.role-card li::before{color:var(--coral);content:"→";left:0;position:absolute}
  .education { align-items:center; border:1px solid var(--line); border-radius:14px; display:grid; gap:20px; grid-template-columns:1fr 1fr; margin-top:18px; padding:28px; }.education b{display:block;margin-bottom:5px}.education span{color:#8f8a8d;font-size:14px}
  .ventures { display:grid; gap:18px; grid-template-columns:1fr 1fr; margin-top:60px; }.venture{background:var(--panel2);border:1px solid var(--line);border-radius:14px;padding:28px}.venture b{color:var(--coral);font-size:12px;letter-spacing:.1em;text-transform:uppercase}.venture h3{font-size:30px;margin:12px 0}.venture p{color:#969194;line-height:1.6}.venture a{color:var(--coral);font-weight:800}
  .recognition { display:grid; gap:12px; grid-template-columns:repeat(4,minmax(0,1fr)); margin-top:60px; }.recognition-card{border-top:2px solid var(--coral);padding:20px 4px}.recognition-card:nth-child(2){border-color:var(--teal)}.recognition-card:nth-child(3){border-color:var(--violet)}.recognition-card:nth-child(4){border-color:var(--gold)}.recognition-card strong{display:block;font-size:24px;margin-bottom:9px}.recognition-card p{color:#8f8a8d;font-size:13px;line-height:1.5;margin:0}
  .contact-box { align-items:center; background:var(--coral); border-radius:18px; color:#160d0a; display:grid; gap:32px; grid-template-columns:1fr auto; padding:48px; }.contact-box .label{color:#160d0a}.contact-box h2{font-size:clamp(38px,5vw,60px);line-height:1;margin:0;max-width:760px}.contact-box p{font-size:17px;line-height:1.55;margin:18px 0 0;max-width:700px}.contact-actions{display:grid;gap:10px}.contact-actions .button{background:#120e0d;border-color:#120e0d;color:white;min-width:210px}.contact-actions .button:last-child{background:transparent;color:#160d0a}
  footer { color:#6f6b6e; display:flex; justify-content:space-between; margin:0 auto; max-width:1180px; padding:28px 0 38px; width:calc(100% - 48px); }
  @media(max-width:980px){.hero{grid-template-columns:1fr}.profile-card{display:grid;gap:20px;grid-template-columns:180px 1fr;text-align:left}.portrait-ring{margin:0}.profile-links{grid-column:2}.metric-grid,.case-grid,.recognition{grid-template-columns:repeat(2,minmax(0,1fr))}.operating-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.operating-step{border-bottom:1px solid var(--line)}.section-head{grid-template-columns:1fr}}
  @media(max-width:720px){.nav{height:auto;padding:14px 20px}.nav-links{display:none}.wrap{width:calc(100% - 32px)}.hero{gap:32px;min-height:auto;padding:54px 0}.profile-card{display:block;text-align:center}.portrait-ring{margin:0 auto 20px}.profile-links{margin-top:20px}.metric-grid,.case-grid,.project-grid,.ventures,.recognition{grid-template-columns:1fr}.metric-card{min-height:190px}.section{padding:72px 0}.operating-grid{grid-template-columns:1fr}.operating-step{border-right:1px solid var(--line);min-height:auto}.role-card,.education,.contact-box{grid-template-columns:1fr}.role-card{padding:22px}.contact-box{padding:30px}.contact-actions{width:100%}.contact-actions .button{min-width:0}.filter-bar{overflow-x:auto;flex-wrap:nowrap}.filter-bar button{white-space:nowrap}footer{display:grid;gap:8px;width:calc(100% - 32px)}}
  @media(max-width:440px){h1{font-size:48px}.hero-lede{font-size:16px}.metric-grid{grid-template-columns:1fr}.actions .button{width:100%}.skill-cloud{padding:20px}.case-card{min-height:0}}
`;

function App() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const visibleSkills = useMemo(() => category === "All" ? skills : skills.filter((skill) => skill.category === category), [category]);

  return (
    <main className="site-shell">
      <style>{styles}</style>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top"><span className="brand-dot" />Jitender Kumar</a>
        <div className="nav-links">{navItems.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
      </nav>

      <div className="wrap">
        <header className="hero" id="top">
          <div>
            <span className="availability">Open to AI product leadership opportunities</span>
            <h1>AI Product<br/><span className="accent">Manager.</span></h1>
            <p className="hero-lede">I build and scale <strong>AI-native products, intelligent workflows and digital platforms</strong> across enterprise, retail and EdTech.</p>
            <p className="hero-pitch">The proposition: a <strong>product leader who connects AI strategy with execution and measurable business impact</strong> — 10+ years, 20+ enterprise products and INR 13 Cr+ in savings.</p>
            <div className="actions">
              <a className="button primary" href="#work">View work →</a>
              <a className="button" href="#experience">Experience</a>
            </div>
          </div>
          <aside className="profile-card" aria-label="Profile links">
            <div className="portrait-ring"><img src="/pic.jpg" alt="Jitender Kumar" /></div>
            <div><h2>Jitender Kumar</h2><p className="profile-role">AI Product Manager</p></div>
            <div className="profile-links">
              <a href="mailto:jitender2105@gmail.com">Email me <span>→</span></a>
              <a href="https://www.linkedin.com/in/jitender-kumar-7aa5b4a4/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a href="/Jitender_Kumar_Resume.pdf" target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
            </div>
          </aside>
        </header>

        <section className="highlights" aria-label="Career highlights">
          <p className="label">Highlights</p>
          <div className="metric-grid">{metrics.map((metric) => <article className="metric-card" key={metric.value}><strong>{metric.value}</strong><b>{metric.label}</b><p>{metric.detail}</p></article>)}</div>
        </section>
      </div>

      <section className="section" id="work"><div className="wrap">
        <p className="label">Case studies</p>
        <div className="section-head"><h2>Products I owned,<br/>not just advised.</h2><p>Each story leads with the business number, then shows the product scope, systems and decisions behind it.</p></div>
        <div className="case-grid">{caseStudies.map((item) => <article className={`case-card ${item.tone}`} key={item.title}>
          <div className="case-art"><span className="case-metric">{item.metric}</span></div>
          <div className="case-body"><span className="case-kicker">{item.kicker}</span><h3>{item.title}</h3><p className="case-summary">{item.summary}</p><ul className="outcomes">{item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}</div>
      </div></section>

      <section className="section" id="skills"><div className="wrap">
        <p className="label">Skills</p>
        <div className="section-head"><h2>Explore the toolkit.</h2><p>AI product judgment, analytics depth and enterprise delivery skills in one interactive map.</p></div>
        <div className="skill-tools">
          <div className="filter-bar" aria-label="Filter skills">{categories.map((item) => <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <div className="skill-cloud" aria-live="polite">{visibleSkills.map((skill) => <span className="skill-chip" key={skill.name}>{skill.name}</span>)}</div>
          <div className="technology-strip"><span>OpenAI</span><span>LLM</span><span>Power BI</span><span>Snowflake</span><span>SAP</span><span>Oracle</span><span>AWS</span><span>Firebase</span><span>SQL</span></div>
        </div>
      </div></section>

      <section className="section" id="approach"><div className="wrap">
        <p className="label">How I operate</p>
        <div className="section-head"><h2>From ambiguity<br/>to adoption.</h2><p>I connect CXO priorities, user journeys, technical constraints and data signals into a roadmap teams can execute with confidence.</p></div>
        <div className="operating-grid">{operatingModel.map(([number,title,copy]) => <article className="operating-step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="project-grid">{projects.map(([title,copy]) => <article className="project-item" key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div>
      </div></section>

      <section className="section" id="experience"><div className="wrap">
        <p className="label">Experience</p>
        <div className="section-head"><h2>Where I’ve<br/>done the work.</h2><p>The arc: high-scale EdTech growth, omnichannel commerce leadership and enterprise AI transformation.</p></div>
        <div className="timeline">{roles.map((role) => <article className="role-card" key={role.company}>
          <div><span className="role-period">{role.period}</span><p className="company">{role.company}</p></div>
          <div><h3>{role.title}</h3><div className="tags">{role.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
        </article>)}</div>
        <div className="education"><div><b>MBA / PGDM</b><span>Birla Institute of Management Technology · 2014–2016</span></div><div><b>B.Tech, Computer Science Engineering</b><span>Lovely Professional University · 2010–2014</span></div></div>
        <div className="recognition" aria-label="Awards and recognition">{recognition.map(([value,copy]) => <article className="recognition-card" key={value}><strong>{value}</strong><p>{copy}</p></article>)}</div>
        <div className="ventures">
          <article className="venture"><b>Co-Founder</b><h3>EduquestIQ</h3><p>A holistic student-development platform across academics, creativity, leadership and public speaking.</p><a href="https://eduquestiq.com/" target="_blank" rel="noreferrer">Explore venture ↗</a></article>
          <article className="venture"><b>Founder</b><h3>HomeInteriors360</h3><p>Home-interiors discovery and decision support for customers who need clarity before investing in their spaces.</p><a href="https://homeinteriors360.com/" target="_blank" rel="noreferrer">Explore venture ↗</a></article>
        </div>
      </div></section>

      <section className="section" id="contact"><div className="wrap">
        <div className="contact-box"><div><p className="label">Contact</p><h2>Let’s build something that moves a number.</h2><p>Best fit: Agentic AI, GenAI/LLM, automation, commerce platforms and enterprise transformation mandates that need strategy and execution in the same room.</p></div><div className="contact-actions"><a className="button" href="mailto:jitender2105@gmail.com">Email me</a><a className="button" href="tel:+919540573661">+91 95405 73661</a></div></div>
      </div></section>

      <footer><span>© 2026 Jitender Kumar</span><span>AI Product Manager · Gurugram, India</span></footer>
    </main>
  );
}

export default App;

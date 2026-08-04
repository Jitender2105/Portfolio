import React from "react";

type Metric = {
  value: string;
  label: string;
};

type CaseStudy = {
  eyebrow: string;
  title: string;
  summary: string;
  metrics: Metric[];
  moves: string[];
  tags: string[];
};

type Role = {
  period: string;
  company: string;
  title: string;
  impact: string;
};

const metrics: Metric[] = [
  { value: "10+ yrs", label: "Product, AI, commerce, CRM and digital transformation" },
  { value: "INR 13 Cr+", label: "Direct savings delivered through automation and governance" },
  { value: "400M", label: "Annual organic traffic scaled at Careers360" },
  { value: "800%", label: "Qualified lead growth through B2B lead platform rebuilds" },
];

const caseStudies: CaseStudy[] = [
  {
    eyebrow: "Enterprise AI and transformation",
    title: "Dalmia Bharat: operating system for enterprise workflows",
    summary:
      "Owned product roadmaps across sales, technical services, HR, legal, CRM, travel, onboarding, manpower and business workflows for a large enterprise environment.",
    metrics: [
      { value: "20+", label: "enterprise applications led" },
      { value: "INR 8 Cr+", label: "travel and expense savings" },
      { value: "30%", label: "customer satisfaction improvement" },
    ],
    moves: [
      "Integrated Oracle HRMS, SAP, CRM, data warehouse and travel systems into business-critical workflows.",
      "Built Tech Van Engineer workflows for PJP planning, lead creation, site visits and INR 10 Cr business budget optimization.",
      "Designed manpower management linked with PO flows, enabling accurate plant entry tracking and INR 5 Cr savings.",
    ],
    tags: ["AI enablement", "CRM", "ERP", "CXO alignment"],
  },
  {
    eyebrow: "Omnichannel commerce",
    title: "HippoHomes: full-stack retail technology from 2 to 7 stores",
    summary:
      "Led product, technology, QA, infrastructure and support teams for e-commerce, POS, kiosks, OMS, payments, loyalty, search and customer engagement.",
    metrics: [
      { value: "70%", label: "business revenue enabled by POS and kiosks" },
      { value: "60%", label: "IT operating cost reduction" },
      { value: "8 mo", label: "expansion from 2 to 7 stores" },
    ],
    moves: [
      "Built a full-stack commerce platform with catalog, AI-powered search, payments, order management and backend integrations.",
      "Rolled out WhatsApp invoicing, chatbot support, conversational order flows, return support and engagement journeys.",
      "Introduced VR kitchen design, loyalty, referral, rewards, recommendation and predictive analytics programs.",
    ],
    tags: ["E-commerce", "RetailTech", "AI search", "Loyalty"],
  },
  {
    eyebrow: "EdTech growth systems",
    title: "Careers360: product-led growth at national scale",
    summary:
      "Led B2B and B2C EdTech transformation across acquisition, lead generation, learning products, content platforms and student engagement tools.",
    metrics: [
      { value: "100M -> 400M", label: "annual organic traffic growth" },
      { value: "1M -> 12M", label: "annual registration growth" },
      { value: "18M+", label: "monthly organic QnA sessions" },
    ],
    moves: [
      "Scaled College Predictor, Rank Predictor, career guidance apps, college pages, exam pages, articles, QnA and lead platforms.",
      "Developed AI/ML-powered study planner, recommendation engine and personalized learning journeys.",
      "Improved page speed, UX, SEO architecture and analytics-led funnel optimization across high-volume journeys.",
    ],
    tags: ["SEO products", "Funnel growth", "AI/ML", "Learning platforms"],
  },
];

const roles: Role[] = [
  {
    period: "Oct 2025 - Present",
    company: "Dalmia Bharat Limited",
    title: "Assistant General Manager - AI Product and Digital Transformation",
    impact:
      "Leading enterprise application modernization, AI-led use cases, workflow digitization and cross-functional transformation roadmaps.",
  },
  {
    period: "Sept 2022 - Sept 2025",
    company: "HippoHomes - Dalmia Bharat Enterprise",
    title: "General Manager - Head of Product and Technology",
    impact:
      "Owned the digital product roadmap for web, mobile app, POS, kiosks, CRM, OMS, payments, loyalty, analytics and customer engagement.",
  },
  {
    period: "Jan 2016 - Sept 2022",
    company: "Careers360",
    title: "Head of Product - Digital Transformation",
    impact:
      "Scaled acquisition, engagement, B2B lead systems, AI-powered learning products and content platform growth across EdTech journeys.",
  },
];

const strengths = [
  "Product strategy and roadmap",
  "AI-led business transformation",
  "E-commerce and omnichannel retail",
  "CRM and ERP modernization",
  "Workflow digitization",
  "Analytics and funnel growth",
  "Vendor and budget governance",
  "Cross-functional leadership",
];

const tools = [
  "GA",
  "Firebase",
  "GTM",
  "Power BI",
  "SQL",
  "Snowflake",
  "Jira",
  "Confluence",
  "AWS",
  "MERN",
  "OpenAI",
  "SAP",
  "Oracle HRMS",
];

const navItems = [
  ["Work", "work"],
  ["Approach", "approach"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

const styles = `
  :root {
    --ink: #111314;
    --muted: #5b6267;
    --paper: #f7f4ee;
    --surface: #fffdfa;
    --line: #ded7cc;
    --lime: #c8ee44;
    --coral: #ff7a59;
    --mint: #9ee6cf;
    --blue: #3c6df0;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .site-shell {
    min-height: 100vh;
  }

  .nav {
    align-items: center;
    background: rgba(247, 244, 238, 0.86);
    border-bottom: 1px solid rgba(17, 19, 20, 0.1);
    backdrop-filter: blur(18px);
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    left: 0;
    padding: 0.8rem clamp(1rem, 4vw, 3rem);
    position: sticky;
    right: 0;
    top: 0;
    z-index: 20;
  }

  .brand {
    align-items: center;
    display: flex;
    gap: 0.7rem;
    font-weight: 800;
    letter-spacing: 0;
  }

  .brand-mark {
    align-items: center;
    background: var(--ink);
    border-radius: 8px;
    color: var(--lime);
    display: inline-flex;
    font-size: 0.82rem;
    height: 2.1rem;
    justify-content: center;
    width: 2.1rem;
  }

  .nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    justify-content: flex-end;
  }

  .nav-links a,
  .button {
    border: 1px solid rgba(17, 19, 20, 0.14);
    border-radius: 8px;
    display: inline-flex;
    font-size: 0.9rem;
    font-weight: 750;
    line-height: 1;
    padding: 0.75rem 0.9rem;
    transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
    white-space: nowrap;
  }

  .nav-links a:hover,
  .button:hover {
    border-color: rgba(17, 19, 20, 0.34);
    transform: translateY(-1px);
  }

  .button.primary {
    background: var(--ink);
    color: white;
  }

  .button.secondary {
    background: var(--lime);
  }

  .hero {
    display: grid;
    gap: clamp(2rem, 6vw, 5rem);
    grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.92fr);
    min-height: calc(92vh - 4.2rem);
    padding: clamp(2.4rem, 6vw, 5.8rem) clamp(1rem, 4vw, 3rem) clamp(1.6rem, 4vw, 3rem);
  }

  .hero-copy {
    align-self: center;
    max-width: 820px;
  }

  .eyebrow {
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 850;
    letter-spacing: 0.08em;
    margin: 0 0 1rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(3.1rem, 7vw, 6rem);
    letter-spacing: 0;
    line-height: 0.92;
    margin: 0;
    max-width: 940px;
  }

  .hero-subtitle {
    color: #2d3133;
    font-size: clamp(1.1rem, 2vw, 1.45rem);
    line-height: 1.55;
    margin: 1.4rem 0 0;
    max-width: 760px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .hero-visual {
    align-self: stretch;
    display: grid;
    min-height: 520px;
    position: relative;
  }

  .portrait-wrap {
    background: #1b1d1d;
    border: 1px solid rgba(17, 19, 20, 0.16);
    border-radius: 8px;
    min-height: 100%;
    overflow: hidden;
    position: relative;
  }

  .portrait-wrap img {
    display: block;
    height: 100%;
    min-height: 520px;
    object-fit: cover;
    object-position: 50% 26%;
    width: 100%;
  }

  .status-card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 8px;
    bottom: 1rem;
    box-shadow: 0 24px 60px rgba(17, 19, 20, 0.16);
    left: 1rem;
    max-width: min(92%, 390px);
    padding: 1rem;
    position: absolute;
  }

  .status-card strong {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.35rem;
  }

  .status-card p {
    color: var(--muted);
    line-height: 1.45;
    margin: 0;
  }

  .metrics-band {
    border-block: 1px solid var(--line);
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .metric {
    background: var(--surface);
    border-right: 1px solid var(--line);
    min-height: 150px;
    padding: clamp(1rem, 2.5vw, 1.6rem);
  }

  .metric:last-child {
    border-right: 0;
  }

  .metric strong {
    display: block;
    font-size: clamp(2rem, 4vw, 4.2rem);
    line-height: 0.98;
  }

  .metric span {
    color: var(--muted);
    display: block;
    line-height: 1.4;
    margin-top: 0.7rem;
    max-width: 260px;
  }

  .section {
    padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 3rem);
  }

  .section-header {
    align-items: end;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: minmax(0, 0.85fr) minmax(260px, 0.45fr);
    margin-bottom: 2rem;
  }

  h2 {
    font-size: clamp(2.2rem, 5vw, 4.8rem);
    letter-spacing: 0;
    line-height: 0.98;
    margin: 0;
  }

  .section-header p,
  .approach-lede {
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.65;
    margin: 0;
  }

  .case-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .case-card,
  .approach-panel,
  .timeline-item,
  .contact-panel {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 8px;
  }

  .case-card {
    display: flex;
    flex-direction: column;
    min-height: 620px;
    overflow: hidden;
  }

  .case-top {
    border-bottom: 1px solid var(--line);
    min-height: 255px;
    padding: 1.4rem;
  }

  .case-card:nth-child(1) .case-top {
    background: linear-gradient(135deg, var(--lime), #f7f4ee 65%);
  }

  .case-card:nth-child(2) .case-top {
    background: linear-gradient(135deg, var(--coral), #f7f4ee 68%);
  }

  .case-card:nth-child(3) .case-top {
    background: linear-gradient(135deg, var(--mint), #f7f4ee 68%);
  }

  .case-card h3 {
    font-size: clamp(1.55rem, 2.5vw, 2.35rem);
    letter-spacing: 0;
    line-height: 1.02;
    margin: 0.7rem 0 0;
  }

  .case-summary {
    color: #2e3335;
    line-height: 1.55;
    margin: 1rem 0 0;
  }

  .mini-metrics {
    border-bottom: 1px solid var(--line);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .mini-metric {
    border-right: 1px solid var(--line);
    padding: 1rem;
  }

  .mini-metric:last-child {
    border-right: 0;
  }

  .mini-metric strong {
    display: block;
    font-size: 1.15rem;
    line-height: 1.15;
  }

  .mini-metric span {
    color: var(--muted);
    display: block;
    font-size: 0.82rem;
    line-height: 1.35;
    margin-top: 0.35rem;
  }

  .move-list {
    display: grid;
    gap: 0.8rem;
    list-style: none;
    margin: 0;
    padding: 1.25rem;
  }

  .move-list li {
    color: #34393b;
    line-height: 1.5;
    padding-left: 1.25rem;
    position: relative;
  }

  .move-list li::before {
    background: var(--ink);
    border-radius: 999px;
    content: "";
    height: 0.45rem;
    left: 0;
    position: absolute;
    top: 0.55rem;
    width: 0.45rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: auto;
    padding: 0 1.25rem 1.25rem;
  }

  .tags span,
  .skill-pill {
    background: #f2eee6;
    border: 1px solid var(--line);
    border-radius: 8px;
    color: #303436;
    font-size: 0.82rem;
    font-weight: 750;
    padding: 0.5rem 0.6rem;
  }

  .approach-layout {
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(0, 0.8fr) minmax(280px, 0.45fr);
  }

  .approach-panel {
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  .approach-panel h3 {
    font-size: 1.6rem;
    line-height: 1.1;
    margin: 0 0 1rem;
  }

  .principles {
    display: grid;
    gap: 0.8rem;
    list-style: none;
    margin: 1.5rem 0 0;
    padding: 0;
  }

  .principles li {
    align-items: start;
    border-top: 1px solid var(--line);
    display: grid;
    gap: 1rem;
    grid-template-columns: 3rem minmax(0, 1fr);
    padding-top: 0.9rem;
  }

  .principles b {
    color: var(--blue);
  }

  .skill-cloud {
    align-content: start;
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .timeline {
    display: grid;
    gap: 1rem;
  }

  .timeline-item {
    display: grid;
    gap: 1rem;
    grid-template-columns: 190px minmax(0, 1fr);
    padding: 1.25rem;
  }

  .timeline-item time {
    color: var(--muted);
    font-weight: 800;
  }

  .timeline-item h3 {
    font-size: 1.5rem;
    line-height: 1.1;
    margin: 0;
  }

  .timeline-item p {
    color: var(--muted);
    line-height: 1.55;
    margin: 0.6rem 0 0;
  }

  .education {
    border-top: 1px solid var(--line);
    color: var(--muted);
    display: grid;
    gap: 0.7rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 1.25rem;
    padding-top: 1.25rem;
  }

  .contact-panel {
    align-items: center;
    background: var(--ink);
    color: white;
    display: grid;
    gap: 2rem;
    grid-template-columns: minmax(0, 1fr) auto;
    padding: clamp(1.5rem, 4vw, 3rem);
  }

  .contact-panel h2 {
    color: white;
  }

  .contact-panel p {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.6;
    margin: 1rem 0 0;
    max-width: 680px;
  }

  .contact-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: flex-end;
  }

  .contact-actions .button {
    border-color: rgba(255, 255, 255, 0.22);
    color: white;
  }

  .contact-actions .button.secondary {
    color: var(--ink);
  }

  footer {
    color: var(--muted);
    padding: 2rem clamp(1rem, 4vw, 3rem);
  }

  @media (max-width: 1080px) {
    .hero,
    .section-header,
    .approach-layout,
    .contact-panel {
      grid-template-columns: 1fr;
    }

    .case-grid {
      grid-template-columns: 1fr;
    }

    .case-card {
      min-height: auto;
    }

    .contact-actions {
      justify-content: flex-start;
    }
  }

  @media (max-width: 760px) {
    .nav {
      align-items: flex-start;
      flex-direction: column;
    }

    .nav-links {
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 0.1rem;
      width: 100%;
    }

    .nav-links a {
      flex: 0 0 auto;
      font-size: 0.82rem;
      justify-content: center;
      padding: 0.68rem 0.72rem;
    }

    .hero {
      min-height: auto;
      padding-top: 2rem;
    }

    .hero-visual,
    .portrait-wrap img {
      min-height: 320px;
    }

    .metrics-band {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .metric:nth-child(2) {
      border-right: 0;
    }

    .metric:nth-child(-n + 2) {
      border-bottom: 1px solid var(--line);
    }

    .mini-metrics,
    .timeline-item,
    .education {
      grid-template-columns: 1fr;
    }

    .mini-metric,
    .metric {
      border-right: 0;
    }
  }

  @media (max-width: 460px) {
    h1 {
      font-size: 2.85rem;
      line-height: 0.98;
    }

    .hero {
      gap: 1.25rem;
      padding-bottom: 1rem;
      padding-top: 1.35rem;
    }

    .hero-subtitle {
      font-size: 1rem;
      line-height: 1.5;
      margin-top: 1rem;
    }

    .hero-actions {
      margin-top: 1.25rem;
    }

    .hero-visual,
    .portrait-wrap img {
      min-height: 260px;
    }

    .portrait-wrap img {
      object-position: 50% 20%;
    }

    .metrics-band {
      grid-template-columns: 1fr;
    }

    .metric {
      border-bottom: 1px solid var(--line);
    }

    .metric:last-child {
      border-bottom: 0;
    }

    .status-card {
      position: static;
      max-width: none;
      margin-top: 0.75rem;
    }
  }
`;

function App() {
  return (
    <main className="site-shell">
      <style>{styles}</style>

      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Jitender Kumar home">
          <span className="brand-mark">JK</span>
          <span>Jitender Kumar</span>
        </a>
        <div className="nav-links">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Product leader for AI, commerce and enterprise transformation</p>
          <h1>Building products that move business numbers.</h1>
          <p className="hero-subtitle">
            I am Jitender Kumar, a product and digital transformation leader with 10+ years across AI-led
            products, CRM, ERP, EdTech, e-commerce and omnichannel retail. I turn ambiguous business goals
            into roadmaps, systems and measurable outcomes.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#work">
              View selected work
            </a>
            <a className="button secondary" href="mailto:jitender2105@gmail.com">
              Email me
            </a>
            <a
              className="button"
              href="https://www.linkedin.com/in/jitender-kumar-7aa5b4a4/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait and current role">
          <div className="portrait-wrap">
            <img src="/pic.jpg" alt="Jitender Kumar" />
          </div>
          <aside className="status-card">
            <strong>Currently at Dalmia Bharat Limited</strong>
            <p>Assistant General Manager - AI Product and Digital Transformation, leading enterprise workflows and AI enablement.</p>
          </aside>
        </div>
      </header>

      <section className="metrics-band" aria-label="Career impact metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="work">
        <div className="section-header">
          <h2>Selected product work</h2>
          <p>
            Structured as the fastest possible scan for a hiring manager: what changed, what I owned and
            which business metric moved.
          </p>
        </div>

        <div className="case-grid">
          {caseStudies.map((item) => (
            <article className="case-card" key={item.title}>
              <div className="case-top">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className="case-summary">{item.summary}</p>
              </div>
              <div className="mini-metrics">
                {item.metrics.map((metric) => (
                  <div className="mini-metric" key={`${item.title}-${metric.value}`}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              <ul className="move-list">
                {item.moves.map((move) => (
                  <li key={move}>{move}</li>
                ))}
              </ul>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="approach">
        <div className="section-header">
          <h2>How I operate</h2>
          <p>
            My portfolio sits at the intersection of product strategy, operating discipline and business impact.
            I prefer crisp problem framing, measurable bets and adoption plans that survive launch day.
          </p>
        </div>

        <div className="approach-layout">
          <div className="approach-panel">
            <h3>Product leadership system</h3>
            <p className="approach-lede">
              I connect CXO priorities, user journeys, technical constraints and data signals into a roadmap
              teams can execute with confidence.
            </p>
            <ul className="principles">
              <li>
                <b>01</b>
                <span>Start with the business outcome, then define the product behavior that can actually move it.</span>
              </li>
              <li>
                <b>02</b>
                <span>Use analytics, user feedback and operational realities to choose the smallest valuable release.</span>
              </li>
              <li>
                <b>03</b>
                <span>Design adoption, governance and support models early so transformation does not stop at shipping.</span>
              </li>
            </ul>
          </div>

          <div className="approach-panel">
            <h3>Core strengths</h3>
            <div className="skill-cloud">
              {strengths.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
            <h3 style={{ marginTop: "2rem" }}>Toolbox</h3>
            <div className="skill-cloud">
              {tools.map((tool) => (
                <span className="skill-pill" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-header">
          <h2>Experience</h2>
          <p>
            A career arc across enterprise transformation, omnichannel commerce and high-scale EdTech growth.
          </p>
        </div>

        <div className="timeline">
          {roles.map((role) => (
            <article className="timeline-item" key={`${role.company}-${role.period}`}>
              <time>{role.period}</time>
              <div>
                <h3>{role.title}</h3>
                <p>
                  <strong>{role.company}</strong>
                </p>
                <p>{role.impact}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="education">
          <span>MBA/PGDM - Birla Institute of Management Technology, Greater Noida, 2014-16</span>
          <span>B.Tech Computer Science Engineering - LPU Jalandhar, 2010-14</span>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Available for product leadership conversations</p>
            <h2>Let us build the next measurable product story.</h2>
            <p>
              Best fit: AI-enabled transformation, commerce platforms, CRM/ERP modernization, growth systems
              and teams that need a product leader who can bridge strategy, execution and adoption.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button secondary" href="mailto:jitender2105@gmail.com">
              jitender2105@gmail.com
            </a>
            <a className="button" href="tel:+919540573661">
              +91 9540573661
            </a>
          </div>
        </div>
      </section>

      <footer>Built with React and TypeScript. Updated from the 2026 CV.</footer>
    </main>
  );
}

export default App;

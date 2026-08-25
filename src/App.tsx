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

type OperatingCard = {
  step: string;
  title: string;
  copy: string;
};

type SkillArea = {
  title: string;
  copy: string;
  proof: string;
  focus: string;
  skills: string[];
};

const metrics: Metric[] = [
  { value: "AI + LLM", label: "Agentic AI, GenAI use cases, AI/ML models and predictive analytics" },
  { value: "INR 13 Cr+", label: "Direct savings delivered through automation and governance" },
  { value: "20+", label: "Enterprise applications across SAP, Oracle HRMS, CRM and data workflows" },
  { value: "800%", label: "Qualified lead growth through B2B lead platform rebuilds" },
];

const caseStudies: CaseStudy[] = [
  {
    eyebrow: "Agentic AI, automation and enterprise transformation",
    title: "Dalmia Bharat: AI-led operating system for enterprise workflows",
    summary:
      "Owned AI and automation-led product roadmaps across sales, technical services, HR, legal, CRM, travel, onboarding, manpower and enterprise workflows.",
    metrics: [
      { value: "20+", label: "enterprise applications led" },
      { value: "INR 8 Cr+", label: "travel and expense savings" },
      { value: "30%", label: "customer satisfaction improvement" },
    ],
    moves: [
      "Defined AI/automation product strategy with CXOs, plant teams, vendors and technology partners.",
      "Integrated Oracle HRMS, SAP, CRM, data warehouse and travel systems into business-critical workflows.",
      "Built Tech Van Engineer workflows for PJP planning, lead creation, site visits and INR 10 Cr business budget optimization.",
      "Designed manpower management linked with PO flows, enabling INR 5 Cr savings through process digitization.",
    ],
    tags: ["Agentic AI", "RPA", "CRM", "ERP", "CXO alignment"],
  },
  {
    eyebrow: "AI commerce, personalization and automation",
    title: "HippoHomes: AI-powered omnichannel retail platform",
    summary:
      "Led product, technology, QA, infrastructure and support teams for e-commerce, AI search, POS, kiosks, OMS, payments, loyalty and customer engagement.",
    metrics: [
      { value: "70%", label: "business revenue enabled by POS and kiosks" },
      { value: "60%", label: "IT operating cost reduction" },
      { value: "8 mo", label: "expansion from 2 to 7 stores" },
    ],
    moves: [
      "Built a full-stack commerce platform with catalog, AI-powered search, payments, order management and backend integrations.",
      "Rolled out WhatsApp invoicing, chatbot support, conversational order flows and AI-assisted customer engagement journeys.",
      "Deployed AI-powered personalization, recommendation engine, predictive analytics and customer segmentation.",
      "Introduced VR kitchen design, loyalty, referral and reward programs to improve home-improvement journeys.",
    ],
    tags: ["AI search", "Recommendations", "Predictive analytics", "RetailTech"],
  },
  {
    eyebrow: "AI/ML learning products and growth systems",
    title: "Careers360: AI/ML-powered EdTech growth at national scale",
    summary:
      "Led B2B and B2C EdTech transformation across acquisition, lead generation, learning products, content platforms and student engagement tools.",
    metrics: [
      { value: "100M -> 400M", label: "annual organic traffic growth" },
      { value: "1M -> 12M", label: "annual registration growth" },
      { value: "18M+", label: "monthly organic QnA sessions" },
    ],
    moves: [
      "Scaled College Predictor, Rank Predictor, career guidance apps, college pages, exam pages, articles, QnA and lead platforms.",
      "Developed AI/ML-powered personalized study planner, recommendation engine and learning journeys.",
      "Built AI-enabled learning flows across video lectures, online tests, faculty chat and custom timetables.",
      "Improved page speed, UX, SEO architecture and analytics-led funnel optimization across high-volume journeys.",
    ],
    tags: ["AI/ML", "Recommendation engine", "Funnel analytics", "Learning platforms"],
  },
];

const roles: Role[] = [
  {
    period: "Oct 2025 - Present",
    company: "Dalmia Bharat Limited",
    title: "Assistant General Manager - AI Product and Digital Transformation",
    impact:
      "Leading AI-product strategy, Agentic AI/automation use cases, enterprise application modernization and cross-functional transformation roadmaps.",
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
  "AI / ML and Agentic AI strategy",
  "Generative AI and LLM use cases",
  "Automation and RPA programs",
  "Predictive analytics",
  "Product strategy and roadmap",
  "CRM and ERP transformation",
  "Platform modernization",
  "CXO stakeholder leadership",
];

const tools = [
  "OpenAI",
  "LLM",
  "Agentic AI",
  "GenAI",
  "AI/ML models",
  "RPA",
  "Workflow automation",
  "SQL",
  "Snowflake",
  "Power BI",
  "GA",
  "Firebase",
  "GTM",
  "Jira",
  "Confluence",
  "AWS",
  "MERN",
  "SAP",
  "Oracle HRMS",
];

const aiHighlights = [
  "Agentic AI strategy",
  "Generative AI / LLM use cases",
  "AI/ML models",
  "Predictive analytics",
  "RPA and workflow automation",
  "Customer segmentation",
  "Recommendation engines",
  "Conversational AI",
];

const operatingCards: OperatingCard[] = [
  {
    step: "Frame",
    title: "Turn ambiguity into a measurable problem",
    copy:
      "I start by separating symptoms from business outcomes, mapping stakeholders, users, journeys, systems and the money metric that should move.",
  },
  {
    step: "Prioritize",
    title: "Choose bets with adoption and ROI built in",
    copy:
      "I size impact, complexity, dependencies and change-management effort before roadmap commitments, so the team knows what to build and why now.",
  },
  {
    step: "Design",
    title: "Convert workflows into simple product behavior",
    copy:
      "I translate complex enterprise, commerce and growth workflows into PRDs, service maps, data events, edge cases and release-ready experiences.",
  },
  {
    step: "Ship",
    title: "Run tight delivery across product, tech and business",
    copy:
      "I keep engineering, QA, design, vendors, CXOs and business users aligned through agile rituals, UAT discipline and clear launch ownership.",
  },
  {
    step: "Scale",
    title: "Measure, automate and improve after launch",
    copy:
      "I track adoption, funnel movement, operational savings and support signals, then use the data to automate, simplify or double down.",
  },
];

const skillAreas: SkillArea[] = [
  {
    title: "0-to-1 product discovery",
    copy:
      "Shape new products from unclear business needs into opportunity sizing, MVP scope, launch plan and measurable product behavior.",
    proof: "Used across Tech Van Engineer, VR kitchen design, College Predictor, lead platforms and enterprise workflows.",
    focus: "0-to-1",
    skills: ["Problem framing", "PRDs", "MVP scope", "User journeys", "UAT"],
  },
  {
    title: "AI, Agentic AI and LLM strategy",
    copy:
      "Identify practical AI opportunities, convert them into product roadmaps and connect LLMs, models, data, workflows and adoption plans.",
    proof: "Resume focus: Agentic AI, GenAI/LLM, AI/ML models, predictive analytics and enterprise AI use cases.",
    focus: "AI CORE",
    skills: ["Agentic AI", "LLM", "GenAI use cases", "OpenAI", "AI/ML models"],
  },
  {
    title: "Automation and RPA transformation",
    copy:
      "Digitize manual workflows, remove operational leakage and build governance-backed process automation across enterprise systems.",
    proof: "Delivered INR 13 Cr+ direct savings through travel, expense, manpower, GST compliance and workflow automation programs.",
    focus: "AUTOMATION",
    skills: ["RPA", "Workflow automation", "Process digitization", "Policy control", "UAT"],
  },
  {
    title: "Commerce and CRM systems",
    copy:
      "Build AI-assisted customer, order, payment, loyalty, POS, kiosk, service and CRM journeys across online and offline channels.",
    proof: "Improved customer satisfaction by 30% through next-generation CRM across sales, service, ordering and data warehouse.",
    focus: "CRM + CX",
    skills: ["CRM", "POS", "OMS", "Payments", "Loyalty", "Chatbots"],
  },
  {
    title: "Growth, SEO and funnel analytics",
    copy:
      "Use data architecture, page speed, content systems, personalization, segmentation and funnel improvements to grow acquisition and conversion.",
    proof: "Scaled annual organic traffic from 100M to 400M and registrations from 1M to 12M at Careers360.",
    focus: "ANALYTICS",
    skills: ["Predictive analytics", "SEO architecture", "GA", "Firebase", "Power BI", "SQL"],
  },
  {
    title: "Enterprise transformation delivery",
    copy:
      "Modernize workflows by integrating core systems, reducing manual effort and making adoption manageable for large teams.",
    proof: "Delivered INR 13 Cr+ savings across travel, manpower, governance and workflow digitization programs.",
    focus: "ENTERPRISE",
    skills: ["SAP", "Oracle HRMS", "Vendor governance", "Budget ownership", "Change management"],
  },
  {
    title: "Product leadership and operating rhythm",
    copy:
      "Lead cross-functional teams with clear goals, communication, release planning and stakeholder confidence.",
    proof: "Led product, technology, QA, infrastructure and support teams across enterprise, retail and EdTech environments.",
    focus: "LEADERSHIP",
    skills: ["Roadmaps", "Agile", "CXO communication", "Team leadership", "Release planning"],
  },
];

const ventureCards = [
  {
    name: "EduquestIQ",
    role: "Co-Founder",
    copy:
      "Building a holistic student-development platform across academics, creativity, leadership and public speaking.",
    link: "https://eduquestiq.com/",
  },
  {
    name: "HomeInteriors360",
    role: "Founder",
    copy:
      "Exploring home interiors discovery and decision support for customers who need clarity before investing in their spaces.",
    link: "https://homeinteriors360.com/",
  },
];

const projectHighlights = [
  {
    title: "Field Technical Service digitization",
    context: "Dalmia Bharat",
    result:
      "Mobile-first field engineer products for site identification, lead capture, journey planning and conversion of construction projects into Dalmia Sites.",
  },
  {
    title: "AI-powered lead conversion",
    context: "Dalmia Bharat",
    result:
      "Lead scoring and automated tracking tools that connect technical field service activity with sales execution.",
  },
  {
    title: "HR technology and onboarding overhaul",
    context: "Dalmia Bharat",
    result:
      "AI-integrated HRMS, talent acquisition and digital onboarding workflows for distributed teams.",
  },
  {
    title: "Legal and compliance digitization",
    context: "Dalmia Bharat",
    result:
      "AI-driven CLM and compliance dashboard direction for vendor, contract and regulatory risk management.",
  },
  {
    title: "PWA, OMS and B2B negotiated orders",
    context: "HippoHomes",
    result:
      "Progressive web apps, order management, inventory tracking and negotiated bulk-order workflows across retail journeys.",
  },
  {
    title: "Exam alerts, AMP and predictor tools",
    context: "Careers360",
    result:
      "Exam alert products with 1L+ alerts set, AMP/article growth, College Predictor, Rank Predictor and college comparison journeys.",
  },
];

const navItems = [
  ["Work", "work"],
  ["Approach", "approach"],
  ["Skills", "skills"],
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
    --violet: #8c5cf6;
    --amber: #ffb020;
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

  .highlight {
    color: var(--blue);
    font-weight: 900;
  }

  .highlight.hot {
    color: #d94b2b;
  }

  .highlight.ai {
    background: var(--ink);
    border-radius: 8px;
    color: var(--lime);
    display: inline-block;
    line-height: 1.05;
    padding: 0.08em 0.16em;
  }

  .hero-proof {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.35rem;
  }

  .hero-proof span {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 8px;
    color: #25292b;
    font-size: 0.86rem;
    font-weight: 850;
    padding: 0.58rem 0.7rem;
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

  .status-stack {
    display: grid;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }

  .status-stack span {
    background: #f2eee6;
    border-radius: 8px;
    color: var(--ink);
    font-size: 0.8rem;
    font-weight: 850;
    padding: 0.5rem;
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

  .metric:first-child {
    background: var(--ink);
    color: white;
  }

  .metric:first-child span {
    color: rgba(255, 255, 255, 0.72);
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
    scroll-margin-top: 6rem;
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

  .operating-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-top: 1rem;
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

  .operating-card {
    background: var(--ink);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    color: white;
    min-height: 250px;
    padding: 1rem;
  }

  .operating-card span {
    background: var(--lime);
    border-radius: 8px;
    color: var(--ink);
    display: inline-flex;
    font-size: 0.8rem;
    font-weight: 850;
    margin-bottom: 1rem;
    padding: 0.45rem 0.55rem;
  }

  .operating-card h3 {
    font-size: 1.25rem;
    line-height: 1.08;
    margin: 0 0 0.8rem;
  }

  .operating-card p {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.94rem;
    line-height: 1.55;
    margin: 0;
  }

  .skill-cloud {
    align-content: start;
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .skill-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .ai-highlight-band {
    background: var(--ink);
    border-radius: 8px;
    color: white;
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(0, 0.75fr) minmax(0, 1fr);
    margin-bottom: 1rem;
    overflow: hidden;
  }

  .ai-highlight-copy {
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  .ai-highlight-copy h3 {
    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 0.98;
    margin: 0 0 1rem;
  }

  .ai-highlight-copy p {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.6;
    margin: 0;
  }

  .ai-highlight-list {
    align-content: start;
    background: linear-gradient(135deg, var(--lime), var(--mint));
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  .ai-highlight-list span {
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(17, 19, 20, 0.12);
    border-radius: 8px;
    color: var(--ink);
    font-size: clamp(0.92rem, 1.5vw, 1.15rem);
    font-weight: 900;
    padding: 0.75rem 0.85rem;
  }

  .skill-area {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    min-height: 360px;
    overflow: hidden;
  }

  .skill-area-top {
    border-bottom: 1px solid var(--line);
    padding: 1.25rem;
  }

  .skill-area:nth-child(1) .skill-area-top,
  .skill-area:nth-child(4) .skill-area-top {
    background: linear-gradient(135deg, var(--lime), #fffdfa 70%);
  }

  .skill-area:nth-child(2) .skill-area-top,
  .skill-area:nth-child(5) .skill-area-top {
    background: linear-gradient(135deg, var(--mint), #fffdfa 70%);
  }

  .skill-area:nth-child(3) .skill-area-top,
  .skill-area:nth-child(6) .skill-area-top {
    background: linear-gradient(135deg, var(--coral), #fffdfa 70%);
  }

  .skill-area h3 {
    font-size: 1.45rem;
    line-height: 1.08;
    margin: 0 0 0.75rem;
  }

  .skill-focus {
    background: var(--ink);
    border-radius: 8px;
    color: var(--lime);
    display: inline-flex;
    font-size: 0.76rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    margin-bottom: 0.85rem;
    padding: 0.42rem 0.52rem;
    text-transform: uppercase;
  }

  .skill-area p {
    color: #34393b;
    line-height: 1.55;
    margin: 0;
  }

  .proof-strip {
    border-bottom: 1px solid var(--line);
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.5;
    padding: 1rem 1.25rem;
  }

  .skill-area .tags {
    padding-top: 1rem;
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

  .venture-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 1rem;
  }

  .venture-card {
    background: var(--ink);
    border-radius: 8px;
    color: white;
    min-height: 230px;
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  .venture-card:nth-child(2) {
    background: #24312f;
  }

  .venture-card h3 {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    line-height: 1;
    margin: 0.6rem 0 1rem;
  }

  .venture-card p {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.55;
    margin: 0 0 1.25rem;
  }

  .venture-card .button {
    border-color: rgba(255, 255, 255, 0.24);
    color: white;
  }

  .project-list {
    display: grid;
    gap: 0.75rem;
  }

  .project-row {
    align-items: center;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 8px;
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(180px, 0.45fr) minmax(0, 1fr);
    padding: 1rem;
  }

  .project-row strong {
    display: block;
    font-size: 1.1rem;
    line-height: 1.2;
  }

  .project-row span {
    color: var(--blue);
    display: block;
    font-size: 0.82rem;
    font-weight: 850;
    margin-top: 0.4rem;
    text-transform: uppercase;
  }

  .project-row:nth-child(-n + 4) span {
    color: #d94b2b;
  }

  .project-row p {
    color: var(--muted);
    line-height: 1.55;
    margin: 0;
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

    .operating-grid,
    .ai-highlight-band,
    .skill-grid,
    .venture-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
      flex-wrap: wrap;
      overflow-x: visible;
      padding-bottom: 0.1rem;
      width: 100%;
    }

    .nav-links a {
      flex: 1 1 calc(33.333% - 0.35rem);
      font-size: 0.78rem;
      justify-content: center;
      padding: 0.66rem 0.52rem;
    }

    .hero {
      min-height: auto;
      padding-top: 2rem;
    }

    .section {
      scroll-margin-top: 10.5rem;
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
    .operating-grid,
    .ai-highlight-band,
    .skill-grid,
    .venture-grid,
    .project-row,
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
          <p className="eyebrow">Director - Product Management | AI and Digital Transformation</p>
          <h1>
            Building <span className="highlight ai">AI products</span> that move business numbers.
          </h1>
          <p className="hero-subtitle">
            I am Jitender Kumar, a <strong className="highlight">Product and Digital Transformation leader</strong> with
            10+ years across <strong className="highlight hot">Agentic AI</strong>, <strong className="highlight hot">GenAI/LLM</strong>,
            AI/ML products, automation, CRM, ERP, e-commerce and RetailTech. I turn business goals into
            roadmaps, intelligent systems and measurable outcomes.
          </p>
          <div className="hero-proof" aria-label="AI capability highlights">
            <span>Agentic AI</span>
            <span>GenAI / LLM</span>
            <span>Machine Learning</span>
            <span>Automation / RPA</span>
            <span>Predictive Analytics</span>
          </div>
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
            <p>
              Assistant General Manager - <strong>AI Product and Digital Transformation</strong> leading enterprise
              workflows, automation and AI enablement.
            </p>
            <div className="status-stack">
              <span>20+ enterprise apps</span>
              <span>INR 13 Cr+ savings</span>
              <span>AI/automation-led roadmaps</span>
            </div>
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
            I prefer crisp problem framing, measurable bets, strong execution rituals and adoption plans that
            survive launch day.
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
              <li>
                <b>04</b>
                <span>Keep CXOs, business owners, product, tech, QA, infra and vendors operating from the same source of truth.</span>
              </li>
              <li>
                <b>05</b>
                <span>Use post-launch signals to simplify the workflow, reduce cost, improve conversion or unlock the next bet.</span>
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

        <div className="operating-grid" aria-label="Operating model">
          {operatingCards.map((card) => (
            <article className="operating-card" key={card.step}>
              <span>{card.step}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-header">
          <h2>AI skill highlights</h2>
          <p>
            The new positioning is intentionally sharper: <strong className="highlight hot">Agentic AI</strong>,
            <strong className="highlight hot"> GenAI/LLM</strong>, machine learning, automation, predictive
            analytics and enterprise AI delivery are now the headline skills.
          </p>
        </div>

        <div className="ai-highlight-band">
          <div className="ai-highlight-copy">
            <p className="eyebrow">Skill highlight section</p>
            <h3>AI, automation and intelligent product systems.</h3>
            <p>
              Built for Director / Principal PM / AVP Product mandates where AI strategy, platform thinking,
              stakeholder leadership and measurable business impact matter in the same conversation.
            </p>
          </div>
          <div className="ai-highlight-list" aria-label="AI and automation skills">
            {aiHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-grid">
          {skillAreas.map((area) => (
            <article className="skill-area" key={area.title}>
              <div className="skill-area-top">
                <span className="skill-focus">{area.focus}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </div>
              <div className="proof-strip">{area.proof}</div>
              <div className="tags">
                {area.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="ventures">
        <div className="section-header">
          <h2>Builder mode</h2>
          <p>
            Beyond corporate product leadership, I keep exploring startup ideas and advisory-style problem
            spaces where product thinking can create new categories.
          </p>
        </div>

        <div className="venture-grid">
          {ventureCards.map((venture) => (
            <article className="venture-card" key={venture.name}>
              <p className="eyebrow">{venture.role}</p>
              <h3>{venture.name}</h3>
              <p>{venture.copy}</p>
              <a className="button" href={venture.link} rel="noreferrer" target="_blank">
                Explore
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="project-highlights">
        <div className="section-header">
          <h2>More product highlights</h2>
          <p>
            Additional projects pulled from the LinkedIn profile export, shown as a fast scan of range,
            systems thinking and execution depth.
          </p>
        </div>

        <div className="project-list">
          {projectHighlights.map((project) => (
            <article className="project-row" key={project.title}>
              <div>
                <strong>{project.title}</strong>
                <span>{project.context}</span>
              </div>
              <p>{project.result}</p>
            </article>
          ))}
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
            <h2>Let us build the next AI-led product story.</h2>
            <p>
              Best fit: <strong>Agentic AI</strong>, <strong>GenAI/LLM</strong>, automation, commerce platforms,
              CRM/ERP modernization, predictive analytics and teams that need a product leader who can bridge
              strategy, execution and adoption.
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

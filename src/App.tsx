import React, { useEffect, useRef } from "react";

const styles = `
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f8f9fb;
    color: #212529;
    scroll-behavior: smooth;
  }
  header {
    min-height: 100vh;
    background: url('/5590457.jpg') center/cover no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 2rem;
  }
  header::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.55);
    z-index: 1;
  }
  header * { position: relative; z-index: 2; }
  header img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 4px solid #fff;
    object-fit: cover;
    margin-bottom: 1rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  header h1 { font-size: 3.5rem; margin-bottom: 0.5rem; }
  header p { font-size: 1.3rem; max-width: 800px; }

  nav {
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0; right: 0;
    z-index: 1000;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  nav.visible {
    transform: translateY(0);
  }
  nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: background 0.3s, transform 0.2s;
    font-size: 1rem;
  }
  nav a:hover {
    background: rgba(255,255,255,0.15);
    transform: scale(1.05);
  }

  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 2rem;
    max-width: 900px;
    margin: auto;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  section h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    border-left: 6px solid #2575fc;
    padding-left: 1rem;
  }

  .card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    padding: 2rem;
    margin-bottom: 2rem;
  }
  .card ul { padding-left: 1.5rem; }
  .card li { margin-bottom: 0.7rem; }
  .card h3 { color: #2575fc; margin-top: 0; }
  footer {
    text-align: center;
    padding: 2rem;
    background: #f0f2f5;
  }
`;

const sectionsData = [
  {
    id: "journey",
    title: "🚀 My Product Journey at HippoHomes(Dalmia Group)",
    navText: "ECOM+Retail",
    bullets: [
      "Built HippoHomes' omni-channel e-commerce platform from scratch",
      "Integrated WhatsApp invoicing & chatbot for faster customer engagement",
      "Designed VR-powered kitchen design tool (yes, customers loved it)",
      "Launched loyalty and referral programs that boosted retention by 17%",
      "Used AI-powered text+image search for seamless discovery",
      "Scaled systems to handle multi-million INR transactions per month",
      "Cut checkout time by 30% through UX revamp",
      "Set up an in-house POS system with inventory sync"
    ]
  },
  {
    id: "edtech",
    title: "📚 EdTech & B2B Impact",
    navText: "EdTech",
    bullets: [
      "Developed Careers360's College Predictor, QnA forum & LMS",
      "Boosted leads by 800% (not a typo)",
      "Drove 18M+ organic sessions annually",
      "Used AI/ML for personalized study plans",
      "Reduced churn by 20% with retention strategies",
      "Integrated lead scoring system for sales teams",
      "Optimized SEO to rank #1 for 200+ competitive keywords",
      "Scaled infrastructure for peak admission season traffic"
    ]
  },
  {
    id: "ai",
    title: "🤖 AI & Emerging Tech",
    navText: "AI-Emerging Tech",
    bullets: [
      "Built conversational AI flows for customer service",
      "Integrated Vision AI for product recognition",
      "Leveraged GenAI for personalization",
      "AI-driven recommendations boosted AOV by 12%",
      "Experimented with machine vision for inventory checks",
      "Deployed ML models to predict churn",
      "Automated content tagging with NLP",
      "Used AI to generate custom offers in real-time"
    ]
  },
  {
    id: "leadership",
    title: "👥 Leadership & Strategy",
    navText: "Leadership",
    bullets: [
      "Managed cross-functional teams across tech, design, marketing",
      "Handled P&L ownership in multiple projects",
      "Expert in stakeholder management",
      "Led 0→1 launches and scale-ups",
      "Championed agile transformation",
      "Mentored 10+ junior PMs",
      "Facilitated alignment across departments",
      "Reduced release cycles by 40%"
    ]
  },
  {
    id: "cx",
    title: "💡 Customer Experience Initiatives",
    navText: "Customer Experience",
    bullets: [
      "Designed gamified loyalty program",
      "Created referral program with WhatsApp stickers",
      "Deployed in-store kiosks for self-checkout",
      "Improved NPS by streamlining omnichannel journey",
      "Personalized onboarding emails with AI",
      "Built unified customer profile system",
      "Integrated real-time feedback loop",
      "Conducted 50+ UX tests to improve flows"
    ]
  },
  {
    id: "philosophy",
    title: "🧠 Product Philosophy",
    navText: "Philosophy",
    bullets: [
      "User-first, always",
      "Data over opinion",
      "Ship fast, learn faster",
      "Collaboration beats silos",
      "Every failure = new playbook",
      "Focus on sustainable growth",
      "Empathy-driven design",
      "Measure twice, build once"
    ]
  },
  {
    id: "experiments",
    title: "🎯 Product Experiments",
    navText: "Experiments",
    bullets: [
      "Launched 'Save for Later' → high engagement, low conversion → learned to add nudges",
      "Referral program using WhatsApp stickers boosted signups",
      "Tested AR feature for product placement at home",
      "Introduced voice search (customers loved it)",
      "Reduced drop-offs with checkout A/B testing",
      "Experimented with 1-click reorder",
      "AI-powered price comparison feature",
      "Gamified onboarding to improve activation"
    ]
  },
  {
    id: "fun",
    title: "😄 Fun Facts",
    navText: "Fun Facts",
    bullets: [
      "Collector of weird UX screenshots",
      "Run unofficial product debates with friends",
      "Once pitched a product idea in an elevator",
      "Drink chai like it's a job",
      "Memorized 100+ keyboard shortcuts",
      "Fan of messy whiteboards",
      "Love seeing 'user activated' metrics",
      "Enjoy breaking my own features to improve them"
    ]
  },
  {
    id: "why",
    title: "📣 Why Work With Me?",
    navText: "Why Work With Me",
    bullets: [
      "Proven 0→1 and scale-up experience",
      "Deep expertise in B2C e-commerce & D2C strategy",
      "Cross-functional leadership",
      "Track record of delivering measurable results",
      "Strong AI & Emerging Tech background",
      "Customer-obsessed mindset",
      "Innovative problem-solver",
      "High energy, low ego collaborator"
    ]
  }
];

const App = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach(sec => {
      if (sec) observer.observe(sec);
    });

    // Handle navigation visibility
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header && navRef.current) {
        const headerBottom = header.offsetTop + header.offsetHeight;
        if (window.scrollY > headerBottom) {
          navRef.current.classList.add('visible');
        } else {
          navRef.current.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      <style>{styles}</style>

      <header>
        <img src="/9bb663b3-7781-45e9-aee7-cbc9b8c8140e.jpeg" alt="Jitender Kumar" />
        <h1>Jitender Kumar</h1>
        <p>General Manager(Product & Technology) | Digital Transformation | AI & Emerging Tech | Customer Experience</p>
      </header>

      {sectionsData.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          ref={el => {
            sectionRefs.current[idx] = el;
          }}
        >
          <h2>{section.title}</h2>
          <div className="card">
            <ul>
              {section.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <footer>
        Built by Jitender Kumar | Let’s connect and build something great 🚀
      </footer>

      <nav ref={navRef}>
        {sectionsData.map(s => (
          <a key={s.id} href={`#${s.id}`}>
            {s.navText}
          </a>
        ))}
      </nav>
    </>
  );
};

export default App;

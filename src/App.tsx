import React, { useEffect, useRef } from "react";

const styles = `
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f8f9fb;
    color: #212529;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  /* Mobile-first responsive design */
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
    padding: 1rem;
  }
.scroll-down {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 3;
  animation: bounce 1.8s infinite;
  text-decoration: none;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -10px);
  }
  60% {
    transform: translate(-50%, -5px);
  }
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
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #fff;
    object-fit: cover;
    margin-bottom: 1rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }

  header h1 { 
    font-size: 2rem; 
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  header p { 
    font-size: 1rem; 
    max-width: 100%;
    line-height: 1.5;
    padding: 0 1rem;
  }

  /* Mobile Navigation */
  nav {
    background: rgba(0,0,0,0.95);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0; 
    right: 0;
    z-index: 1000;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    max-height: 100vh;
    overflow-y: auto;
  }

  nav.visible {
    transform: translateY(0);
  }

  /* Hide navigation on mobile by default */
  @media (max-width: 767px) {
    nav {
      transform: translateY(-100%);
    }
    
    nav.visible {
      transform: translateY(0);
    }
  }

  nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    transition: background 0.3s, transform 0.2s;
    font-size: 0.9rem;
    margin: 0.25rem 0;
    text-align: center;
    border: 1px solid transparent;
  }

  nav a:hover, nav a:active {
    background: rgba(255,255,255,0.15);
    transform: scale(1.02);
    border-color: rgba(255,255,255,0.2);
  }

  /* Mobile Menu Toggle */
  .nav-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1001;
    background: rgba(0,0,0,0.8);
    border: none;
    color: white;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  }

  .nav-toggle span {
    width: 20px;
    height: 2px;
    background: white;
    transition: 0.3s;
  }

  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;
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
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    border-left: 4px solid #2575fc;
    padding-left: 0.75rem;
    line-height: 1.3;
  }

  .card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .card ul { 
    padding-left: 1.25rem; 
    margin: 0;
  }

  .card li { 
    margin-bottom: 0.6rem; 
    line-height: 1.5;
    font-size: 0.95rem;
  }

  .card h3 { 
    color: #2575fc; 
    margin-top: 0; 
  }

  footer {
    text-align: center;
    padding: 1.5rem;
    background: #f0f2f5;
    font-size: 0.9rem;
  }

  /* Tablet Styles */
  @media (min-width: 768px) {
    header {
      padding: 2rem;
    }

    header img {
      width: 140px;
      height: 140px;
    }

    header h1 { 
      font-size: 2.5rem; 
    }

    header p { 
      font-size: 1.1rem; 
      max-width: 600px;
    }

    nav {
      flex-direction: row;
      justify-content: space-around;
      padding: 1rem 2rem;
    }

    nav a {
      font-size: 0.95rem;
      margin: 0;
    }

    .nav-toggle {
      display: none;
    }

    section {
      padding: 3rem 2rem;
    }

    section h2 {
      font-size: 2.2rem;
      border-left: 5px solid #2575fc;
      padding-left: 1rem;
    }

    .card {
      padding: 2rem;
      border-radius: 16px;
    }

    .card li {
      font-size: 1rem;
    }
  }

  /* Desktop Styles */
  @media (min-width: 1024px) {
    header {
      padding: 2rem;
    }

    header img {
      width: 160px;
      height: 160px;
    }

    header h1 { 
      font-size: 3.5rem; 
    }

    header p { 
      font-size: 1.3rem; 
      max-width: 800px;
    }

    nav {
      padding: 1rem;
    }

    nav a {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }

    section {
      padding: 4rem 2rem;
    }

    section h2 {
      font-size: 3rem;
      border-left: 6px solid #2575fc;
      padding-left: 1rem;
    }

    .card {
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .card li {
      font-size: 1rem;
    }

    footer {
      padding: 2rem;
      font-size: 1rem;
    }
  }

  /* Large Desktop Styles */
  @media (min-width: 1440px) {
    section {
      max-width: 1200px;
    }
  }

  /* Touch-friendly improvements */
  @media (hover: none) and (pointer: coarse) {
    nav a {
      padding: 1rem;
      margin: 0.5rem 0;
    }

    .card {
      padding: 1.75rem;
    }

    .card li {
      margin-bottom: 0.8rem;
    }
  }

  /* Landscape orientation adjustments */
  @media (orientation: landscape) and (max-height: 600px) {
    header {
      min-height: 100vh;
      padding: 1rem;
    }

    header img {
      width: 80px;
      height: 80px;
    }

    header h1 {
      font-size: 1.8rem;
    }

    header p {
      font-size: 0.9rem;
    }
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
  const [isNavOpen, setIsNavOpen] = React.useState(false);

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

    // Handle navigation visibility (only for desktop/tablet)
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header && navRef.current) {
        const headerBottom = header.offsetTop + header.offsetHeight;
        const isMobile = window.innerWidth <= 767;
        
        // Only auto-show navigation on desktop/tablet, not mobile
        if (!isMobile && window.scrollY > headerBottom) {
          navRef.current.classList.add('visible');
        } else if (!isMobile) {
          navRef.current.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    const newIsOpen = !isNavOpen;
    setIsNavOpen(newIsOpen);
    if (navRef.current) {
      if (newIsOpen) {
        navRef.current.classList.add('visible');
      } else {
        navRef.current.classList.remove('visible');
      }
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
    if (navRef.current) {
      navRef.current.classList.remove('visible');
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      <style>{styles}</style>

      <header>
        <img src='/pic.jpg' alt="Jitender Kumar" />
        <h1>Jitender Kumar</h1>
        <p>General Manager(Product & Technology) | Digital Transformation | AI & Emerging Tech | Customer Experience</p>
        <a href="#journey" className="scroll-down" aria-label="Scroll Down">↓</a>
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

      {/* Mobile Navigation Toggle */}
      <button 
        className={`nav-toggle ${isNavOpen ? 'active' : ''}`} 
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav ref={navRef}>
        {sectionsData.map(s => (
          <a 
            key={s.id} 
            href={`#${s.id}`}
            onClick={closeNav}
          >
            {s.navText}
          </a>
        ))}
      </nav>
    </>
  );
};

export default App;

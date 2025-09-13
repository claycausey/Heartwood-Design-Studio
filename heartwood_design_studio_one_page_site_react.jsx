import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Trees, Ruler, Building2, Landmark, Hammer, CheckCircle2, Instagram, FileText, Palette } from "lucide-react";

// Tailwind is available by default. Using shadcn/ui primitives via simple divs for portability.
// Single-file, production-ready one-pager. Replace placeholder text and links as needed.

const nav = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 py-20 ${className}`}>{children}</section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-white/90 backdrop-blur">
    {children}
  </span>
);

const Feature = ({ icon: Icon, title, children }) => (
  <div className="group rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-neutral-600">{children}</p>
  </div>
);

const Tier = ({ name, price, unit, bullets = [], highlight = false }) => (
  <div className={`flex flex-col rounded-2xl border p-6 shadow-sm ${highlight ? "border-neutral-900 ring-2 ring-neutral-900" : "border-neutral-200"}`}>
    <h3 className="text-xl font-semibold">{name}</h3>
    <div className="mt-4 flex items-baseline gap-1">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-neutral-500">/{unit}</span>
    </div>
    <ul className="mt-6 space-y-3 text-sm text-neutral-700">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-neutral-900" />{b}</li>
      ))}
    </ul>
    <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 font-medium text-white transition hover:bg-neutral-800">
      Start here <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  </div>
);

const ProjectCard = ({ title, subtitle }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
    <div className="aspect-[16/10] w-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),rgba(0,0,0,0))]">
      {/* Placeholder graphic: tree rings + scale icon */}
      <svg viewBox="0 0 400 250" className="h-full w-full">
        <defs>
          <radialGradient id="rg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ddd" />
            <stop offset="100%" stopColor="#f7f7f7" />
          </radialGradient>
        </defs>
        <rect width="400" height="250" fill="url(#rg)" />
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx="200" cy="125" r={12 + i * 12} fill="none" stroke="#bbb" strokeDasharray="2 4" />
        ))}
        <path d="M200 95 L230 125 L200 155 L170 125 Z" fill="none" stroke="#111" strokeWidth="2" />
        <text x="200" y="232" textAnchor="middle" fontSize="12" fill="#666">Mock image — replace with your render</text>
      </svg>
    </div>
    <div className="p-5">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>
    </div>
  </div>
);

export default function Website() {
  return (
    <div className="min-h-screen scroll-smooth bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
              <Ruler className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium tracking-wide">Heartwood Design Studio</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-neutral-700 hover:text-neutral-950">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white md:inline-flex">Free consult</a>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_-10%,#ffffff22,transparent)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Pill>
              <Trees className="h-4 w-4" />
              Design rooted in place & preservation
            </Pill>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Pre‑permitting design for homes, adaptive reuse & small commercial.
            </h1>
            <p className="mt-5 max-w-2xl text-white/80">
              Schematic plans, elevations, sections, and 3D visualization that bring your concept to life—ready for
              consultants, investors, or permit‑ready architects.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-neutral-100">
                Book a free consult <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center rounded-xl border border-white/30 bg-transparent px-5 py-3 font-medium text-white hover:bg-white/10">
                See work
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <Section id="services" className="bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Services</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Feature icon={Building2} title="Pre‑Permitting Design">
              Schematic plans, elevations & sections for residential and small commercial projects.
            </Feature>
            <Feature icon={Palette} title="Interior Concepts">
              Space planning, material palettes, lighting studies, FF&E layouts for cohesive interiors.
            </Feature>
            <Feature icon={Landmark} title="Adaptive Reuse & Preservation">
              Context‑sensitive concepts for historic structures with respect for fabric & code.
            </Feature>
            <Feature icon={Hammer} title="3D Modeling & Visualization">
              Clean massing, refined models, and photorealistic renders for presentations.
            </Feature>
            <Feature icon={FileText} title="Presentation & Investor Decks">
              Branded packages to communicate vision to partners, boards, and lenders.
            </Feature>
            <Feature icon={Ruler} title="Documentation Support">
              Door/window schedules, diagrams & handoff sets for consultant coordination.
            </Feature>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-2xl font-semibold md:text-3xl">Selected Work</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ProjectCard title="Panama City Grammar — Adaptive Reuse" subtitle="Facade retention, new gallery core, mixed‑use concept" />
            <ProjectCard title="Lake Cottage — Schematic Set" subtitle="2,100 sf new build, simple volumes, warm interior" />
            <ProjectCard title="Historic Shopfront — Retail Fit‑Out" subtitle="Light‑touch interior, reversible interventions" />
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-2xl font-semibold md:text-3xl">Process</h2>
          <div className="grid gap-6 md:grid-cols-5">
            {["Discovery", "Research", "Concepts", "Refinement", "Handoff"].map((step, i) => (
              <div key={step} className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white">{i + 1}</div>
                <h3 className="font-medium">{step}</h3>
                <p className="mt-2 text-neutral-600">
                  {[
                    "Free consult, goals, constraints, and success criteria.",
                    "Site, codes, precedent. Align on program & budget.",
                    "Plan diagrams, massing, interior narratives.",
                    "Detail elevations, sections, materials, key views.",
                    "PDF package, CAD/IFC/OBJ exports, referral to stamping pros."
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Pricing</h2>
            <p className="text-sm text-neutral-600">Transparent tiers. Custom scopes available.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Tier
              name="Basic Design"
              price="$2"
              unit="sq ft"
              bullets={[
                "Floor plan + 1 elevation",
                "Layout & flow validation",
                "Concept PDF"
              ]}
            />
            <Tier
              name="Standard Design"
              price="$3.5"
              unit="sq ft"
              bullets={[
                "Plans, 4 elevations, 1 section",
                "3D massing model",
                "Presentation set"
              ]}
              highlight
            />
            <Tier
              name="Premium + Viz"
              price="$5–7"
              unit="sq ft"
              bullets={[
                "Plans, elevations & sections",
                "Refined 3D model",
                "2 photoreal renderings"
              ]}
            />
          </div>
          <p className="mt-6 text-xs text-neutral-500">Photoreal renderings beyond two are billed per view. Architectural services requiring licensure are not provided.</p>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">About Heartwood</h2>
              <p className="mt-4 text-neutral-700">
                Heartwood Design Studio focuses on pre‑permitting architectural design with an emphasis on adaptive reuse,
                historic preservation, and interior concepts. Work is grounded in place, material honesty, and clear communication.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li>• Florida‑based, serving the Southeast and remote clients.</li>
                <li>• Collaborates with licensed architects, engineers & contractors.</li>
                <li>• Clean deliverables optimized for handoff and stakeholder clarity.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="aspect-[4/3] w-full">
                <svg viewBox="0 0 500 375" className="h-full w-full">
                  <rect width="500" height="375" fill="#f3f3f3" />
                  {Array.from({ length: 14 }).map((_, i) => (
                    <circle key={i} cx="250" cy="187.5" r={10 + i * 12} fill="none" stroke="#cfcfcf" />
                  ))}
                  <path d="M250 147.5 L280 177.5 L250 207.5 L220 177.5 Z" fill="none" stroke="#111" strokeWidth="2" />
                  <text x="250" y="355" textAnchor="middle" fontSize="12" fill="#666">Swap with your headshot / studio photo</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Book a Free Consultation</h2>
              <p className="mt-3 text-white/80">30 minutes to discuss goals, constraints, and next steps. No pressure—just clarity.</p>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>(555) 555‑5555</span></div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>hello@heartwoodstudio.com</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Florida, USA • Remote friendly</span></div>
                <div className="flex items-center gap-2"><Instagram className="h-4 w-4" /><span>@heartwood.design</span></div>
              </div>
            </div>
            <form className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <label className="mb-2 block text-sm">Name</label>
              <input className="mb-4 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 outline-none focus:border-white/40" placeholder="Your name" />
              <label className="mb-2 block text-sm">Email</label>
              <input type="email" className="mb-4 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 outline-none focus:border-white/40" placeholder="you@domain.com" />
              <label className="mb-2 block text-sm">Project brief</label>
              <textarea rows={4} className="mb-5 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 outline-none focus:border-white/40" placeholder="Tell me about your site, goals, budget…" />
              <button type="button" className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 font-medium text-neutral-900 hover:bg-neutral-100">
                Request consult <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <p className="mt-3 text-xs text-white/60">Submissions are demo‑only on this static build. Hook to your form provider (Tally/Typeform/Webflow) or email API.</p>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Heartwood Design Studio. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-700">
            <a href="#" className="hover:text-neutral-950">Terms</a>
            <a href="#" className="hover:text-neutral-950">Privacy</a>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-neutral-950">Back to top <ArrowRight className="h-4 w-4 rotate-180" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

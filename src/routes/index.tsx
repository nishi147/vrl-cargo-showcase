import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Headphones,
  Home,
  MapPin,
  Menu,
  PackageCheck,
  PawPrint,
  Phone,
  ShieldCheck,
  Star,
  Truck,
  Warehouse,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import heroImage from "@/assets/vrl-moving-team.jpg";
import homeImage from "@/assets/home-shifting.jpg";
import vehicleImage from "@/assets/vehicle-transport.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VRL Cargo Packers & Movers | Safe Relocation" },
      { name: "description", content: "Trusted home, office, vehicle and warehouse relocation across India. Get a fast moving quote from VRL Cargo Packers & Movers." },
      { property: "og:title", content: "VRL Cargo Packers & Movers" },
      { property: "og:description", content: "Safe packing, secure moving and timely delivery across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phone = "+919350359213";

const services = [
  { icon: Home, title: "Home shifting", copy: "Room-by-room packing and careful delivery for a smooth move.", image: homeImage },
  { icon: Building2, title: "Office shifting", copy: "Organised business relocation designed to reduce downtime." },
  { icon: CarFront, title: "Car transport", copy: "Covered carriers and secure handling from pickup to delivery.", image: vehicleImage },
  { icon: Warehouse, title: "Warehousing", copy: "Clean, monitored storage for household and business goods." },
  { icon: ShieldCheck, title: "Transit insurance", copy: "Added protection and clear support throughout your move." },
  { icon: PawPrint, title: "Pet relocation", copy: "Personalised, comfort-first relocation for your companion." },
];

const faqs = [
  ["How can I track my shipment?", "Once your move is confirmed, you receive a tracking ID. Our support team can also provide live updates throughout transit."],
  ["How long does delivery usually take?", "Timing depends on distance, load and route. Your move coordinator shares a clear delivery window before pickup."],
  ["Are my belongings insured?", "Transit insurance is available for added protection. We explain the coverage options before your move begins."],
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="VRL Cargo home">
      <span className="brand-mark"><Truck size={26} strokeWidth={2.4} /></span>
      <span className="leading-none">
        <strong className="block font-display text-2xl font-extrabold text-primary">VRL <span className="text-accent">CARGO</span></strong>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Packers & Movers</span>
      </span>
    </a>
  );
}

function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  if (sent) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center text-center" role="status">
        <span className="mb-5 flex size-14 items-center justify-center rounded-full bg-success text-success-foreground"><Check size={28} /></span>
        <h3 className="font-display text-2xl font-bold text-primary">Request received</h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">Our moving coordinator will call you shortly with the next steps.</p>
        <button className="mt-5 text-sm font-bold text-accent" onClick={() => setSent(false)}>Send another request</button>
      </div>
    );
  }
  return (
    <form onSubmit={submit} className={compact ? "grid gap-3 md:grid-cols-4" : "grid gap-4"}>
      <label className="sr-only" htmlFor={compact ? "name-bottom" : "name"}>Your name</label>
      <input id={compact ? "name-bottom" : "name"} required placeholder="Your name" className="form-field" />
      <label className="sr-only" htmlFor={compact ? "phone-bottom" : "phone"}>Phone number</label>
      <input id={compact ? "phone-bottom" : "phone"} required type="tel" placeholder="Phone number" className="form-field" />
      <label className="sr-only" htmlFor={compact ? "service-bottom" : "service"}>Select service</label>
      <select id={compact ? "service-bottom" : "service"} required className="form-field text-muted-foreground">
        <option value="">Select service</option>
        {services.map((service) => <option key={service.title}>{service.title}</option>)}
      </select>
      <button type="submit" className="button-accent group">Get free quote <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></button>
    </form>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="top" className="overflow-hidden">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs font-semibold lg:px-8">
          <p className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> India’s trusted packers & movers</p>
          <a href={`tel:${phone}`} className="hidden items-center gap-2 sm:flex"><Phone size={14} className="text-accent" /> +91 93503 59213</a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm font-bold text-primary lg:flex" aria-label="Main navigation">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">Why us</a>
            <a href="#process" className="nav-link">How it works</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href={`tel:${phone}`} className="button-outline"><Phone size={17} /> Call now</a>
            <a href="#quote" className="button-accent">Get a quote <ArrowRight size={17} /></a>
          </div>
          <button className="icon-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><Menu /></button>
        </div>
        {menuOpen && <nav className="grid border-t border-border bg-background px-5 py-4 text-sm font-bold text-primary lg:hidden"><a href="#services" className="py-3" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" className="py-3" onClick={() => setMenuOpen(false)}>Why us</a><a href="#process" className="py-3" onClick={() => setMenuOpen(false)}>How it works</a><a href="#faq" className="py-3" onClick={() => setMenuOpen(false)}>FAQ</a></nav>}
      </header>

      <section className="relative min-h-[760px] bg-primary lg:min-h-[680px]">
        <img src={heroImage} alt="Professional movers carrying a packed box beside a cargo truck" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" fetchPriority="high" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-16 lg:min-h-[680px] lg:grid-cols-[1.2fr_0.72fr] lg:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <p className="mb-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-accent"><span className="h-px w-8 bg-accent" /> Safe moves across India</p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">Moving your world.<br /><span className="text-accent">Handled with care.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">From your first packed box to the final delivery, our trained teams make home, office and vehicle relocation feel effortless.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="button-accent button-large">Plan my move <ArrowRight size={20} /></a>
              <a href={`tel:${phone}`} className="button-hero"><Phone size={19} /> +91 93503 59213</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-hero-muted">
              <span className="flex items-center gap-2"><ShieldCheck className="text-accent" size={19} /> Insured handling</span>
              <span className="flex items-center gap-2"><Clock3 className="text-accent" size={19} /> On-time delivery</span>
              <span className="flex items-center gap-2"><Headphones className="text-accent" size={19} /> 24/7 support</span>
            </div>
          </div>
          <aside id="quote" className="quote-panel scroll-mt-28">
            <p className="eyebrow">Quick estimate</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary">Tell us about your move</h2>
            <p className="mb-6 mt-2 text-sm leading-6 text-muted-foreground">Share a few details. Our move expert will call with a tailored quote.</p>
            <QuoteForm />
            <p className="mt-4 text-center text-xs text-muted-foreground">No obligation. Your details stay private.</p>
          </aside>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-7 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {[['27+','Years of trust'],['52K+','Moves annually'],['39+','India branches'],['600+','Trained experts'],['2M','Sq. ft. storage'],['300+','GPS vehicles']].map(([value,label]) => <div key={label} className="stat"><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section id="services" className="section bg-surface scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading"><div><p className="eyebrow">What we move</p><h2>One team for every kind of move.</h2></div><p>End-to-end packing and moving built around safe handling, transparent coordination and dependable delivery.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return <article key={service.title} className={`service-card ${service.image ? "service-card-image" : ""}`}>
                {service.image && <img src={service.image} alt="" width={1200} height={900} loading="lazy" />}
                <div className="service-content"><span className="service-number">0{index + 1}</span><span className="service-icon"><Icon size={24} /></span><h3>{service.title}</h3><p>{service.copy}</p><a href={`tel:${phone}`} aria-label={`Call about ${service.title}`}>Discuss your move <ArrowRight size={17} /></a></div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="about" className="section bg-background scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="image-frame"><img src={homeImage} alt="VRL Cargo movers professionally packing a living room" width={1200} height={900} loading="lazy" /><div className="experience-badge"><strong>27+</strong><span>years moving India</span></div></div>
          <div><p className="eyebrow">Why VRL Cargo</p><h2 className="section-title">The confidence to move without the chaos.</h2><p className="mt-6 text-base leading-7 text-muted-foreground">Every move gets a dedicated coordinator, trained handling crew and a clear plan. We use quality packing material, GPS-enabled vehicles and proven processes to protect what matters.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[['Professional packing','Right materials for every item.'],['Secure transportation','GPS-enabled vehicles and careful loading.'],['Clear communication','Updates from pickup to delivery.'],['Nationwide coverage','39+ branches serving 1,264 destinations.']].map(([title,copy]) => <div key={title} className="benefit"><span><Check size={17} /></span><div><h3>{title}</h3><p>{copy}</p></div></div>)}
            </div>
            <a href={`tel:${phone}`} className="button-primary mt-9">Speak to a move expert <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section id="process" className="section bg-primary text-primary-foreground scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading section-heading-dark"><div><p className="eyebrow">Simple by design</p><h2>Your move, in four clear steps.</h2></div><p>A single team coordinates the details so you always know what happens next.</p></div>
          <div className="process-grid mt-12">
            {[['01','Request a quote','Tell us where, when and what you are moving.'],['02','Plan & pack','We survey, schedule and pack with the right materials.'],['03','Track the move','Your shipment travels securely with regular updates.'],['04','Settle in','We deliver carefully and place items where they belong.']].map(([num,title,copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-surface scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div><p className="eyebrow">Questions, answered</p><h2 className="section-title">Know before you move.</h2><p className="mt-5 leading-7 text-muted-foreground">Still deciding? Call our team for straightforward advice about your route and requirements.</p><div className="mt-7 flex items-center gap-3 text-sm font-bold text-primary"><span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground"><Phone size={19} /></span><span><small className="block font-medium text-muted-foreground">Talk to us</small>+91 93503 59213</span></div></div>
          <div className="grid gap-3">{faqs.map(([question,answer],i) => <details key={question} className="faq-item" open={i===0}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-accent py-12 text-accent-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-7 flex flex-col justify-between gap-2 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.18em]">Ready when you are</p><h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Get your free moving estimate.</h2></div><div className="flex items-center gap-1"><Star size={17} fill="currentColor" /><Star size={17} fill="currentColor" /><Star size={17} fill="currentColor" /><Star size={17} fill="currentColor" /><Star size={17} fill="currentColor" /><span className="ml-2 text-sm font-semibold">Trusted by families across India</span></div></div><QuoteForm compact /></div>
      </section>

      <footer className="bg-primary pb-24 pt-12 text-primary-foreground md:pb-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row md:items-end lg:px-8"><div><Brand /><p className="mt-5 max-w-sm text-sm leading-6 text-hero-muted">Safe packing, secure transport and reliable relocation for homes and businesses across India.</p></div><div className="text-sm text-hero-muted"><p className="font-bold text-primary-foreground">Call 24×7: +91 93503 59213</p><p className="mt-2">© 2026 VRL Cargo Packers & Movers</p></div></div></footer>

      <div className="mobile-actions"><a href={`tel:${phone}`}><Phone size={19} /> Call now</a><a href={`https://wa.me/${phone.replace('+','')}?text=Hello%20VRL%20Cargo,%20I%20need%20a%20moving%20quote`} target="_blank" rel="noreferrer"><PackageCheck size={19} /> WhatsApp</a></div>
    </main>
  );
}
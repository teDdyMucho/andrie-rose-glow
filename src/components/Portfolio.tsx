import { useEffect, useRef, useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Briefcase, GraduationCap, Award, Menu, X, ArrowRight, Calendar, User2 } from "lucide-react";
import portrait from "@/assets/andrie-portrait.jpg";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "references", label: "References" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  { role: "Insurance Verifier", company: "Stratus Team", years: "2025 – 2026" },
  { role: "Customer Service Representative", company: "Foundever Philippines", years: "2023 – 2025" },
  { role: "Customer Service Representative", company: "Sutherland Global Services", years: "2022 – 2023" },
  { role: "Technical Support Representative", company: "Universal Access Solutions Inc.", years: "2021 – 2022" },
];

const EDUCATION = [
  { degree: "Bachelor of Marketing Management", school: "Pampanga State Agricultural University", years: "2018 – 2019" },
  { degree: "Bachelor of Business Management", school: "Holy Angel University", years: "2016 – 2018" },
];

const SKILLS = ["Management Skills", "Creativity", "Digital Marketing", "Negotiation", "Critical Thinking", "Leadership", "GoHighLevel"];

const REFERENCES = [
  { name: "Rommel Omanito", title: "Uber COE / Senior Analyst", phone: "0969-475-0225", email: "romanito@uber.com" },
  { name: "John Mark Macaraeg", title: "Stratus Team Leader", phone: "0961-000-8403", email: "johnmarkmacaraeg@gmail.com" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useReveal();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["hero", ...NAV.map((n) => n.id)];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    formRef.current?.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-[0_4px_30px_-10px_color-mix(in_oklab,var(--primary)_20%,transparent)]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between" aria-label="Primary">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }} className="font-display text-xl font-bold tracking-tight">
            Andrie<span className="text-primary">.</span>
          </a>
          <ul className="hidden lg:flex items-center gap-10 text-sm font-medium">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(n.id); }}
                  className={`nav-link ${activeSection === n.id ? "active text-primary" : "text-foreground/80 hover:text-foreground"}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:shadow-[0_12px_40px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:-translate-y-0.5 transition-all"
            onClick={() => scrollTo("contact")}
          >
            Hire Me <ArrowRight className="w-4 h-4" />
          </button>
          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="lg:hidden glass border-t border-primary/10">
            <ul className="px-6 py-6 space-y-4">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(n.id); }}
                    className="block text-base font-medium py-2"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Introduction">
          {/* Animated mesh background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px] [animation:mesh-move_20s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-[100px] [animation:mesh-move_25s_ease-in-out_infinite_reverse]" />
            <div className="absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/15 blur-[80px] [animation:mesh-move_30s_ease-in-out_infinite]" />
          </div>

          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center py-20">
            <div className="lg:col-span-7 reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Portfolio · 2025</span>
              </div>
              <h1 className="font-display font-bold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] mb-6">
                Andrie Lowrence
                <br />
                <span className="gradient-text italic">Rodriguez</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-3 font-medium">
                Customer Service &amp; Technical Support Specialist
              </p>
              <p className="text-base text-foreground/70 max-w-xl mb-10 leading-relaxed">
                "Delivering top-notch support and enhancing satisfaction — one interaction at a time."
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("experience")}
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:shadow-[0_15px_50px_-10px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:-translate-y-0.5 transition-all"
                >
                  View My Work <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end reveal">
              <div className="relative [animation:float_6s_ease-in-out_infinite]">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary to-primary-glow blur-2xl opacity-60 [animation:glow_3s_ease-in-out_infinite]" />
                <div className="relative rounded-full p-1.5 bg-gradient-to-tr from-primary via-primary-glow to-primary">
                  <img
                    src={portrait}
                    alt="Portrait of Andrie Lowrence Rodriguez, Customer Service and Technical Support Specialist"
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover bg-background"
                    width={384}
                    height={384}
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 shadow-xl">
                  <p className="text-xs text-muted-foreground">Based in</p>
                  <p className="text-sm font-semibold">Angeles City, PH</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pink-divider max-w-7xl mx-auto" />

        {/* ABOUT */}
        <section id="about" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto" aria-label="About me">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 reveal">
              <SectionLabel>01 — About</SectionLabel>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                Bringing <span className="gradient-text italic">empathy</span> & expertise to every conversation.
              </h2>
            </div>
            <div className="lg:col-span-7 reveal">
              <p className="text-lg leading-relaxed text-foreground/80 mb-10">
                Experienced Customer Service Representative with over 5 years in delivering top-notch support and
                enhancing satisfaction. Proficient in resolving issues, clear communication, and managing high volumes
                of inquiries. Positive, team-oriented, and eager to contribute to the company.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <StatCard icon={<Calendar className="w-5 h-5" />} value="5+" label="Years of Experience" />
                <StatCard icon={<Briefcase className="w-5 h-5" />} value="4" label="Companies Worked" />
                <StatCard icon={<Award className="w-5 h-5" />} value="7+" label="Skills Mastered" />
              </div>
            </div>
          </div>
        </section>

        <div className="pink-divider max-w-7xl mx-auto" />

        {/* EXPERIENCE */}
        <section id="experience" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto" aria-label="Work experience">
          <div className="reveal mb-16">
            <SectionLabel>02 — Experience</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">A track record of <span className="gradient-text italic">care</span>.</h2>
          </div>
          <ol className="relative max-w-4xl">
            <div className="absolute left-4 lg:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
            {EXPERIENCE.map((job, i) => (
              <li key={i} className="reveal relative pl-14 lg:pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 lg:left-2 top-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_40%,transparent)]">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <article className="group glass rounded-2xl p-6 lg:p-8 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--primary)_30%,transparent)] transition-all duration-500">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl font-bold">{job.role}</h3>
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">{job.years}</span>
                  </div>
                  <p className="text-foreground/70 font-medium">{job.company}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <div className="pink-divider max-w-7xl mx-auto" />

        {/* EDUCATION */}
        <section id="education" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto" aria-label="Education">
          <div className="reveal mb-16">
            <SectionLabel>03 — Education</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">Academic <span className="gradient-text italic">foundation</span>.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((ed, i) => (
              <article
                key={i}
                className="reveal group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-card to-secondary border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--primary)_30%,transparent)] transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <GraduationCap className="w-10 h-10 text-primary mb-6" />
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">{ed.years}</p>
                <h3 className="font-display text-2xl font-bold mb-2 leading-tight">{ed.degree}</h3>
                <p className="text-foreground/70">{ed.school}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="pink-divider max-w-7xl mx-auto" />

        {/* SKILLS */}
        <section id="skills" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto" aria-label="Skills">
          <div className="reveal mb-16">
            <SectionLabel>04 — Skills</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">Core <span className="gradient-text italic">competencies</span>.</h2>
          </div>
          <ul className="reveal flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <li key={skill}>
                <span className="inline-block px-6 py-3 rounded-full text-sm font-medium bg-card border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_40%,transparent)] hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="pink-divider max-w-7xl mx-auto" />

        {/* REFERENCES */}
        <section id="references" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto" aria-label="References">
          <div className="reveal mb-16">
            <SectionLabel>05 — References</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">Trusted by <span className="gradient-text italic">leaders</span>.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {REFERENCES.map((ref, i) => (
              <article
                key={i}
                className="reveal glass rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--primary)_30%,transparent)] transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground shrink-0">
                    <User2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{ref.name}</h3>
                    <p className="text-sm text-foreground/70">{ref.title}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <a href={`tel:${ref.phone.replace(/-/g, "")}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary" /> {ref.phone}
                  </a>
                  <a href={`mailto:${ref.email}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors break-all">
                    <Mail className="w-4 h-4 text-primary" /> {ref.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="pink-divider max-w-7xl mx-auto" />

        {/* CONTACT */}
        <section id="contact" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto" aria-label="Contact">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal">
              <SectionLabel>06 — Contact</SectionLabel>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Let's start a <span className="gradient-text italic">conversation</span>.
              </h2>
              <p className="text-foreground/70 mb-10 max-w-md">
                Open to new opportunities in customer service, technical support, and digital marketing roles.
              </p>
              <ul className="space-y-5">
                <ContactItem icon={<Phone className="w-5 h-5" />} label="Phone" value="+63 961 572 1291" href="tel:+639615721291" />
                <ContactItem icon={<Mail className="w-5 h-5" />} label="Email" value="dreirodriguez0824@gmail.com" href="mailto:dreirodriguez0824@gmail.com" />
                <ContactItem icon={<MapPin className="w-5 h-5" />} label="Location" value="3797 4th Street Balibago, Angeles City, Pampanga" />
              </ul>
            </div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="reveal glass rounded-3xl p-8 lg:p-10 space-y-5"
              aria-label="Contact form"
            >
              <Field label="Name" id="name" type="text" required />
              <Field label="Email" id="email" type="email" required />
              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-foreground/60 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:shadow-[0_15px_50px_-10px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:-translate-y-0.5 transition-all"
              >
                {submitted ? "Message Sent ✓" : "Send Message"} {!submitted && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative mt-20 border-t border-primary/20 py-10 px-6 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Andrie Lowrence Rodriguez. All rights reserved.</p>
          <p className="font-display italic">Crafted with care.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-10 bg-primary" />
      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">{children}</span>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">{icon}</div>
      <p className="font-display text-3xl font-bold gradient-text">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50">{label}</p>
        <p className="text-base font-medium break-words">{value}</p>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="group flex items-center gap-4 hover:text-primary transition-colors">{content}</a>
      ) : (
        <div className="group flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}

function Field({ label, id, type, required }: { label: string; id: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold tracking-widest uppercase text-foreground/60 mb-2">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

import { FiArrowRight, FiDownload } from "react-icons/fi";
import heroBackground from "../../../layout/images/bg-home.png";
import { aboutProfileCard, heroContent, socialLinks } from "../../data/siteData";
import { getLinkProps, isPlaceholderUrl } from "../../utils/linkHelpers";
import TypewriterText from "../ui/TypewriterText";

function HeroSection() {
  const currentHero = heroContent;
  const isCvPdf = String(aboutProfileCard.cvHref ?? "")
    .toLowerCase()
    .endsWith(".pdf");

  const preventPlaceholderNavigation = (event, href) => {
    if (isPlaceholderUrl(href)) {
      event.preventDefault();
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="section-shell overflow-hidden pt-32 sm:pt-36">
      <img
        src={heroBackground}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--hero-overlay)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="fade-slide">
          <p className={`text-sm font-semibold uppercase tracking-[0.32em] ${currentHero.accent}`}>
            Hello! I am
          </p>
          <h1 className="mt-2 text-4xl font-bold text-[var(--text)] sm:text-5xl lg:text-6xl">
            Mohd Raiyan
          </h1>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            <TypewriterText values={currentHero.titles} />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I am a passionate Frontend Developer with expertise in creating stunning and functional websites. With a strong background in Python Full Stack, I specialize in crafting responsive and user-friendly interfaces that leave a lasting impression. My goal is to bring your vision to life through innovative design and seamless functionality. 
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  {...getLinkProps(item.href)}
                  onClick={(event) => preventPlaceholderNavigation(event, item.href)}
                  className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-full text-base text-[var(--text)] transition hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  aria-label={item.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("work")}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ring-1 transition hover:-translate-y-1 ${currentHero.button}`}
            >
              See my work
              <FiArrowRight />
            </button>
            <a
              {...getLinkProps(aboutProfileCard.cvHref)}
              {...(isCvPdf ? { target: "_blank", rel: "noreferrer" } : {})}
              onClick={(event) =>
                preventPlaceholderNavigation(event, aboutProfileCard.cvHref)
              }
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ring-1 transition hover:-translate-y-1 ${currentHero.button}`}
            >
              {aboutProfileCard.cvLabel}
              <FiDownload />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--text)]"
            >
              Start a project
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,122,89,0.18),rgba(59,130,246,0.08))]" />
          <div className="hero-float glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute right-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-sm dark:bg-slate-900/80 dark:text-slate-200">
              Portfolio
            </div>
            <img
              src={currentHero.image}
              alt="Hero portrait"
              className="relative z-10 mx-auto h-full max-h-[600px] w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

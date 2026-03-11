import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { data } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-sunset-gradient">
      <div className="absolute inset-0">
        <img
          src="https://www.gastronomistas.com/wp-content/uploads/La-santa-general-atardecer-ok.jpg"
          alt="Sunset market lounge atmosphere"
          className="h-full w-full object-cover opacity-45"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/10 to-charcoal/55" />
      <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center gap-8 px-6 py-24 text-off-white">
        <Reveal className="max-w-3xl space-y-6">
          <div className="text-xs uppercase tracking-[0.4em] text-off-white/80">
            {data.hero.location}
          </div>
          <div className="space-y-3">
            <h1 className="brand-title text-5xl md:text-6xl lg:text-7xl">
              La Finca<span className="text-terracotta ml-0.5">.</span>
            </h1>
            {data.hero.tagline && (
              <div className="font-script text-2xl text-off-white/90">
                {data.hero.tagline}
              </div>
            )}
            <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-off-white/80">
              {data.hero.support}
            </div>
          </div>
          <p className="text-xl text-off-white/80">{data.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <NavLink to="/agenda" className="btn-ghost">
              {data.hero.ctaPrimary}
            </NavLink>
            <NavLink to="/place" className="btn-secondary border-off-white/50 text-off-white hover:border-off-white">
              {data.hero.ctaSecondary}
            </NavLink>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-off-white/70">
            {data.hero.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;

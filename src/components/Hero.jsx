import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { data } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-sunset-gradient">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80"
          alt="Mediterranean sunset garden"
          className="h-full w-full object-cover opacity-45"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/10 to-charcoal/50" />
      <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center gap-8 px-6 py-24 text-off-white">
        <Reveal className="max-w-3xl space-y-6">
          <div className="text-xs uppercase tracking-[0.4em] text-off-white/80">
            {data.hero.location}
          </div>
          <div className="space-y-3">
            <h1 className="font-sans text-5xl font-semibold uppercase tracking-[0.35em] md:text-6xl lg:text-7xl">
              {data.hero.title}
            </h1>
            <div className="text-sm uppercase tracking-[0.35em] text-old-gold">
              {data.hero.tagline}
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-off-white/70">
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

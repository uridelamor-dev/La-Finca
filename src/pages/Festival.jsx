import Section from "../components/Section";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import { useLanguage } from "../contexts/LanguageContext";

const Festival = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content" className="bg-night-blue text-off-white">
      <section className="relative overflow-hidden bg-festival-glow">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=80"
            alt="Festival night"
            className="h-full w-full object-cover opacity-45"
          />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <div className="section-title text-off-white/70">{data.festival.hero.eyebrow}</div>
            <h1 className="headline text-off-white">{data.festival.hero.title}</h1>
            <p className="text-lg text-off-white/80">{data.festival.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              {data.festival.hero.tags.map((tag) => (
                <span key={tag} className="chip border-off-white/40 text-off-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-[36px] border border-off-white/10 shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80"
                alt="Festival stage"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow={data.festival.atmosphere.eyebrow}
        title={data.festival.atmosphere.title}
        subtitle={data.festival.atmosphere.subtitle}
        className="text-off-white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {data.festival.atmosphere.cards.map((item) => (
            <Reveal key={item}>
              <div className="rounded-[26px] border border-off-white/20 bg-white/5 p-6 text-sm text-off-white/80">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={data.festival.production.eyebrow}
        title={data.festival.production.title}
        subtitle={data.festival.production.subtitle}
        className="text-off-white"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="rounded-[28px] border border-off-white/10 bg-white/5 p-8">
              <h3 className="font-serif text-2xl">{data.festival.production.cardTitle}</h3>
              <p className="mt-3 text-sm text-off-white/80">{data.festival.production.cardBody}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-off-white/10 shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80"
                alt="Night lighting"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <CtaBanner
          eyebrow={data.festival.cta.eyebrow}
          title={data.festival.cta.title}
          subtitle={data.festival.cta.subtitle}
          ctaPrimary={{ label: data.festival.cta.primary, href: "/agenda" }}
          ctaSecondary={{ label: data.festival.cta.secondary, href: "/premium" }}
        />
      </Section>
    </main>
  );
};

export default Festival;

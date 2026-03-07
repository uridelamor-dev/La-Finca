import Section from "../components/Section";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import { useLanguage } from "../contexts/LanguageContext";

const Garden = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-garden-texture">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80"
            alt="Garden dining"
            className="h-full w-full object-cover opacity-35"
          />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <div className="section-title">{data.garden.hero.eyebrow}</div>
            <h1 className="headline">{data.garden.hero.title}</h1>
            <p className="text-lg text-charcoal/70">{data.garden.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              {data.garden.hero.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-[36px] border border-charcoal/10 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
                alt="Golden hour garden"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow={data.garden.atmosphere.eyebrow}
        title={data.garden.atmosphere.title}
        subtitle={data.garden.atmosphere.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {data.garden.atmosphere.cards.map((item) => (
            <Reveal key={item}>
              <div className="card-soft text-sm text-charcoal/70">{item}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={data.garden.mood.eyebrow}
        title={data.garden.mood.title}
        subtitle={data.garden.mood.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="card-soft h-full space-y-4">
              <h3 className="font-serif text-2xl">{data.garden.mood.cardTitle}</h3>
              <p className="text-sm text-charcoal/70">{data.garden.mood.cardBodyOne}</p>
              <p className="text-sm text-charcoal/70">{data.garden.mood.cardBodyTwo}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[28px] border border-charcoal/10 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
                  alt="Coastal terrace"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[28px] border border-charcoal/10 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                  alt="Sunset textures"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <CtaBanner
          eyebrow={data.garden.cta.eyebrow}
          title={data.garden.cta.title}
          subtitle={data.garden.cta.subtitle}
          ctaPrimary={{ label: data.garden.cta.primary, href: "/agenda" }}
          ctaSecondary={{ label: data.garden.cta.secondary, href: "/festival" }}
        />
      </Section>
    </main>
  );
};

export default Garden;

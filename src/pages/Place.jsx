import Section from "../components/Section";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import QuoteBlock from "../components/QuoteBlock";
import { useLanguage } from "../contexts/LanguageContext";

const Place = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content">
      <section className="bg-garden-texture">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-6">
            <div className="section-title">{data.place.hero.eyebrow}</div>
            <h1 className="headline">{data.place.hero.title}</h1>
            <p className="text-lg text-charcoal/70">{data.place.hero.bodyOne}</p>
            <p className="text-sm text-charcoal/70">{data.place.hero.bodyTwo}</p>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-[36px]">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"
                alt="Mediterranean estate"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow={data.place.sense.eyebrow}
        title={data.place.sense.title}
        subtitle={data.place.sense.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {data.place.sense.cards.map((item) => (
            <Reveal key={item}>
              <div className="card-soft text-sm text-charcoal/70">{item}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <QuoteBlock quote={data.home.quote.text} author={data.home.quote.author} />
      </Section>

      <Section
        eyebrow={data.place.worlds.eyebrow}
        title={data.place.worlds.title}
        subtitle={data.place.worlds.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[32px] border border-charcoal/10 bg-off-white/85 p-8 shadow-soft">
              <div className="chip">Garden / Market</div>
              <h3 className="mt-4 font-serif text-2xl">{data.place.worlds.garden.title}</h3>
              <p className="mt-3 text-sm text-charcoal/70">{data.place.worlds.garden.body}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[32px] border border-old-gold/40 bg-festival-glow p-8 text-off-white shadow-glow">
              <div className="chip border-off-white/40 text-off-white/80">Festival</div>
              <h3 className="mt-4 font-serif text-2xl">{data.place.worlds.festival.title}</h3>
              <p className="mt-3 text-sm text-off-white/80">{data.place.worlds.festival.body}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <CtaBanner
          eyebrow={data.place.cta.eyebrow}
          title={data.place.cta.title}
          subtitle={data.place.cta.subtitle}
          ctaPrimary={{ label: data.place.cta.primary, href: "/agenda" }}
          ctaSecondary={{ label: data.place.cta.secondary, href: "/garden" }}
        />
      </Section>
    </main>
  );
};

export default Place;

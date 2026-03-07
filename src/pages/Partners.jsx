import Section from "../components/Section";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import { useLanguage } from "../contexts/LanguageContext";

const Partners = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content">
      <Section
        eyebrow={data.partners.hero.eyebrow}
        title={data.partners.hero.title}
        subtitle={data.partners.hero.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {data.partners.cards.map((card) => (
            <Reveal key={card.title}>
              <div className="card-soft space-y-4">
                <h3 className="font-serif text-2xl">{card.title}</h3>
                <p className="text-sm text-charcoal/70">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={data.partners.roster.eyebrow}
        title={data.partners.roster.title}
        subtitle={data.partners.roster.subtitle}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {data.partnerLogos.map((partner) => (
            <Reveal key={partner}>
              <div className="glass p-6 text-center text-sm uppercase tracking-[0.3em] text-charcoal/70">
                {partner}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBanner
          eyebrow={data.partners.cta.eyebrow}
          title={data.partners.cta.title}
          subtitle={data.partners.cta.subtitle}
          ctaPrimary={{ label: data.partners.cta.primary, href: "/contact" }}
          ctaSecondary={{ label: data.partners.cta.secondary, href: "/premium" }}
        />
      </Section>
    </main>
  );
};

export default Partners;

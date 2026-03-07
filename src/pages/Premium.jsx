import Section from "../components/Section";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import { useLanguage } from "../contexts/LanguageContext";

const Premium = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content">
      <section className="bg-festival-glow text-off-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-6">
            <div className="section-title text-off-white/70">{data.premium.hero.eyebrow}</div>
            <h1 className="headline text-off-white">{data.premium.hero.title}</h1>
            <p className="text-lg text-off-white/80">{data.premium.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              {data.premium.hero.tags.map((tag) => (
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
                alt="Premium lounge"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow={data.premium.expect.eyebrow}
        title={data.premium.expect.title}
        subtitle={data.premium.expect.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {data.premium.expect.cards.map((item) => (
            <Reveal key={item}>
              <div className="card-soft text-sm text-charcoal/70">{item}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={data.premium.inquiry.eyebrow}
        title={data.premium.inquiry.title}
        subtitle={data.premium.inquiry.subtitle}
      >
        <form className="grid gap-4 rounded-[32px] border border-charcoal/10 bg-off-white/85 p-8 shadow-soft md:grid-cols-2">
          <input className="rounded-full border border-charcoal/20 px-4 py-3" placeholder={data.premium.inquiry.fields.name} />
          <input className="rounded-full border border-charcoal/20 px-4 py-3" placeholder={data.premium.inquiry.fields.email} />
          <input className="rounded-full border border-charcoal/20 px-4 py-3" placeholder={data.premium.inquiry.fields.size} />
          <input className="rounded-full border border-charcoal/20 px-4 py-3" placeholder={data.premium.inquiry.fields.date} />
          <textarea
            className="md:col-span-2 h-32 rounded-[20px] border border-charcoal/20 px-4 py-3"
            placeholder={data.premium.inquiry.fields.message}
          />
          <button type="button" className="btn-primary md:col-span-2">
            {data.premium.inquiry.fields.submit}
          </button>
        </form>
      </Section>

      <Section>
        <CtaBanner
          eyebrow={data.premium.cta.eyebrow}
          title={data.premium.cta.title}
          subtitle={data.premium.cta.subtitle}
          ctaPrimary={{ label: data.premium.cta.primary, href: "/agenda" }}
          ctaSecondary={{ label: data.premium.cta.secondary, href: "/contact" }}
        />
      </Section>
    </main>
  );
};

export default Premium;

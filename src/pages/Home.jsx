import Hero from "../components/Hero";
import Section from "../components/Section";
import SplitExperience from "../components/SplitExperience";
import Highlights from "../components/Highlights";
import PremiumTeaser from "../components/PremiumTeaser";
import GalleryGrid from "../components/GalleryGrid";
import CtaBanner from "../components/CtaBanner";
import Reveal from "../components/Reveal";
import EventCard from "../components/EventCard";
import Moodboard from "../components/Moodboard";
import QuoteBlock from "../components/QuoteBlock";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content">
      <Hero />

      <Section
        eyebrow={data.home.intro.eyebrow}
        title={data.home.intro.title}
        subtitle={data.home.intro.subtitle}
      >
        <SplitExperience />
      </Section>

      <Section
        eyebrow={data.home.experience.eyebrow}
        title={data.home.experience.title}
        subtitle={data.home.experience.subtitle}
      >
        <Highlights />
      </Section>

      <Section
        eyebrow={data.home.moodboard.eyebrow}
        title={data.home.moodboard.title}
        subtitle={data.home.moodboard.subtitle}
      >
        <Moodboard label="LA FINCA." title={data.home.moodboard.title} subtitle={data.home.moodboard.subtitle} />
        <div className="mt-8">
          <QuoteBlock quote={data.home.quote.text} author={data.home.quote.author} />
        </div>
      </Section>

      <Section
        eyebrow={data.home.place.eyebrow}
        title={data.home.place.title}
        subtitle={data.home.place.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[36px]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
                alt="Sunset landscape"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="card-soft h-full space-y-4">
              <div className="chip">{data.home.place.card.chip}</div>
              <h3 className="font-serif text-2xl">{data.home.place.card.title}</h3>
              <p className="text-sm text-charcoal/70">{data.home.place.card.bodyOne}</p>
              <p className="text-sm text-charcoal/70">{data.home.place.card.bodyTwo}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow={data.home.upcoming.eyebrow}
        title={data.home.upcoming.title}
        subtitle={data.home.upcoming.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {data.events.slice(0, 2).map((event) => (
            <Reveal key={event.id}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <PremiumTeaser />
      </Section>

      <Section
        eyebrow={data.home.gallery.eyebrow}
        title={data.home.gallery.title}
        subtitle={data.home.gallery.subtitle}
      >
        <GalleryGrid items={data.galleryItems.slice(0, 3)} />
      </Section>

      <Section
        eyebrow={data.home.partners.eyebrow}
        title={data.home.partners.title}
        subtitle={data.home.partners.subtitle}
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
          eyebrow={data.home.cta.eyebrow}
          title={data.home.cta.title}
          subtitle={data.home.cta.subtitle}
          ctaPrimary={{ label: data.home.cta.primary, href: "/contact" }}
          ctaSecondary={{ label: data.home.cta.secondary, href: "/agenda" }}
        />
      </Section>
    </main>
  );
};

export default Home;

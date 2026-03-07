import { useParams, NavLink } from "react-router-dom";
import Section from "../components/Section";
import { useLanguage } from "../contexts/LanguageContext";

const EventDetail = () => {
  const { eventId } = useParams();
  const { data } = useLanguage();
  const event = data.events.find((item) => item.id === eventId);

  if (!event) {
    return (
      <Section
        eyebrow="Event"
        title={data.eventDetail.notFoundTitle}
        subtitle={data.eventDetail.notFoundSubtitle}
      >
        <NavLink to="/agenda" className="btn-primary">
          {data.eventDetail.backToAgenda}
        </NavLink>
      </Section>
    );
  }

  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-festival-glow">
        <div className="absolute inset-0">
          <img src={event.image} alt={event.title} className="h-full w-full object-cover opacity-45" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-off-white">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {event.category.map((tag) => (
                <span key={tag} className="chip border-off-white/40 text-off-white/80">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-5xl">{event.title}</h1>
            <p className="text-lg text-off-white/80">
              {event.date} · {event.time}
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow={data.eventDetail.detailsEyebrow}
        title={data.eventDetail.detailsTitle}
        subtitle={event.description}
      >
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl">{data.eventDetail.lineupTitle}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {event.lineup.map((artist) => (
                  <span key={artist} className="chip">
                    {artist}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-charcoal/70">{data.eventDetail.ticketsNote}</p>
          </div>
          <div className="card-soft space-y-3">
            <div className="text-xs uppercase tracking-[0.3em] text-olive">{data.eventDetail.ticketsEyebrow}</div>
            <p className="text-sm text-charcoal/70">{data.eventDetail.ticketsBody}</p>
            <button className="btn-primary">{data.eventDetail.ticketsCta}</button>
            <button className="btn-secondary">{data.eventDetail.premiumCta}</button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default EventDetail;

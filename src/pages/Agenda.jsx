import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import EventCard from "../components/EventCard";
import { useLanguage } from "../contexts/LanguageContext";

const Agenda = () => {
  const { data } = useLanguage();
  const [filter, setFilter] = useState(data.agendaFilters[0]);

  useEffect(() => {
    setFilter(data.agendaFilters[0]);
  }, [data]);

  const filteredEvents = useMemo(() => {
    if (filter === data.agendaFilters[0]) return data.events;
    return data.events.filter((event) => event.category.includes(filter));
  }, [data, filter]);

  return (
    <main id="main-content">
      <Section
        eyebrow={data.agenda.eyebrow}
        title={data.agenda.title}
        subtitle={data.agenda.subtitle}
      >
        <div className="flex flex-wrap gap-3">
          {data.agendaFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`chip transition ${filter === item ? "bg-charcoal text-off-white" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        {filteredEvents.length === 0 ? (
          <div className="card-soft text-sm text-charcoal/70">{data.agendaEmpty}</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Reveal key={event.id}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Agenda;

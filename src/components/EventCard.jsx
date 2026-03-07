import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const EventCard = ({ event }) => {
  const { data } = useLanguage();

  return (
    <div className="group overflow-hidden rounded-[28px] border border-charcoal/10 bg-off-white/85 shadow-soft transition hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {event.category.map((tag) => (
            <span key={tag} className="chip bg-off-white/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-3 p-6">
        <div className="text-xs uppercase tracking-[0.3em] text-olive">{event.date}</div>
        <h3 className="font-serif text-2xl">{event.title}</h3>
        <p className="text-sm text-charcoal/70">{event.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-charcoal/60">{event.time}</span>
          <NavLink to={`/agenda/${event.id}`} className="btn-secondary">
            {data.labels.viewDetails}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

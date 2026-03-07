import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const SplitExperience = () => {
  const { data } = useLanguage();

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {data.experienceSplit.map((item, index) => (
        <Reveal key={item.title} className="h-full">
          <div
            className={`h-full rounded-[32px] border p-8 shadow-soft transition hover:-translate-y-1 ${
              index === 0
                ? "border-charcoal/10 bg-garden-texture"
                : "border-old-gold/40 bg-festival-glow text-off-white"
            }`}
          >
            <div className="space-y-4">
              <div className={`text-xs uppercase tracking-[0.35em] ${index === 0 ? "text-olive" : "text-off-white/70"}`}>
                {item.subtitle}
              </div>
              <h3 className={`font-serif text-3xl ${index === 0 ? "text-charcoal" : "text-off-white"}`}>
                {item.title}
              </h3>
              <p className={`${index === 0 ? "text-charcoal/70" : "text-off-white/80"}`}>
                {item.description}
              </p>
              <NavLink to={item.href} className={`btn-secondary ${index === 1 ? "border-off-white/60 text-off-white" : ""}`}>
                {item.cta}
              </NavLink>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default SplitExperience;

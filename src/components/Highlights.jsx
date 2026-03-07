import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const Highlights = () => {
  const { data } = useLanguage();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {data.highlightCards.map((card) => (
        <Reveal key={card.title}>
          <div className="card-soft space-y-4">
            <div className="chip">{card.title}</div>
            <h3 className="font-serif text-2xl">{card.title}</h3>
            <p className="text-sm text-charcoal/70">{card.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Highlights;

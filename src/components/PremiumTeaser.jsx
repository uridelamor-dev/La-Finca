import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const PremiumTeaser = () => {
  const { data } = useLanguage();

  return (
    <Reveal>
      <div className="rounded-[36px] border border-old-gold/40 bg-festival-glow px-8 py-10 text-off-white shadow-glow">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-4">
            <div className="section-title text-off-white/70">Premium</div>
            <h3 className="font-serif text-3xl">{data.premium.hero.title}</h3>
            <p className="text-sm text-off-white/80">{data.premium.hero.subtitle}</p>
            <NavLink to="/premium" className="btn-ghost">
              {data.labels.explorePremium}
            </NavLink>
          </div>
          <div className="grid gap-3">
            {data.premiumOffers.map((offer) => (
              <div key={offer} className="flex items-center gap-3 text-sm text-off-white/80">
                <span className="h-2 w-2 rounded-full bg-old-gold" />
                {offer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default PremiumTeaser;

import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";

const CtaBanner = ({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary }) => {
  return (
    <Reveal>
      <div className="rounded-[32px] border border-charcoal/10 bg-garden-texture px-8 py-10 shadow-soft">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="space-y-4">
            {eyebrow && <div className="section-title">{eyebrow}</div>}
            <h3 className="font-serif text-3xl">{title}</h3>
            <p className="text-sm text-charcoal/70">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {ctaPrimary && (
              <NavLink to={ctaPrimary.href} className="btn-primary">
                {ctaPrimary.label}
              </NavLink>
            )}
            {ctaSecondary && (
              <NavLink to={ctaSecondary.href} className="btn-secondary">
                {ctaSecondary.label}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default CtaBanner;

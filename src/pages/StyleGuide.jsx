import Section from "../components/Section";
import { palette } from "../data/siteData";
import { useLanguage } from "../contexts/LanguageContext";
import Logo from "../components/Logo";

const StyleGuide = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content">
      <Section
        eyebrow={data.styleGuide.eyebrow}
        title={data.styleGuide.title}
        subtitle={data.styleGuide.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl">{data.styleGuide.typography.title}</h3>
            <div className="space-y-3">
              <div className="font-serif text-4xl">{data.styleGuide.typography.serif}</div>
              <div className="font-sans text-lg">{data.styleGuide.typography.sans}</div>
              <div className="font-script text-2xl text-charcoal/70">Mediterranean garden festival</div>
              <div className="text-xs uppercase tracking-[0.35em] text-olive">{data.styleGuide.typography.tracking}</div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-2xl">{data.styleGuide.buttons.title}</h3>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">{data.styleGuide.buttons.primary}</button>
              <button className="btn-secondary">{data.styleGuide.buttons.secondary}</button>
              <button className="btn-ghost bg-charcoal">{data.styleGuide.buttons.ghost}</button>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Logo"
        title="LA FINCA. wordmark system"
        subtitle="Primary wordmark, stacked lockup and compact monogram."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-soft space-y-3">
            <Logo variant="dark" />
            <div className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Primary</div>
          </div>
          <div className="card-soft space-y-3">
            <div className="font-serif text-2xl uppercase tracking-[0.35em]">LA<br />FINCA<span className="text-terracotta">.</span></div>
            <div className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Stacked</div>
          </div>
          <div className="card-soft space-y-3">
            <Logo variant="dark" compact />
            <div className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Monogram</div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={data.styleGuide.palette.eyebrow}
        title={data.styleGuide.palette.title}
        subtitle={data.styleGuide.palette.subtitle}
      >
        <div className="grid gap-4 md:grid-cols-5">
          {palette.map((color) => (
            <div key={color.name} className="rounded-[26px] border border-charcoal/10 bg-off-white p-4">
              <div className="h-20 rounded-2xl" style={{ backgroundColor: color.value }} />
              <div className="mt-3 text-sm font-semibold">{color.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60">{color.value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={data.styleGuide.components.eyebrow}
        title={data.styleGuide.components.title}
        subtitle={data.styleGuide.components.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-soft space-y-3">
            <div className="chip">Chip</div>
            <h3 className="font-serif text-2xl">{data.styleGuide.components.cardTitle}</h3>
            <p className="text-sm text-charcoal/70">{data.styleGuide.components.cardBody}</p>
          </div>
          <div className="rounded-[26px] border border-terracotta/40 bg-festival-glow p-6 text-off-white">
            <div className="chip border-off-white/40 text-off-white/80">Night</div>
            <h3 className="mt-4 font-serif text-2xl">{data.styleGuide.components.festivalCardTitle}</h3>
            <p className="text-sm text-off-white/80">{data.styleGuide.components.festivalCardBody}</p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default StyleGuide;

import Reveal from "./Reveal";

const moodboardImages = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunset over the Costa Brava",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    alt: "Golden hour garden ambience",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    alt: "Mediterranean dining",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    alt: "Night festival lights",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    alt: "Festival crowd",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm terracotta glow",
  },
];

const Moodboard = ({ label, title, subtitle }) => {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      <Reveal className="md:col-span-5">
        <div className="overflow-hidden rounded-[32px] border border-charcoal/10 shadow-soft">
          <img src={moodboardImages[0].src} alt={moodboardImages[0].alt} className="h-full w-full object-cover" />
        </div>
      </Reveal>
      <Reveal className="md:col-span-7">
        <div className="grid h-full gap-4 md:grid-cols-2">
          {moodboardImages.slice(1, 5).map((item) => (
            <div key={item.alt} className="overflow-hidden rounded-[24px] border border-charcoal/10 shadow-soft">
              <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="md:col-span-12">
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-[28px] border border-charcoal/10 shadow-soft">
            <img src={moodboardImages[5].src} alt={moodboardImages[5].alt} className="h-full w-full object-cover" />
          </div>
          <div className="rounded-[28px] border border-charcoal/10 bg-garden-texture p-8 shadow-soft">
            <div className="text-xs uppercase tracking-[0.35em] text-olive">{label}</div>
            <h3 className="mt-4 font-serif text-3xl">{title}</h3>
            <p className="mt-3 text-sm text-charcoal/70">{subtitle}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Moodboard;

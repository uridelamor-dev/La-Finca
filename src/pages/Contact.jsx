import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content">
      <Section
        eyebrow={data.contact.hero.eyebrow}
        title={data.contact.hero.title}
        subtitle={data.contact.hero.subtitle}
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form className="grid gap-4 rounded-[32px] border border-charcoal/10 bg-off-white/85 p-8 shadow-soft">
              <input className="rounded-full border border-charcoal/20 px-4 py-3" placeholder={data.contact.form.name} />
              <input className="rounded-full border border-charcoal/20 px-4 py-3" placeholder={data.contact.form.email} />
              <select className="rounded-full border border-charcoal/20 px-4 py-3">
                {data.contact.form.intentions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <textarea
                className="h-32 rounded-[20px] border border-charcoal/20 px-4 py-3"
                placeholder={data.contact.form.message}
              />
              <button type="button" className="btn-primary">
                {data.contact.form.submit}
              </button>
            </form>
          </Reveal>
          <Reveal>
            <div className="card-soft space-y-4">
              <div className="section-title">{data.contact.location.eyebrow}</div>
              <p className="text-sm text-charcoal/70">{data.contact.location.body}</p>
              <div className="text-sm text-charcoal/70">{data.contact.location.email}</div>
              <div className="text-sm text-charcoal/70">{data.contact.location.phone}</div>
              <div className="space-y-2 text-xs uppercase tracking-[0.3em] text-olive">
                {data.contact.location.socials.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
};

export default Contact;

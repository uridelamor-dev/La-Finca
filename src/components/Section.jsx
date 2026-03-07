const Section = ({ eyebrow, title, subtitle, children, className = "" }) => {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-16 md:py-24 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mb-10 max-w-2xl space-y-4">
          {eyebrow && <div className="section-title">{eyebrow}</div>}
          {title && <h2 className="headline">{title}</h2>}
          {subtitle && <p className="text-lg text-charcoal/70">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;

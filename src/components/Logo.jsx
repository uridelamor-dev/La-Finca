const Logo = ({ variant = "light", compact = false }) => {
  const textClass = variant === "light" ? "text-off-white" : "text-charcoal";
  const dotClass = variant === "light" ? "text-old-gold" : "text-old-gold";

  if (compact) {
    return (
      <div className={`font-sans text-lg uppercase tracking-[0.35em] ${textClass}`}>
        LF<span className={dotClass}>.</span>
      </div>
    );
  }

  return (
    <div className={`font-sans text-base uppercase tracking-[0.45em] ${textClass}`}>
      LA FINCA<span className={dotClass}>.</span>
    </div>
  );
};

export default Logo;

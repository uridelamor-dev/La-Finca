const Logo = ({ variant = "light", compact = false, lowercase = false, stacked = false }) => {
  const textClass = variant === "light" ? "text-off-white" : "text-charcoal";
  const dotClass = variant === "light" ? "text-terracotta ml-0.5" : "text-terracotta ml-0.5";

  if (compact) {
    return (
      <div className={`font-serif text-lg tracking-[-0.03em] ${textClass}`}>
        LF<span className={dotClass}>.</span>
      </div>
    );
  }

  if (stacked) {
    return (
      <div className={`font-serif text-2xl lg:text-3xl leading-[0.75] tracking-[-0.03em] ${textClass}`}>
        <div>La</div>
        <div>
          Finca<span className={dotClass}>.</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${lowercase ? "brand-lower" : "brand-title"} text-base ${textClass}`}>
      {lowercase ? "la finca" : "La Finca"}
      <span className={dotClass}>.</span>
    </div>
  );
};

export default Logo;

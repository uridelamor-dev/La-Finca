const QuoteBlock = ({ quote, author }) => {
  return (
    <div className="rounded-[28px] border border-charcoal/10 bg-off-white/90 p-8 shadow-soft">
      <p className="font-serif text-2xl leading-relaxed text-charcoal">“{quote}”</p>
      {author && (
        <div className="mt-4 text-xs uppercase tracking-[0.3em] text-olive">
          {author}
        </div>
      )}
    </div>
  );
};

export default QuoteBlock;

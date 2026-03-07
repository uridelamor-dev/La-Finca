import Reveal from "./Reveal";

const GalleryGrid = ({ items }) => {
  return (
    <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
      {items.map((item, index) => (
        <Reveal key={`${item.src}-${index}`} className="mb-5 break-inside-avoid">
          <div className="overflow-hidden rounded-[28px] border border-charcoal/10 shadow-soft">
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
            ) : (
              <video src={item.src} controls className="h-full w-full object-cover" />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default GalleryGrid;

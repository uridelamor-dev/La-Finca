import Section from "../components/Section";
import GalleryGrid from "../components/GalleryGrid";
import { useLanguage } from "../contexts/LanguageContext";

const Gallery = () => {
  const { data } = useLanguage();

  return (
    <main id="main-content">
      <Section
        eyebrow={data.gallery.eyebrow}
        title={data.gallery.title}
        subtitle={data.gallery.subtitle}
      >
        <GalleryGrid items={data.galleryItems} />
      </Section>
    </main>
  );
};

export default Gallery;

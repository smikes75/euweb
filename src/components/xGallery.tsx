import { useTranslation } from 'react-i18next';
import { getOptimizedImageUrl } from '../utils/imageUtils';

export function Gallery() {
  const { t } = useTranslation();

  const images = [
    {
      url: "/images/gallery/clean-room.jpg",
      alt: t('gallery.cleanRoom')
    },
    {
      url: "/images/gallery/diagnostics.jpg",
      alt: t('gallery.diagnostics')
    },
    {
      url: "/images/gallery/server-room.jpg",
      alt: t('gallery.serverRoom')
    },
    {
      url: "/images/gallery/data-center.jpg",
      alt: t('gallery.dataCenter')
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t('gallery.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img
                src={getOptimizedImageUrl(image.url)}
                alt={image.alt}
                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
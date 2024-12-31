export const getBackgroundStyle = (imagePath: string) => ({
  backgroundImage: `url("${imagePath}")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
});

// Background images for different sections
export const backgroundImages = {
  about: '/images/backgrounds/home.jpg', // změněno z URL na lokální cestu
  business: '/images/backgrounds/business-solutions.jpg',
  contact: '/images/backgrounds/contact-bg.jpg',
  hdd: '/images/backgrounds/hdd-recovery.jpg',
  pricing: '/images/backgrounds/pricing-bg.jpg',
  raid: '/images/backgrounds/raid-recovery.jpg',
  services: '/images/backgrounds/services-bg.jpg',
  ssd: '/images/backgrounds/ssd-recovery.jpg'
};
// Gallery images
export const galleryImages = {
  cleanRoom: '/images/gallery/clean-room.jpg',
  dataCenter: '/images/gallery/data-center.jpg',
  diagnostics: '/images/gallery/diagnostics.jpg',
  serverRoom: '/images/gallery/server-room.jpg'
};
export const getOptimizedImageUrl = (url: string, width = 800, quality = 80) => {
  if (url.startsWith('http')) {
    const params = new URLSearchParams({
      auto: 'format',
      fit: 'crop',
      w: width.toString(),
      q: quality.toString()
    });
    return `${url}?${params.toString()}`;
  }
  return url;
};
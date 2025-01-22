export const getBackgroundStyle = (imagePath: string) => ({
  backgroundImage: `url("${imagePath}")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
});

// Background images for different sections
export const backgroundImages = {
  about: '/images/backgrounds/about-bg.webp',
  business: '/images/backgrounds/business-solutions.webp',
  contact: '/images/backgrounds/contact-bg.webp',
  cookies: '/images/backgrounds/cookies-bg.webp',
  faq: '/images/backgrounds/faq-bg.webp',
  hdd: '/images/backgrounds/hdd-recovery.webp',
  pricing: '/images/backgrounds/pricing-bg.webp',
  privacy: '/images/backgrounds/privacy-bg.webp',
  raid: '/images/backgrounds/raid-recovery.webp',
  services: '/images/backgrounds/services-bg.webp',
  ssd: '/images/backgrounds/ssd-recovery.webp',
  terms: '/images/backgrounds/terms-bg.webp',
  home: '/images/backgrounds/home-bg.webp'
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
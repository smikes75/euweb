export const getBackgroundStyle = (imagePath: string) => ({
  backgroundImage: `url("${imagePath}")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
});

// Background images for different sections
export const backgroundImages = {
  about: '/images/backgrounds/about-bg.jpg',
  business: '/images/backgrounds/business-solutions.jpg',
  contact: '/images/backgrounds/contact-bg.jpg',
  cookies: '/images/backgrounds/cookies-bg.jpg',
  faq: '/images/backgrounds/faq-bg.jpg',
  hdd: '/images/backgrounds/hdd-recovery.jpg',
  pricing: '/images/backgrounds/pricing-bg.jpg',
  privacy: '/images/backgrounds/privacy-bg.jpg',
  raid: '/images/backgrounds/raid-recovery.jpg',
  services: '/images/backgrounds/services-bg.jpg',
  ssd: '/images/backgrounds/ssd-recovery.jpg',
  terms: '/images/backgrounds/terms-bg.jpg',
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
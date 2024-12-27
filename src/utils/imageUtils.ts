export const getBackgroundStyle = (imagePath: string) => ({
  backgroundImage: `url("${imagePath}")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
});

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
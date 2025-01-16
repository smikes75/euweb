import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { ProcessInfographic } from '../components/ProcessInfographic';
import { ElfsightReviews } from '../components/ElfsightReviews';
import { HomeContact } from '../components/HomeContact';
import { ScrollingBanner } from '../components/ScrollingBanner';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next'; 
export function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
      />

      <Hero />
      <ScrollingBanner />
      <Services />
      <Gallery />
      <ProcessInfographic />
      <ElfsightReviews />
      <HomeContact />
    </>
  );
}
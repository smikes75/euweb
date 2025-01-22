
import { PageHeader } from '../components/PageHeader';
import { FAQ } from '../components/FAQ';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export function FAQPage() {
  const { t } = useTranslation();
  
  return (
    <>
    <SEO 
      title={t('seo.faq.title')}
      description={t('seo.faq.description')}
      keywords={t('seo.faq.keywords')}
      canonical="https://datahelp.eu/faq"
      ogType="website"  // můžete použít i "article" pro FAQ
    />
    {
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        backgroundImage="faq-bg.webp"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <FAQ />
        </div>
      </div>
    </div>
    };
    </>
  );
}
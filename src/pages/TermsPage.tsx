
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { FileText, Shield, DollarSign, Award, Lock, HelpCircle } from 'lucide-react';
import { SEO } from '../components/SEO';


export function TermsPage() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: t('terms.sections.general.title'),
      content: t('terms.sections.general.content')
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: t('terms.sections.services.title'),
      content: t('terms.sections.services.content')
    },
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: t('terms.sections.pricing.title'),
      content: t('terms.sections.pricing.content')
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: t('terms.sections.warranty.title'),
      content: t('terms.sections.warranty.content')
    },
    {
      icon: <Lock className="h-8 w-8 text-accent" />,
      title: t('terms.sections.confidentiality.title'),
      content: t('terms.sections.confidentiality.content')
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-accent" />,
      title: t('terms.sections.complaints.title'),
      content: t('terms.sections.complaints.content')
    }
  ];

  return (
    <>
    <SEO 
      title={t('seo.terms.title')}
      description={t('seo.terms.description')}
      keywords={t('seo.terms.keywords')}
      canonical="https://datahelp.eu/terms"
    />
    {
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('terms.title')}
        subtitle={t('terms.subtitle')}
        backgroundImage="terms-bg.webp"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-8 text-center">{t('terms.lastUpdated')}</p>
          
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8 last:mb-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{section.title}</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  };
  </>
);
}
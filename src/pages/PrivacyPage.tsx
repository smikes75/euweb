
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { SEO } from '../components/SEO';

export function PrivacyPage() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: t('privacy.dataProtection.title'),
      content: t('privacy.dataProtection.content')
    },
    {
      icon: <Lock className="h-8 w-8 text-accent" />,
      title: t('privacy.security.title'),
      content: t('privacy.security.content')
    },
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: t('privacy.transparency.title'),
      content: t('privacy.transparency.content')
    },
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: t('privacy.rights.title'),
      content: t('privacy.rights.content')
    }
  ];

  return (
    <>
    <SEO 
      title={t('seo.privacy.title')}
      description={t('seo.privacy.description')}
      keywords={t('seo.privacy.keywords')}
      canonical="https://datahelp.eu/privacy"
    />
    {
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('privacy.title')}
        subtitle={t('privacy.subtitle')}
        backgroundImage="privacy-bg.webp"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8 last:mb-0">
              <div className="flex items-start space-x-4 mb-4">
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

          <div className="mt-8 bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">{t('privacy.contact.title')}</h2>
            <p className="text-gray-600 mb-4">{t('privacy.contact.content')}</p>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong> privacy@datahelp.eu
              </p>
              <p className="text-gray-600">
                <strong>{t('privacy.contact.address')}:</strong><br />
                DataHelp s.r.o.<br />
                Jirsíkova 541/1<br />
                186 00 Praha 8 - Karlín<br />
                Czech Republic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    };
    </>
  );
}


import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { Cookie, Shield, Settings } from 'lucide-react';
import { SEO } from '../components/SEO';

export function CookiesPage() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: <Cookie className="h-8 w-8 text-accent" />,
      title: t('cookies.sections.what.title'),
      content: t('cookies.sections.what.content')
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: t('cookies.sections.types.title'),
      subsections: [
        {
          title: t('cookies.sections.types.necessary.title'),
          content: t('cookies.sections.types.necessary.content')
        },
        {
          title: t('cookies.sections.types.analytical.title'),
          content: t('cookies.sections.types.analytical.content')
        },
        {
          title: t('cookies.sections.types.functional.title'),
          content: t('cookies.sections.types.functional.content')
        }
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: t('cookies.sections.control.title'),
      content: t('cookies.sections.control.content')
    }
  ];

  return (
    <>
    <SEO 
      title={t('seo.cookies.title')}
      description={t('seo.cookies.description')}
      keywords={t('seo.cookies.keywords')}
      canonical="https://datahelp.eu/cookies"
    />
    {
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('cookies.title')}
        subtitle={t('cookies.subtitle')}
        backgroundImage="cookies-bg.webp"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-gray-600 mb-4">{section.content}</p>
                  )}
                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          <h3 className="text-xl font-semibold text-primary mb-2">
                            {subsection.title}
                          </h3>
                          <p className="text-gray-600">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
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

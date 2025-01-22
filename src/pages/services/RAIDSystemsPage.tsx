
import { Database, Server, ServerCog, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO';

export function RAIDSystemsPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Server className="h-8 w-8 text-accent" />,
      title: t('services.raid.features.hardware'),
      description: t('services.raid.features.hardwareDesc')
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: t('services.raid.features.software'),
      description: t('services.raid.features.softwareDesc')
    },
    {
      icon: <ServerCog className="h-8 w-8 text-accent" />,
      title: t('services.raid.features.virtual'),
      description: t('services.raid.features.virtualDesc')
    }
  ];

  return (
    <>
    <SEO 
      title={t('seo.raidSystems.title')}
      description={t('seo.raidSystems.description')}
      keywords={t('seo.raidSystems.keywords')}
      canonical="https://datahelp.eu/services/raid-systems"
    />
    {
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/images/backgrounds/raid-recovery.webp")',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(27, 56, 122, 1) 50%, rgba(27, 56, 122, 0) 100%)'
            }}
          ></div>
        </div>

        <div className="relative z-10 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4 mb-6">
              <Database className="h-12 w-12" />
              <h1 className="text-4xl font-bold">{t('services.raid.title')}</h1>
            </div>
            <p className="text-xl">{t('services.raid.desc')}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">{t('services.raid.supported.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('services.raid.supported.configurations')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>RAID 0, 1, 5, 6, 10</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.raid.supported.nas')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.raid.supported.san')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('services.raid.supported.controllers')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>LSI, Broadcom, Dell PERC, HP Smart Array</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Synology, Qnap, Netgear</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Asustor, Buffalo Technology, TerraMastery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <ShieldCheck className="h-8 w-8 text-accent flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{t('services.raid.security.title')}</h3>
              <p className="text-gray-600">{t('services.raid.security.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    };
    </>
  );
}
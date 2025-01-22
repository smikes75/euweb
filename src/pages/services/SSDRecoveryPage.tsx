
import { Smartphone, Zap, Cpu, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO';

export function SSDRecoveryPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-accent" />,
      title: t('services.ssd.features.controller'),
      description: t('services.ssd.features.controllerDesc')
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: t('services.ssd.features.firmware'),
      description: t('services.ssd.features.firmwareDesc')
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: t('services.ssd.features.flash'),
      description: t('services.ssd.features.flashDesc')
    }
  ];

  return (
    <>
    <SEO 
      title={t('seo.ssdRecovery.title')}
      description={t('seo.ssdRecovery.description')}
      keywords={t('seo.ssdRecovery.keywords')}
      canonical="https://datahelp.eu/services/ssd-recovery"
    />
    {
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/images/backgrounds/ssd-recovery.webp")',
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
              <Smartphone className="h-12 w-12" />
              <h1 className="text-4xl font-bold">{t('services.ssd.title')}</h1>
            </div>
            <p className="text-xl">{t('services.ssd.desc')}</p>
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

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">{t('services.ssd.supported.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('services.ssd.supported.devices')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.ssd.supported.sata')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.ssd.supported.nvme')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.ssd.supported.usb')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.ssd.supported.cards')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('services.ssd.supported.manufacturers')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Samsung, Western Digital, SanDisk</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Crucial, Micron, SK Hynix, Intel </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Seagate, Kingston, Corsair</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>ADATA, Transcend, Patriot</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    };
    </>
  );
}
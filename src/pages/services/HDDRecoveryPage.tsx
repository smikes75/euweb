
import { HardDrive, Shield, Wrench, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { backgroundImages } from '../../utils/imageUtils';

export function HDDRecoveryPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: t('services.hdd.features.mechanical'),
      description: t('services.hdd.features.mechanicalDesc')
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-accent" />,
      title: t('services.hdd.features.electronic'),
      description: t('services.hdd.features.electronicDesc')
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: t('services.hdd.features.logical'),
      description: t('services.hdd.features.logicalDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("${backgroundImages.hdd}")`
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
              <HardDrive className="h-12 w-12" />
              <h1 className="text-4xl font-bold">{t('services.hdd.title')}</h1>
            </div>
            <p className="text-xl">{t('services.hdd.desc')}</p>
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
          <h2 className="text-2xl font-bold mb-6 text-primary">{t('services.hdd.supported.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('services.hdd.supported.devices')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.hdd.supported.sata')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.hdd.supported.ide')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.hdd.supported.scsi')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.hdd.supported.external')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('services.hdd.supported.manufacturers')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Western Digital, Seagate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Toshiba, Samsung</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Hitachi, Fujitsu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Maxtor, IBM, Quantum </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
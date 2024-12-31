import React from 'react';
import { Award, Users, Clock, Shield, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { Link } from 'react-router-dom';

export function AboutUsPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Award className="h-12 w-12 text-accent" />,
      title: t('about.experience.title'),
      description: t('about.experience.description')
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: t('about.team.title'),
      description: t('about.team.description')
    },
    {
      icon: <Clock className="h-12 w-12 text-accent" />,
      title: t('about.availability.title'),
      description: t('about.availability.description')
    },
    {
      icon: <Shield className="h-12 w-12 text-accent" />,
      title: t('about.security.title'),
      description: t('about.security.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        backgroundImage="about-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t('about.description')}
          </p>
          
          {/* Technology Button */}
          <div className="flex justify-center">
            <Link 
              to="/technology" 
              className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition"
            >
              <Cpu className="h-5 w-5" />
              <span>{t('techPage.title')}</span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">
            {t('about.mission.title')}
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            {t('about.mission.description')}
          </p>
        </div>
      </div>
    </div>
  );
}
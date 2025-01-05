import React from 'react';
import { Shield, Trophy, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { backgroundImages } from '../utils/imageUtils';

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url("${backgroundImages.home}")`
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition"
              >
                {t('hero.consultation')}
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
              >
                {t('hero.ourServices')}
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center space-x-4">
              <Shield className="h-12 w-12 text-accent" />
              <div>
                <h3 className="font-semibold text-lg">{t('hero.security')}</h3>
                <p>{t('hero.securityDesc')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Cpu className="h-12 w-12 text-accent" />
              <div>
                <h3 className="font-semibold text-lg">{t('hero.technology')}</h3>
                <p>{t('hero.technologyDesc')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Trophy className="h-12 w-12 text-accent" />
              <div>
                <h3 className="font-semibold text-lg">{t('hero.experience')}</h3>
                <p>{t('hero.experienceDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
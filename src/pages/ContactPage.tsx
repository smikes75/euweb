
import { Phone, Mail, MessageSquare, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
export function ContactPage() {
  const { t } = useTranslation();
  const partners = [
    {
      country: 'DataHelp s.r.o.',
      city: 'Praha',
      address: 'Jirsíkova 541/1, 186 00 Praha 8 - Karlín',
      phone: '+420 775 220 440',
      email: 'info@datahelp.eu'
    },
    {
      country: 'Kreml & Co GesmbH',
      city: 'Wien',
      address: 'Gymnasiumstraße 42 / 5, 1180 Wien',
      phone: '+43 676 400 6666',
      email: 'office@kreml-edv.at'
    },
    {
      country: 'PRO.Laika spol. s r.o',
      city: 'Bratislava',
      address: 'Palackého 12, 811 02 Bratislava',
      phone: '+421 2 5441 4880',
      email: 'servis@prolaika.sk'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        backgroundImage="contact-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto mb-24">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">{t('contact.form.title')}</h2>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-light transition"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h2 className="text-2xl font-bold text-center text-primary mb-12">
            {t('contact.partners.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <Building className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{partner.city}</h3>
                    <p className="text-sm text-accent mb-2">{partner.country}</p>
                    <p className="text-gray-600 mb-3 text-sm">{partner.address}</p>
                    <div className="space-y-1">
                      <p className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-accent" />
                        <a 
                          href={`tel:${partner.phone}`} 
                          className="text-gray-600 text-sm hover:text-primary transition-colors"
                        >
                          {partner.phone}
                        </a>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-accent" />
                        <a 
                          href={`mailto:${partner.email}`}
                          className="text-gray-600 text-sm hover:text-primary transition-colors"
                        >
                          {partner.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
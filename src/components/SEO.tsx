import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// Interfaces a typy
interface LocalBusinessSchema {
  name: string;
  image: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  priceRange: string;
}

interface Service {
  name: string;
  description: string;
  price: string;
  availability: string;
  category: string;
}

type LanguageCode = 'cs' | 'en' | 'de';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords,
  canonical = 'https://datahelp.eu',
  ogImage = '/DataHelp.eu.png',
  ogType = 'website'
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Business info podle jazyků
  const businessInfo: Record<LanguageCode, LocalBusinessSchema> = {
    cs: {
      name: "DataHelp.eu",
      image: ogImage,
      description: "Specializujeme se na profesionální záchranu dat z poškozených médií",
      address: {
        streetAddress: "Jirsíkova 1",
        addressLocality: "Praha 8",
        postalCode: "186 00",
        addressCountry: "CZ"
      },
      telephone: "+420 775 220 440",
      priceRange: "€€-€€€"
    },
    en: {
      name: "DataHelp.eu",
      image: ogImage,
      description: "Professional data recovery services for damaged storage media",
      address: {
        streetAddress: "Jirsikova 1",
        addressLocality: "Prague 8",
        postalCode: "186 00",
        addressCountry: "CZ"
      },
      telephone: "+420 775 220 440",
      priceRange: "€€-€€€"
    },
    de: {
      name: "DataHelp.eu",
      image: ogImage,
      description: "Professionelle Datenrettung für beschädigte Speichermedien",
      address: {
        streetAddress: "Jirsikova 1",
        addressLocality: "Prag 8",
        postalCode: "186 00",
        addressCountry: "CZ"
      },
      telephone: "+420 775 220 440",
      priceRange: "€€-€€€"
    }
  };

  // Služby podle jazyků
  const servicesByLang: Record<LanguageCode, Service[]> = {
    cs: [
      {
        name: "Obnova HDD",
        description: "Profesionální záchrana dat z poškozených pevných disků všech výrobců",
        price: "Od 350 €",
        availability: "https://schema.org/InStock",
        category: "Data Recovery",
      },
      {
        name: "Obnova SSD",
        description: "Specializovaná záchrana dat z SSD disků včetně NVMe a PCIe",
        price: "Od 250 €",
        availability: "https://schema.org/InStock",
        category: "Data Recovery",
      },
      {
        name: "RAID systémy",
        description: "Obnova dat z RAID polí a serverových úložišť",
        price: "Individuální kalkulace",
        availability: "https://schema.org/InStock",
        category: "Enterprise Solutions",
      },
      {
        name: "Obnova dat pro firmy",
        description: "Komplexní řešení obnovy dat pro firemní klientelu s prioritním zpracováním",
        price: "Dle SLA",
        availability: "https://schema.org/InStock",
        category: "Business Services",
      }
    ],
    en: [
      {
        name: "HDD Recovery",
        description: "Professional data recovery from damaged hard drives of all manufacturers",
        price: "From €350",
        availability: "https://schema.org/InStock",
        category: "Data Recovery",
      },
      {
        name: "SSD Recovery",
        description: "Specialized data recovery from SSD drives including NVMe and PCIe",
        price: "From €250",
        availability: "https://schema.org/InStock",
        category: "Data Recovery",
      },
      {
        name: "RAID Systems",
        description: "Data recovery from RAID arrays and server storage",
        price: "Custom quote",
        availability: "https://schema.org/InStock",
        category: "Enterprise Solutions",
      },
      {
        name: "Business Solutions",
        description: "Comprehensive data recovery solutions for business clients with priority processing",
        price: "Based on SLA",
        availability: "https://schema.org/InStock",
        category: "Business Services",
      }
    ],
    de: [
      {
        name: "HDD-Wiederherstellung",
        description: "Professionelle Datenrettung von beschädigten Festplatten aller Hersteller",
        price: "Ab 350 €",
        availability: "https://schema.org/InStock",
        category: "Data Recovery",
      },
      {
        name: "SSD-Wiederherstellung",
        description: "Spezialisierte Datenrettung von SSD-Laufwerken einschließlich NVMe und PCIe",
        price: "Ab 250 €",
        availability: "https://schema.org/InStock",
        category: "Data Recovery",
      },
      {
        name: "RAID-Systeme",
        description: "Datenrettung von RAID-Arrays und Server-Speicher",
        price: "Individuelles Angebot",
        availability: "https://schema.org/InStock",
        category: "Enterprise Solutions",
      },
      {
        name: "Geschäftslösungen",
        description: "Umfassende Datenrettungslösungen für Geschäftskunden mit prioritärer Bearbeitung",
        price: "Nach SLA",
        availability: "https://schema.org/InStock",
        category: "Business Services",
      }
    ]
  };
  const currentBusinessInfo = businessInfo[currentLang as LanguageCode] || businessInfo.en;
  const currentServices = servicesByLang[currentLang as LanguageCode] || servicesByLang.en;

  const alternateUrls = {
    en: 'https://datahelp.eu/en',
    de: 'https://datahelp.eu/de',
    cs: 'https://datahelp.eu/cs'
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://datahelp.eu/#business",
        ...currentBusinessInfo,
        "url": canonical,
        "sameAs": [
          "https://www.linkedin.com/company/datahelp",
          "https://www.facebook.com/datahelpeu",
        ],
        "areaServed": [
          {
            "@type": "Country",
            "name": "Czech Republic"
          },
          {
            "@type": "Country",
            "name": "Germany"
          },
          {
            "@type": "Country",
            "name": "Austria"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      ...currentServices.map(service => ({
        "@type": "Service",
        "@id": `https://datahelp.eu/#service-${service.name.toLowerCase().replace(/\s+/g, '-')}`,
        "name": service.name,
        "description": service.description,
        "provider": {
          "@id": "https://datahelp.eu/#business"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Czech Republic"
          },
          {
            "@type": "Country",
            "name": "Germany"
          },
          {
            "@type": "Country",
            "name": "Austria"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          }
        ],
        "category": service.category,
        "offers": {
          "@type": "Offer",
          "availability": service.availability,
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": service.price
          }
        }
      }))
    ]
  };

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <link rel="canonical" href={canonical} />
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={url} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href="https://datahelp.eu" />
      
      <meta property="og:locale" content={currentLang} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="DataHelp.eu" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
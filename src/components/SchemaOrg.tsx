import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SchemaOrg() {
 const { i18n } = useTranslation();
 const currentLang = i18n.language;

 const descriptions = {
   cs: "Profesionální obnova dat z poškozených médií",
   en: "Professional data recovery from damaged media", 
   de: "Professionelle Datenrettung von beschädigten Medien"
 };

 const schema = {
   "@context": "https://schema.org",
   "@type": "LocalBusiness",
   "name": "DataHelp.eu",
   "image": "/DataHelp.eu.png",
   "description": descriptions[currentLang as keyof typeof descriptions] || descriptions.en,
   "address": {
     "@type": "PostalAddress",
     "streetAddress": "Jirsíkova 541/1",
     "addressLocality": "Praha",
     "postalCode": "186 00",
     "addressCountry": "CZ"
   },
   "geo": {
     "@type": "GeoCoordinates",
     "latitude": 50.0922,
     "longitude": 14.4507
   },
   "url": `https://datahelp.eu/${currentLang}`,
   "telephone": "+420775220440",
   "openingHoursSpecification": {
     "@type": "OpeningHoursSpecification",
     "dayOfWeek": [
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday"
     ],
     "opens": "09:00",
     "closes": "18:00"
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
   "hasOfferCatalog": {
     "@type": "OfferCatalog",
     "name": "Data Recovery Services",
     "itemListElement": [
       {
         "@type": "Offer",
         "itemOffered": {
           "@type": "Service",
           "name": "HDD Recovery",
           "description": "Data recovery from damaged hard drives"
         },
         "priceSpecification": {
           "@type": "PriceSpecification",
           "price": "350",
           "priceCurrency": "EUR"
         }
       },
       {
         "@type": "Offer",
         "itemOffered": {
           "@type": "Service",
           "name": "SSD Recovery",
           "description": "Data recovery from SSD drives"
         },
         "priceSpecification": {
           "@type": "PriceSpecification",
           "price": "250",
           "priceCurrency": "EUR"
         }
       },
       {
         "@type": "Offer",
         "itemOffered": {
           "@type": "Service",
           "name": "RAID Recovery",
           "description": "Data recovery from RAID systems"
         },
         "priceSpecification": {
           "@type": "PriceSpecification",
           "price": "Custom",
           "priceCurrency": "EUR"
         }
       },
       {
         "@type": "Offer",
         "itemOffered": {
           "@type": "Service",
           "name": "Business Solutions",
           "description": "Enterprise data recovery solutions"
         },
         "priceSpecification": {
           "@type": "PriceSpecification",
           "price": "Custom",
           "priceCurrency": "EUR"
         }
       }
     ]
   },
   "sameAs": [
     //"https://www.linkedin.com/company/datahelp",
     //"https://www.facebook.com/datahelpeu"
   ],
   "inLanguage": [
     {
       "@type": "Language",
       "name": "Czech",
       "alternateName": "cs"
     },
     {
       "@type": "Language",
       "name": "English",
       "alternateName": "en"
     },
     {
       "@type": "Language",
       "name": "German",
       "alternateName": "de"
     }
   ]
 };

 return (
   <Helmet>
     <script type="application/ld+json">
       {JSON.stringify(schema)}
     </script>
   </Helmet>
 );
}
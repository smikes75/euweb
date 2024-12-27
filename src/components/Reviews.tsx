import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Reviews() {
  const { t } = useTranslation();

  const reviews = [
    {
      author: "Jan Novák",
      company: "IT Solutions s.r.o.",
      content: t('reviews.review1'),
      rating: 5
    },
    {
      author: "Marie Svobodová",
      company: "Účetní firma PLUS",
      content: t('reviews.review2'),
      rating: 5
    },
    {
      author: "Petr Dvořák",
      company: "Auto Parts a.s.",
      content: t('reviews.review3'),
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('reviews.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <div>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-gray-500">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
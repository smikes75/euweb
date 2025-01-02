import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={onToggle}
      >
        <span className="font-semibold text-primary">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-accent" />
        ) : (
          <ChevronDown className="h-5 w-5 text-accent" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 mb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.questions.q1'),
      answer: t('faq.questions.a1')
    },
    {
      question: t('faq.questions.q2'),
      answer: t('faq.questions.a2')
    },
    {
      question: t('faq.questions.q3'),
      answer: t('faq.questions.a3')
    },
    {
      question: t('faq.questions.q4'),
      answer: t('faq.questions.a4')
    },
    {
      question: t('faq.questions.q5'),
      answer: t('faq.questions.a5')
    },
    {
      question: t('faq.questions.q6'),
      answer: t('faq.questions.a6')
    },
    {
      question: t('faq.questions.q7'),
      answer: t('faq.questions.a7')
    },
    {
      question: t('faq.questions.q8'),
      answer: t('faq.questions.a8')
    },
    {
      question: t('faq.questions.q9'),
      answer: t('faq.questions.a9')
    },
    {
      question: t('faq.questions.q10'),
      answer: t('faq.questions.a10')
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
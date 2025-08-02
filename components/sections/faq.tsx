'use client';

import { useLanguage } from '@/lib/contexts/language-context';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    questionKey: 'faq.q1.question',
    answerKey: 'faq.q1.answer'
  },
  {
    id: 2,
    questionKey: 'faq.q2.question',
    answerKey: 'faq.q2.answer'
  },
  {
    id: 3,
    questionKey: 'faq.q3.question',
    answerKey: 'faq.q3.answer'
  },
  {
    id: 4,
    questionKey: 'faq.q4.question',
    answerKey: 'faq.q4.answer'
  },
  {
    id: 5,
    questionKey: 'faq.q5.question',
    answerKey: 'faq.q5.answer'
  },
  {
    id: 6,
    questionKey: 'faq.q6.question',
    answerKey: 'faq.q6.answer'
  }
];

// FAQPage JSON-LD Schema
const generateFAQSchema = (faqs: any[], t: (key: string) => string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": t(faq.questionKey),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": t(faq.answerKey)
    }
  }))
});

export function FAQSection() {
  const { language, t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqSchema = generateFAQSchema(faqs, t);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="faq" className="portfolio-section bg-portfolio-card/10" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-portfolio-text mb-4"
          >
            {t('faq.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-portfolio-text/80 max-w-2xl mx-auto"
          >
            {t('faq.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="portfolio-card overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-portfolio-bg/20 focus-visible:bg-portfolio-bg/20 focus-visible:ring-2 focus-visible:ring-portfolio-accent-blue focus-visible:ring-offset-2 transition-colors"
                aria-expanded={openItems.includes(faq.id)}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 
                  className="text-lg font-semibold text-portfolio-text pr-4"
                  itemProp="name"
                >
                  {t(faq.questionKey)}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-portfolio-text/60 transition-transform duration-200 flex-shrink-0 ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                id={`faq-answer-${faq.id}`}
                initial={false}
                animate={{
                  height: openItems.includes(faq.id) ? 'auto' : 0,
                  opacity: openItems.includes(faq.id) ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <div className="px-6 pb-4">
                  <p 
                    className="text-portfolio-text/80 leading-relaxed"
                    itemProp="text"
                  >
                    {t(faq.answerKey)}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQPage JSON-LD Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </div>
    </section>
  );
}
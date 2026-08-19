import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: ServiceFAQItem[];
  pageUrl: string;
  heading?: string;
  subheading?: string;
}

/**
 * Drop-in FAQ section for service pages.
 * - Renders an accessible accordion styled to match the site's design system.
 * - Emits FAQPage JSON-LD so each answer is eligible for rich results in search.
 */
const ServiceFAQ: React.FC<ServiceFAQProps> = ({
  faqs,
  pageUrl,
  heading = 'Frequently Asked Questions',
  subheading = 'Quick answers to the questions we hear most.',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto mb-20">
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Helmet>

      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
          FAQ
        </span>
        <h2 className="text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-muted-foreground text-lg">{subheading}</p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 data-[state=open]:glow-sm transition-all"
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline [&[data-state=open]]:text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ServiceFAQ;

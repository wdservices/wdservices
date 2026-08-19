import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, Check, Rocket, Smartphone, Palette, TrendingUp } from 'lucide-react';
import { Head as Helmet } from 'vite-react-ssg';
import ServiceFAQ from '@/components/ServiceFAQ';
import WebDevBuildScene from '@/components/WebDevBuildScene';


const WebDevelopment: React.FC = () => {
  const features = [
    { icon: Globe, title: 'Responsive Design', description: 'Perfect on all devices - desktop, tablet, and mobile' },
    { icon: Rocket, title: 'Fast Performance', description: 'Optimized for speed and great user experience' },
    { icon: Smartphone, title: 'Mobile First', description: 'Designed with mobile users in mind from the start' },
    { icon: Palette, title: 'Modern Design', description: 'Beautiful, contemporary designs that stand out' },
    { icon: TrendingUp, title: 'SEO Optimized', description: 'Built with search engine optimization in mind' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Web Development Services Nigeria | Custom Websites & Web Apps | Bluewaves Technology</title>
        <meta name="description" content="Professional web development in Nigeria. Fast, responsive, SEO-ready websites and web apps using React, Next.js and modern tech." />
        <meta name="keywords" content="web development Nigeria, website development Port Harcourt, custom web application Nigeria, professional website design Nigeria" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/web-development" />
        <meta property="og:title" content="Web Development Services Nigeria | Custom Websites & Web Apps | Bluewaves Technology" />
        <meta property="og:description" content="Professional web development services in Nigeria. We build fast, responsive, SEO-ready websites and web applications using React, Next.js and modern tech for businesses in Port Harcourt and across Nigeria." />
        <meta property="og:url" content="https://www.bwtng.live/web-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Services Nigeria | Custom Websites & Web Apps | Bluewaves Technology" />
        <meta name="twitter:description" content="Professional web development services in Nigeria. We build fast, responsive, SEO-ready websites and web applications using React, Next.js and modern tech for businesses in Port Harcourt and across Nigeria." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "provider": { "@type": "Organization", "name": "Bluewaves Technology", "url": "https://www.bwtng.live" },
      "areaServed": "Nigeria",
      "description": "Professional web development services including responsive websites, web applications, and e-commerce solutions.",
      "url": "https://www.bwtng.live/web-development"
    }` }} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Web Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-primary">Web Development</span> in Nigeria
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build stunning, high-performance websites that drive results for your business.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>

          {/* Scroll-linked build scene */}
          <WebDevBuildScene />

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* What We Offer */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="space-y-4">
              {[
                'Custom website design and development',
                'E-commerce websites with online payment integration',
                'Content Management Systems (CMS)',
                'Website maintenance and support',
                'Website redesign and modernization',
                'Landing page design and optimization',
                'Blog and news portal development'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-3xl border border-border">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Website?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create something amazing together. Contact us today for a free consultation!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
              Contact Us Now
            </Button>
          </div>

          {/* SEO FAQ */}
          <ServiceFAQ
            pageUrl="https://www.bwtng.live/web-development"
            faqs={[
              { question: "How much does a website cost in Nigeria?", answer: "Cost depends on scope \u2014 a simple business site, a full e-commerce store, and a custom web app are priced very differently. Contact us for a free quote based on your exact requirements." },
              { question: "How long does it take to build a website?", answer: "A typical business website takes 2-4 weeks. E-commerce sites and custom web applications with more features usually take 4-8 weeks depending on complexity." },
              { question: "Do you build e-commerce websites with online payment?", answer: "Yes. We build online stores with secure payment integration (including Nigerian payment gateways like Paystack and Flutterwave), inventory management, and order tracking." },
              { question: "Will my website be mobile-friendly and fast?", answer: "Every site we build is fully responsive and optimized for speed, since both directly affect your search rankings and conversion rate." },
              { question: "Do you offer website maintenance after launch?", answer: "Yes, we offer ongoing maintenance packages covering updates, security monitoring, backups, and content changes after your site goes live." },
              { question: "Can you redesign my existing website?", answer: "Absolutely. We audit your current site, keep what's working, and rebuild the rest with modern design, better performance, and improved SEO." }
            ]}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default WebDevelopment;

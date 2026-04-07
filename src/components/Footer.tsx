import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const whatsappUrl = 'https://wa.me/2347051551543';
  const products = [
    { name: 'PrepVerse', url: 'https://www.prepverse.bwtng.live/' },
    { name: 'BakeBook', url: 'https://bakebook.vercel.app/' },
    { name: 'HerbalStrength' },
    { name: 'CityTour' },
  ];

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-5">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain rounded-lg" />
              <span className="text-lg font-bold text-foreground">Waves <span className="text-primary">Digital</span></span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Transforming businesses through innovative digital solutions. Your partner in AI, mobile, web, and custom software development.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:hello.wdservices@gmail.com" className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-3.5 w-3.5" /> hello.wdservices@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Phone className="h-3.5 w-3.5" /> 08108510085
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp: 07051551543
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" /> Ada George, Port Harcourt, Nigeria
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {['services', 'products', 'about'].map((id) => (
                <li key={id}>
                  <button onClick={() => scrollToSection(id)} className="text-muted-foreground hover:text-foreground transition-colors capitalize">
                    {id}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/admin/login" className="text-muted-foreground hover:text-foreground transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-2.5 text-sm">
              {products.map((product) => (
                <li key={product.name}>
                  {product.url ? (
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                      {product.name} <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{product.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2024 Waves Digital Services. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

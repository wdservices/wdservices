import React from 'react';
import { motion } from 'framer-motion';

const createTextLogo = (name: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="128" viewBox="0 0 320 128">
      <rect width="100%" height="100%" rx="16" fill="none"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="600" fill="#94a3b8">${name}</text>
    </svg>
  `)}`;

const ClientShowcase = () => {
  const clients = [
    { name: 'Anaco Prime Sport', logo: '/anaco prime sport.png' },
    { name: 'Bakebook', logo: '/bakebook.png' },
    { name: 'EmergenSee', logo: '/emergensee.png' },
    { name: 'Golden Tulip Hotel', logo: '/golden tulip hotel.png' },
    { name: 'Oak Park and Gardens', logo: '/oakpagrk and gardens.png' },
    { name: 'megavantagedynamic', logo: createTextLogo('Megavantage Dynamic') },
    { name: 'peersallianceng', logo: createTextLogo('Peers Alliance NG') },
    { name: 'megavantageapartments', logo: createTextLogo('Megavantage Apartments') },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Trusted by Great Companies
          </h2>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">756+ products</span> delivered to clients worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-xl p-5 flex items-center justify-center h-24 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:brightness-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;

import React from 'react';
import { Smartphone, Globe, Cog, Brain, MessageSquare, Code } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native & cross-platform apps for iOS and Android with beautiful UX.",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built to perform.",
      color: "text-emerald-500",
    },
    {
      icon: Cog,
      title: "Custom Software",
      description: "Tailored solutions designed to streamline your business operations.",
      color: "text-violet-500",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent tools and models to automate and enhance your workflow.",
      color: "text-amber-500",
    },
    {
      icon: MessageSquare,
      title: "Chatbots",
      description: "Conversational AI that provides 24/7 customer support and engagement.",
      color: "text-rose-500",
    },
    {
      icon: Code,
      title: "Digital Transformation",
      description: "Complete modernization of your business infrastructure and processes.",
      color: "text-cyan-500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions that drive growth and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group glass-card rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl bg-muted/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

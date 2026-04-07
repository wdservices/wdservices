import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const whatsappUrl = "https://wa.me/2347051551543";

  const contactItems = [
    { icon: Mail, label: "Email", value: "hello.wdservices@gmail.com", href: "mailto:hello.wdservices@gmail.com", color: "text-blue-500" },
    { icon: Phone, label: "Phone", value: "08108510085", color: "text-emerald-500" },
    { icon: MessageCircle, label: "WhatsApp", value: "07051551543", href: whatsappUrl, color: "text-green-500" },
    { icon: MapPin, label: "Address", value: "Road 12, First Avenue, Ada George, Port Harcourt, Nigeria", color: "text-violet-500" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Build Something Great</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Reach out and let's discuss your project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const Wrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group block"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-10 h-12 text-base glow-sm">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Users, Award, Globe, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served", color: "text-blue-500" },
    { icon: Award, value: "100+", label: "Projects Done", color: "text-emerald-500" },
    { icon: Globe, value: "Global", label: "Reach", color: "text-violet-500" },
    { icon: Zap, value: "AI", label: "Expertise", color: "text-amber-500" },
  ];

  const points = [
    "Innovative AI-powered solutions",
    "Custom development expertise",
    "Comprehensive training programs",
    "End-to-end project delivery",
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Waves Digital Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We're passionate about creating digital solutions that make a real impact. 
              Since our inception, we've been at the forefront of technological innovation, 
              helping businesses harness the power of AI, mobile apps, and custom software.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of expert developers, AI specialists, and digital strategists work collaboratively to 
              deliver solutions that prepare your business for the future.
            </p>

            <div className="space-y-3">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

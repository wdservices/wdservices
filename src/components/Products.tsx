import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, ChefHat, Leaf, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      icon: BookOpen,
      name: "PrepVerse",
      description: "AI-powered exam preparation with practice tests, study plans, and progress analytics.",
      category: "EdTech",
      status: "Live",
      url: "https://www.prepverse.bwtng.live/",
      color: "text-blue-500",
    },
    {
      icon: ChefHat,
      name: "BakeBook",
      description: "The ultimate recipe management app for bakers—organize, store, and access your favorites.",
      category: "Lifestyle",
      status: "Live",
      url: "https://bakebook.vercel.app/",
      color: "text-amber-500",
    },
    {
      icon: Leaf,
      name: "HerbalStrength",
      description: "Wellness platform for discovering herbal solutions and healthy lifestyle products.",
      category: "Health",
      status: "New",
      color: "text-emerald-500",
    },
    {
      icon: MapPin,
      name: "CityTour",
      description: "City exploration platform for discovering destinations and local travel experiences.",
      category: "Travel",
      status: "New",
      color: "text-violet-500",
    },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Products</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">In-House Innovations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions we've built to address real-world challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center ${product.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                      <Badge variant="secondary" className="mt-1 text-xs">{product.category}</Badge>
                    </div>
                  </div>
                  <Badge className={`text-xs ${product.status === 'Live' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                    {product.status}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                {product.url ? (
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      Visit Product
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" size="sm" disabled className="rounded-full opacity-50">
                    Coming Soon
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

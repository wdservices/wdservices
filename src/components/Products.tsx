
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Users, Calculator, Heart } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      name: "ARFed",
      description: "Advanced learning management system with AR integration for immersive educational experiences.",
      category: "Education Technology",
      status: "Live",
      features: ["AR Integration", "LMS", "Interactive Learning", "Progress Tracking"]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      name: "PrepMate",
      description: "Comprehensive exam preparation platform with AI-powered study recommendations and practice tests.",
      category: "EdTech",
      status: "Live",
      features: ["AI Recommendations", "Practice Tests", "Progress Analytics", "Study Plans"]
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      name: "BabeBook",
      description: "Social networking platform designed for meaningful connections and community building.",
      category: "Social Platform",
      status: "Beta",
      features: ["Social Networking", "Community Features", "Privacy Focused", "Mobile First"]
    },
    {
      icon: <Calculator className="h-8 w-8 text-purple-600" />,
      name: "MathsGenius",
      description: "Interactive mathematics learning app with step-by-step problem solving and AI tutoring.",
      category: "Educational App",
      status: "Live",
      features: ["Step-by-step Solutions", "AI Tutoring", "Practice Problems", "Progress Reports"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our In-House Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions developed by our team to address real-world challenges 
            in education, social networking, and productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group transform hover:-translate-y-3 hover:scale-[1.02] bg-white">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110">
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{product.name}</h3>
                        <Badge variant="secondary" className="mt-1 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors duration-300">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge 
                      variant={product.status === 'Live' ? 'default' : 'secondary'}
                      className={`${product.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'} transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {product.status}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 transform group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

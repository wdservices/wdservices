
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Brain, MessageSquare, Globe, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with stunning user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "UI/UX Design"]
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      features: ["React/Next.js", "Responsive Design", "E-commerce", "CMS Solutions"]
    },
    {
      icon: <Cog className="h-8 w-8 text-purple-600" />,
      title: "Custom Software",
      description: "Tailored software solutions designed to streamline your business processes and operations.",
      features: ["Enterprise Solutions", "API Development", "Database Design", "Cloud Integration"]
    },
    {
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      title: "AI Tools & Solutions",
      description: "Cutting-edge artificial intelligence tools to automate and enhance your business capabilities.",
      features: ["Machine Learning", "Data Analytics", "Automation", "Predictive Models"]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-red-600" />,
      title: "Chatbots & Conversational AI",
      description: "Intelligent chatbots that provide 24/7 customer support and engagement.",
      features: ["Natural Language Processing", "Multi-platform", "Integration Ready", "Analytics"]
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business infrastructure.",
      features: ["Process Automation", "Legacy Migration", "Cloud Solutions", "Digital Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive digital solutions 
            that drive growth and innovation for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

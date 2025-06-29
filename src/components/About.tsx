
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Zap } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, title: "500+ Clients", description: "Businesses transformed worldwide" },
    { icon: <Award className="h-8 w-8 text-green-600" />, title: "100+ Projects", description: "Successfully delivered solutions" },
    { icon: <Globe className="h-8 w-8 text-purple-600" />, title: "Global Reach", description: "Serving clients across continents" },
    { icon: <Zap className="h-8 w-8 text-orange-600" />, title: "AI Expertise", description: "Cutting-edge AI implementations" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Waves Digital Services
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Waves Digital Services, we're passionate about creating digital solutions that make a real impact. 
                Since our inception, we've been at the forefront of technological innovation, helping businesses 
                harness the power of AI, mobile apps, and custom software.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of expert developers, AI specialists, and digital strategists work collaboratively to 
                deliver solutions that not only meet your current needs but also prepare your business for the future. 
                From startups to enterprise clients, we've built lasting partnerships based on trust, innovation, and results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 transform group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Innovative AI-powered solutions</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 transform group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Custom development expertise</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 transform group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Comprehensive training programs</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 transform group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">End-to-end project delivery</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-md group transform hover:-translate-y-3 hover:scale-105 bg-white overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {achievement.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

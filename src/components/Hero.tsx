
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Brain } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Digital Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                That Make Waves
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We develop cutting-edge apps, websites, AI tools, and chatbots for businesses worldwide. 
              From custom software solutions to comprehensive training programs, we're your digital transformation partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={() => scrollToSection('services')}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Custom Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Tailored apps, websites, and software solutions built for your unique needs</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">Intelligent chatbots and AI solutions that enhance your business operations</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <Smartphone className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Training & Education</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive AI training programs to upskill your team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

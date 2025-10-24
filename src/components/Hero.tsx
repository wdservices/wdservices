
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Brain } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {/* Small floating particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={i + 25}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Medium floating elements */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i + 45}
              className="absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={i + 53}
              className="absolute w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Moving Technology Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating Tech Symbols */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`tech-${i}`}
              className="absolute text-blue-400/30 animate-bounce"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
                fontSize: `${12 + Math.random() * 8}px`
              }}
            >
              {['⚡', '🔧', '⚙️', '💻', '🔌', '📡'][i]}
            </div>
          ))}
          
          {/* Animated Geometric Shapes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`geo-${i}`}
              className={`absolute border border-purple-400/20 animate-spin ${
                i % 3 === 0 ? 'w-6 h-6' : i % 3 === 1 ? 'w-4 h-4 rounded-full' : 'w-5 h-5'
              }`}
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Moving Binary Code Effect */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`binary-${i}`}
              className="absolute text-blue-300/20 font-mono text-xs animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '101010' : '010101'}
            </div>
          ))}
          
          {/* Floating Hexagons */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`hex-${i}`}
              className="absolute w-3 h-3 border border-purple-300/30 transform rotate-45 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
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
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
                onClick={() => scrollToSection('services')}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Custom Development</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">Tailored apps, websites, and software solutions built for your unique needs</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">AI-Powered Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">Intelligent chatbots and AI solutions that enhance your business operations</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                <Smartphone className="h-8 w-8 text-green-600 dark:text-green-400 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Training & Education</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">Comprehensive AI training programs to upskill your team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Brain, Users, Award, Clock, CheckCircle } from "lucide-react";

const Academy = () => {
  const courses = [
    {
      title: "AI Fundamentals",
      duration: "8 weeks",
      level: "Beginner",
      students: "500+",
      description: "Learn the basics of artificial intelligence, machine learning, and neural networks.",
      highlights: ["Machine Learning Basics", "Neural Networks", "Python Programming", "Hands-on Projects"]
    },
    {
      title: "Advanced AI Development",
      duration: "12 weeks",
      level: "Advanced",
      students: "200+",
      description: "Deep dive into advanced AI concepts, model development, and deployment strategies.",
      highlights: ["Deep Learning", "Model Deployment", "AI Ethics", "Real-world Applications"]
    },
    {
      title: "Chatbot Development",
      duration: "6 weeks",
      level: "Intermediate",
      students: "300+",
      description: "Build intelligent conversational AI systems and chatbots for business applications.",
      highlights: ["NLP Processing", "Dialog Systems", "Integration", "Analytics"]
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6 text-blue-600" />, label: "Students Trained", value: "1000+" },
    { icon: <Award className="h-6 w-6 text-green-600" />, label: "Certifications Issued", value: "800+" },
    { icon: <GraduationCap className="h-6 w-6 text-purple-600" />, label: "Courses Available", value: "15+" },
    { icon: <CheckCircle className="h-6 w-6 text-orange-600" />, label: "Success Rate", value: "95%" }
  ];

  return (
    <section id="academy" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-12 w-12 text-blue-600 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Waves AI Academy
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your team with cutting-edge AI knowledge through our comprehensive 
            training programs designed for professionals and businesses.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
              <div className="flex justify-center mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</div>
              <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white group transform hover:-translate-y-3 hover:scale-105 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <Clock className="h-4 w-4 mr-1 transform group-hover:scale-110 transition-transform duration-300" />
                      {course.duration}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {course.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2 transform group-hover:scale-110 transition-transform duration-300" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <Users className="h-4 w-4 mr-1 transform group-hover:scale-110 transition-transform duration-300" />
                      {course.students} enrolled
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Team with AI?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of professionals who have already upskilled with our AI training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              View All Courses
            </Button>
            <Button size="lg" variant="outline" className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:border-blue-600 hover:text-blue-600">
              Contact for Corporate Training
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;

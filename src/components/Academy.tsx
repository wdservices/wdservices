
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
            <Brain className="h-12 w-12 text-blue-600 mr-3" />
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
            <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} enrolled
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Team with AI?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of professionals who have already upskilled with our AI training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Courses
            </Button>
            <Button size="lg" variant="outline">
              Contact for Corporate Training
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;

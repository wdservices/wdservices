
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0A` +
                 `Email: ${formData.email}%0D%0A` +
                 `Company: ${formData.company}%0D%0A%0D%0A` +
                 `Message:%0D%0A${formData.message}`;
    
    // Open user's default email client
    window.location.href = `mailto:hello.wdservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Show success message
    toast({
      title: "Opening Email Client",
      description: "Please send the pre-filled email to contact us.",
    });
    
    // Clear the form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Start Your Digital Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with innovative digital solutions? 
            Get in touch with our team and let's discuss your project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="border-0 shadow-md dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-blue-600 mr-3 transform group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Email Us</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">hello.wdservices@gmail.com</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="h-6 w-6 text-blue-600 mr-3 transform group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Call Us</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">08108510085</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-blue-600 mr-3 transform group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Visit Us</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Road 12, first avenue off location/</p>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Ada George Port Harcourt, Nigeria</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, requirements, and goals..."
                        className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappUrl = "https://wa.me/2347051551543";

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
                    <a href="mailto:hello.wdservices@gmail.com" className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      hello.wdservices@gmail.com
                    </a>
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
                      <MessageCircle className="h-6 w-6 text-green-600 mr-3 transform group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">WhatsApp</h3>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                    >
                      07051551543
                    </a>
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

            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="h-full flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Reach us directly
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        We’ve removed the contact form so you can contact us directly through our email or WhatsApp for faster responses.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <a
                        href="mailto:hello.wdservices@gmail.com"
                        className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 transition-colors hover:border-blue-400"
                      >
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">hello.wdservices@gmail.com</p>
                      </a>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 transition-colors hover:border-green-400"
                      >
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">WhatsApp</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">07051551543</p>
                      </a>
                    </div>

                    <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
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

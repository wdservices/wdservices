import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIMarketPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI Market
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Discover and explore the latest AI applications and tools
          </p>
          
          {/* Placeholder for AI apps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI App Card - Placeholder */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-medium">AI App 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI App Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of what this AI application does and its key features.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* More placeholder cards */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-medium">AI App 2</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI App Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of what this AI application does and its key features.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-white text-2xl font-medium">AI App 3</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI App Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of what this AI application does and its key features.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIMarketPage;

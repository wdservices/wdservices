
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Academy from "@/components/Academy";

const AcademyPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <Academy />
      <Footer />
    </div>
  );
};

export default AcademyPage;

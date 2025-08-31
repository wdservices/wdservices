import React, { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

interface AITool {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  demoUrl?: string;
  documentationUrl?: string;
  isActive: boolean;
  rating?: number;
}

const AIToolCard = ({ tool }: { tool: AITool }) => {
  const getGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-teal-600',
      'from-purple-500 to-pink-600',
      'from-yellow-500 to-orange-600',
      'from-red-500 to-pink-600',
      'from-indigo-500 to-blue-600',
    ];
    return gradients[index % gradients.length];
  };

  const getCategoryBadge = (category: string) => {
    const badges: Record<string, { bg: string; text: string }> = {
      'content-creation': { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-800 dark:text-blue-200' },
      'productivity': { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-200' },
      'development': { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-800 dark:text-purple-200' },
      'marketing': { bg: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-800 dark:text-yellow-200' },
      'design': { bg: 'bg-pink-100 dark:bg-pink-900', text: 'text-pink-800 dark:text-pink-200' },
    };
    
    const defaultBadge = { bg: 'bg-gray-100 dark:bg-gray-700', text: 'text-gray-800 dark:text-gray-200' };
    const badge = badges[category] || defaultBadge;
    
    return {
      text: category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      ...badge
    };
  };

  const badge = getCategoryBadge(tool.category);
  const gradient = getGradient(Math.floor(Math.random() * 6));

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      <div className={`h-48 bg-gradient-to-r ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:opacity-75 transition-opacity"></div>
        <span className="text-white text-2xl font-medium relative z-10">{tool.name}</span>
      </div>
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
              {badge.text}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {tool.description}
          </p>
          {tool.features && tool.features.length > 0 && (
            <div className="mt-2">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">Features:</h4>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                {tool.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
                {tool.features.length > 3 && (
                  <li className="text-xs text-gray-500 dark:text-gray-500">+{tool.features.length - 3} more</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {tool.price > 0 ? `$${tool.price.toFixed(2)}` : 'Free'}
            </span>
            {tool.rating && tool.rating > 0 && (
              <span className="text-sm text-green-600 dark:text-green-400">
                <span className="font-medium">{tool.rating}</span> {Array(Math.floor(tool.rating)).fill('★').join('')}
              </span>
            )}
          </div>
          <a
            href={tool.demoUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all hover:shadow-md"
          >
            {tool.demoUrl ? 'View Demo' : 'Check it out'} <ArrowRight className="w-4 h-4 inline-block ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AIMarketPage = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [filteredTools, setFilteredTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        console.log('Fetching tools from Firestore...');
        const toolsCollection = collection(db, 'tools');
        console.log('Collection reference created');
        
        const toolsSnapshot = await getDocs(toolsCollection);
        console.log('Firestore query completed');
        
        const toolsData = toolsSnapshot.docs
          .map(doc => {
            const data = doc.data();
            console.log(`Processing document ${doc.id}:`, data);
            
            // Handle category - use first category from categoryIds array if available
            const category = Array.isArray(data.categoryIds) && data.categoryIds.length > 0 
              ? data.categoryIds[0] 
              : 'uncategorized';
              
            return {
              id: doc.id,
              name: data.name || 'Unnamed Tool',
              description: data.description || 'No description available',
              price: data.price || 0,
              category: category,
              features: data.features || [],
              demoUrl: data.demoUrl || '',
              documentationUrl: data.documentationUrl || '',
              isFeatured: data.isFeatured || false,
              isActive: data.isActive !== false, // true if not set or explicitly true
              rating: data.rating || 0,
              ...data
            } as AITool;
          })
          .filter(tool => {
            console.log(`Filtering tool ${tool.id} - isActive:`, tool.isActive);
            return tool.isActive;
          });

        console.log('Final tools data:', toolsData);
        setTools(toolsData);
        setFilteredTools(toolsData);
      } catch (err) {
        console.error('Error fetching tools:', err);
        setError('Failed to load tools. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  // Filter tools based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredTools(tools);
    } else {
      const searchLower = searchTerm.toLowerCase();
      const filtered = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        tool.category.toLowerCase().includes(searchLower) ||
        (tool.features && tool.features.some(feature => 
          feature.toLowerCase().includes(searchLower)
        ))
      );
      setFilteredTools(filtered);
    }
  }, [searchTerm, tools]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI Market
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Discover and explore the latest AI applications and tools
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools by name, category, or feature..."
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            {searchTerm && filteredTools.length > 0 && (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-left">
                Showing {filteredTools.length} {filteredTools.length === 1 ? 'result' : 'results'}
              </p>
            )}
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">Loading tools...</span>
            </div>
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-center">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          ) : filteredTools.length === 0 ? (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {searchTerm ? 'No matching tools found' : 'No AI Tools Available'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {searchTerm 
                  ? 'Try adjusting your search or check back later for new tools.'
                  : 'Check back later for new AI tools and applications.'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <AIToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIMarketPage;

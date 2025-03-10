import { useState, useEffect } from 'react';
import { kitespots } from './data/spots';
import { SpotCard } from './components/SpotCard';
import { WorldMap } from './components/WorldMap';
import { Wind, Map, TrendingUp, Droplet, Gem } from 'lucide-react';
import { KiteSpot } from './types';
import { calculateTrendingSpots } from './services/trending';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'map' | 'trending' | 'beginner' | 'hidden-gems'>('cards');
  const [trendingSpots, setTrendingSpots] = useState<KiteSpot[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (viewMode === 'trending') {
      loadTrendingSpots();
    }
  }, [viewMode]);

  const loadTrendingSpots = async () => {
    setLoading(true);
    try {
      const spots = await calculateTrendingSpots(3);
      setTrendingSpots(spots);
    } catch (error) {
      console.error('Failed to load trending spots:', error);
    } finally {
      setLoading(false);
    }
  };

  const beginnerSpots = kitespots.filter(spot => 
    spot.difficulty === 'beginner' || spot.isBeginnerFriendly
  );

  const hiddenGems = kitespots.filter(spot => spot.isHiddenGem);

  return (
    <div className="min-h-screen bg-gray-100 font-nunito flex flex-col">
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Elite Kitesurf Spots
          </h1>
          <p className="text-center mt-2 max-w-2xl mx-auto">
            Discover the world's most exclusive kitesurfing destinations with real-time wind and wave conditions
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Improved Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="bg-white rounded-full p-1 shadow-lg">
            <div className="flex items-center flex-wrap justify-center">
              <NavButton 
                active={viewMode === 'cards'} 
                onClick={() => setViewMode('cards')}
                icon={<Wind size={18} />}
                label="All Spots"
              />
              <NavButton 
                active={viewMode === 'trending'} 
                onClick={() => setViewMode('trending')}
                icon={<TrendingUp size={18} />}
                label="Trending"
              />
              <NavButton 
                active={viewMode === 'beginner'} 
                onClick={() => setViewMode('beginner')}
                icon={<Droplet size={18} />}
                label="Beginner"
              />
              <NavButton 
                active={viewMode === 'hidden-gems'} 
                onClick={() => setViewMode('hidden-gems')}
                icon={<Gem size={18} />}
                label="Hidden Gems"
              />
              <NavButton 
                active={viewMode === 'map'} 
                onClick={() => setViewMode('map')}
                icon={<Map size={18} />}
                label="Map"
              />
            </div>
          </nav>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'cards' && (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {kitespots.map(spot => (
                <SpotCard key={spot.id} spot={spot} />
              ))}
            </motion.div>
          )}

          {viewMode === 'trending' && (
            <motion.div
              key="trending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Top Spots with Perfect Conditions Right Now
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trendingSpots.map(spot => (
                      <SpotCard key={spot.id} spot={spot} />
                    ))}
                  </div>
                  {trendingSpots.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-500">No trending spots available right now.</p>
                      <button 
                        onClick={loadTrendingSpots}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Refresh
                      </button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )}

          {viewMode === 'beginner' && (
            <motion.div
              key="beginner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Beginner-Friendly Spots
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                  These locations offer ideal conditions for beginners with shallow water, consistent winds, and smaller waves.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {beginnerSpots.map(spot => (
                  <SpotCard key={spot.id} spot={spot} />
                ))}
              </div>
            </motion.div>
          )}

          {viewMode === 'hidden-gems' && (
            <motion.div
              key="hidden-gems"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Hidden Gems
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                  Discover these lesser-known kitesurfing paradises with unique features and fewer crowds.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hiddenGems.map(spot => (
                  <SpotCard key={spot.id} spot={spot} />
                ))}
              </div>
            </motion.div>
          )}

          {viewMode === 'map' && (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-4 shadow-lg h-[600px] w-full overflow-hidden"
            >
              <WorldMap />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-2 md:mb-0">
              <p>© {new Date().getFullYear()} Elite Kitesurf Spots. All rights reserved.</p>
            </div>
            <div className="flex items-center">
              <a 
                href="https://chatandbuild.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-100 transition-colors flex items-center"
              >
                <span>Made with chatandbuild.com</span>
                <span className="ml-2 text-xl">🏄‍♂️</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component for navigation buttons
const NavButton = ({ 
  active, 
  onClick, 
  icon, 
  label 
}: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode; 
  label: string 
}) => {
  return (
    <button
      className={`
        px-6 py-3 rounded-full flex items-center gap-2 font-medium transition-all duration-300
        ${active 
          ? 'bg-blue-500 text-white shadow-md' 
          : 'text-gray-600 hover:bg-gray-100'
        }
      `}
      onClick={onClick}
    >
      <span className={`transition-transform duration-300 ${active ? 'scale-110' : ''}`}>
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
};

export default App;

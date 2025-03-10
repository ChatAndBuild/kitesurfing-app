import { useState, useEffect } from 'react';
import { kitespots } from './data/spots';
import { SpotCard } from './components/SpotCard';
import { WorldMap } from './components/WorldMap';
import { RegionFilter } from './components/RegionFilter';
import { Wind, Map, TrendingUp, Droplet, Gem, Filter } from 'lucide-react';
import { KiteSpot, Region } from './types';
import { calculateTrendingSpots } from './services/trending';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'map' | 'trending' | 'beginner' | 'hidden-gems'>('cards');
  const [trendingSpots, setTrendingSpots] = useState<KiteSpot[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);

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

  // Filter spots by selected regions
  const filterSpotsByRegion = (spots: KiteSpot[]) => {
    if (selectedRegions.length === 0) return spots;
    return spots.filter(spot => selectedRegions.includes(spot.region));
  };

  const filteredSpots = filterSpotsByRegion(kitespots);
  const filteredBeginnerSpots = filterSpotsByRegion(beginnerSpots);
  const filteredHiddenGems = filterSpotsByRegion(hiddenGems);

  return (
    <div className="min-h-screen bg-gray-100 font-nunito flex flex-col">
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 text-white py-12 px-4">
        {/* Animated wave background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ d: "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
              animate={{ 
                d: [
                  "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ] 
              }}
              transition={{ 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 10,
                ease: "easeInOut"
              }}
              fill="#fff"
            />
          </svg>
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ d: "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
              animate={{ 
                d: [
                  "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,165.3C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ] 
              }}
              transition={{ 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 8,
                ease: "easeInOut",
                delay: 0.5
              }}
              fill="#fff"
            />
          </svg>
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute top-4 right-4 text-white opacity-20"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 0.9, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        >
          <Wind size={80} />
        </motion.div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center mb-2">
              <Wind className="mr-3" size={32} strokeWidth={2.5} />
              <h1 className="text-5xl font-extrabold tracking-tight">
                Elite Kitesurf Spots
              </h1>
            </div>
            
            <div className="h-1 w-24 bg-white opacity-70 rounded-full my-4"></div>
            
            <p className="text-center mt-2 max-w-2xl mx-auto text-lg font-light">
              Discover the world's most exclusive kitesurfing destinations with real-time wind and wave conditions
            </p>
            
            <motion.div 
              className="mt-6 flex space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm backdrop-blur-sm">
                Real-time conditions
              </span>
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm backdrop-blur-sm">
                Global destinations
              </span>
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm backdrop-blur-sm">
                Expert insights
              </span>
            </motion.div>
          </motion.div>
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

        {/* Region Filter */}
        {viewMode !== 'map' && viewMode !== 'trending' && (
          <div className="flex justify-center mb-6">
            <RegionFilter 
              selectedRegions={selectedRegions}
              onRegionChange={setSelectedRegions}
            />
          </div>
        )}

        {/* Filter Results Summary */}
        {selectedRegions.length > 0 && viewMode !== 'map' && viewMode !== 'trending' && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              Showing spots in: <span className="font-semibold">{selectedRegions.join(', ')}</span>
            </p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {viewMode === 'cards' && (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredSpots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSpots.map(spot => (
                    <SpotCard key={spot.id} spot={spot} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No spots found for the selected regions.</p>
                  <button 
                    onClick={() => setSelectedRegions([])}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
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
              {filteredBeginnerSpots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBeginnerSpots.map(spot => (
                    <SpotCard key={spot.id} spot={spot} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No beginner spots found for the selected regions.</p>
                  <button 
                    onClick={() => setSelectedRegions([])}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
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
              {filteredHiddenGems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredHiddenGems.map(spot => (
                    <SpotCard key={spot.id} spot={spot} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No hidden gems found for the selected regions.</p>
                  <button 
                    onClick={() => setSelectedRegions([])}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
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

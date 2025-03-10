import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { kitespots } from '../data/spots';
import { WeatherForecast } from './WeatherForecast';
import { getSpotWeather } from '../services/weather';
import { Wind, Droplets, Sun, Cloud } from 'lucide-react';

// Using a more detailed world map TopoJSON
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const WorldMap = () => {
  const [hoveredSpot, setHoveredSpot] = useState<string | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 });
  const [weatherData, setWeatherData] = useState<Record<string, { windSpeed: number; icon: string }>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllWeather = async () => {
      setIsLoading(true);
      const weatherPromises = kitespots.map(async (spot) => {
        try {
          const data = await getSpotWeather(spot.coordinates.lat, spot.coordinates.lng);
          return { id: spot.id, data };
        } catch (error) {
          console.error(`Error fetching weather for ${spot.name}:`, error);
          return { id: spot.id, data: { windSpeed: 0, icon: '01d' } };
        }
      });

      const results = await Promise.all(weatherPromises);
      const weatherObj = results.reduce((acc, { id, data }) => {
        acc[id] = { windSpeed: data.windSpeed, icon: data.icon };
        return acc;
      }, {} as Record<string, { windSpeed: number; icon: string }>);

      setWeatherData(weatherObj);
      setIsLoading(false);
    };

    fetchAllWeather();
  }, []);

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleReset = () => {
    setPosition({ coordinates: [0, 20], zoom: 1 });
    setSelectedSpot(null);
  };

  const handleSpotClick = (spotId: string) => {
    const spot = kitespots.find(s => s.id === spotId);
    if (spot) {
      setSelectedSpot(spotId);
      setPosition({
        coordinates: [spot.coordinates.lng, spot.coordinates.lat],
        zoom: 4
      });
    }
  };

  const getWeatherIcon = (icon: string) => {
    if (icon.includes('01') || icon.includes('02')) return <Sun className="text-yellow-500" />;
    if (icon.includes('09') || icon.includes('10')) return <Droplets className="text-blue-500" />;
    if (icon.includes('03') || icon.includes('04')) return <Cloud className="text-gray-500" />;
    return <Wind className="text-blue-400" />;
  };

  // Updated wind class function to better reflect actual wind speeds for kitesurfing
  const getWindClass = (speed: number): string => {
    if (speed < 8) return "rgba(59, 130, 246, 0.5)"; // Light wind - blue
    if (speed < 20) return "rgba(16, 185, 129, 0.5)"; // Perfect wind - green
    return "rgba(239, 68, 68, 0.5)"; // Strong wind - red
  };

  // Updated wind animation color based on wind speed
  const getWindAnimation = (windSpeed: number) => {
    // Scale animation based on wind speed
    const duration = Math.max(5 - windSpeed / 5, 1); // Faster animation for stronger winds
    const scale = Math.min(1 + windSpeed / 20, 1.5); // Larger pulse for stronger winds
    
    return {
      scale: [1, scale, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    };
  };

  // Get marker color based on wind speed
  const getMarkerColor = (windSpeed: number): string => {
    if (windSpeed < 8) return "#3B82F6"; // Blue for light wind
    if (windSpeed < 20) return "#10B981"; // Green for perfect wind
    return "#EF4444"; // Red for strong wind
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-blue-500"
          >
            <Wind size={40} />
          </motion.div>
          <p className="ml-3 text-lg font-semibold">Loading weather data...</p>
        </div>
      )}
      
      <motion.div 
        className="absolute top-4 left-4 z-10 bg-white p-2 rounded-lg shadow-md flex flex-col space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button 
          onClick={handleZoomIn}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          +
        </button>
        <button 
          onClick={handleZoomOut}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          -
        </button>
        <button 
          onClick={handleReset}
          className="p-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          Reset
        </button>
      </motion.div>

      <motion.div 
        className="w-full h-full bg-blue-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 180,
            center: [0, 0]
          }}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates as [number, number]}
            onMoveEnd={setPosition}
            maxZoom={5}
          >
            {/* Ocean background */}
            <rect x="-8000" y="-8000" width="16000" height="16000" fill="#a8d5ff" />
            
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                      strokeWidth={0.5}
                      style={{
                        default: { 
                          fill: "#e2e8f0", 
                          stroke: "#cbd5e1",
                          outline: "none" 
                        },
                        hover: { 
                          fill: "#f8fafc", 
                          stroke: "#94a3b8",
                          outline: "none" 
                        },
                        pressed: { 
                          fill: "#f1f5f9", 
                          stroke: "#94a3b8",
                          outline: "none" 
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </motion.g>
            
            {/* Weather background effects - Only render for actual kitespot locations */}
            {!isLoading && kitespots.map((spot) => {
              const windSpeed = weatherData[spot.id]?.windSpeed || 0;
              const icon = weatherData[spot.id]?.icon || '01d';
              const windColorClass = getWindClass(windSpeed);
              
              return (
                <motion.g key={`bg-${spot.id}`}>
                  {/* Wind ripple effect - only if there's actual wind */}
                  {windSpeed > 0 && (
                    <motion.circle
                      cx={spot.coordinates.lng}
                      cy={spot.coordinates.lat}
                      r={windSpeed * 1.5}
                      fill={windColorClass}
                      animate={{
                        r: [windSpeed * 1.5, windSpeed * 3, windSpeed * 1.5],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  
                  {/* Weather icon background - only for sunny spots */}
                  {icon.includes('01') && (
                    <motion.circle
                      cx={spot.coordinates.lng}
                      cy={spot.coordinates.lat}
                      r={8}
                      fill="rgba(255, 215, 0, 0.1)"
                      animate={{
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.g>
              );
            })}
            
            {/* Spot markers */}
            {!isLoading && kitespots.map((spot) => {
              const windSpeed = weatherData[spot.id]?.windSpeed || 0;
              const icon = weatherData[spot.id]?.icon || '01d';
              const isSelected = selectedSpot === spot.id;
              const markerColor = isSelected ? "#3B82F6" : getMarkerColor(windSpeed);
              
              return (
                <motion.g
                  key={spot.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Marker coordinates={[spot.coordinates.lng, spot.coordinates.lat]}>
                    <g
                      onClick={() => handleSpotClick(spot.id)}
                      onMouseEnter={() => setHoveredSpot(spot.id)}
                      onMouseLeave={() => setHoveredSpot(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Base circle */}
                      <motion.circle
                        r={isSelected ? 8 : 6}
                        fill={markerColor}
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        animate={getWindAnimation(windSpeed)}
                      />
                      
                      {/* Wind speed indicator - only if there's actual wind */}
                      {windSpeed > 0 && (
                        <motion.circle
                          r={windSpeed / 2 + 6}
                          fill="transparent"
                          stroke={getWindClass(windSpeed)}
                          strokeWidth={1.5}
                          strokeDasharray="3,2"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20 / Math.max(windSpeed, 1), // Prevent division by zero
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      )}
                      
                      {/* Show spot name on hover */}
                      {(hoveredSpot === spot.id || isSelected) && (
                        <motion.g
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <rect
                            x={-40}
                            y={-35}
                            width={80}
                            height={22}
                            rx={4}
                            fill="white"
                            stroke="#ddd"
                          />
                          <text
                            textAnchor="middle"
                            y={-20}
                            style={{ 
                              fontSize: "10px", 
                              fontWeight: "bold",
                              fill: "#333"
                            }}
                          >
                            {spot.name}
                          </text>
                        </motion.g>
                      )}
                    </g>
                  </Marker>
                </motion.g>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </motion.div>
      
      {/* Weather legend */}
      <motion.div 
        className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h4 className="text-sm font-bold mb-2">Wind Speed</h4>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
            <span>Light ({"<"}8 knots)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span>Medium (8-20 knots)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <span>Strong ({">"}20 knots)</span>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {selectedSpot && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs"
          >
            <SpotDetail 
              spot={kitespots.find(s => s.id === selectedSpot)!} 
              onClose={() => setSelectedSpot(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {hoveredSpot && !selectedSpot && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg"
          >
            <SpotTooltip 
              spot={kitespots.find(s => s.id === hoveredSpot)!} 
              windSpeed={weatherData[hoveredSpot]?.windSpeed || 0}
              weatherIcon={weatherData[hoveredSpot]?.icon || '01d'}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SpotTooltip = ({ 
  spot, 
  windSpeed, 
  weatherIcon 
}: { 
  spot: typeof kitespots[0];
  windSpeed: number;
  weatherIcon: string;
}) => {
  const getWindClass = (speed: number) => {
    if (speed < 8) return "text-blue-500";
    if (speed < 20) return "text-green-500";
    return "text-red-500";
  };
  
  const getWeatherIcon = (icon: string) => {
    if (icon.includes('01') || icon.includes('02')) return <Sun className="text-yellow-500" />;
    if (icon.includes('09') || icon.includes('10')) return <Droplets className="text-blue-500" />;
    if (icon.includes('03') || icon.includes('04')) return <Cloud className="text-gray-500" />;
    return <Wind className="text-blue-400" />;
  };

  return (
    <div>
      <h3 className="font-bold text-lg">{spot.name}</h3>
      <p className="text-gray-600 text-sm">{spot.location}</p>
      <div className="mt-2 flex items-center">
        <Wind className={`mr-2 ${getWindClass(windSpeed)}`} size={18} />
        <span className="font-semibold">{windSpeed.toFixed(1)} knots</span>
        <div className="ml-3">
          {getWeatherIcon(weatherIcon)}
        </div>
      </div>
    </div>
  );
};

const SpotDetail = ({ spot, onClose }: { spot: typeof kitespots[0], onClose: () => void }) => {
  return (
    <div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg">{spot.name}</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      <p className="text-gray-600 mb-2">{spot.location}</p>
      <p className="text-sm text-gray-700 mb-3">{spot.description}</p>
      
      <div className="bg-gray-50 p-2 rounded mb-3">
        <h4 className="font-semibold text-sm mb-1">Best Months</h4>
        <div className="flex flex-wrap gap-1">
          {spot.bestMonths.slice(0, 3).map(month => (
            <span key={month} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {month}
            </span>
          ))}
        </div>
      </div>
      
      <h4 className="font-semibold text-sm mb-2">Weather Forecast</h4>
      <WeatherForecast lat={spot.coordinates.lat} lng={spot.coordinates.lng} />
    </div>
  );
};

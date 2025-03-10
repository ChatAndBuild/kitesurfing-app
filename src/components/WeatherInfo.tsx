import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSpotWeather, WeatherData } from '../services/weather';
import { Wind, Thermometer, Loader, Waves } from 'lucide-react';

interface WeatherInfoProps {
  lat: number;
  lng: number;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ lat, lng }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getSpotWeather(lat, lng);
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lng]);

  // Updated wind class function to better reflect actual wind speeds for kitesurfing
  const getWindClass = (speed: number): string => {
    if (speed < 8) return "text-blue-500"; // Light wind - not ideal for kitesurfing
    if (speed < 20) return "text-green-500"; // Perfect wind - ideal for kitesurfing
    return "text-red-500"; // Strong wind - challenging/dangerous
  };

  // Updated wave class function with more precise thresholds
  const getWaveClass = (height: number): string => {
    if (height < 0.5) return "text-blue-400"; // Very small waves
    if (height < 1.5) return "text-blue-500"; // Small to medium waves
    if (height < 2.5) return "text-blue-600"; // Medium to large waves
    return "text-blue-700"; // Very large waves
  };

  if (loading) {
    return (
      <div className="flex items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader size={16} className="text-blue-500" />
        </motion.div>
        <span className="ml-2 text-sm text-gray-600">Loading...</span>
      </div>
    );
  }

  if (!weather) {
    return <span className="text-sm text-gray-600">Weather data unavailable</span>;
  }

  // Determine wind speed class - ensure this is calculated correctly
  const windClass = getWindClass(weather.windSpeed);
  
  // Determine wave height class
  const waveClass = weather.waveHeight ? getWaveClass(weather.waveHeight) : "text-blue-400";

  return (
    <div className="flex items-center gap-3">
      <motion.div 
        className="flex items-center" 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Wind className={windClass} size={16} />
        <span className={`ml-1 font-medium ${windClass}`}>{weather.windSpeed.toFixed(1)} knots</span>
      </motion.div>
      
      <motion.div 
        className="flex items-center" 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Thermometer size={16} className="text-orange-500" />
        <span className="ml-1">{Math.round(weather.temperature)}°C</span>
      </motion.div>

      {weather.waveHeight && (
        <motion.div 
          className="flex items-center" 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Waves className={waveClass} size={16} />
          <span className={`ml-1 ${waveClass}`}>{weather.waveHeight}m {weather.waveDirection}</span>
        </motion.div>
      )}
    </div>
  );
};

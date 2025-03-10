import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSpotForecast } from '../services/weather';
import { Wind, Thermometer, Loader, Waves } from 'lucide-react';

interface WeatherForecastProps {
  lat: number;
  lng: number;
}

export const WeatherForecast: React.FC<WeatherForecastProps> = ({ lat, lng }) => {
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLoading(true);
        const data = await getSpotForecast(lat, lng);
        setForecast(data);
      } catch (error) {
        console.error('Error fetching forecast:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
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
        <span className="ml-2 text-sm text-gray-600">Loading forecast...</span>
      </div>
    );
  }

  if (!forecast || forecast.length === 0) {
    return <span className="text-sm text-gray-600">Forecast data unavailable</span>;
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {forecast.map((day, index) => {
        // Determine wind speed class
        const windClass = getWindClass(day.windSpeed);
        // Determine wave height class
        const waveClass = day.waveHeight ? getWaveClass(day.waveHeight) : "text-blue-400";
        
        return (
          <motion.div 
            key={index}
            className="bg-gray-50 rounded-lg p-2 flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="font-medium text-sm mb-1">{day.day}</div>
            <div className="flex items-center mb-1">
              <Wind className={windClass} size={14} />
              <span className={`ml-1 text-xs ${windClass}`}>{day.windSpeed} knots</span>
            </div>
            <div className="flex items-center mb-1">
              <Thermometer size={14} className="text-orange-500" />
              <span className="ml-1 text-xs">{day.temperature}°C</span>
            </div>
            {day.waveHeight && (
              <div className="flex items-center">
                <Waves className={waveClass} size={14} />
                <span className={`ml-1 text-xs ${waveClass}`}>{day.waveHeight}m</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

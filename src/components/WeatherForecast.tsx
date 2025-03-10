import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSpotForecast } from '../services/weather';
import { Wind, Thermometer, Waves } from 'lucide-react';

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

  const getWindClass = (speed: number) => {
    if (speed < 8) return "text-blue-500";
    if (speed < 15) return "text-green-500";
    return "text-red-500";
  };

  const getWaveClass = (height: number) => {
    if (height < 0.5) return "text-blue-400";
    if (height < 1.5) return "text-blue-500";
    if (height < 2.5) return "text-blue-600";
    return "text-blue-700";
  };

  if (loading) {
    return (
      <div className="flex justify-center py-2">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (forecast.length === 0) {
    return <p className="text-sm text-gray-500">Forecast unavailable</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {forecast.map((day, index) => (
        <motion.div
          key={day.day}
          className="bg-gray-50 p-2 rounded text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="font-semibold text-xs mb-1">{day.day}</div>
          
          <div className="flex flex-col items-center gap-1 text-xs">
            <div className="flex items-center">
              <Wind className={getWindClass(day.windSpeed)} size={12} />
              <span className="ml-1">{day.windSpeed}kt</span>
            </div>
            
            <div className="flex items-center">
              <Thermometer className="text-orange-500" size={12} />
              <span className="ml-1">{day.temperature}°C</span>
            </div>
            
            {day.waveHeight && (
              <div className="flex items-center">
                <Waves className={getWaveClass(day.waveHeight)} size={12} />
                <span className="ml-1">{day.waveHeight}m {day.waveDirection}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

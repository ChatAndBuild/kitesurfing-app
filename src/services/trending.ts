import { kitespots } from '../data/spots';
import { getSpotWeather } from './weather';
import { getTrendingSpotImages } from './images';
import { TrendingSpot, KiteSpot } from '../types';

// Calculate trending spots based on current weather conditions
export const calculateTrendingSpots = async (count: number = 3): Promise<KiteSpot[]> => {
  try {
    // Get weather for all spots
    const spotsWithWeather = await Promise.all(
      kitespots.map(async (spot) => {
        try {
          const weather = await getSpotWeather(spot.coordinates.lat, spot.coordinates.lng);
          
          // Calculate a "wind score" based on ideal kitesurfing conditions
          // Ideal wind: 12-25 knots
          let windScore = 0;
          if (weather.windSpeed >= 12 && weather.windSpeed <= 25) {
            // Perfect wind range gets highest score
            windScore = 100 - Math.abs(18 - weather.windSpeed) * 5;
          } else if (weather.windSpeed > 8 && weather.windSpeed < 30) {
            // Acceptable wind range gets medium score
            windScore = 60 - Math.abs(18 - weather.windSpeed) * 3;
          } else {
            // Poor wind conditions
            windScore = Math.max(0, 30 - Math.abs(18 - weather.windSpeed) * 2);
          }
          
          // Determine weather condition category for image search
          let weatherCondition = 'sunny';
          if (weather.icon.includes('01') || weather.icon.includes('02')) {
            weatherCondition = 'sunny';
          } else if (weather.icon.includes('03') || weather.icon.includes('04')) {
            weatherCondition = 'cloudy';
          } else if (weather.icon.includes('09') || weather.icon.includes('10')) {
            weatherCondition = 'rainy';
          } else {
            weatherCondition = 'windy';
          }
          
          return {
            spotId: spot.id,
            windScore,
            weatherCondition
          } as TrendingSpot;
        } catch (error) {
          console.error(`Error getting weather for ${spot.name}:`, error);
          return {
            spotId: spot.id,
            windScore: 0,
            weatherCondition: 'sunny'
          } as TrendingSpot;
        }
      })
    );
    
    // Sort by wind score and get top spots
    const topSpots = spotsWithWeather
      .sort((a, b) => b.windScore - a.windScore)
      .slice(0, count);
    
    // Get enhanced spot data with dynamic images
    const trendingSpots = await Promise.all(
      topSpots.map(async (trendingSpot) => {
        const spot = kitespots.find(s => s.id === trendingSpot.spotId)!;
        
        // Get dynamic images based on weather condition
        try {
          const images = await getTrendingSpotImages(trendingSpot.weatherCondition);
          
          return {
            ...spot,
            dynamicImages: images.length > 0 ? images : undefined,
            trending: true
          };
        } catch (error) {
          console.error(`Error getting images for ${spot.name}:`, error);
          return {
            ...spot,
            trending: true
          };
        }
      })
    );
    
    return trendingSpots;
  } catch (error) {
    console.error('Error calculating trending spots:', error);
    return [];
  }
};

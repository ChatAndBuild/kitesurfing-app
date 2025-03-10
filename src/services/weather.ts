// Weather service to fetch data from OpenWeatherMap API
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '59315511c369428055ed16f0b5f8dc76';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Stormglass API for wave data (simulated)
const simulateWaveData = (lat: number, lng: number) => {
  // This is a simulation function since we don't have a real wave API
  // In a real app, you would use a service like Stormglass.io or similar
  
  // Create somewhat realistic wave data based on location
  // Higher latitudes tend to have bigger waves
  const latFactor = Math.abs(lat) / 90; // 0 to 1 based on latitude
  
  // Coastal areas (longitude near multiples of 90) tend to have bigger waves
  const lngFactor = Math.abs(Math.sin(lng * Math.PI / 180));
  
  // Combine factors with some randomness
  const baseHeight = (latFactor * 0.7 + lngFactor * 0.3) * 3; // 0 to 3 meters
  const randomFactor = 0.7 + Math.random() * 0.6; // 0.7 to 1.3
  
  const waveHeight = Math.round(baseHeight * randomFactor * 10) / 10; // Round to 1 decimal
  
  // Generate a realistic wave direction based on longitude
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const directionIndex = Math.floor(((lng + 180) % 360) / 45);
  const waveDirection = directions[directionIndex];
  
  // Wave period typically between 4s (choppy) and 14s (long period swells)
  const wavePeriod = Math.round((4 + (latFactor * 10)) * 10) / 10;
  
  return {
    height: waveHeight,
    direction: waveDirection,
    period: wavePeriod
  };
};

// Get current weather for a specific location
export const getSpotWeather = async (lat: number, lng: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('Weather data fetch failed');
    }
    
    const data = await response.json();
    
    // Convert wind speed from m/s to knots (1 m/s = 1.94384 knots)
    const windSpeedKnots = data.wind.speed * 1.94384;
    
    // Get simulated wave data
    const waveData = simulateWaveData(lat, lng);
    
    return {
      temperature: Math.round(data.main.temp),
      windSpeed: Math.round(windSpeedKnots * 10) / 10, // Round to 1 decimal place
      icon: data.weather[0].icon,
      description: data.weather[0].description,
      waveHeight: waveData.height,
      waveDirection: waveData.direction
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Get 3-day forecast for a specific location
export const getSpotForecast = async (lat: number, lng: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('Forecast data fetch failed');
    }
    
    const data = await response.json();
    
    // Process forecast data to get one forecast per day
    // We'll take the forecast for 12:00 PM for each day
    const dailyForecasts = [];
    const processedDays = new Set();
    
    // Get current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    
    for (const forecast of data.list) {
      const forecastDate = new Date(forecast.dt * 1000);
      const forecastDay = forecastDate.getDate();
      
      // Skip current day
      if (forecastDay === currentDay) {
        continue;
      }
      
      // Only process each day once
      if (!processedDays.has(forecastDay) && forecastDate.getHours() >= 12 && forecastDate.getHours() <= 15) {
        processedDays.add(forecastDay);
        
        // Convert wind speed from m/s to knots
        const windSpeedKnots = forecast.wind.speed * 1.94384;
        
        // Get simulated wave data
        const waveData = simulateWaveData(lat, lng);
        
        dailyForecasts.push({
          day: forecastDate.toLocaleDateString('en-US', { weekday: 'short' }),
          temperature: Math.round(forecast.main.temp),
          windSpeed: Math.round(windSpeedKnots),
          icon: forecast.weather[0].icon,
          waveHeight: waveData.height,
          waveDirection: waveData.direction
        });
        
        // Only get 3 days of forecast
        if (dailyForecasts.length >= 3) {
          break;
        }
      }
    }
    
    return dailyForecasts;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};

export type WeatherData = Awaited<ReturnType<typeof getSpotWeather>>;

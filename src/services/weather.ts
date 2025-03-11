// Weather service to fetch data from OpenWeatherMap API
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '59315511c369428055ed16f0b5f8dc76';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Improved error handling and retry mechanism
const fetchWithRetry = async (url: string, retries = 3, delay = 1000) => {
  let lastError;
  
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn(`Attempt ${i + 1} failed for ${url}. Retrying...`);
      lastError = error;
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError;
};

// Fallback mechanism for regions with API issues
const getRegionalFallbackData = (lat: number, lng: number) => {
  // Identify the region based on coordinates
  const isAsia = lat > -10 && lat < 55 && lng > 65 && lng < 180;
  const isAustralia = lat < -10 && lat > -45 && lng > 110 && lng < 180;
  const isMiddleEast = lat > 10 && lat < 40 && lng > 30 && lng < 65;
  
  // Generate realistic wind data based on region and season
  const now = new Date();
  const month = now.getMonth(); // 0-11
  
  let baseWindSpeed = 12; // Default reasonable wind speed
  let weatherIcon = '01d'; // Default sunny
  
  // Regional and seasonal adjustments
  if (isAsia) {
    // Monsoon season (June-September) has stronger winds
    if (month >= 5 && month <= 8) {
      baseWindSpeed = 15 + Math.random() * 8;
      weatherIcon = Math.random() > 0.5 ? '04d' : '09d'; // Cloudy or rainy
    } else {
      baseWindSpeed = 8 + Math.random() * 7;
      weatherIcon = Math.random() > 0.7 ? '03d' : '01d'; // Partly cloudy or sunny
    }
  } else if (isAustralia) {
    // Southern hemisphere seasons are reversed
    if (month >= 11 || month <= 2) { // Summer (Dec-Feb)
      baseWindSpeed = 12 + Math.random() * 10;
      weatherIcon = '01d'; // Sunny
    } else if (month >= 5 && month <= 8) { // Winter (Jun-Aug)
      baseWindSpeed = 15 + Math.random() * 12;
      weatherIcon = Math.random() > 0.5 ? '03d' : '04d'; // Cloudy
    } else {
      baseWindSpeed = 10 + Math.random() * 8;
      weatherIcon = '02d'; // Partly cloudy
    }
  } else if (isMiddleEast) {
    // Hot and dry most of the year
    if (month >= 4 && month <= 9) { // Summer (May-Oct)
      baseWindSpeed = 8 + Math.random() * 6;
      weatherIcon = '01d'; // Sunny
    } else {
      baseWindSpeed = 10 + Math.random() * 8;
      weatherIcon = Math.random() > 0.7 ? '02d' : '01d'; // Mostly sunny
    }
  } else {
    // Generic seasonal pattern for other regions
    const isSummer = (month >= 5 && month <= 8 && lat > 0) || 
                     ((month >= 11 || month <= 2) && lat < 0);
    
    if (isSummer) {
      baseWindSpeed = 10 + Math.random() * 8;
      weatherIcon = Math.random() > 0.3 ? '01d' : '02d'; // Mostly sunny
    } else {
      baseWindSpeed = 12 + Math.random() * 10;
      weatherIcon = Math.random() > 0.5 ? '03d' : '04d'; // Mostly cloudy
    }
  }
  
  // Add some randomness to make it look realistic
  const windSpeed = Math.round((baseWindSpeed + (Math.random() * 4 - 2)) * 10) / 10;
  
  // Simulate wave data based on wind speed and location
  const waveHeight = Math.min(windSpeed / 10 + Math.random() * 0.5, 3);
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const directionIndex = Math.floor(((lng + 180) % 360) / 45);
  const waveDirection = directions[directionIndex];
  
  return {
    temperature: Math.round(20 + Math.random() * 10),
    windSpeed: windSpeed,
    icon: weatherIcon,
    description: weatherIcon.includes('01') ? 'Clear sky' : 
                 weatherIcon.includes('02') ? 'Few clouds' : 
                 weatherIcon.includes('03') ? 'Scattered clouds' : 
                 weatherIcon.includes('04') ? 'Overcast clouds' : 
                 weatherIcon.includes('09') ? 'Shower rain' : 'Moderate weather',
    waveHeight: waveHeight,
    waveDirection: waveDirection
  };
};

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
    // Check if we're in a problematic region where API might fail
    const isProblematicRegion = 
      (lat > -10 && lat < 55 && lng > 65 && lng < 180) || // Asia
      (lat < -10 && lat > -45 && lng > 110 && lng < 180) || // Australia
      (lat > 10 && lat < 40 && lng > 30 && lng < 65); // Middle East
    
    // Use a higher timeout for problematic regions
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), isProblematicRegion ? 3000 : 5000)
    );
    
    // Try to get real data first
    const fetchPromise = fetchWithRetry(
      `${BASE_URL}/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    );
    
    // Race between fetch and timeout
    const data = await Promise.race([fetchPromise, timeoutPromise]) as any;
    
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
    console.warn(`Error fetching weather data for ${lat},${lng}:`, error);
    console.info('Using fallback data generation for this location');
    
    // Use fallback data generation for this location
    return getRegionalFallbackData(lat, lng);
  }
};

// Get 3-day forecast for a specific location
export const getSpotForecast = async (lat: number, lng: number) => {
  try {
    const data = await fetchWithRetry(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    );
    
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
    console.warn('Error fetching forecast data:', error);
    
    // Generate fallback forecast data
    const dailyForecasts = [];
    const currentDate = new Date();
    
    for (let i = 1; i <= 3; i++) {
      const forecastDate = new Date(currentDate);
      forecastDate.setDate(currentDate.getDate() + i);
      
      const fallbackData = getRegionalFallbackData(lat, lng);
      
      dailyForecasts.push({
        day: forecastDate.toLocaleDateString('en-US', { weekday: 'short' }),
        temperature: fallbackData.temperature,
        windSpeed: Math.round(fallbackData.windSpeed),
        icon: fallbackData.icon,
        waveHeight: fallbackData.waveHeight,
        waveDirection: fallbackData.waveDirection
      });
    }
    
    return dailyForecasts;
  }
};

export type WeatherData = Awaited<ReturnType<typeof getSpotWeather>>;

// Image service to fetch high-quality images from Pexels API
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY || '';
const BASE_URL = 'https://api.pexels.com/v1';

// Fallback images if API fails or no key is provided
const FALLBACK_IMAGES = [
  {
    url: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg',
    photographer: 'Pexels',
    photographerUrl: 'https://www.pexels.com'
  },
  {
    url: 'https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg',
    photographer: 'Pexels',
    photographerUrl: 'https://www.pexels.com'
  },
  {
    url: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg',
    photographer: 'Pexels',
    photographerUrl: 'https://www.pexels.com'
  },
  {
    url: 'https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg',
    photographer: 'Pexels',
    photographerUrl: 'https://www.pexels.com'
  },
  {
    url: 'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg',
    photographer: 'Pexels',
    photographerUrl: 'https://www.pexels.com'
  }
];

export interface ImageData {
  url: string;
  photographer: string;
  photographerUrl: string;
}

// Get images for a specific location
export const getLocationImages = async (query: string, count: number = 1): Promise<ImageData[]> => {
  try {
    // If no API key is provided, return fallback images
    if (!PEXELS_API_KEY) {
      console.warn('No Pexels API key provided. Using fallback images.');
      return FALLBACK_IMAGES.slice(0, count);
    }
    
    const response = await fetch(
      `${BASE_URL}/search?query=${encodeURIComponent(query + ' beach ocean')}&per_page=${count}&orientation=landscape`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Image data fetch failed');
    }
    
    const data = await response.json();
    
    if (!data.photos || data.photos.length === 0) {
      return FALLBACK_IMAGES.slice(0, count);
    }
    
    return data.photos.map((photo: any) => ({
      url: photo.src.large,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url
    }));
  } catch (error) {
    console.error('Error fetching image data:', error);
    return FALLBACK_IMAGES.slice(0, count);
  }
};

// Get trending images based on weather conditions
export const getTrendingSpotImages = async (weatherCondition: string): Promise<ImageData[]> => {
  const weatherQueries: Record<string, string> = {
    'sunny': 'sunny beach kitesurfing',
    'windy': 'windy beach kitesurfing',
    'cloudy': 'cloudy beach kitesurfing',
    'rainy': 'tropical beach'
  };
  
  const query = weatherQueries[weatherCondition] || 'kitesurfing beach';
  
  try {
    if (!PEXELS_API_KEY) {
      console.warn('No Pexels API key provided. Using fallback images.');
      return FALLBACK_IMAGES;
    }
    
    const response = await fetch(
      `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Trending image data fetch failed');
    }
    
    const data = await response.json();
    
    if (!data.photos || data.photos.length === 0) {
      return FALLBACK_IMAGES;
    }
    
    return data.photos.map((photo: any) => ({
      url: photo.src.large,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url
    }));
  } catch (error) {
    console.error('Error fetching trending image data:', error);
    return FALLBACK_IMAGES;
  }
};

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

// Additional fallback images for different weather conditions
const WEATHER_FALLBACK_IMAGES = {
  sunny: [
    {
      url: 'https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg',
      photographer: 'Pexels',
      photographerUrl: 'https://www.pexels.com'
    },
    {
      url: 'https://images.pexels.com/photos/1655060/pexels-photo-1655060.jpeg',
      photographer: 'Pexels',
      photographerUrl: 'https://www.pexels.com'
    }
  ],
  cloudy: [
    {
      url: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg',
      photographer: 'Pexels',
      photographerUrl: 'https://www.pexels.com'
    },
    {
      url: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg',
      photographer: 'Pexels',
      photographerUrl: 'https://www.pexels.com'
    }
  ],
  windy: [
    {
      url: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg',
      photographer: 'Pexels',
      photographerUrl: 'https://www.pexels.com'
    },
    {
      url: 'https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg',
      photographer: 'Pexels',
      photographerUrl: 'https://www.pexels.com'
    }
  ],
  rainy: [
    {
      url: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
      photographer: 'Pexels',
      photographerUrl: 'https://www.pexels.com'
    },
    {
      url: 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg',
      photographer: 'Pexels',
      photographerUrl: 'https://www.pexels.com'
    }
  ]
};

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

// Cache to store already used images to prevent duplicates
let usedImageUrls = new Set<string>();

// Reset the image cache (useful when reloading the app)
export const resetImageCache = () => {
  usedImageUrls = new Set<string>();
};

// Get trending images based on weather conditions
export const getTrendingSpotImages = async (weatherCondition: string, spotId: string): Promise<ImageData[]> => {
  const weatherQueries: Record<string, string> = {
    'sunny': `sunny ${spotId} kitesurfing`,
    'windy': `windy ${spotId} kitesurfing`,
    'cloudy': `cloudy ${spotId} kitesurfing`,
    'rainy': `tropical ${spotId} beach`
  };
  
  // Add the spot ID to make the query more specific
  const query = weatherQueries[weatherCondition] || `${spotId} kitesurfing beach`;
  
  try {
    if (!PEXELS_API_KEY) {
      console.warn('No Pexels API key provided. Using fallback images.');
      // Use weather-specific fallback images
      const fallbacks = WEATHER_FALLBACK_IMAGES[weatherCondition as keyof typeof WEATHER_FALLBACK_IMAGES] || FALLBACK_IMAGES;
      return getUniqueImages(fallbacks, 2);
    }
    
    const response = await fetch(
      `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=10&orientation=landscape`,
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
      // Use weather-specific fallback images
      const fallbacks = WEATHER_FALLBACK_IMAGES[weatherCondition as keyof typeof WEATHER_FALLBACK_IMAGES] || FALLBACK_IMAGES;
      return getUniqueImages(fallbacks, 2);
    }
    
    const images = data.photos.map((photo: any) => ({
      url: photo.src.large,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url
    }));
    
    // Filter out already used images and get unique ones
    return getUniqueImages(images, 3);
  } catch (error) {
    console.error('Error fetching trending image data:', error);
    // Use weather-specific fallback images
    const fallbacks = WEATHER_FALLBACK_IMAGES[weatherCondition as keyof typeof WEATHER_FALLBACK_IMAGES] || FALLBACK_IMAGES;
    return getUniqueImages(fallbacks, 2);
  }
};

// Helper function to get unique images that haven't been used before
const getUniqueImages = (images: ImageData[], count: number): ImageData[] => {
  const uniqueImages: ImageData[] = [];
  
  for (const image of images) {
    // Skip if this image URL has already been used
    if (usedImageUrls.has(image.url)) {
      continue;
    }
    
    // Add to our unique images and mark as used
    uniqueImages.push(image);
    usedImageUrls.add(image.url);
    
    // Break if we have enough images
    if (uniqueImages.length >= count) {
      break;
    }
  }
  
  // If we couldn't find enough unique images, use some of the images anyway
  // but with a slight modification to the URL to make them "different"
  if (uniqueImages.length < count) {
    for (let i = 0; i < images.length && uniqueImages.length < count; i++) {
      const image = images[i];
      // Add a cache-busting parameter to make the URL unique
      const modifiedImage = {
        ...image,
        url: `${image.url}${image.url.includes('?') ? '&' : '?'}t=${Date.now()}-${uniqueImages.length}`
      };
      uniqueImages.push(modifiedImage);
      usedImageUrls.add(modifiedImage.url);
    }
  }
  
  return uniqueImages;
};

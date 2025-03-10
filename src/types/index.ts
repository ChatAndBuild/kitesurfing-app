export interface KiteSpot {
  id: string;
  name: string;
  location: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  bestMonths: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  imageUrl: string;
  dynamicImages?: {
    url: string;
    photographer: string;
    photographerUrl: string;
  }[];
  trending?: boolean;
  waveInfo?: {
    averageHeight: number; // in meters
    direction: string;
    consistency: 'low' | 'medium' | 'high';
    type: 'flat' | 'choppy' | 'small' | 'medium' | 'large';
  };
  isBeginnerFriendly?: boolean;
  isHiddenGem?: boolean;
  specialFeature?: string;
  region: Region;
  // New fields for expanded card information
  localInfo?: {
    languages?: string[];
    currency?: string;
    timeZone?: string;
    funFact?: string;
    localTips?: string;
    bestTimeToVisit?: string;
    localFood?: string;
    visaRequirements?: string;
  };
}

export type Region = 
  | 'Europe' 
  | 'North America' 
  | 'South America' 
  | 'Africa' 
  | 'Asia' 
  | 'Oceania' 
  | 'Middle East';

export interface WeatherCondition {
  temperature: number;
  windSpeed: number;
  icon: string;
  description: string;
  waveHeight?: number; // in meters
  waveDirection?: string;
}

export interface TrendingSpot {
  spotId: string;
  windScore: number;
  weatherCondition: string;
}

export interface WaveData {
  height: number; // in meters
  direction: string;
  period: number; // in seconds
}

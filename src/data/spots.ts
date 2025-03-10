import { KiteSpot } from '../types';

export const kitespots: KiteSpot[] = [
  {
    id: 'tarifa-spain',
    name: 'Tarifa',
    location: 'Spain',
    description: 'Known as the wind capital of Europe, Tarifa offers consistent strong winds and a variety of spots suitable for all levels.',
    difficulty: 'intermediate',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    coordinates: {
      lat: 36.0143,
      lng: -5.6044
    },
    imageUrl: 'https://images.unsplash.com/photo-1621629057099-37c788d9cec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    waveInfo: {
      averageHeight: 1.2,
      direction: 'East',
      consistency: 'high',
      type: 'medium'
    }
  },
  {
    id: 'cabarete-dr',
    name: 'Cabarete',
    location: 'Dominican Republic',
    description: 'Cabarete Bay is famous for its afternoon thermal winds and warm water, making it a perfect spot for kitesurfing year-round.',
    difficulty: 'beginner',
    bestMonths: ['January', 'February', 'March', 'June', 'July', 'August'],
    coordinates: {
      lat: 19.7667,
      lng: -70.4167
    },
    imageUrl: 'https://images.unsplash.com/photo-1559288972-9c97c2e362b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.8,
      direction: 'Northeast',
      consistency: 'medium',
      type: 'small'
    }
  },
  {
    id: 'maui-hawaii',
    name: 'Kite Beach, Maui',
    location: 'Hawaii, USA',
    description: 'Maui\'s north shore offers world-class kitesurfing conditions with consistent trade winds and beautiful scenery.',
    difficulty: 'advanced',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: 20.9340,
      lng: -156.3582
    },
    imageUrl: 'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    waveInfo: {
      averageHeight: 2.0,
      direction: 'Northwest',
      consistency: 'high',
      type: 'large'
    }
  },
  {
    id: 'cape-town-sa',
    name: 'Bloubergstrand',
    location: 'Cape Town, South Africa',
    description: 'Famous for its strong, consistent winds and stunning views of Table Mountain, Cape Town is a kitesurfing paradise.',
    difficulty: 'expert',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: -33.8088,
      lng: 18.4702
    },
    imageUrl: 'https://images.unsplash.com/photo-1576697977242-0518e607ba0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    waveInfo: {
      averageHeight: 2.5,
      direction: 'Southwest',
      consistency: 'high',
      type: 'large'
    }
  },
  {
    id: 'zanzibar-tanzania',
    name: 'Paje Beach',
    location: 'Zanzibar, Tanzania',
    description: 'Crystal clear waters, consistent winds, and a vast shallow lagoon make Paje Beach a kitesurfer\'s dream.',
    difficulty: 'intermediate',
    bestMonths: ['December', 'January', 'February', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: -6.2667,
      lng: 39.5333
    },
    imageUrl: 'https://images.unsplash.com/photo-1517627043994-d62e618f55eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    waveInfo: {
      averageHeight: 0.5,
      direction: 'East',
      consistency: 'medium',
      type: 'flat'
    }
  },
  // New beginner-friendly spots
  {
    id: 'lo-stagnone-italy',
    name: 'Lo Stagnone',
    location: 'Sicily, Italy',
    description: 'A shallow lagoon with waist-deep water for over 1km, making it one of the safest places in the world to learn kitesurfing.',
    difficulty: 'beginner',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: 37.8833,
      lng: 12.4333
    },
    imageUrl: 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.2,
      direction: 'North',
      consistency: 'medium',
      type: 'flat'
    }
  },
  {
    id: 'dakhla-morocco',
    name: 'Dakhla Lagoon',
    location: 'Morocco',
    description: 'A stunning flat water lagoon with reliable winds and shallow water, perfect for beginners and freestyle riders.',
    difficulty: 'beginner',
    bestMonths: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: 23.7136,
      lng: -15.9350
    },
    imageUrl: 'https://images.pexels.com/photos/1655060/pexels-photo-1655060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.3,
      direction: 'Northwest',
      consistency: 'high',
      type: 'flat'
    }
  },
  {
    id: 'kalpitiya-srilanka',
    name: 'Kalpitiya',
    location: 'Sri Lanka',
    description: 'A kitesurfing paradise with a large shallow lagoon and consistent winds, ideal for beginners and freestylers.',
    difficulty: 'beginner',
    bestMonths: ['May', 'June', 'July', 'August', 'December', 'January', 'February'],
    coordinates: {
      lat: 8.2333,
      lng: 79.7667
    },
    imageUrl: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.4,
      direction: 'Southwest',
      consistency: 'medium',
      type: 'small'
    }
  },
  {
    id: 'cumbuco-brazil',
    name: 'Cumbuco',
    location: 'Brazil',
    description: 'Consistent cross-shore winds, warm water, and a mix of flat water and small waves make this an ideal spot for beginners.',
    difficulty: 'beginner',
    bestMonths: ['August', 'September', 'October', 'November', 'December'],
    coordinates: {
      lat: -3.6167,
      lng: -38.7333
    },
    imageUrl: 'https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.7,
      direction: 'East',
      consistency: 'high',
      type: 'small'
    }
  },
  // Hidden Gems
  {
    id: 'dahab-egypt',
    name: 'Dahab',
    location: 'Egypt',
    description: 'A laid-back coastal town offering reliable winds, flat water, and stunning desert landscapes. Perfect for freestyle and beginners.',
    difficulty: 'intermediate',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: 28.5091,
      lng: 34.5136
    },
    imageUrl: 'https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Unique combination of desert landscape and crystal clear waters with the Blue Hole nearby for diving on no-wind days.',
    waveInfo: {
      averageHeight: 0.3,
      direction: 'North',
      consistency: 'high',
      type: 'flat'
    }
  },
  {
    id: 'mui-ne-vietnam',
    name: 'Mui Ne',
    location: 'Vietnam',
    description: 'A hidden Asian kitesurfing paradise with consistent side-shore winds and a mix of flat water and wave spots.',
    difficulty: 'intermediate',
    bestMonths: ['November', 'December', 'January', 'February', 'March', 'April'],
    coordinates: {
      lat: 10.9330,
      lng: 108.2869
    },
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Unique red and white sand dunes nearby for sandboarding adventures when you need a break from kitesurfing.',
    waveInfo: {
      averageHeight: 1.0,
      direction: 'Northeast',
      consistency: 'medium',
      type: 'small'
    }
  },
  {
    id: 'el-cuyo-mexico',
    name: 'El Cuyo',
    location: 'Mexico',
    description: 'A secluded spot on Mexico\'s Yucatan Peninsula with butter-flat water, consistent winds, and virtually no crowds.',
    difficulty: 'beginner',
    bestMonths: ['December', 'January', 'February', 'March', 'April', 'May'],
    coordinates: {
      lat: 21.5147,
      lng: -87.6879
    },
    imageUrl: 'https://images.pexels.com/photos/1268865/pexels-photo-1268865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    isHiddenGem: true,
    specialFeature: 'Pristine beaches with pink flamingos nearby and virtually no crowds even during peak season.',
    waveInfo: {
      averageHeight: 0.2,
      direction: 'East',
      consistency: 'high',
      type: 'flat'
    }
  },
  {
    id: 'vela-de-oro-spain',
    name: 'Vela de Oro',
    location: 'Fuerteventura, Spain',
    description: 'A secluded bay on the eastern coast of Fuerteventura with consistent trade winds and stunning volcanic landscapes.',
    difficulty: 'advanced',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: 28.7396,
      lng: -13.8488
    },
    imageUrl: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Dramatic volcanic landscapes and access only by 4x4 vehicles keeps crowds away, offering a private kitesurfing experience.',
    waveInfo: {
      averageHeight: 1.5,
      direction: 'North',
      consistency: 'high',
      type: 'medium'
    }
  },
  {
    id: 'penghu-taiwan',
    name: 'Penghu Islands',
    location: 'Taiwan',
    description: 'An archipelago of 90 islands with reliable winter winds, flat water, and a unique cultural experience away from the typical kite destinations.',
    difficulty: 'intermediate',
    bestMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: 23.5711,
      lng: 119.5793
    },
    imageUrl: 'https://images.pexels.com/photos/1320645/pexels-photo-1320645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Ancient basalt columns and traditional stone fishing weirs create a unique backdrop for kitesurfing sessions.',
    waveInfo: {
      averageHeight: 0.8,
      direction: 'Northeast',
      consistency: 'medium',
      type: 'choppy'
    }
  }
];

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
    // Changed from Unsplash to Pexels for better mobile compatibility
    imageUrl: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg',
    waveInfo: {
      averageHeight: 1.2,
      direction: 'East',
      consistency: 'high',
      type: 'medium'
    },
    region: 'Europe'
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
    },
    region: 'North America'
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
    },
    region: 'North America'
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
    // Changed from Unsplash to Pexels for better mobile compatibility
    imageUrl: 'https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg',
    waveInfo: {
      averageHeight: 2.5,
      direction: 'Southwest',
      consistency: 'high',
      type: 'large'
    },
    region: 'Africa'
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
    },
    region: 'Africa'
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
    // Changed to a unique image for Lo Stagnone
    imageUrl: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.2,
      direction: 'North',
      consistency: 'medium',
      type: 'flat'
    },
    region: 'Europe'
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
    },
    region: 'Africa'
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
    },
    region: 'Asia'
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
    },
    region: 'South America'
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
    },
    region: 'Middle East'
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
    },
    region: 'Asia'
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
    },
    region: 'North America'
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
    },
    region: 'Europe'
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
    },
    region: 'Asia'
  },
  // Australian Kitesurfing Spots
  {
    id: 'safety-bay-australia',
    name: 'Safety Bay',
    location: 'Western Australia',
    description: 'A world-class flat water spot with consistent strong sea breezes and a large shallow area perfect for freestyle tricks and progression.',
    difficulty: 'intermediate',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: -32.3064,
      lng: 115.7102
    },
    imageUrl: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.3,
      direction: 'Southwest',
      consistency: 'high',
      type: 'flat'
    },
    specialFeature: 'The "Pond" area offers butter-flat water in almost any wind condition, making it a freestyle paradise.',
    region: 'Oceania'
  },
  {
    id: 'palm-beach-australia',
    name: 'Palm Beach',
    location: 'Queensland, Australia',
    description: 'Located on the Gold Coast, Palm Beach offers reliable sea breezes, warm water, and a mix of flat water and wave riding opportunities.',
    difficulty: 'beginner',
    bestMonths: ['September', 'October', 'November', 'December', 'January', 'February'],
    coordinates: {
      lat: -28.1167,
      lng: 153.4667
    },
    imageUrl: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 1.0,
      direction: 'East',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Oceania'
  },
  {
    id: 'port-douglas-australia',
    name: 'Port Douglas',
    location: 'Queensland, Australia',
    description: 'Tropical kitesurfing paradise with access to the Great Barrier Reef. Winter trade winds provide perfect conditions for all levels.',
    difficulty: 'intermediate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: -16.4834,
      lng: 145.4653
    },
    imageUrl: 'https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.8,
      direction: 'Southeast',
      consistency: 'high',
      type: 'small'
    },
    specialFeature: 'Kite with the backdrop of rainforest meeting reef, and the possibility to spot marine life while riding.',
    region: 'Oceania'
  },
  {
    id: 'lancelin-australia',
    name: 'Lancelin',
    location: 'Western Australia',
    description: 'Famous for its massive sand dunes and consistent strong winds, Lancelin offers both flat water lagoon and wave riding options.',
    difficulty: 'advanced',
    bestMonths: ['December', 'January', 'February', 'March'],
    coordinates: {
      lat: -31.0226,
      lng: 115.3301
    },
    imageUrl: 'https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.5,
      direction: 'Southwest',
      consistency: 'high',
      type: 'medium'
    },
    region: 'Oceania'
  },
  {
    id: 'dolls-point-australia',
    name: 'Dolls Point',
    location: 'Sydney, Australia',
    description: 'A popular urban kitesurfing spot in Botany Bay with reliable summer sea breezes and flat to choppy water conditions.',
    difficulty: 'beginner',
    bestMonths: ['November', 'December', 'January', 'February'],
    coordinates: {
      lat: -33.9917,
      lng: 151.1411
    },
    imageUrl: 'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.4,
      direction: 'Northeast',
      consistency: 'medium',
      type: 'choppy'
    },
    region: 'Oceania'
  },
  {
    id: 'lucky-bay-australia',
    name: 'Lucky Bay',
    location: 'Western Australia',
    description: 'A remote and pristine beach in Cape Le Grand National Park with crystal clear waters, white sand, and consistent winds.',
    difficulty: 'advanced',
    bestMonths: ['December', 'January', 'February', 'March'],
    coordinates: {
      lat: -33.9960,
      lng: 122.2310
    },
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Kangaroos often visit the beach, allowing for the unique experience of kitesurfing with Australia\'s iconic wildlife nearby.',
    waveInfo: {
      averageHeight: 1.2,
      direction: 'South',
      consistency: 'medium',
      type: 'medium'
    },
    region: 'Oceania'
  },
  // South American Kitesurfing Spots
  {
    id: 'jericoacoara-brazil',
    name: 'Jericoacoara',
    location: 'Brazil',
    description: 'A kitesurfing paradise with consistent trade winds, flat water lagoons, and wave spots, all surrounded by stunning sand dunes.',
    difficulty: 'intermediate',
    bestMonths: ['August', 'September', 'October', 'November', 'December', 'January'],
    coordinates: {
      lat: -2.7956,
      lng: -40.5137
    },
    imageUrl: 'https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.0,
      direction: 'East',
      consistency: 'high',
      type: 'small'
    },
    specialFeature: 'Famous for its sunset dune gatherings and vibrant kitesurfing community.',
    region: 'South America'
  },
  {
    id: 'punta-tretino-argentina',
    name: 'Punta Tretino',
    location: 'Argentina',
    description: 'A hidden gem in Patagonia with strong, consistent winds and beautiful mountain backdrops. Perfect for advanced riders seeking adventure.',
    difficulty: 'advanced',
    bestMonths: ['December', 'January', 'February', 'March'],
    coordinates: {
      lat: -42.7683,
      lng: -65.0458
    },
    imageUrl: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    waveInfo: {
      averageHeight: 1.8,
      direction: 'Southwest',
      consistency: 'high',
      type: 'medium'
    },
    specialFeature: 'Ride with views of Patagonian wildlife including sea lions, penguins, and whales in season.',
    region: 'South America'
  },
  {
    id: 'mancora-peru',
    name: 'Mancora',
    location: 'Peru',
    description: 'A year-round kitesurfing destination with warm water, consistent side-onshore winds, and a mix of flat water and wave conditions.',
    difficulty: 'beginner',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
    coordinates: {
      lat: -4.1055,
      lng: -81.0583
    },
    imageUrl: 'https://images.pexels.com/photos/1268865/pexels-photo-1268865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.8,
      direction: 'Southwest',
      consistency: 'medium',
      type: 'small'
    },
    region: 'South America'
  },
  // New Zealand Kitesurfing Spots
  {
    id: 'raglan-newzealand',
    name: 'Raglan',
    location: 'New Zealand',
    description: 'Famous for its world-class surf breaks, Raglan also offers excellent kitesurfing conditions with consistent winds and stunning scenery.',
    difficulty: 'intermediate',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: -37.8274,
      lng: 174.8746
    },
    imageUrl: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.5,
      direction: 'West',
      consistency: 'medium',
      type: 'medium'
    },
    region: 'Oceania'
  },
  {
    id: 'tahunanui-newzealand',
    name: 'Tahunanui Beach',
    location: 'Nelson, New Zealand',
    description: 'A sheltered beach with reliable thermal winds and flat to small chop water conditions, perfect for all levels of kitesurfers.',
    difficulty: 'beginner',
    bestMonths: ['December', 'January', 'February', 'March'],
    coordinates: {
      lat: -41.2809,
      lng: 173.2473
    },
    imageUrl: 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.5,
      direction: 'Northeast',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Oceania'
  },
  // Japanese Kitesurfing Spots
  {
    id: 'izu-japan',
    name: 'Izu Peninsula',
    location: 'Japan',
    description: 'A scenic kitesurfing destination with thermal winds, clear waters, and Mount Fuji views on clear days.',
    difficulty: 'intermediate',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    coordinates: {
      lat: 34.9167,
      lng: 139.0833
    },
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.0,
      direction: 'South',
      consistency: 'medium',
      type: 'choppy'
    },
    specialFeature: 'Kitesurf with views of iconic Mount Fuji on clear days.',
    region: 'Asia'
  },
  {
    id: 'niijima-japan',
    name: 'Niijima Island',
    location: 'Tokyo, Japan',
    description: 'A volcanic island with consistent winds, beautiful beaches, and natural hot springs to relax in after kitesurfing sessions.',
    difficulty: 'advanced',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    coordinates: {
      lat: 34.3667,
      lng: 139.2667
    },
    imageUrl: 'https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    waveInfo: {
      averageHeight: 1.8,
      direction: 'East',
      consistency: 'high',
      type: 'medium'
    },
    specialFeature: 'Natural hot springs (onsen) provide the perfect relaxation after a day of kitesurfing.',
    region: 'Asia'
  },
  {
    id: 'ishigaki-japan',
    name: 'Ishigaki Island',
    location: 'Okinawa, Japan',
    description: 'Tropical paradise with warm water year-round, consistent trade winds, and stunning coral reefs for snorkeling on no-wind days.',
    difficulty: 'beginner',
    bestMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
    coordinates: {
      lat: 24.3400,
      lng: 124.1550
    },
    imageUrl: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.6,
      direction: 'East',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Asia'
  },
  // Indonesian Kitesurfing Spots
  {
    id: 'sanur-bali',
    name: 'Sanur',
    location: 'Bali, Indonesia',
    description: 'A popular kitesurfing destination in Bali with consistent trade winds during the dry season and a reef-protected lagoon.',
    difficulty: 'intermediate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: -8.6787,
      lng: 115.2653
    },
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.7,
      direction: 'Southeast',
      consistency: 'high',
      type: 'small'
    },
    specialFeature: 'Kitesurf with views of Mount Agung volcano and easy access to Bali\'s cultural attractions.',
    region: 'Asia'
  },
  {
    id: 'kaliantan-lombok',
    name: 'Kaliantan',
    location: 'Lombok, Indonesia',
    description: 'A pristine beach on the southeast coast of Lombok with consistent cross-onshore winds and a mix of flat water and wave conditions.',
    difficulty: 'advanced',
    bestMonths: ['May', 'June', 'July', 'August', 'September', 'October'],
    coordinates: {
      lat: -8.8833,
      lng: 116.4667
    },
    imageUrl: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    waveInfo: {
      averageHeight: 1.5,
      direction: 'Southeast',
      consistency: 'high',
      type: 'medium'
    },
    specialFeature: 'Less crowded than Bali with pristine beaches and traditional Sasak villages nearby.',
    region: 'Asia'
  },
  {
    id: 'bintan-island',
    name: 'Bintan Island',
    location: 'Riau Islands, Indonesia',
    description: 'A convenient kitesurfing destination near Singapore with reliable monsoon winds and a variety of beach and lagoon spots.',
    difficulty: 'beginner',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: 1.0619,
      lng: 104.4686
    },
    imageUrl: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.5,
      direction: 'Northeast',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Asia'
  },
  {
    id: 'pantai-boom-banyuwangi',
    name: 'Pantai Boom',
    location: 'Banyuwangi, Indonesia',
    description: 'An emerging kitesurfing spot in East Java with strong, consistent winds and stunning views of Bali\'s Mount Agung across the strait.',
    difficulty: 'intermediate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: -8.2104,
      lng: 114.3882
    },
    imageUrl: 'https://images.pexels.com/photos/1268865/pexels-photo-1268865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    waveInfo: {
      averageHeight: 0.8,
      direction: 'Southeast',
      consistency: 'high',
      type: 'choppy'
    },
    specialFeature: 'Gateway to the Ijen Crater with its famous blue fire and nearby national parks with pristine nature.',
    region: 'Asia'
  },
  {
    id: 'mentawai-islands',
    name: 'Mentawai Islands',
    location: 'West Sumatra, Indonesia',
    description: 'World-famous for surfing, the Mentawai Islands also offer excellent kitesurfing conditions during the monsoon season with uncrowded spots.',
    difficulty: 'expert',
    bestMonths: ['November', 'December', 'January', 'February'],
    coordinates: {
      lat: -1.4263,
      lng: 98.9257
    },
    imageUrl: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    waveInfo: {
      averageHeight: 2.0,
      direction: 'Northwest',
      consistency: 'medium',
      type: 'large'
    },
    specialFeature: 'Remote tropical paradise with world-class waves and unique indigenous culture.',
    region: 'Asia'
  },
  // Middle Eastern Kitesurfing Spots
  {
    id: 'soma-bay-egypt',
    name: 'Soma Bay',
    location: 'Egypt',
    description: 'A premium kitesurfing destination on the Red Sea with reliable thermal winds, flat shallow water, and luxurious resorts.',
    difficulty: 'beginner',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    coordinates: {
      lat: 26.8439,
      lng: 33.9587
    },
    imageUrl: 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.3,
      direction: 'North',
      consistency: 'high',
      type: 'flat'
    },
    specialFeature: 'Crystal clear waters with vibrant coral reefs for snorkeling on no-wind days.',
    region: 'Middle East'
  },
  {
    id: 'el-gouna-egypt',
    name: 'El Gouna',
    location: 'Egypt',
    description: 'A sophisticated resort town with multiple kitesurfing spots, consistent winds, and a vibrant nightlife scene.',
    difficulty: 'intermediate',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    coordinates: {
      lat: 27.3954,
      lng: 33.6750
    },
    imageUrl: 'https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.5,
      direction: 'North',
      consistency: 'high',
      type: 'small'
    },
    specialFeature: 'A network of lagoons and canals creates multiple kitesurfing spots with different conditions in one location.',
    region: 'Middle East'
  },
  {
    id: 'masirah-island-oman',
    name: 'Masirah Island',
    location: 'Oman',
    description: 'A remote island with world-class wind conditions, uncrowded beaches, and a raw, untouched natural environment.',
    difficulty: 'advanced',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: 20.4167,
      lng: 58.8333
    },
    imageUrl: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    waveInfo: {
      averageHeight: 1.5,
      direction: 'Southwest',
      consistency: 'high',
      type: 'medium'
    },
    specialFeature: 'One of the most reliable wind spots in the world with monsoon winds creating perfect conditions for over 90% of the summer.',
    region: 'Middle East'
  },
  {
    id: 'dukhan-qatar',
    name: 'Dukhan Beach',
    location: 'Qatar',
    description: 'A secluded kitesurfing spot on Qatar\'s western coast with reliable winter winds and flat water conditions.',
    difficulty: 'intermediate',
    bestMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: 25.4230,
      lng: 50.7873
    },
    imageUrl: 'https://images.pexels.com/photos/1268865/pexels-photo-1268865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.4,
      direction: 'Northwest',
      consistency: 'medium',
      type: 'flat'
    },
    specialFeature: 'Kitesurf against the backdrop of Qatar\'s modern skyline with virtually no crowds.',
    region: 'Middle East'
  },
  {
    id: 'ras-sudr-egypt',
    name: 'Ras Sudr',
    location: 'Egypt',
    description: 'A windy spot on the Gulf of Suez with shallow, flat water and consistent thermal winds, perfect for freestyle and beginners.',
    difficulty: 'beginner',
    bestMonths: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    coordinates: {
      lat: 29.6000,
      lng: 32.7167
    },
    imageUrl: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.2,
      direction: 'North',
      consistency: 'high',
      type: 'flat'
    },
    specialFeature: 'Just a few hours from Cairo, making it a perfect weekend getaway for kitesurfers.',
    region: 'Middle East'
  },
  {
    id: 'kite-beach-dubai',
    name: 'Kite Beach',
    location: 'Dubai, UAE',
    description: 'An urban kitesurfing beach with the iconic Dubai skyline as a backdrop, offering decent wind conditions during winter months.',
    difficulty: 'intermediate',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: 25.1412,
      lng: 55.1894
    },
    imageUrl: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.6,
      direction: 'Northwest',
      consistency: 'medium',
      type: 'small'
    },
    specialFeature: 'Kitesurf with views of the Burj Al Arab and Dubai\'s futuristic skyline.',
    region: 'Middle East'
  },
  {
    id: 'jeddah-saudi',
    name: 'Jeddah Corniche',
    location: 'Saudi Arabia',
    description: 'An emerging kitesurfing destination with thermal winds and warm waters of the Red Sea, now more accessible as the country opens to tourism.',
    difficulty: 'intermediate',
    bestMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
    coordinates: {
      lat: 21.5433,
      lng: 39.1728
    },
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    waveInfo: {
      averageHeight: 0.7,
      direction: 'Northwest',
      consistency: 'medium',
      type: 'choppy'
    },
    specialFeature: 'Experience the unique blend of traditional culture and modern development in Saudi Arabia\'s most liberal city.',
    region: 'Middle East'
  }
];

// Helper function to get all available regions
export const getAvailableRegions = (): string[] => {
  const regions = new Set<string>();
  kitespots.forEach(spot => regions.add(spot.region));
  return Array.from(regions).sort();
};

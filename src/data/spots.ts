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
    region: 'Europe',
    localInfo: {
      languages: ['Spanish', 'English (widely spoken in tourist areas)'],
      currency: 'Euro (€)',
      timeZone: 'Central European Time (CET/CEST)',
      funFact: 'Tarifa is the southernmost point of continental Europe and is only 14km from Africa across the Strait of Gibraltar.',
      localTips: 'The wind is typically stronger in the afternoon. Morning sessions are usually calmer and perfect for beginners.',
      bestTimeToVisit: 'July and August offer the most reliable winds, but also the biggest crowds. June and September provide great conditions with fewer tourists.',
      localFood: 'Try the local "pescaíto frito" (fried fish) and Andalusian gazpacho after a day on the water.',
      visaRequirements: 'EU citizens don\'t need a visa. Most non-EU visitors can stay up to 90 days with a Schengen visa.'
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
    },
    region: 'North America',
    localInfo: {
      languages: ['Spanish', 'English (widely spoken in tourist areas)'],
      currency: 'Dominican Peso (DOP)',
      timeZone: 'Atlantic Standard Time (AST)',
      funFact: 'Cabarete was discovered as a kitesurfing destination in the 1980s and quickly became known as the "Kiteboarding Capital of the Caribbean".',
      localTips: 'The wind typically picks up around noon and continues until sunset. Mornings are perfect for SUP or surfing.',
      bestTimeToVisit: 'February to March offers the most consistent winds with pleasant temperatures.',
      localFood: 'Try the local "La Bandera" (rice, beans, and meat) or fresh seafood at beachfront restaurants.',
      visaRequirements: 'Most tourists can purchase a tourist card upon arrival, valid for 30 days.'
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
    },
    region: 'North America',
    localInfo: {
      languages: ['English', 'Hawaiian'],
      currency: 'US Dollar (USD)',
      timeZone: 'Hawaii-Aleutian Standard Time (HST)',
      funFact: 'Maui\'s Kanaha Beach (Kite Beach) has hosted numerous professional kitesurfing competitions and is where many pro riders train during the winter months.',
      localTips: 'The wind is typically strongest in the afternoon. Respect the local rules and right-of-way to avoid conflicts with the many riders.',
      bestTimeToVisit: 'May to September offers the most reliable trade winds.',
      localFood: 'Try local poke bowls, plate lunches, and shave ice for authentic Hawaiian flavors.',
      visaRequirements: 'As part of the USA, standard US visa requirements apply.'
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
    // Changed from Unsplash to Pexels for better mobile compatibility
    imageUrl: 'https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg',
    waveInfo: {
      averageHeight: 2.5,
      direction: 'Southwest',
      consistency: 'high',
      type: 'large'
    },
    region: 'Africa',
    localInfo: {
      languages: ['English', 'Afrikaans', 'Xhosa', 'Zulu'],
      currency: 'South African Rand (ZAR)',
      timeZone: 'South African Standard Time (SAST)',
      funFact: 'Cape Town\'s "Cape Doctor" is the local name for the strong south-easterly wind that blows through the region, clearing away pollution and providing perfect kitesurfing conditions.',
      localTips: 'The wind can be extremely strong (30+ knots) during peak season. Always take a smaller kite than you think you need.',
      bestTimeToVisit: 'December to February offers the most reliable winds, but it\'s also peak tourist season. November and March can be excellent with fewer crowds.',
      localFood: 'Try a traditional South African braai (barbecue) or bobotie (spiced minced meat with an egg-based topping).',
      visaRequirements: 'Many countries receive visa-free entry for up to 90 days, but check requirements before traveling.'
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
    },
    region: 'Africa',
    localInfo: {
      languages: ['Swahili', 'English (in tourist areas)'],
      currency: 'Tanzanian Shilling (TZS), US Dollar (USD) widely accepted',
      timeZone: 'East Africa Time (EAT)',
      funFact: 'Zanzibar was once the world\'s largest producer of cloves and was known as the "Spice Island".',
      localTips: 'Low tide creates a massive shallow lagoon perfect for beginners, but be aware of sea urchins. Wear booties!',
      bestTimeToVisit: 'December to February (Kaskazi winds) and June to September (Kuzi winds) offer the best conditions.',
      localFood: 'Try the local seafood, especially the grilled fish with Zanzibar spices and coconut rice.',
      visaRequirements: 'Most visitors need a visa, which can be obtained on arrival or in advance.'
    }
  },
  // Beginner-friendly spots
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
    region: 'Europe',
    localInfo: {
      languages: ['Italian', 'Sicilian', 'English (in tourist areas)'],
      currency: 'Euro (€)',
      timeZone: 'Central European Time (CET/CEST)',
      funFact: 'Lo Stagnone is part of a nature reserve that includes four islands, including Mozia, an ancient Phoenician settlement with archaeological ruins.',
      localTips: 'The lagoon is extremely shallow, so you can walk back if you get into trouble. Perfect for beginners!',
      bestTimeToVisit: 'June to August offers the most reliable thermal winds.',
      localFood: 'Try local Sicilian specialties like arancini (fried rice balls), cannoli, and fresh seafood pasta.',
      visaRequirements: 'EU citizens don\'t need a visa. Most non-EU visitors can stay up to 90 days with a Schengen visa.'
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
    },
    region: 'Africa',
    localInfo: {
      languages: ['Arabic', 'Berber', 'French', 'Spanish', 'English (in tourist areas)'],
      currency: 'Moroccan Dirham (MAD)',
      timeZone: 'Western European Time (WET)',
      funFact: 'Dakhla is located on a 40km long peninsula extending into the Atlantic Ocean, creating a massive lagoon with perfect flat water conditions.',
      localTips: 'The wind is typically strongest in the afternoon. Morning sessions are usually calmer.',
      bestTimeToVisit: 'April to August offers the most reliable winds.',
      localFood: 'Try traditional Moroccan tagine, couscous, and fresh seafood caught daily in the lagoon.',
      visaRequirements: 'Many countries receive visa-free entry for up to 90 days, but check requirements before traveling.'
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
    },
    region: 'Asia',
    localInfo: {
      languages: ['Sinhala', 'Tamil', 'English (widely spoken)'],
      currency: 'Sri Lankan Rupee (LKR)',
      timeZone: 'India Standard Time (IST)',
      funFact: 'Kalpitiya is one of the best places in the world to see spinner dolphins and sperm whales, which can often be spotted during boat trips.',
      localTips: 'The lagoon is perfect for beginners, while the ocean side offers waves for more advanced riders.',
      bestTimeToVisit: 'May to October for the southwest monsoon, December to March for the northeast monsoon.',
      localFood: 'Try local Sri Lankan curry and rice with fresh seafood, especially the lagoon prawns.',
      visaRequirements: 'Most visitors need an Electronic Travel Authorization (ETA) before arrival.'
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
    },
    region: 'South America',
    localInfo: {
      languages: ['Portuguese', 'English (in tourist areas)'],
      currency: 'Brazilian Real (BRL)',
      timeZone: 'Brasília Time (BRT)',
      funFact: 'Cumbuco is famous for its massive sand dunes where you can try sandboarding or dune buggy rides on no-wind days.',
      localTips: 'The wind is typically strongest from midday to late afternoon. Morning sessions are usually calmer.',
      bestTimeToVisit: 'August to December offers the most reliable winds.',
      localFood: 'Try local Brazilian dishes like moqueca (seafood stew), acarajé (deep-fried bean patties), and fresh açaí bowls.',
      visaRequirements: 'Many countries receive visa-free entry, but check requirements before traveling.'
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
    },
    region: 'Middle East',
    localInfo: {
      languages: ['Arabic', 'English (widely spoken in tourist areas)'],
      currency: 'Egyptian Pound (EGP)',
      timeZone: 'Eastern European Time (EET)',
      funFact: 'Dahab means "gold" in Arabic, named for its golden sandy beaches. It was originally a Bedouin fishing village before becoming a tourist destination.',
      localTips: 'The Blue Lagoon spot offers perfect flat water for freestyle tricks. Visit the famous Blue Hole for diving on no-wind days.',
      bestTimeToVisit: 'April to October offers the most reliable winds.',
      localFood: 'Try local Egyptian dishes like koshari (rice, pasta, and lentils), ful medames (fava beans), and fresh seafood.',
      visaRequirements: 'Most visitors need a visa, which can be obtained on arrival or in advance.'
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
    },
    region: 'Asia',
    localInfo: {
      languages: ['Vietnamese', 'English (in tourist areas)'],
      currency: 'Vietnamese Dong (VND)',
      timeZone: 'Indochina Time (ICT)',
      funFact: 'Mui Ne is known as the "desert of Vietnam" due to its unique red and white sand dunes that create an otherworldly landscape.',
      localTips: 'The morning typically offers the best wind conditions. Visit the famous sand dunes for sunrise or sunset.',
      bestTimeToVisit: 'November to April during the northeast monsoon season.',
      localFood: 'Try local Vietnamese dishes like fresh spring rolls, pho, and seafood hot pot with the day\'s catch.',
      visaRequirements: 'Most visitors need a visa, which can be obtained on arrival (with pre-approval) or in advance.'
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
    },
    region: 'North America',
    localInfo: {
      languages: ['Spanish', 'English (limited in some areas)'],
      currency: 'Mexican Peso (MXN)',
      timeZone: 'Eastern Standard Time (EST)',
      funFact: 'El Cuyo is part of the Río Lagartos Biosphere Reserve, home to thousands of flamingos and over 300 bird species.',
      localTips: 'The wind typically picks up around noon. The shallow water extends far from shore, making it perfect for beginners.',
      bestTimeToVisit: 'February to May offers the most reliable winds with fewer tourists.',
      localFood: 'Try local Yucatecan specialties like cochinita pibil (slow-roasted pork), salbutes (fried tortillas with toppings), and fresh ceviche.',
      visaRequirements: 'Many countries receive visa-free entry for up to 180 days, but check requirements before traveling.'
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
    },
    region: 'Europe',
    localInfo: {
      languages: ['Spanish', 'English (widely spoken in tourist areas)'],
      currency: 'Euro (€)',
      timeZone: 'Western European Time (WET)',
      funFact: 'Fuerteventura is the oldest island in the Canary archipelago, formed by volcanic eruptions over 20 million years ago.',
      localTips: 'A 4x4 vehicle is recommended to access this remote spot. Bring plenty of water and supplies as there are no facilities nearby.',
      bestTimeToVisit: 'May to September offers the most reliable trade winds.',
      localFood: 'Try local Canarian specialties like papas arrugadas (wrinkled potatoes) with mojo sauce and fresh fish.',
      visaRequirements: 'EU citizens don\'t need a visa. Most non-EU visitors can stay up to 90 days with a Schengen visa.'
    }
  },
  // NEW SPOTS - MIDDLE EAST
  {
    id: 'ras-sudr-egypt',
    name: 'Ras Sudr',
    location: 'Egypt',
    description: 'A windy paradise on the Gulf of Suez with shallow, flat water and consistent thermal winds, perfect for freestyle and beginners.',
    difficulty: 'beginner',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: 29.6026,
      lng: 32.7144
    },
    imageUrl: 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.2,
      direction: 'North',
      consistency: 'high',
      type: 'flat'
    },
    region: 'Middle East',
    localInfo: {
      languages: ['Arabic', 'English (in tourist areas)'],
      currency: 'Egyptian Pound (EGP)',
      timeZone: 'Eastern European Time (EET)',
      funFact: 'Ras Sudr is known as "The Windiest Place in Egypt" and has hosted numerous kitesurfing competitions.',
      localTips: 'The wind is typically strongest in the afternoon. The shallow water makes it perfect for beginners and learning new tricks.',
      bestTimeToVisit: 'May to September offers the most reliable thermal winds.',
      localFood: 'Try local Egyptian seafood dishes and traditional mezze platters.',
      visaRequirements: 'Most visitors need a visa, which can be obtained on arrival or in advance.'
    }
  },
  {
    id: 'masirah-island-oman',
    name: 'Masirah Island',
    location: 'Oman',
    description: 'A hidden gem in the Arabian Sea with consistent monsoon winds and uncrowded beaches, offering both flat water and wave riding.',
    difficulty: 'intermediate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: 20.4333,
      lng: 58.8000
    },
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Remote island with pristine beaches, sea turtles nesting sites, and virtually no crowds even during peak season.',
    waveInfo: {
      averageHeight: 1.5,
      direction: 'Southwest',
      consistency: 'high',
      type: 'medium'
    },
    region: 'Middle East',
    localInfo: {
      languages: ['Arabic', 'English (limited)'],
      currency: 'Omani Rial (OMR)',
      timeZone: 'Gulf Standard Time (GST)',
      funFact: 'Masirah Island is a major nesting site for endangered loggerhead sea turtles, with thousands coming ashore each year.',
      localTips: 'The southwest monsoon (Khareef) brings strong winds from June to September. Bring all necessary equipment as there are limited shops.',
      bestTimeToVisit: 'June to August offers the strongest and most consistent winds.',
      localFood: 'Try local Omani dishes like shuwa (slow-cooked lamb) and majboos (spiced rice with meat).',
      visaRequirements: 'Most visitors need an e-visa, which must be obtained in advance.'
    }
  },
  {
    id: 'jeddah-saudi-arabia',
    name: 'Jeddah',
    location: 'Saudi Arabia',
    description: 'An emerging kitesurfing destination on the Red Sea with warm water, consistent winds, and modern facilities.',
    difficulty: 'intermediate',
    bestMonths: ['January', 'February', 'March', 'April', 'October', 'November', 'December'],
    coordinates: {
      lat: 21.5433,
      lng: 39.1728
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.8,
      direction: 'Northwest',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Middle East',
    localInfo: {
      languages: ['Arabic', 'English (widely spoken in tourist areas)'],
      currency: 'Saudi Riyal (SAR)',
      timeZone: 'Arabia Standard Time (AST)',
      funFact: 'Saudi Arabia has recently opened up to tourism, making Jeddah\'s pristine kitesurfing spots accessible to international visitors for the first time.',
      localTips: 'Respect local customs and dress modestly when not on the beach. The best spots are north of the city at Obhur and Salman Bay.',
      bestTimeToVisit: 'October to April offers pleasant temperatures and consistent winds.',
      localFood: 'Try local Saudi dishes like kabsa (spiced rice with meat) and mandi (meat and rice dish).',
      visaRequirements: 'Most visitors need an e-visa, which can be obtained online.'
    }
  },
  // NEW SPOTS - INDONESIA
  {
    id: 'sanur-bali',
    name: 'Sanur',
    location: 'Bali, Indonesia',
    description: 'A popular kitesurfing spot on Bali\'s southeast coast with consistent trade winds and warm water year-round.',
    difficulty: 'intermediate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: -8.6787,
      lng: 115.2653
    },
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.5,
      direction: 'Southeast',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Asia',
    localInfo: {
      languages: ['Indonesian', 'Balinese', 'English (widely spoken in tourist areas)'],
      currency: 'Indonesian Rupiah (IDR)',
      timeZone: 'Central Indonesia Time (WITA)',
      funFact: 'Sanur is one of the oldest tourist areas in Bali and is known as the "Morning of the World" because of its spectacular sunrises.',
      localTips: 'The reef provides protection, creating ideal flat water conditions inside the lagoon. Watch out for the reef at low tide.',
      bestTimeToVisit: 'June to August offers the most reliable winds during the dry season.',
      localFood: 'Try local Balinese dishes like babi guling (suckling pig) and nasi campur (mixed rice).',
      visaRequirements: 'Many countries receive visa-free entry for up to 30 days, but check requirements before traveling.'
    }
  },
  {
    id: 'kaliantan-lombok',
    name: 'Kaliantan',
    location: 'Lombok, Indonesia',
    description: 'A secluded kitesurfing paradise on Lombok\'s southeast coast with consistent winds and uncrowded beaches.',
    difficulty: 'intermediate',
    bestMonths: ['May', 'June', 'July', 'August', 'September', 'October'],
    coordinates: {
      lat: -8.8833,
      lng: 116.4500
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Remote location with pristine beaches, traditional villages, and virtually no crowds even during peak season.',
    waveInfo: {
      averageHeight: 1.0,
      direction: 'Southeast',
      consistency: 'high',
      type: 'medium'
    },
    region: 'Asia',
    localInfo: {
      languages: ['Indonesian', 'Sasak', 'English (limited)'],
      currency: 'Indonesian Rupiah (IDR)',
      timeZone: 'Central Indonesia Time (WITA)',
      funFact: 'Kaliantan is located near the famous Desert Point surf break, one of the most perfect left-hand waves in the world.',
      localTips: 'The area is remote, so bring all necessary equipment. Accommodation options are limited but growing.',
      bestTimeToVisit: 'June to September offers the strongest and most consistent winds.',
      localFood: 'Try local Sasak dishes like ayam taliwang (spicy grilled chicken) and plecing kangkung (water spinach salad).',
      visaRequirements: 'Many countries receive visa-free entry for up to 30 days, but check requirements before traveling.'
    }
  },
  {
    id: 'bintan-island',
    name: 'Bintan Island',
    location: 'Indonesia',
    description: 'A convenient kitesurfing destination near Singapore with reliable monsoon winds and modern resorts.',
    difficulty: 'beginner',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: 1.0667,
      lng: 104.5000
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.5,
      direction: 'Northeast',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Asia',
    localInfo: {
      languages: ['Indonesian', 'Malay', 'English (widely spoken in tourist areas)'],
      currency: 'Indonesian Rupiah (IDR)',
      timeZone: 'Western Indonesia Time (WIB)',
      funFact: 'Bintan is just a 45-minute ferry ride from Singapore, making it one of the most accessible international kitesurfing destinations in Asia.',
      localTips: 'The northeast monsoon (November to March) brings the best winds. Many resorts offer kitesurfing lessons and equipment rental.',
      bestTimeToVisit: 'December to February offers the most reliable winds during the northeast monsoon.',
      localFood: 'Try local seafood dishes like gong-gong (sea snails) and otak-otak (grilled fish cake).',
      visaRequirements: 'Many countries receive visa-free entry for up to 30 days, but check requirements before traveling.'
    }
  },
  // NEW SPOTS - AUSTRALIA
  {
    id: 'safety-bay-australia',
    name: 'Safety Bay',
    location: 'Western Australia',
    description: 'A world-class flat water kitesurfing spot near Perth with consistent sea breezes and shallow water.',
    difficulty: 'beginner',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: -32.3067,
      lng: 115.7183
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.2,
      direction: 'Southwest',
      consistency: 'high',
      type: 'flat'
    },
    region: 'Oceania',
    localInfo: {
      languages: ['English'],
      currency: 'Australian Dollar (AUD)',
      timeZone: 'Australian Western Standard Time (AWST)',
      funFact: 'Safety Bay is known as "The Pond" due to its perfectly flat water conditions created by an offshore reef.',
      localTips: 'The famous "Fremantle Doctor" sea breeze typically arrives around midday and builds throughout the afternoon.',
      bestTimeToVisit: 'December to February offers the most reliable sea breezes during the Australian summer.',
      localFood: 'Try local seafood like Western Australian rock lobster and fish and chips on the beach.',
      visaRequirements: 'Most visitors need an Electronic Travel Authority (ETA) or visa before arrival.'
    }
  },
  {
    id: 'port-douglas-australia',
    name: 'Port Douglas',
    location: 'Queensland, Australia',
    description: 'A tropical kitesurfing paradise near the Great Barrier Reef with consistent trade winds during the winter months.',
    difficulty: 'intermediate',
    bestMonths: ['May', 'June', 'July', 'August', 'September'],
    coordinates: {
      lat: -16.4834,
      lng: 145.4653
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.8,
      direction: 'Southeast',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Oceania',
    localInfo: {
      languages: ['English'],
      currency: 'Australian Dollar (AUD)',
      timeZone: 'Australian Eastern Standard Time (AEST)',
      funFact: 'Port Douglas offers the unique opportunity to kitesurf with views of both the Great Barrier Reef and the ancient Daintree Rainforest.',
      localTips: 'The southeast trade winds are most reliable from June to August. Be aware of marine stingers during the summer months (November to May).',
      bestTimeToVisit: 'June to August offers the most reliable winds and is outside the marine stinger season.',
      localFood: 'Try local tropical fruits, fresh seafood, and modern Australian cuisine at the many restaurants in town.',
      visaRequirements: 'Most visitors need an Electronic Travel Authority (ETA) or visa before arrival.'
    }
  },
  {
    id: 'lancelin-australia',
    name: 'Lancelin',
    location: 'Western Australia',
    description: 'A renowned kitesurfing destination north of Perth with consistent winds, flat water lagoons, and wave riding options.',
    difficulty: 'advanced',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: -31.0167,
      lng: 115.3333
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.5,
      direction: 'Southwest',
      consistency: 'high',
      type: 'medium'
    },
    region: 'Oceania',
    localInfo: {
      languages: ['English'],
      currency: 'Australian Dollar (AUD)',
      timeZone: 'Australian Western Standard Time (AWST)',
      funFact: 'Lancelin is famous for its massive white sand dunes, which are popular for sandboarding on no-wind days.',
      localTips: 'The sea breeze typically arrives around midday. The lagoon offers flat water, while the outer reef provides waves for more advanced riders.',
      bestTimeToVisit: 'December to February offers the most reliable sea breezes during the Australian summer.',
      localFood: 'Try the fresh local seafood, especially the Western Rock Lobster (crayfish) that the region is famous for.',
      visaRequirements: 'Most visitors need an Electronic Travel Authority (ETA) or visa before arrival.'
    }
  },
  // NEW SPOTS - NEW ZEALAND
  {
    id: 'raglan-newzealand',
    name: 'Raglan',
    location: 'New Zealand',
    description: 'A stunning kitesurfing destination on New Zealand\'s North Island with consistent winds and beautiful black sand beaches.',
    difficulty: 'intermediate',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: -37.8256,
      lng: 174.8700
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.2,
      direction: 'Southwest',
      consistency: 'medium',
      type: 'medium'
    },
    region: 'Oceania',
    localInfo: {
      languages: ['English', 'Māori'],
      currency: 'New Zealand Dollar (NZD)',
      timeZone: 'New Zealand Standard Time (NZST)',
      funFact: 'Raglan is primarily known as a world-class surfing destination with one of the longest left-hand breaks in the world, but has become increasingly popular for kitesurfing.',
      localTips: 'The west coast location means winds are often cross-onshore. The harbor provides flatter water options when the ocean is too rough.',
      bestTimeToVisit: 'December to February offers the warmest temperatures and most consistent winds.',
      localFood: 'Try local New Zealand lamb, fresh seafood, and don\'t miss the excellent cafes in Raglan town.',
      visaRequirements: 'Many countries receive visa-free entry for up to 3 months, but check requirements before traveling.'
    }
  },
  {
    id: 'taipa-bay-newzealand',
    name: 'Taipa Bay',
    location: 'Northland, New Zealand',
    description: 'A beautiful kitesurfing spot in New Zealand\'s subtropical north with consistent winds and stunning scenery.',
    difficulty: 'beginner',
    bestMonths: ['November', 'December', 'January', 'February', 'March', 'April'],
    coordinates: {
      lat: -34.9900,
      lng: 173.4000
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.5,
      direction: 'East',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Oceania',
    localInfo: {
      languages: ['English', 'Māori'],
      currency: 'New Zealand Dollar (NZD)',
      timeZone: 'New Zealand Standard Time (NZST)',
      funFact: 'Taipa Bay is located in the Far North of New Zealand, an area rich in Māori culture and history as it was one of the first places settled in New Zealand.',
      localTips: 'The bay is sheltered and offers ideal learning conditions. The best winds are easterlies, which blow cross-onshore.',
      bestTimeToVisit: 'December to March offers the warmest temperatures and most consistent winds.',
      localFood: 'Try local seafood, especially the famous Northland snapper and oysters from nearby Whangaroa Harbor.',
      visaRequirements: 'Many countries receive visa-free entry for up to 3 months, but check requirements before traveling.'
    }
  },
  // NEW SPOTS - JAPAN
  {
    id: 'izu-peninsula-japan',
    name: 'Izu Peninsula',
    location: 'Japan',
    description: 'A scenic kitesurfing destination near Tokyo with thermal winds and beautiful beaches surrounded by mountains.',
    difficulty: 'intermediate',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    coordinates: {
      lat: 34.9000,
      lng: 139.1000
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.0,
      direction: 'South',
      consistency: 'medium',
      type: 'medium'
    },
    region: 'Asia',
    localInfo: {
      languages: ['Japanese', 'English (limited)'],
      currency: 'Japanese Yen (JPY)',
      timeZone: 'Japan Standard Time (JST)',
      funFact: 'The Izu Peninsula is a UNESCO Global Geopark known for its unique geological features formed by submarine volcanic activity and tectonic plate collisions.',
      localTips: 'The thermal winds typically pick up in the afternoon. The best spots are on the eastern coast, including Tatadohama and Kisami beaches.',
      bestTimeToVisit: 'May to June and September to October offer the most reliable winds and pleasant temperatures.',
      localFood: 'Try local seafood specialties like Izu kinmedai (splendid alfonsino) and wasabi grown in the mountain streams.',
      visaRequirements: 'Many countries receive visa-free entry for up to 90 days, but check requirements before traveling.'
    }
  },
  {
    id: 'okinawa-japan',
    name: 'Okinawa',
    location: 'Japan',
    description: 'A tropical kitesurfing paradise in southern Japan with warm water, consistent trade winds, and beautiful coral reefs.',
    difficulty: 'beginner',
    bestMonths: ['March', 'April', 'May', 'September', 'October', 'November'],
    coordinates: {
      lat: 26.3344,
      lng: 127.8056
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.7,
      direction: 'East',
      consistency: 'medium',
      type: 'small'
    },
    region: 'Asia',
    localInfo: {
      languages: ['Japanese', 'Okinawan', 'English (in tourist areas)'],
      currency: 'Japanese Yen (JPY)',
      timeZone: 'Japan Standard Time (JST)',
      funFact: 'Okinawa is known for having some of the longest-lived people in the world, attributed to their diet, lifestyle, and low-stress environment.',
      localTips: 'The best kitesurfing spots are on the east coast, including Manza Beach and Ikei Island. Typhoon season (June to October) can bring strong winds but also dangerous conditions.',
      bestTimeToVisit: 'April to May and October to November offer the most reliable winds without the summer humidity or winter chill.',
      localFood: 'Try local Okinawan specialties like goya champuru (bitter melon stir-fry) and Okinawan soba noodles.',
      visaRequirements: 'Many countries receive visa-free entry for up to 90 days, but check requirements before traveling.'
    }
  },
  // NEW SPOTS - MADAGASCAR
  {
    id: 'sakalava-bay-madagascar',
    name: 'Sakalava Bay',
    location: 'Madagascar',
    description: 'A world-class kitesurfing destination with consistent trade winds, flat water, and wave riding options in a pristine environment.',
    difficulty: 'intermediate',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    coordinates: {
      lat: -12.2667,
      lng: 49.3833
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Remote location with pristine beaches, baobab trees, and unique wildlife found nowhere else on Earth.',
    waveInfo: {
      averageHeight: 1.0,
      direction: 'Southeast',
      consistency: 'high',
      type: 'medium'
    },
    region: 'Africa',
    localInfo: {
      languages: ['Malagasy', 'French', 'English (limited)'],
      currency: 'Malagasy Ariary (MGA)',
      timeZone: 'East Africa Time (EAT)',
      funFact: 'Madagascar is home to 5% of the world\'s plant and animal species, with about 90% of its wildlife found nowhere else on Earth.',
      localTips: 'The trade winds blow consistently from April to November. The bay offers both flat water inside the reef and waves on the outer reef.',
      bestTimeToVisit: 'May to October offers the most reliable winds and pleasant temperatures.',
      localFood: 'Try local Malagasy dishes like romazava (beef and greens stew) and fresh seafood caught daily.',
      visaRequirements: 'Most visitors need a visa, which can be obtained on arrival for stays up to 30 days.'
    }
  },
  {
    id: 'emerald-sea-madagascar',
    name: 'Emerald Sea',
    location: 'Diego Suarez, Madagascar',
    description: 'A remote kitesurfing paradise with turquoise waters, consistent winds, and a mix of flat water and wave conditions.',
    difficulty: 'advanced',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    coordinates: {
      lat: -12.3500,
      lng: 49.3000
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Stunning emerald-colored lagoon surrounded by white sand dunes and accessible only by boat.',
    waveInfo: {
      averageHeight: 1.5,
      direction: 'Southeast',
      consistency: 'high',
      type: 'medium'
    },
    region: 'Africa',
    localInfo: {
      languages: ['Malagasy', 'French', 'English (limited)'],
      currency: 'Malagasy Ariary (MGA)',
      timeZone: 'East Africa Time (EAT)',
      funFact: 'The Emerald Sea (Mer d\'Emeraude) gets its name from the stunning green-blue color created by the shallow water over white sand.',
      localTips: 'This spot is only accessible by boat from Diego Suarez. The wind is typically strongest in the afternoon.',
      bestTimeToVisit: 'May to October offers the most reliable winds and pleasant temperatures.',
      localFood: 'Try local seafood dishes like grilled lobster and fish curry with coconut milk.',
      visaRequirements: 'Most visitors need a visa, which can be obtained on arrival for stays up to 30 days.'
    }
  },
  
  // NEW CARIBBEAN SPOTS
  {
    id: 'le-vauclin-martinique',
    name: 'Le Vauclin',
    location: 'Martinique',
    description: 'A Caribbean kitesurfing paradise with consistent trade winds, flat water inside the reef, and waves beyond for all levels.',
    difficulty: 'intermediate',
    bestMonths: ['December', 'January', 'February', 'March', 'April', 'May'],
    coordinates: {
      lat: 14.5453,
      lng: -60.8383
    },
    imageUrl: 'https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 0.8,
      direction: 'East',
      consistency: 'high',
      type: 'small'
    },
    region: 'North America',
    localInfo: {
      languages: ['French', 'Creole', 'English (limited)'],
      currency: 'Euro (€)',
      timeZone: 'Atlantic Standard Time (AST)',
      funFact: 'Martinique is known as the "Island of Flowers" and is home to an active volcano, Mount Pelée, which last erupted in 1902.',
      localTips: 'The trade winds are most reliable from December to May. The lagoon offers perfect flat water conditions for beginners and freestylers.',
      bestTimeToVisit: 'January to April offers the most consistent winds with pleasant temperatures.',
      localFood: 'Try local Creole specialties like accras (cod fritters), colombo (curry), and fresh seafood with French-Caribbean fusion cuisine.',
      visaRequirements: 'As part of France, EU citizens don\'t need a visa. Most non-EU visitors can stay up to 90 days with a Schengen visa.'
    }
  },
  {
    id: 'silver-bank-dr',
    name: 'Silver Bank',
    location: 'Dominican Republic',
    description: 'A remote kitesurfing spot with consistent winds and the unique opportunity to kitesurf among humpback whales during their breeding season.',
    difficulty: 'advanced',
    bestMonths: ['January', 'February', 'March', 'April'],
    coordinates: {
      lat: 20.5500,
      lng: -69.9167
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'One of the few places in the world where you can kitesurf while watching humpback whales during their breeding season (January to April).',
    waveInfo: {
      averageHeight: 1.5,
      direction: 'Northeast',
      consistency: 'medium',
      type: 'medium'
    },
    region: 'North America',
    localInfo: {
      languages: ['Spanish', 'English (in tourist areas)'],
      currency: 'Dominican Peso (DOP)',
      timeZone: 'Atlantic Standard Time (AST)',
      funFact: 'Silver Bank is a submerged bank in the Atlantic Ocean about 80 miles north of the Dominican Republic and is part of the Sanctuary for Marine Mammals of the Dominican Republic.',
      localTips: 'This remote location is only accessible by boat and requires advanced kitesurfing skills. Tours are available from Puerto Plata.',
      bestTimeToVisit: 'January to March coincides with both good wind conditions and whale watching season.',
      localFood: 'Meals are typically provided on the boat tours, featuring Dominican specialties like fresh seafood, rice, beans, and tropical fruits.',
      visaRequirements: 'Most tourists can purchase a tourist card upon arrival, valid for 30 days.'
    }
  },
  {
    id: 'long-bay-turks-caicos',
    name: 'Long Bay Beach',
    location: 'Turks and Caicos',
    description: 'A world-class kiteboarding destination with shallow, turquoise water and consistent trade winds in a luxurious setting.',
    difficulty: 'beginner',
    bestMonths: ['November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'],
    coordinates: {
      lat: 21.7789,
      lng: -72.1975
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.3,
      direction: 'East',
      consistency: 'high',
      type: 'flat'
    },
    region: 'North America',
    localInfo: {
      languages: ['English'],
      currency: 'US Dollar (USD)',
      timeZone: 'Eastern Standard Time (EST)',
      funFact: 'Long Bay Beach features shallow, waist-deep water that extends for nearly a mile offshore, making it one of the safest places in the world to learn kiteboarding.',
      localTips: 'The trade winds are most reliable from November to June. The shallow water makes it perfect for beginners, but watch out for the occasional stingray.',
      bestTimeToVisit: 'December to April offers the most consistent winds with pleasant temperatures and lower humidity.',
      localFood: 'Try local specialties like conch fritters, conch salad, and fresh fish, often with a Caribbean-inspired twist.',
      visaRequirements: 'Most visitors don\'t need a visa for stays up to 90 days, but check requirements before traveling.'
    }
  },
  {
    id: 'union-island-grenadines',
    name: 'Union Island',
    location: 'St. Vincent and the Grenadines',
    description: 'A hidden Caribbean gem with consistent trade winds, crystal clear waters, and a laid-back atmosphere perfect for kitesurfing.',
    difficulty: 'intermediate',
    bestMonths: ['December', 'January', 'February', 'March', 'April', 'May', 'June'],
    coordinates: {
      lat: 12.5964,
      lng: -61.4103
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'Kitesurf to the famous Tobago Cays Marine Park with its protected sea turtle sanctuary and pristine coral reefs.',
    waveInfo: {
      averageHeight: 0.5,
      direction: 'East',
      consistency: 'high',
      type: 'small'
    },
    region: 'North America',
    localInfo: {
      languages: ['English', 'Vincentian Creole'],
      currency: 'Eastern Caribbean Dollar (XCD)',
      timeZone: 'Atlantic Standard Time (AST)',
      funFact: 'Union Island is known as the "Tahiti of the West Indies" due to its dramatic volcanic peaks and turquoise lagoons.',
      localTips: 'The trade winds are most reliable from December to June. Kitesurfing at Happy Island, a small man-made island built from conch shells, is a unique experience.',
      bestTimeToVisit: 'January to April offers the most consistent winds with pleasant temperatures.',
      localFood: 'Try local Caribbean dishes like roti, callaloo soup, and fresh lobster caught daily by local fishermen.',
      visaRequirements: 'Most visitors don\'t need a visa for stays up to 30 days, but check requirements before traveling.'
    }
  },
  {
    id: 'anegada-bvi',
    name: 'Anegada',
    location: 'British Virgin Islands',
    description: 'A flat coral island with miles of pristine beaches, consistent trade winds, and some of the clearest water in the Caribbean.',
    difficulty: 'intermediate',
    bestMonths: ['December', 'January', 'February', 'March', 'April'],
    coordinates: {
      lat: 18.7300,
      lng: -64.3300
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'The only coral island in the volcanic BVI chain, offering unique flat water conditions and the famous Anegada lobster.',
    waveInfo: {
      averageHeight: 0.4,
      direction: 'East',
      consistency: 'high',
      type: 'flat'
    },
    region: 'North America',
    localInfo: {
      languages: ['English'],
      currency: 'US Dollar (USD)',
      timeZone: 'Atlantic Standard Time (AST)',
      funFact: 'Anegada is surrounded by the third-largest coral reef in the world, the Horseshoe Reef, which has caused over 300 shipwrecks.',
      localTips: 'The trade winds are most reliable from December to April. The island is very remote, so bring all necessary equipment.',
      bestTimeToVisit: 'January to March offers the most consistent winds with pleasant temperatures.',
      localFood: 'Don\'t miss the famous Anegada lobster, considered the best in the Caribbean, typically served grilled with butter and lime.',
      visaRequirements: 'Most visitors don\'t need a visa for stays up to 30 days, but check requirements before traveling.'
    }
  },
  
  // NEW SOUTH AMERICA SPOTS
  {
    id: 'jericoacoara-brazil',
    name: 'Jericoacoara',
    location: 'Brazil',
    description: 'A world-famous kitesurfing destination with consistent trade winds, vast sandflats, and a unique national park setting.',
    difficulty: 'intermediate',
    bestMonths: ['August', 'September', 'October', 'November', 'December', 'January'],
    coordinates: {
      lat: -2.7983,
      lng: -40.5117
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.0,
      direction: 'East',
      consistency: 'high',
      type: 'medium'
    },
    region: 'South America',
    localInfo: {
      languages: ['Portuguese', 'English (in tourist areas)'],
      currency: 'Brazilian Real (BRL)',
      timeZone: 'Brasília Time (BRT)',
      funFact: 'Jericoacoara was a hidden fishing village until the 1980s and is now a protected national park where streets are made of sand and cars are not allowed in the village center.',
      localTips: 'The wind is typically strongest from midday to late afternoon. The vast sandflats at low tide are perfect for beginners.',
      bestTimeToVisit: 'September to December offers the most reliable winds with fewer tourists than the Brazilian summer months.',
      localFood: 'Try local Brazilian dishes like moqueca (seafood stew), acarajé (deep-fried bean patties), and fresh açaí bowls.',
      visaRequirements: 'Many countries receive visa-free entry, but check requirements before traveling.'
    }
  },
  {
    id: 'paracas-peru',
    name: 'Paracas',
    location: 'Peru',
    description: 'A unique desert kitesurfing destination with strong, consistent winds and stunning landscapes in the Paracas National Reserve.',
    difficulty: 'advanced',
    bestMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
    coordinates: {
      lat: -13.8333,
      lng: -76.2500
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    waveInfo: {
      averageHeight: 1.2,
      direction: 'Southwest',
      consistency: 'high',
      type: 'medium'
    },
    region: 'South America',
    localInfo: {
      languages: ['Spanish', 'English (limited in some areas)'],
      currency: 'Peruvian Sol (PEN)',
      timeZone: 'Peru Time (PET)',
      funFact: 'Paracas is home to the mysterious Nazca Lines and the Paracas Candelabra, a giant geoglyph etched into the side of a hill that can be seen from the ocean.',
      localTips: 'The "Paracas Wind" typically picks up around midday and can be extremely strong (30+ knots). Always take a smaller kite than you think you need.',
      bestTimeToVisit: 'December to March offers the most reliable winds during the Peruvian summer.',
      localFood: 'Try local Peruvian seafood dishes like ceviche, tiradito, and chupe de camarones (shrimp chowder).',
      visaRequirements: 'Many countries receive visa-free entry for up to 90 days, but check requirements before traveling.'
    }
  },
  {
    id: 'punta-chame-panama',
    name: 'Punta Chame',
    location: 'Panama',
    description: 'A narrow peninsula with consistent thermal winds and flat water on one side and waves on the other, perfect for all levels.',
    difficulty: 'beginner',
    bestMonths: ['December', 'January', 'February', 'March', 'April'],
    coordinates: {
      lat: 8.6333,
      lng: -79.7500
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isBeginnerFriendly: true,
    waveInfo: {
      averageHeight: 0.5,
      direction: 'North',
      consistency: 'medium',
      type: 'small'
    },
    region: 'South America',
    localInfo: {
      languages: ['Spanish', 'English (in tourist areas)'],
      currency: 'US Dollar (USD), Panamanian Balboa (PAB)',
      timeZone: 'Eastern Standard Time (EST)',
      funFact: 'Punta Chame is a narrow peninsula with water on both sides, allowing you to choose between flat water on the bay side or waves on the Pacific side depending on your preference.',
      localTips: 'The thermal winds typically pick up around midday. The bay side is perfect for beginners, while the Pacific side offers waves for more advanced riders.',
      bestTimeToVisit: 'January to March offers the most reliable winds during the dry season.',
      localFood: 'Try local Panamanian dishes like ceviche, sancocho (chicken stew), and patacones (fried plantains).',
      visaRequirements: 'Many countries receive visa-free entry for up to 180 days, but check requirements before traveling.'
    }
  },
  {
    id: 'santa-veronica-colombia',
    name: 'Santa Veronica',
    location: 'Colombia',
    description: 'A hidden kitesurfing gem on Colombia\'s Caribbean coast with consistent trade winds and a mix of flat water and wave conditions.',
    difficulty: 'intermediate',
    bestMonths: ['December', 'January', 'February', 'March', 'April'],
    coordinates: {
      lat: 10.8833,
      lng: -75.0833
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    waveInfo: {
      averageHeight: 1.0,
      direction: 'Northeast',
      consistency: 'high',
      type: 'medium'
    },
    region: 'South America',
    localInfo: {
      languages: ['Spanish', 'English (limited)'],
      currency: 'Colombian Peso (COP)',
      timeZone: 'Colombia Time (COT)',
      funFact: 'Santa Veronica is still relatively undiscovered by international tourists, offering an authentic Colombian experience alongside world-class kitesurfing conditions.',
      localTips: 'The trade winds are strongest from December to April during the dry season. The beach break can get powerful, so be prepared for some challenging conditions.',
      bestTimeToVisit: 'January to March offers the most reliable winds with pleasant temperatures.',
      localFood: 'Try local Colombian dishes like bandeja paisa, arepas, and fresh seafood with coconut rice, a Caribbean coast specialty.',
      visaRequirements: 'Many countries receive visa-free entry for up to 90 days, but check requirements before traveling.'
    }
  },
  {
    id: 'cabo-polonio-uruguay',
    name: 'Cabo Polonio',
    location: 'Uruguay',
    description: 'A remote, eco-friendly kitesurfing destination with consistent winds, beautiful beaches, and a unique off-grid community.',
    difficulty: 'advanced',
    bestMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    coordinates: {
      lat: -34.4000,
      lng: -53.7833
    },
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isHiddenGem: true,
    specialFeature: 'An off-grid village with no electricity or running water, accessible only by 4x4 vehicles through sand dunes, offering a unique back-to-nature experience.',
    waveInfo: {
      averageHeight: 1.5,
      direction: 'Southeast',
      consistency: 'medium',
      type: 'medium'
    },
    region: 'South America',
    localInfo: {
      languages: ['Spanish', 'English (limited)'],
      currency: 'Uruguayan Peso (UYU)',
      timeZone: 'Uruguay Standard Time (UYT)',
      funFact: 'Cabo Polonio is home to one of the largest sea lion colonies in South America and has no conventional electricity or water systems, relying on solar power and rainwater collection.',
      localTips: 'This remote location requires advanced planning. There are no ATMs or shops, so bring all necessary equipment and supplies.',
      bestTimeToVisit: 'December to February offers the most reliable winds during the Uruguayan summer.',
      localFood: 'Try local Uruguayan specialties like asado (barbecue), chivito (steak sandwich), and mate (traditional herbal tea).',
      visaRequirements: 'Many countries receive visa-free entry for up to 90 days, but check requirements before traveling.'
    }
  }
];

// Helper function to get all available regions
export const getAvailableRegions = (): string[] => {
  const regions = new Set<string>();
  kitespots.forEach(spot => regions.add(spot.region));
  return Array.from(regions).sort();
};

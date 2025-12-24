
import { City } from './types';

// Expanded Real Major Cities strictly ordered East to West (180 to -180)
export const CITIES: City[] = [
  { name: "Apia", country: "Samoa", lat: -13.8333, lng: -171.7667, population: 36700, visited: false, visitTimeUTC: 10 },
  { name: "Suva", country: "Fiji", lat: -18.1416, lng: 178.4419, population: 94000, visited: false, visitTimeUTC: 10.5 },
  { name: "Auckland", country: "New Zealand", lat: -36.848, lng: 174.763, population: 1600000, visited: false, visitTimeUTC: 11 },
  { name: "Wellington", country: "New Zealand", lat: -41.2865, lng: 174.7762, population: 212000, visited: false, visitTimeUTC: 11.2 },
  { name: "Sydney", country: "Australia", lat: -33.868, lng: 151.209, population: 5312000, visited: false, visitTimeUTC: 12 },
  { name: "Brisbane", country: "Australia", lat: -27.4698, lng: 153.0251, population: 2280000, visited: false, visitTimeUTC: 12.2 },
  { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, population: 5078000, visited: false, visitTimeUTC: 12.5 },
  { name: "Adelaide", country: "Australia", lat: -34.9285, lng: 138.6007, population: 1300000, visited: false, visitTimeUTC: 12.8 },
  { name: "Port Moresby", country: "PNG", lat: -9.4438, lng: 147.1803, population: 364000, visited: false, visitTimeUTC: 13 },
  { name: "Tokyo", country: "Japan", lat: 35.676, lng: 139.650, population: 13960000, visited: false, visitTimeUTC: 14 },
  { name: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5023, population: 2691000, visited: false, visitTimeUTC: 14.1 },
  { name: "Kyoto", country: "Japan", lat: 35.0116, lng: 135.7681, population: 1475000, visited: false, visitTimeUTC: 14.3 },
  { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780, population: 9733000, visited: false, visitTimeUTC: 15 },
  { name: "Busan", country: "South Korea", lat: 35.1796, lng: 129.0756, population: 3412000, visited: false, visitTimeUTC: 15.1 },
  { name: "Pyongyang", country: "North Korea", lat: 39.0392, lng: 125.7625, population: 2870000, visited: false, visitTimeUTC: 15.2 },
  { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737, population: 24280000, visited: false, visitTimeUTC: 15.5 },
  { name: "Beijing", country: "China", lat: 39.904, lng: 116.407, population: 21540000, visited: false, visitTimeUTC: 16 },
  { name: "Hong Kong", country: "HK", lat: 22.3193, lng: 114.1694, population: 7482000, visited: false, visitTimeUTC: 16.5 },
  { name: "Taipei", country: "Taiwan", lat: 25.0330, lng: 121.5654, population: 2646000, visited: false, visitTimeUTC: 16.8 },
  { name: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842, population: 1780000, visited: false, visitTimeUTC: 17 },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, population: 5637000, visited: false, visitTimeUTC: 17.5 },
  { name: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lng: 101.6869, population: 1800000, visited: false, visitTimeUTC: 17.8 },
  { name: "Jakarta", country: "Indonesia", lat: -6.2088, lng: 106.8456, population: 10560000, visited: false, visitTimeUTC: 18.2 },
  { name: "Bangkok", country: "Thailand", lat: 13.756, lng: 100.501, population: 8280000, visited: false, visitTimeUTC: 18.5 },
  { name: "Hanoi", country: "Vietnam", lat: 21.0285, lng: 105.8542, population: 8050000, visited: false, visitTimeUTC: 18.8 },
  { name: "Phnom Penh", country: "Cambodia", lat: 11.5564, lng: 104.9282, population: 2100000, visited: false, visitTimeUTC: 18.9 },
  { name: "Yangon", country: "Myanmar", lat: 16.8661, lng: 96.1951, population: 7360000, visited: false, visitTimeUTC: 19 },
  { name: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125, population: 8906000, visited: false, visitTimeUTC: 19.5 },
  { name: "Kathmandu", country: "Nepal", lat: 27.7172, lng: 85.3240, population: 1003000, visited: false, visitTimeUTC: 19.8 },
  { name: "Delhi", country: "India", lat: 28.6139, lng: 77.2090, population: 18980000, visited: false, visitTimeUTC: 20 },
  { name: "Mumbai", country: "India", lat: 19.076, lng: 72.877, population: 12480000, visited: false, visitTimeUTC: 20.3 },
  { name: "Bangalore", country: "India", lat: 12.9716, lng: 77.5946, population: 8443000, visited: false, visitTimeUTC: 20.5 },
  { name: "Karachi", country: "Pakistan", lat: 24.8607, lng: 67.0011, population: 14910000, visited: false, visitTimeUTC: 20.8 },
  { name: "Kabul", country: "Afghanistan", lat: 34.5553, lng: 69.2075, population: 4635000, visited: false, visitTimeUTC: 21 },
  { name: "Dubai", country: "UAE", lat: 25.204, lng: 55.270, population: 3331000, visited: false, visitTimeUTC: 21.3 },
  { name: "Abu Dhabi", country: "UAE", lat: 24.4539, lng: 54.3773, population: 1450000, visited: false, visitTimeUTC: 21.4 },
  { name: "Tehran", country: "Iran", lat: 35.6892, lng: 51.3890, population: 8694000, visited: false, visitTimeUTC: 21.5 },
  { name: "Moscow", country: "Russia", lat: 55.755, lng: 37.617, population: 12500000, visited: false, visitTimeUTC: 22.5 },
  { name: "Kiev", country: "Ukraine", lat: 50.4501, lng: 30.5234, population: 2884000, visited: false, visitTimeUTC: 22.7 },
  { name: "Baghdad", country: "Iraq", lat: 33.3152, lng: 44.3661, population: 8127000, visited: false, visitTimeUTC: 22.8 },
  { name: "Istanbul", country: "Turkey", lat: 41.0082, lng: 28.9784, population: 15460000, visited: false, visitTimeUTC: 23 },
  { name: "Bucharest", country: "Romania", lat: 44.4268, lng: 26.1025, population: 1883000, visited: false, visitTimeUTC: 23.3 },
  { name: "Cairo", country: "Egypt", lat: 30.044, lng: 31.235, population: 9500000, visited: false, visitTimeUTC: 23.5 },
  { name: "Jerusalem", country: "Israel", lat: 31.7683, lng: 35.2137, population: 936000, visited: false, visitTimeUTC: 23.6 },
  { name: "Helsinki", country: "Finland", lat: 60.1699, lng: 24.9384, population: 631000, visited: false, visitTimeUTC: 23.8 },
  { name: "Athens", country: "Greece", lat: 37.9838, lng: 23.7275, population: 664000, visited: false, visitTimeUTC: 24 },
  { name: "Sofia", country: "Bulgaria", lat: 42.6977, lng: 23.3219, population: 1242000, visited: false, visitTimeUTC: 24.1 },
  { name: "Warsaw", country: "Poland", lat: 52.2297, lng: 21.0122, population: 1765000, visited: false, visitTimeUTC: 24.2 },
  { name: "Budapest", country: "Hungary", lat: 47.4979, lng: 19.0402, population: 1752000, visited: false, visitTimeUTC: 24.4 },
  { name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686, population: 975000, visited: false, visitTimeUTC: 24.5 },
  { name: "Cape Town", country: "South Africa", lat: -33.9249, lng: 18.4241, population: 433000, visited: false, visitTimeUTC: 24.6 },
  { name: "Vienna", country: "Austria", lat: 48.2082, lng: 16.3738, population: 1897000, visited: false, visitTimeUTC: 24.8 },
  { name: "Prague", country: "Czechia", lat: 50.0755, lng: 14.4378, population: 1309000, visited: false, visitTimeUTC: 24.9 },
  { name: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, population: 3769000, visited: false, visitTimeUTC: 25 },
  { name: "Copenhagen", country: "Denmark", lat: 55.6761, lng: 12.5683, population: 602000, visited: false, visitTimeUTC: 25.1 },
  { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, population: 2873000, visited: false, visitTimeUTC: 25.2 },
  { name: "Oslo", country: "Norway", lat: 59.9139, lng: 10.7522, population: 634000, visited: false, visitTimeUTC: 25.3 },
  { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041, population: 821000, visited: false, visitTimeUTC: 25.4 },
  { name: "Brussels", country: "Belgium", lat: 50.8503, lng: 4.3517, population: 1209000, visited: false, visitTimeUTC: 25.45 },
  { name: "Paris", country: "France", lat: 48.856, lng: 2.352, population: 21480000, visited: false, visitTimeUTC: 25.5 },
  { name: "London", country: "UK", lat: 51.507, lng: -0.127, population: 8982000, visited: false, visitTimeUTC: 26 },
  { name: "Manchester", country: "UK", lat: 53.4808, lng: -2.2426, population: 553000, visited: false, visitTimeUTC: 26.1 },
  { name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038, population: 3223000, visited: false, visitTimeUTC: 26.2 },
  { name: "Barcelona", country: "Spain", lat: 41.3851, lng: 2.1734, population: 1620000, visited: false, visitTimeUTC: 26.3 },
  { name: "Dublin", country: "Ireland", lat: 53.3498, lng: -6.2603, population: 544000, visited: false, visitTimeUTC: 26.4 },
  { name: "Lisbon", country: "Portugal", lat: 38.7223, lng: -9.1393, population: 504000, visited: false, visitTimeUTC: 26.5 },
  { name: "Dakar", country: "Senegal", lat: 14.7167, lng: -17.4677, population: 1146000, visited: false, visitTimeUTC: 27 },
  { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lng: -43.1729, population: 6748000, visited: false, visitTimeUTC: 28.5 },
  { name: "Sao Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333, population: 12330000, visited: false, visitTimeUTC: 28.6 },
  { name: "Buenos Aires", country: "Argentina", lat: -34.6037, lng: -58.3816, population: 2891000, visited: false, visitTimeUTC: 29.5 },
  { name: "Santiago", country: "Chile", lat: -33.4489, lng: -70.6693, population: 5614000, visited: false, visitTimeUTC: 30 },
  { name: "Lima", country: "Peru", lat: -12.0464, lng: -77.0428, population: 9674000, visited: false, visitTimeUTC: 30.2 },
  { name: "Bogota", country: "Colombia", lat: 4.7110, lng: -74.0721, population: 7413000, visited: false, visitTimeUTC: 30.3 },
  { name: "New York", country: "USA", lat: 40.712, lng: -74.006, population: 8419000, visited: false, visitTimeUTC: 30.5 },
  { name: "Washington DC", country: "USA", lat: 38.9072, lng: -77.0369, population: 705000, visited: false, visitTimeUTC: 30.6 },
  { name: "Miami", country: "USA", lat: 25.7617, lng: -80.1918, population: 467000, visited: false, visitTimeUTC: 30.7 },
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, population: 2732000, visited: false, visitTimeUTC: 31 },
  { name: "Chicago", country: "USA", lat: 41.8781, lng: -87.6298, population: 2700000, visited: false, visitTimeUTC: 31.5 },
  { name: "Mexico City", country: "Mexico", lat: 19.432, lng: -99.133, population: 8918000, visited: false, visitTimeUTC: 32 },
  { name: "Denver", country: "USA", lat: 39.7392, lng: -104.9903, population: 715000, visited: false, visitTimeUTC: 32.5 },
  { name: "Phoenix", country: "USA", lat: 33.4484, lng: -112.0740, population: 1600000, visited: false, visitTimeUTC: 33 },
  { name: "Los Angeles", country: "USA", lat: 34.052, lng: -118.243, population: 3971000, visited: false, visitTimeUTC: 33.5 },
  { name: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194, population: 881000, visited: false, visitTimeUTC: 33.7 },
  { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207, population: 675000, visited: false, visitTimeUTC: 34 },
  { name: "Honolulu", country: "USA", lat: 21.306, lng: -157.858, population: 350000, visited: false, visitTimeUTC: 35.5 },
];

const generateMoreCities = (base: City[]): City[] => {
  const result = [...base];
  const totalWanted = 1000;
  
  const prefixes = ["St.", "San", "New", "Port", "Lake", "Mount", "Fort", "Grand", "Villa", "East", "West", "North", "South"];
  const names = ["Clementine", "Kringle", "Claus", "Noel", "Holly", "Ivy", "Evergreen", "Blizzard", "Frosty", "Rudolph", "Dasher", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
  const countries = ["Global Station", "International District", "Unity Territory", "World Outpost", "Merry Zone"];

  for (let i = 0; i < (totalWanted - base.length); i++) {
    const progress = i / (totalWanted - base.length);
    const lng = 180 - (progress * 360);
    const lat = -60 + Math.random() * 130; 
    const visitTimeUTC = 10 + (progress * 26);
    
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    result.push({
      name: `${randomPrefix} ${randomName} #${i + 1}`,
      country: randomCountry,
      lat,
      lng,
      population: Math.floor(Math.random() * 150000) + 1000,
      visited: false,
      visitTimeUTC
    });
  }
  
  return result.sort((a, b) => a.visitTimeUTC - b.visitTimeUTC);
};

export const ALL_CITIES = generateMoreCities(CITIES);

export const TOTAL_KIDS = 2100000000;
export const TOTAL_HOUSEHOLDS = 500000000;
export const TOTAL_GIFTS = TOTAL_KIDS * 1.5;

export const THEME_COLORS = {
  northPoleBlue: '#0c1445',
  christmasRed: '#c41e3a',
  elfGreen: '#2e7d32',
  gold: '#ffd700',
  snow: '#f8f9fa'
};

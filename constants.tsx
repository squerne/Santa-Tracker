
import { City } from './types';

// Real Major Cities strictly ordered East to West (180 to -180)
// This simulates Santa following the sunset/night across the globe.
export const CITIES: City[] = [
  { name: "Apia", country: "Samoa", lat: -13.8333, lng: -171.7667, population: 36700, visited: false, visitTimeUTC: 10 },
  { name: "Suva", country: "Fiji", lat: -18.1416, lng: 178.4419, population: 94000, visited: false, visitTimeUTC: 10.5 },
  { name: "Auckland", country: "New Zealand", lat: -36.848, lng: 174.763, population: 1600000, visited: false, visitTimeUTC: 11 },
  { name: "Wellington", country: "New Zealand", lat: -41.2865, lng: 174.7762, population: 212000, visited: false, visitTimeUTC: 11.2 },
  { name: "Sydney", country: "Australia", lat: -33.868, lng: 151.209, population: 5312000, visited: false, visitTimeUTC: 12 },
  { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, population: 5078000, visited: false, visitTimeUTC: 12.5 },
  { name: "Port Moresby", country: "PNG", lat: -9.4438, lng: 147.1803, population: 364000, visited: false, visitTimeUTC: 13 },
  { name: "Tokyo", country: "Japan", lat: 35.676, lng: 139.650, population: 13960000, visited: false, visitTimeUTC: 14 },
  { name: "Kyoto", country: "Japan", lat: 35.0116, lng: 135.7681, population: 1475000, visited: false, visitTimeUTC: 14.3 },
  { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780, population: 9733000, visited: false, visitTimeUTC: 15 },
  { name: "Pyongyang", country: "North Korea", lat: 39.0392, lng: 125.7625, population: 2870000, visited: false, visitTimeUTC: 15.2 },
  { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737, population: 24280000, visited: false, visitTimeUTC: 15.5 },
  { name: "Beijing", country: "China", lat: 39.904, lng: 116.407, population: 21540000, visited: false, visitTimeUTC: 16 },
  { name: "Hong Kong", country: "HK", lat: 22.3193, lng: 114.1694, population: 7482000, visited: false, visitTimeUTC: 16.5 },
  { name: "Taipei", country: "Taiwan", lat: 25.0330, lng: 121.5654, population: 2646000, visited: false, visitTimeUTC: 16.8 },
  { name: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842, population: 1780000, visited: false, visitTimeUTC: 17 },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, population: 5637000, visited: false, visitTimeUTC: 17.5 },
  { name: "Jakarta", country: "Indonesia", lat: -6.2088, lng: 106.8456, population: 10560000, visited: false, visitTimeUTC: 18.2 },
  { name: "Bangkok", country: "Thailand", lat: 13.756, lng: 100.501, population: 8280000, visited: false, visitTimeUTC: 18.5 },
  { name: "Hanoi", country: "Vietnam", lat: 21.0285, lng: 105.8542, population: 8050000, visited: false, visitTimeUTC: 18.8 },
  { name: "Yangon", country: "Myanmar", lat: 16.8661, lng: 96.1951, population: 7360000, visited: false, visitTimeUTC: 19 },
  { name: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125, population: 8906000, visited: false, visitTimeUTC: 19.5 },
  { name: "Kathmandu", country: "Nepal", lat: 27.7172, lng: 85.3240, population: 1003000, visited: false, visitTimeUTC: 19.8 },
  { name: "Delhi", country: "India", lat: 28.6139, lng: 77.2090, population: 18980000, visited: false, visitTimeUTC: 20 },
  { name: "Mumbai", country: "India", lat: 19.076, lng: 72.877, population: 12480000, visited: false, visitTimeUTC: 20.3 },
  { name: "Karachi", country: "Pakistan", lat: 24.8607, lng: 67.0011, population: 14910000, visited: false, visitTimeUTC: 20.8 },
  { name: "Kabul", country: "Afghanistan", lat: 34.5553, lng: 69.2075, population: 4635000, visited: false, visitTimeUTC: 21 },
  { name: "Tehran", country: "Iran", lat: 35.6892, lng: 51.3890, population: 8694000, visited: false, visitTimeUTC: 21.5 },
  { name: "Dubai", country: "UAE", lat: 25.204, lng: 55.270, population: 3331000, visited: false, visitTimeUTC: 21.8 },
  { name: "Moscow", country: "Russia", lat: 55.755, lng: 37.617, population: 12500000, visited: false, visitTimeUTC: 22.5 },
  { name: "Baghdad", country: "Iraq", lat: 33.3152, lng: 44.3661, population: 8127000, visited: false, visitTimeUTC: 22.8 },
  { name: "Istanbul", country: "Turkey", lat: 41.0082, lng: 28.9784, population: 15460000, visited: false, visitTimeUTC: 23 },
  { name: "Cairo", country: "Egypt", lat: 30.044, lng: 31.235, population: 9500000, visited: false, visitTimeUTC: 23.5 },
  { name: "Athens", country: "Greece", lat: 37.9838, lng: 23.7275, population: 664000, visited: false, visitTimeUTC: 24 },
  { name: "Cape Town", country: "South Africa", lat: -33.9249, lng: 18.4241, population: 433000, visited: false, visitTimeUTC: 24.5 },
  { name: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, population: 3769000, visited: false, visitTimeUTC: 25 },
  { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, population: 2873000, visited: false, visitTimeUTC: 25.2 },
  { name: "Paris", country: "France", lat: 48.856, lng: 2.352, population: 21480000, visited: false, visitTimeUTC: 25.5 },
  { name: "London", country: "UK", lat: 51.507, lng: -0.127, population: 8982000, visited: false, visitTimeUTC: 26 },
  { name: "Lisbon", country: "Portugal", lat: 38.7223, lng: -9.1393, population: 504000, visited: false, visitTimeUTC: 26.5 },
  { name: "Dakar", country: "Senegal", lat: 14.7167, lng: -17.4677, population: 1146000, visited: false, visitTimeUTC: 27 },
  { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lng: -43.1729, population: 6748000, visited: false, visitTimeUTC: 28.5 },
  { name: "Buenos Aires", country: "Argentina", lat: -34.6037, lng: -58.3816, population: 2891000, visited: false, visitTimeUTC: 29.5 },
  { name: "New York", country: "USA", lat: 40.712, lng: -74.006, population: 8419000, visited: false, visitTimeUTC: 30.5 },
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, population: 2732000, visited: false, visitTimeUTC: 31 },
  { name: "Mexico City", country: "Mexico", lat: 19.432, lng: -99.133, population: 8918000, visited: false, visitTimeUTC: 32 },
  { name: "Denver", country: "USA", lat: 39.7392, lng: -104.9903, population: 715000, visited: false, visitTimeUTC: 32.5 },
  { name: "Los Angeles", country: "USA", lat: 34.052, lng: -118.243, population: 3971000, visited: false, visitTimeUTC: 33.5 },
  { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207, population: 675000, visited: false, visitTimeUTC: 34 },
  { name: "Honolulu", country: "USA", lat: 21.306, lng: -157.858, population: 350000, visited: false, visitTimeUTC: 35.5 },
];

const generateMoreCities = (base: City[]): City[] => {
  const result = [...base];
  const totalWanted = 200;
  
  // Logical filling of global gaps
  for (let i = 0; i < (totalWanted - base.length); i++) {
    // Generate a progressive longitude from 180 to -180
    const progress = i / (totalWanted - base.length);
    const lng = 180 - (progress * 360);
    const lat = -50 + Math.random() * 110; // Avoid extreme poles for random markers
    const visitTimeUTC = 10 + (progress * 26);
    
    result.push({
      name: `Santa-Stop #${i + 1}`,
      country: "Global Relay",
      lat,
      lng,
      population: Math.floor(Math.random() * 200000),
      visited: false,
      visitTimeUTC
    });
  }
  
  // Final sort by visit time (which follows longitudinal bands)
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

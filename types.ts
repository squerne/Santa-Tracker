
export interface City {
  name: string;
  country: string;
  lat: number;
  lng: number;
  population: number;
  visited: boolean;
  visitTimeUTC: number; // Hour of the day (0-23) relative to Dec 24 start
}

export interface SantaStats {
  householdsVisited: number;
  kidsVisited: number;
  giftsDelivered: number;
  completionRate: number;
  totalGifts: number;
  totalHouseholds: number;
  totalKids: number;
}

export interface UserLocation {
  address: string;
  lat: number;
  lng: number;
  localTime: Date;
}

export type Language = 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar' | 'hi' | 'tr' | 'pl' | 'sv' | 'no' | 'da' | 'fi' | 'el';

export interface TranslationDictionary {
  [key: string]: {
    [K in Language]: string;
  };
}

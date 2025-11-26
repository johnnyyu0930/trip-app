export enum ActivityType {
  TRANSPORT = 'TRANSPORT',
  FOOD = 'FOOD',
  ACTIVITY = 'ACTIVITY',
  HOTEL = 'HOTEL',
  SHOPPING = 'SHOPPING'
}

export interface ItineraryItem {
  time: string;
  title: string;
  description?: string;
  link?: string;
  image?: string;
  spritePos?: string; // Format: "X% Y%" for background-position
  type: ActivityType;
}

export interface WeatherForecast {
  temp: string;
  condition: string;
  type: 'sunny' | 'cloudy' | 'rain' | 'snow';
}

export interface DayItinerary {
  date: string;
  weekday: string;
  title: string; // e.g., "Day 1: Arrival"
  items: ItineraryItem[];
  highlightColor: string; // Tailwind class equivalent hex or name for variety
  weatherForecast: WeatherForecast;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isImage?: boolean;
}
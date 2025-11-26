import React from 'react';
import { DayItinerary, ActivityType, ItineraryItem } from '../types';
import { Car, Home, Utensils, MapPin, ShoppingBag, Sun, Cloud, CloudRain, Snowflake, ExternalLink } from 'lucide-react';
import { ChiikawaFace, HachiwareFace, UsagiFace, Sparkle } from './ChiikawaStickers';

interface DayCardProps {
  day: DayItinerary;
  id: string;
}

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case ActivityType.TRANSPORT: return <Car size={16} />;
    case ActivityType.HOTEL: return <Home size={16} />;
    case ActivityType.FOOD: return <Utensils size={16} />;
    case ActivityType.SHOPPING: return <ShoppingBag size={16} />;
    case ActivityType.ACTIVITY: default: return <MapPin size={16} />;
  }
};

const getWeatherIcon = (type: string) => {
  switch (type) {
    case 'sunny': return <Sun className="text-orange-400 fill-orange-100" size={20} />;
    case 'cloudy': return <Cloud className="text-gray-400 fill-gray-100" size={20} />;
    case 'rain': return <CloudRain className="text-blue-400 fill-blue-100" size={20} />;
    case 'snow': return <Snowflake className="text-blue-300 fill-blue-50" size={20} />;
    default: return <Sun className="text-orange-400" size={20} />;
  }
};

const getRandomSticker = (seed: string) => {
    const sum = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const mod = sum % 3;
    if (mod === 0) return <ChiikawaFace className="absolute -bottom-2 -right-2 transform rotate-12 opacity-80" size={80} />;
    if (mod === 1) return <HachiwareFace className="absolute -bottom-2 -right-2 transform -rotate-6 opacity-80" size={80} />;
    return <UsagiFace className="absolute -bottom-2 -right-2 transform rotate-6 opacity-80" size={80} />;
};

const getMiniCharacter = (index: number) => {
    const mod = index % 3;
    if (mod === 0) return <ChiikawaFace size={32} className="transform -scale-x-100" />;
    if (mod === 1) return <HachiwareFace size={32} />;
    return <UsagiFace size={32} className="transform -scale-x-100" />;
}

// Sub-component for individual items to handle display logic
const ItineraryItemRow: React.FC<{ item: ItineraryItem; index: number; isLast: boolean }> = ({ item, index, isLast }) => {
    
    const isClickable = !!item.link;
    const Wrapper = isClickable ? 'a' : 'div';
    const wrapperProps = isClickable 
        ? { href: item.link, target: "_blank", rel: "noopener noreferrer", className: "block group/item cursor-pointer" } 
        : { className: "block" };

    return (
        <div className="flex gap-4 relative">
            {/* Line connector */}
            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-[-32px] w-0.5 bg-gray-200 border-l-2 border-dashed border-gray-300"></div>
            )}

            {/* Icon Bubble */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 mt-1
            ${item.type === ActivityType.HOTEL ? 'bg-purple-100 text-purple-600' : 
                item.type === ActivityType.TRANSPORT ? 'bg-blue-100 text-blue-600' :
                item.type === ActivityType.FOOD ? 'bg-orange-100 text-orange-600' :
                item.type === ActivityType.SHOPPING ? 'bg-red-100 text-red-600' :
                'bg-pink-100 text-pink-600'
            } border-2 border-white shadow-sm transform transition-transform group-hover/item:scale-110`}>
                {getActivityIcon(item.type)}
            </div>

            {/* Content */}
            <div className="flex-1 pb-1">
                <Wrapper {...wrapperProps}>
                    <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span className="font-mono text-sm font-bold text-gray-400 bg-gray-50 px-2 rounded-md border border-gray-100">{item.time}</span>
                        <h4 className={`font-bold text-lg transition-colors ${isClickable ? 'text-chiikawa-text group-hover/item:text-blue-500 underline decoration-dotted decoration-2 underline-offset-4 decoration-blue-300' : 'text-chiikawa-text'}`}>
                            {item.title}
                            {isClickable && <ExternalLink size={14} className="inline ml-1 opacity-50" />}
                        </h4>
                    </div>

                    {/* Detailed Description as Chat Bubble */}
                    {item.description && (
                        <div className="mt-1 flex gap-3 items-start">
                            <div className="flex-shrink-0 mt-1 hidden sm:block opacity-60">
                                {getMiniCharacter(index)} 
                            </div>
                            <div className="relative bg-gray-50 p-3 rounded-2xl rounded-tl-sm sm:rounded-tl-none border-2 border-pink-100 text-sm text-gray-600 leading-relaxed shadow-sm flex-1 hover:bg-yellow-50 transition-colors whitespace-pre-line">
                                {/* Bubble Triangle */}
                                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-pink-100 border-l-[10px] border-l-transparent hidden sm:block"></div>
                                {item.description}
                            </div>
                        </div>
                    )}
                </Wrapper>
            </div>
        </div>
    );
}

const DayCard: React.FC<DayCardProps> = ({ day, id }) => {
  return (
    <div id={id} className="mb-12 relative group scroll-mt-24">
      {/* Decorative "Ear" shapes for card to look like a character head */}
      <div className={`absolute -top-4 left-8 w-12 h-12 rounded-full ${day.highlightColor} z-0 transform -rotate-12 border-2 border-white`}></div>
      <div className={`absolute -top-4 right-8 w-12 h-12 rounded-full ${day.highlightColor} z-0 transform rotate-12 border-2 border-white`}></div>
      
      {/* Floating Sparkles */}
      <Sparkle className="absolute -top-2 -left-2 animate-bounce-slow" size={20} color="#f4adc6" />
      <Sparkle className="absolute top-10 -right-4 animate-wiggle" size={16} color="#8ecae6" />

      <div className="relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-white ring-4 ring-pink-100 z-10 transition-transform duration-500 hover:-translate-y-1">
        {/* Header */}
        <div className={`${day.highlightColor} p-6 pb-8 text-center relative overflow-hidden`}>
           <div className="absolute top-0 left-0 w-full h-2 bg-white/30"></div>
           <h2 className="text-3xl font-serif font-bold text-chiikawa-text tracking-wider">
             {day.date} <span className="text-lg opacity-70">({day.weekday})</span>
           </h2>
           <p className="font-bold text-lg mt-2 text-gray-600 bg-white/40 inline-block px-4 py-1 rounded-full backdrop-blur-sm border border-white/50">
             {day.title}
           </p>

           {/* Weather Info Badge */}
           <div className="mt-3 flex justify-center">
             <div className="flex items-center gap-2 text-chiikawa-text/80 bg-white/50 py-1.5 px-4 rounded-full backdrop-blur-sm border border-white/60 shadow-sm">
                {getWeatherIcon(day.weatherForecast.type)}
                <span className="text-sm font-bold">{day.weatherForecast.condition}</span>
                <span className="text-xs border-l border-gray-400/30 pl-2 ml-1 font-mono tracking-tight">{day.weatherForecast.temp}</span>
             </div>
           </div>
           
           {/* Decorative dots */}
           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
             <div className="w-2 h-2 rounded-full bg-white/50"></div>
             <div className="w-2 h-2 rounded-full bg-white/50"></div>
             <div className="w-2 h-2 rounded-full bg-white/50"></div>
           </div>
        </div>

        {/* Timeline */}
        <div className="p-6 space-y-8 bg-white pb-20">
          {day.items.map((item, idx) => (
              <ItineraryItemRow 
                  key={idx} 
                  item={item} 
                  index={idx} 
                  isLast={idx === day.items.length - 1} 
              />
          ))}
        </div>
        
        {/* Footer Sticker */}
        {getRandomSticker(day.title)}
      </div>
    </div>
  );
};

export default DayCard;
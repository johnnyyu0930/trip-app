import React from 'react';
import { ITINERARY_DATA } from '../constants';

interface QuickNavProps {
  onSelectDay: (index: number) => void;
  activeDay: number;
}

const QuickNav: React.FC<QuickNavProps> = ({ onSelectDay, activeDay }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 px-4 py-2 pointer-events-none">
      <div className="max-w-3xl mx-auto flex justify-center">
        <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg border-2 border-chiikawa-pink p-1.5 flex gap-1 pointer-events-auto overflow-x-auto max-w-full">
          {ITINERARY_DATA.map((day, index) => (
            <button
              key={index}
              onClick={() => onSelectDay(index)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeDay === index
                  ? 'bg-chiikawa-darkPink text-white shadow-md scale-105'
                  : 'bg-transparent text-gray-500 hover:bg-pink-50 hover:text-chiikawa-darkPink'
              }`}
            >
              {day.date}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickNav;

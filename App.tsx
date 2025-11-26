import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA } from './constants';
import DayCard from './components/DayCard';
import QuickNav from './components/QuickNav';
import { Heart, Stars } from 'lucide-react';
import { ChiikawaFace, HachiwareFace, UsagiFace } from './components/ChiikawaStickers';

const App: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  const isManualScrolling = React.useRef(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const scrollToDay = (index: number) => {
    isManualScrolling.current = true;
    setActiveDay(index);
    const element = document.getElementById(`day-${index}`);
    if (element) {
      // Account for fixed header
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  };

  // Update active day on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when element is near top of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isManualScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.split('-')[1]);
          if (!isNaN(index)) {
            setActiveDay(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all day elements
    ITINERARY_DATA.forEach((_, index) => {
      const element = document.getElementById(`day-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden font-sans bg-[radial-gradient(#fcefb4_1px,transparent_1px)] [background-size:20px_20px] bg-chiikawa-pink/20">
      
      {/* Quick Navigation - Sticky at top */}
      <QuickNav onSelectDay={scrollToDay} activeDay={activeDay} />

      {/* Hero Header */}
      <header className="relative pt-24 pb-12 text-center px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex gap-4 items-end justify-center mb-4 animate-bounce-slow">
             <ChiikawaFace size={60} />
             <HachiwareFace size={60} className="mb-2" />
             <UsagiFace size={60} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-chiikawa-text mb-4 drop-shadow-sm font-serif tracking-tight">
            2026 九州親子遊
          </h1>
          <p className="text-xl text-gray-500 font-medium flex items-center justify-center gap-2 bg-white/60 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
            <Stars size={20} className="text-yellow-400 fill-yellow-400" />
            帶著快樂的心情出發吧！
            <Stars size={20} className="text-yellow-400 fill-yellow-400" />
          </p>
          
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
             <div className="bg-white px-6 py-2 rounded-full border-2 border-chiikawa-pink shadow-md text-chiikawa-text font-bold text-sm flex items-center gap-2">
               <span>📅</span> 1/1 - 1/6
             </div>
             <div className="bg-white px-6 py-2 rounded-full border-2 border-chiikawa-darkBlue shadow-md text-chiikawa-text font-bold text-sm flex items-center gap-2">
               <span>📍</span> 福岡・熊本・由布院
             </div>
          </div>
        </div>

        {/* Decorative Background Blobs */}
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-chiikawa-pink rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute top-[20px] right-[-20px] w-80 h-80 bg-chiikawa-blue rounded-full opacity-40 blur-3xl animate-pulse delay-1000"></div>
      </header>

      {/* Main Itinerary Content */}
      <main className="max-w-3xl mx-auto px-4 relative z-20">
        {ITINERARY_DATA.map((day, index) => (
          <DayCard key={index} day={day} id={`day-${index}`} />
        ))}

        {/* Footer */}
        <div className="text-center py-12 text-chiikawa-text opacity-60">
           <p className="flex items-center justify-center gap-2">
             Made with <Heart size={16} className="text-red-400 fill-current animate-pulse" /> for Family
           </p>
           <p className="text-xs mt-2 font-mono">2026 Kyushu Trip</p>
        </div>
      </main>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';

const UrgencyRibbon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate time until next Tuesday 8 PM
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextTuesday = new Date();
      const daysUntilTuesday = (2 - now.getDay() + 7) % 7; // Tuesday is day 2
      
      nextTuesday.setDate(now.getDate() + daysUntilTuesday);
      nextTuesday.setHours(20, 0, 0, 0); // 8 PM
      
      // If it's already past Tuesday 8 PM this week, go to next week
      if (now > nextTuesday) {
        nextTuesday.setDate(nextTuesday.getDate() + 7);
      }
      
      const difference = nextTuesday.getTime() - now.getTime();
      
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#E27D60] to-[#C85A5A] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Clock size={16} className="animate-pulse" />
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <span className="font-bold">Limited Time:</span>
              <span>Book by Tuesday 8 PM for Wednesday service pickup!</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Countdown */}
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <div className="bg-white/20 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-xs">h</span>
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-xs">m</span>
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-xs">s</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyRibbon;
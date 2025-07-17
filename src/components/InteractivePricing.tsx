import React, { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';

const InteractivePricing = () => {
  const [dogCount, setDogCount] = useState(1);
  const [savingsMeter, setSavingsMeter] = useState(0);

  // Pricing structure
  const weeklyPricing = {
    1: 11.25,
    2: 17.5,
    3: 22.5,
    4: 27.5,
    5: 30
  } as const;

  const getWeeklyPrice = (dogs: number) => {
    if (dogs >= 5) return weeklyPricing[5];
    return weeklyPricing[dogs as keyof typeof weeklyPricing];
  };

  const extraVisitFee = 35 / 4; // Additional cost per week for Deluxe plan

  const calculateWeeklyPrice = (dogs: number) => getWeeklyPrice(dogs);

  const calculateTwiceWeeklyPrice = (dogs: number) => {
    return calculateWeeklyPrice(dogs) + extraVisitFee;
  };

  const calculateMonthlySavings = (dogs: number) => {
    const weeklyPrice = calculateWeeklyPrice(dogs);
    const twiceWeeklyPrice = calculateTwiceWeeklyPrice(dogs);
    const monthlyStandardTwoVisits = weeklyPrice * 8;
    const monthlyDeluxe = twiceWeeklyPrice * 4;
    return monthlyStandardTwoVisits - monthlyDeluxe;
  };

  useEffect(() => {
    const savings = calculateMonthlySavings(dogCount);
    if (savings > 0) {
      setSavingsMeter(Math.min(100, (savings / 50) * 100));
    } else {
      setSavingsMeter(0);
    }
  }, [dogCount]);

  return (
    <section id="interactive-pricing" className="py-20 bg-gradient-to-br from-[#BFD8E2] to-[#5B84B1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Find Your Perfect Plan
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Move the slider to see real-time pricing and discover your savings potential
          </p>
        </div>

        {/* Interactive Dog Counter */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-gray-800 mb-4">
              How many dogs do you have?
            </h3>
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-4xl font-black text-[#5B84B1]">{dogCount === 5 ? '5+' : dogCount}</span>
              <span className="text-2xl">🐕</span>
            </div>
            
            {/* Slider */}
            <div className="relative max-w-md mx-auto">
              <input
                type="range"
                min="1"
                max="5"
                value={dogCount}
                onChange={(e) => setDogCount(Math.min(5, parseInt(e.target.value)))}
                className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>1 dog</span>
                <span>5+ dogs</span>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Weekly Basic */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Weekly Basic</h4>
                <div className="text-3xl font-black text-gray-800">
                  ${calculateWeeklyPrice(dogCount)}
                  <span className="text-sm font-normal text-gray-600">/week</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Monthly: ${calculateWeeklyPrice(dogCount) * 4}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Weekly service
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Up to {dogCount <= 3 ? '3' : '5+'} dogs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Basic cleanup
                </li>
              </ul>
            </div>

            {/* Twice-Weekly Deluxe */}
            <div className="bg-gradient-to-br from-[#FFCF8B] to-[#F6B26B] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#E27D60] text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
                POPULAR
              </div>
              
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Twice-Weekly Deluxe</h4>
                <div className="text-3xl font-black text-gray-800">
                  ${calculateTwiceWeeklyPrice(dogCount)}
                  <span className="text-sm font-normal text-gray-600">/week</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Monthly: ${calculateTwiceWeeklyPrice(dogCount) * 4}
                </p>
                
                {calculateMonthlySavings(dogCount) > 0 && (
                  <div className="mt-2 text-green-600 font-bold">
                    You save ${calculateMonthlySavings(dogCount)}/month!
                  </div>
                )}
              </div>
              
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Twice-weekly service
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <strong>Unlimited dogs</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Premium cleanup + sanitization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Free waste bag dispenser
                </li>
              </ul>
            </div>
          </div>

          {/* Savings Meter */}
          {dogCount >= 4 && (
            <div className="mt-8 p-6 bg-gradient-to-r from-[#5B84B1] to-[#4A698B] rounded-2xl text-white">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold mb-2">💰 Savings Meter</h4>
                <p className="text-sm opacity-90">
                  Your {dogCount} pups make ~{dogCount * 0.75} lbs of waste weekly—Deluxe keeps it gone!
                </p>
              </div>
              
              <div className="relative bg-white/20 rounded-full h-6 overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFCF8B] to-[#F6B26B] transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                  style={{ width: `${savingsMeter}%` }}
                >
                  <DollarSign size={16} className="text-white" />
                </div>
              </div>
              
              <div className="text-center mt-4">
                <button className="group relative px-8 py-3 bg-[#FFCF8B] hover:bg-[#F6B26B] text-gray-800 font-bold rounded-full transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Upgrade to Deluxe</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Confetti effect removed for accessibility */}
      </div>
    </section>
  );
};

export default InteractivePricing;
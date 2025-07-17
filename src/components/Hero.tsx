import React, { useState, useEffect } from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isWagging, setIsWagging] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const wagInterval = setInterval(() => {
      setIsWagging(true);
      setTimeout(() => setIsWagging(false), 1000);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wagInterval);
    };
  }, []);

  const scrollToStory = () => {
    document.getElementById('comic-strip')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BFD8E2] via-[#5B84B1] to-[#88B0BF]">
        <div className="absolute inset-0 bg-white/20 opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                Never Step in It
                <span className="block text-[#FFCF8B] drop-shadow-lg">Again.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-2xl">
                Leave the doo to our crew! Professional dog waste removal that keeps your yard pristine and your paws clean.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-[#FFCF8B] hover:bg-[#E7B75F] text-black font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">Start My Plan</span>
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button 
                onClick={scrollToStory}
                className="group flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <Play size={20} />
                See the Story
              </button>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div 
              className="relative transform transition-transform duration-500"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              {/* Captain Scoop */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                <div
                  className="absolute inset-0 bg-[#FFCF8B] opacity-20 animate-ping"
                  style={{ clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)' }}
                />
                <div
                  className="relative w-full h-full bg-white shadow-2xl flex items-center justify-center"
                  style={{ clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)' }}
                >
                  <div className="text-8xl">🦸‍♂️🐕</div>
                  <div
                    className={`absolute -top-6 -right-6 w-16 h-16 bg-[#E27D60] flex items-center justify-center text-2xl transition-transform duration-300 ${isWagging ? 'animate-spin' : ''}`}
                    style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
                  >
                    🚀
                  </div>
                </div>
              </div>

              {/* Geometric accents */}
              <div
                className="absolute -top-8 -left-8 w-12 h-12 bg-[#D0E5F2] opacity-70"
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
              />
              <div
                className="absolute -bottom-4 -right-8 w-10 h-10 bg-[#BFD8E2] opacity-70"
                style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
              />
            </div>

            {/* Pristine yard visualization */}
            <div className="mt-8 p-6 bg-white/90 rounded-3xl backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#5B84B1] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Pristine Yard Guaranteed</h3>
                  <p className="text-gray-600">We scoop, you smile!</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-12 bg-[#5B84B1] rounded-lg flex items-center justify-center">🌱</div>
                <div className="h-12 bg-[#BFD8E2] rounded-lg flex items-center justify-center">🌿</div>
                <div className="h-12 bg-[#5B84B1] rounded-lg flex items-center justify-center">🌱</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <ChevronDown size={32} className="text-white/80" />
      </div>
    </section>

  );
};

export default Hero;
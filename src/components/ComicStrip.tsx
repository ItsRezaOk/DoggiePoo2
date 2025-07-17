import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ComicStrip = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const frames = [
    {
      id: 1,
      image: "😖",
      title: "The Problem",
      caption: "Oops! Not again...",
      description: "Dog owner steps in surprise"
    },
    {
      id: 2,
      image: "🔍",
      title: "The Discovery",
      caption: "There's gotta be a better way!",
      description: "Discovers Captain Scoop online"
    },
    {
      id: 3,
      image: "🦸‍♂️",
      title: "The Hero Arrives",
      caption: "Captain Scoop to the rescue!",
      description: "Professional crew cleans yard"
    },
    {
      id: 4,
      image: "🎉",
      title: "The Transformation",
      caption: "Spotless yard, happy dogs!",
      description: "Yard now pristine, dogs can play"
    },
    {
      id: 5,
      image: "🥤",
      title: "The Reward",
      caption: "Time to relax with Twice-Weekly Deluxe!",
      description: "Owner enjoys lemonade in clean yard"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('comic-strip');
      if (section) {
        const rect = section.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        const targetFrame = Math.floor(scrollProgress * frames.length);
        
        if (targetFrame !== currentFrame && targetFrame < frames.length) {
          setCurrentFrame(targetFrame);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentFrame, frames.length]);

  const nextFrame = () => {
    if (currentFrame < frames.length - 1) {
      setCurrentFrame(currentFrame + 1);
    }
  };

  const prevFrame = () => {
    if (currentFrame > 0) {
      setCurrentFrame(currentFrame - 1);
    }
  };

  const goToFrame = (index: number) => {
    setCurrentFrame(index);
  };

  return (
    <section id="comic-strip" className="py-20 bg-gradient-to-r from-[#D0E5F2] to-[#BFD8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The Captain Scoop Story
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From mess to magnificent in 5 easy steps
          </p>
        </div>

        {/* Comic Strip Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentFrame * 100}%)` }}
            >
              {frames.map((frame, index) => (
                <div key={frame.id} className="w-full flex-shrink-0 p-8 sm:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Frame Visual */}
                      <div className="relative">
                        <div className="w-full h-80 bg-gradient-to-br from-[#BFD8E2] to-[#5B84B1] rounded-2xl flex items-center justify-center shadow-lg">
                          <div className="text-8xl sm:text-9xl transform hover:scale-110 transition-transform duration-300">
                            {frame.image}
                          </div>
                        </div>
                        
                        {/* Speech bubble */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-white rounded-full px-6 py-3 shadow-lg border-4 border-[#FFCF8B]">
                            <p className="text-sm font-bold text-gray-800 whitespace-nowrap">
                              {frame.caption}
                            </p>
                          </div>
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l-4 border-b-4 border-[#FFCF8B] rotate-45"></div>
                        </div>
                      </div>

                      {/* Frame Content */}
                      <div className="text-center lg:text-left space-y-6">
                        <div className="inline-block px-4 py-2 bg-[#FFCF8B] rounded-full">
                          <span className="text-sm font-bold text-gray-800">Frame {frame.id}</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black text-gray-800">
                          {frame.title}
                        </h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {frame.description}
                        </p>
                        
                        {index === frames.length - 1 && (
                          <button className="group relative px-8 py-4 bg-[#5B84B1] hover:bg-[#4A698B] text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <span className="relative z-10">Book Twice-Weekly Deluxe</span>
                          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevFrame}
              disabled={currentFrame === 0}
              className="flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {/* Frame indicators */}
            <div className="flex gap-2">
              {frames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToFrame(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentFrame 
                      ? 'bg-[#FFCF8B] scale-125 shadow-lg' 
                      : 'bg-white/70 hover:bg-white hover:scale-110'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextFrame}
              disabled={currentFrame === frames.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg transition-all duration-300"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComicStrip;
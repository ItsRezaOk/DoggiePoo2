import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPositions, setSliderPositions] = useState([50, 50, 50]);

  const galleries = [
    {
      id: 1,
      title: "Remove Poo",
      location: "Carefully clean waste from your lawn",
      before: "🏠❌",
      after: "🏠✅"
    },
    {
      id: 2,
      title: "Eco-Frienly Fertilization",
      location: "Fertalize affected areas, keeping your lawn greener!",
      before: "🌳❌",
      after: "🌳✅"
    },
    {
      id: 3,
      title: "Sanitize",
      location: "Disinfect all tools used after every lawn, ensuring no harmful diseases can spread throuh waste",
      before: "🏡❌",
      after: "🏡✅"
    }
  ];

  const handleSliderChange = (index: number, value: number) => {
    const newPositions = [...sliderPositions];
    newPositions[index] = value;
    setSliderPositions(newPositions);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleries.length) % galleries.length);
  };

  return (
    <section id="before-after-gallery" className="py-20 bg-gradient-to-br from-[#D0E5F2] to-[#88B0BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            See Our Process
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">

            Drag the slider to reveal the Mr. Scoop magic

          </p>
        </div>

        <div className="relative">
          {/* Gallery container */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8 p-8">
              {galleries.map((gallery, index) => (
                <div key={gallery.id} className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {gallery.title}
                    </h3>
                    <p className="text-sm text-gray-600">{gallery.location}</p>
                  </div>

                  {/* Before/After Slider */}
                  <div className="relative h-64 bg-gradient-to-r from-[#BFD8E2] to-[#5B84B1] rounded-2xl overflow-hidden">
                    {/* Before side */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-6xl transition-all duration-300"
                      style={{ 
                        clipPath: `polygon(0 0, ${sliderPositions[index]}% 0, ${sliderPositions[index]}% 100%, 0 100%)` 
                      }}
                    >
                      <div className="text-center">
                        <div className="text-6xl mb-2">{gallery.before}</div>
                        <div className="text-white text-sm font-bold">BEFORE</div>
                      </div>
                    </div>

                    {/* After side */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-[#5B84B1] to-[#4A698B] flex items-center justify-center text-6xl transition-all duration-300"
                      style={{ 
                        clipPath: `polygon(${sliderPositions[index]}% 0, 100% 0, 100% 100%, ${sliderPositions[index]}% 100%)` 
                      }}
                    >
                      <div className="text-center">
                        <div className="text-6xl mb-2">{gallery.after}</div>
                        <div className="text-white text-sm font-bold">AFTER</div>
                      </div>
                    </div>

                    {/* Slider handle */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-300"
                      style={{ left: `${sliderPositions[index]}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-[#5B84B1] rounded-full"></div>
                      </div>
                    </div>

                    {/* Slider input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPositions[index]}
                      onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>

                  {/* Slider instruction */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      ← Drag to reveal transformation →
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation for mobile */}
          <div className="lg:hidden flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white rounded-full shadow-lg"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="flex gap-2">
              {galleries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white rounded-full shadow-lg"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-black text-white mb-2">730,000+</div>
            <p className="text-white/90">Dogs in Iowa alone!!</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-black text-white mb-2">100%</div>
            <p className="text-white/90">Customer Satisfaction</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-black text-white mb-2">24hrs or Less</div>
            <p className="text-white/90">Response Time, Always</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
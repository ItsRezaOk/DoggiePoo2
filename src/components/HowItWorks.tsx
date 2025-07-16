import React, { useState, useEffect } from 'react';
import { Calendar, Truck, Smile } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [pathProgress, setPathProgress] = useState(0);

  const steps = [
    {
      icon: Calendar,
      title: "Book",
      description: "Choose your plan and schedule in under 60 seconds",
      color: "from-[#FFD700] to-[#FFA500]"
    },
    {
      icon: Truck,
      title: "Scoop",
      description: "Our certified crew arrives and transforms your yard",
      color: "from-[#4CAF50] to-[#45a049]"
    },
    {
      icon: Smile,
      title: "Smile",
      description: "Enjoy your pristine, poop-free paradise",
      color: "from-[#00B4FF] to-[#0099CC]"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate path drawing
            let progress = 0;
            const animation = setInterval(() => {
              progress += 2;
              setPathProgress(progress);
              if (progress >= 100) {
                clearInterval(animation);
                
                // Animate steps appearing
                steps.forEach((_, index) => {
                  setTimeout(() => {
                    setActiveStep(index);
                  }, index * 300);
                });
              }
            }, 50);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From booking to bliss in just 60 seconds
          </p>
        </div>

        <div className="relative">
          {/* Animated path */}
          <div className="absolute top-1/2 left-0 right-0 h-2 transform -translate-y-1/2">
            <div className="relative h-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFD700] via-[#4CAF50] to-[#00B4FF] transition-all duration-1000 ease-out"
                style={{ width: `${pathProgress}%` }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              
              return (
                <div
                  key={index}
                  className={`relative text-center transform transition-all duration-500 ${
                    isActive 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step circle */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-black text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-1 h-8 bg-gray-200 mx-auto my-4" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/4 w-16 h-16 bg-[#A8F483] rounded-full opacity-20 animate-pulse" />
          <div className="absolute -bottom-8 right-1/4 w-12 h-12 bg-[#9DE5FF] rounded-full opacity-20 animate-bounce" />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#4CAF50] to-[#45a049] hover:from-[#45a049] hover:to-[#4CAF50] text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">Start Your Service</span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
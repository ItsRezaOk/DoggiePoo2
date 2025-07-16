import React, { useState, useEffect } from 'react';
import { Star, Play, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const CustomerLove = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [starAnimation, setStarAnimation] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Denver, CO",
      dogs: 3,
      plan: "Bi-Weekly Deluxe",
      video: "🎥",
      quote: "Captain Scoop saved our sanity! With three golden retrievers, our yard was... well, let's just say it wasn't pristine. Now it's perfect!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Austin, TX",
      dogs: 2,
      plan: "Weekly Basic",
      video: "🎥",
      quote: "Professional, reliable, and reasonably priced. My dogs love playing in the clean yard, and I love not stepping in surprises!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Phoenix, AZ",
      dogs: 5,
      plan: "Bi-Weekly Deluxe",
      video: "🎥",
      quote: "Five dogs = A LOT of cleanup. The Deluxe plan is worth every penny. Our yard has never looked better!",
      rating: 5
    }
  ];

  const reviews = [
    {
      name: "Jennifer W.",
      rating: 5,
      text: "Game changer for our family! Professional service and spotless results every time.",
      date: "2 days ago"
    },
    {
      name: "Robert M.",
      rating: 5,
      text: "The crew is amazing - reliable, friendly, and thorough. Highly recommended! ⭐",
      date: "1 week ago"
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "Worth every penny! Our yard went from disaster to paradise. Thank you Captain Scoop! 💚",
      date: "2 weeks ago"
    },
    {
      name: "David L.",
      rating: 5,
      text: "Bi-Weekly Deluxe is perfect for our pack of 4. Consistent, professional service. 🎯",
      date: "3 weeks ago"
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);

    const starInterval = setInterval(() => {
      setStarAnimation(true);
      setTimeout(() => setStarAnimation(false), 1000);
    }, 4000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(reviewInterval);
      clearInterval(starInterval);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="customer-love" className="py-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
            Customer Love
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real customers who chose Captain Scoop
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Video Testimonials */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center">
              Video Testimonials
            </h3>
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Video placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-[#4CAF50] to-[#45a049] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">{currentTest.video}</div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm">
                    <Play size={20} />
                    Watch Story
                  </button>
                </div>
              </div>

              {/* Testimonial content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {currentTest.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{currentTest.name}</h4>
                    <p className="text-sm text-gray-600">{currentTest.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          starAnimation ? 'animate-pulse' : ''
                        } text-[#FFD700] fill-current`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {currentTest.dogs} dogs • {currentTest.plan}
                  </span>
                </div>

                <div className="relative">
                  <Quote size={24} className="absolute -top-2 -left-2 text-[#4CAF50] opacity-50" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {currentTest.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#4CAF50] scale-125' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 rounded-full shadow-lg transition-all duration-300"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Review Cards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center">
              Recent Reviews
            </h3>
            
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ${
                    index === currentReview 
                      ? 'scale-105 border-2 border-[#4CAF50]' 
                      : 'scale-100 opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#A8F483] to-[#4CAF50] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{review.name}</h4>
                        <p className="text-xs text-gray-600">{review.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-[#FFD700] fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Overall rating */}
            <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] rounded-2xl p-6 text-white text-center">
              <div className="text-3xl font-black mb-2">4.9 ⭐</div>
              <p className="text-sm opacity-90">Average rating from 500+ customers</p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#FFD700] fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLove;
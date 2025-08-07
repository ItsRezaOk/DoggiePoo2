import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

interface ServiceCardsProps {
  isFirstTimeSubscriber?: boolean;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({
  isFirstTimeSubscriber = false,
}) => {
  const services = [
    {
      name: "Basic Weekly",
      subtitle: "1 Dog",
      price: 11.25,
      period: "week",
      description: "Perfect for single pup households",
      features: [
        "Weekly waste removal",
        "1 dog",
        "Basic yard cleanup",
        "Reliable service",
        "Eco-friendly disposal"
      ],
      color: "from-[#D0E5F2] to-[#88B0BF]",
      icon: Check,
      popular: false
    },
    {
      name: "Standard Weekly",
      subtitle: "2 Dogs",
      price: 17.5,
      period: "week",
      description: "Ideal for two furry friends",
      features: [
        "Weekly waste removal",
        "2 dogs",
        "Thorough yard cleanup",
        "Priority scheduling",
        "Eco-friendly disposal"
      ],
      color: "from-[#BFD8E2] to-[#5B84B1]",
      icon: Star,
      popular: false
    },
    {
      name: "Premium Weekly",
      subtitle: "3+ Dogs",
      price: 22.5,
      period: "week",
      description: "For homes with three or more dogs",
      features: [
        "Weekly waste removal",
        "3+ dogs",
        "Deep yard sanitization",
        "Priority scheduling",
        "Eco-friendly disposal"
      ],
      color: "from-[#FFCF8B] to-[#F6B26B]",
      icon: Zap,
      popular: false
    },
    {
      name: "Twice-Weekly Deluxe",
      subtitle: "Add-On",
      price: 8.75,
      period: "week",
      description: "Flat $35/month extra for a second visit",
      features: [
        "Twice-weekly premium service",
        "Unlimited dogs",
        "Deep sanitization",
        "Free waste bag dispenser",
        "Priority support",
        "Satisfaction guarantee"
      ],
      color: "from-[#E27D60] to-[#C85A5A]",
      icon: Crown,
      popular: true,
      glow: true
    }
  ];

  return (
    <section id="service-cards" className="py-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From basic cleanup to premium care, we've got the perfect plan for your pack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  service.glow ? 'animate-pulse' : ''
                }`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#E27D60] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Service header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${service.color} shadow-lg mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-800 mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.subtitle}
                  </p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-black text-gray-800">
                      ${service.price}
                    </span>
                    <span className="text-sm text-gray-600">/{service.period}</span>
                  </div>
                  <p className="text-xs text-gray-500">Billed monthly</p>
                  {isFirstTimeSubscriber && (
                    <p className="text-xs text-green-600">
                      First week free when you pay for a month
                    </p>
                  )}

                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#5B84B1] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                  service.popular
                    ? 'bg-gradient-to-r from-[#E27D60] to-[#C85A5A] text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                  {service.popular ? 'Choose Deluxe' : 'Select Plan'}
                </button>

                {/* Decorative icon */}
                <div className="absolute -bottom-2 -right-2 text-2xl opacity-20">
                  ✨
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which plan is right for you?
          </p>
          <button className="group relative px-8 py-4 bg-[#5B84B1] hover:bg-[#4A698B] text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">Get Personalized Recommendation</span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
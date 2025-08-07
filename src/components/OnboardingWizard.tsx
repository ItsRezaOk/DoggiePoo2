import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Users, Calendar, Check } from 'lucide-react';

interface OnboardingWizardProps {
  isFirstTime?: boolean;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ isFirstTime = false }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    address: '',
    zip: '',
    dogCount: 1,
    plan: '',
    serviceDay: '',
    paymentMethod: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Service Location",
      icon: MapPin,
      description: "Enter your address to check service availability"
    },
    {
      id: 2,
      title: "Dogs & Plan",
      icon: Users,
      description: "Tell us about your pack and choose your plan"
    },
    {
      id: 3,
      title: "Schedule & Pay",
      icon: Calendar,
      description: "Pick your service day and complete payment"
    }
  ];

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

  const extraVisitFee = 35 / 4; // $35 per month spread over 4 weeks

  const plans = [
    {
      id: 'weekly-basic',
      name: 'Weekly Basic',
      price: getWeeklyPrice(formData.dogCount),
      period: 'week',
      description: `Perfect for ${formData.dogCount === 5 ? '5+' : formData.dogCount} dog${formData.dogCount > 1 ? 's' : ''}`,
      features: ['Weekly service', 'Basic cleanup', 'Eco-friendly disposal']
    },
    {
      id: 'deluxe',
      name: 'Twice-Weekly Deluxe',
      price: getWeeklyPrice(formData.dogCount) + extraVisitFee,
      period: 'week',
      description: 'Unlimited dogs, premium service',
      features: ['Twice-weekly service', 'Unlimited dogs', 'Deep sanitization', 'Free dispenser'],
      popular: true
    },
    {
      id: 'ala-carte-walk',
      name: 'Ala-Carte Walk',
      price: 25.5,
      period: 'hour',
      description: 'One-hour private walk',
      features: ['Private walk', 'Flexible scheduling']
    }
  ];

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete order
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progress = (currentStep / 3) * 100;

  return (
    <section id="onboarding-wizard" className="py-20 bg-gradient-to-br from-[#BFD8E2] to-[#5B84B1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-xl text-white/90">
            Join hundreds of happy customers in under 2 minutes
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-[#FFCF8B] text-gray-800' 
                      : isActive 
                        ? 'bg-white text-[#5B84B1]' 
                        : 'bg-white/30 text-white'
                  }`}>
                    {isCompleted ? <Check size={24} /> : <Icon size={24} />}
                  </div>
                  <div className="text-center mt-2">
                    <h3 className="font-bold text-white text-sm">{step.title}</h3>
                    <p className="text-white/80 text-xs hidden sm:block">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Progress bone */}
          <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#FFCF8B] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-xs font-bold">🦴</div>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Step 1: Address */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Where should we scoop?
                </h3>
                <p className="text-gray-600">
                  Enter your address to check if we service your area
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    placeholder="123 Main Street"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B84B1] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={formData.zip}
                    onChange={(e) => updateFormData('zip', e.target.value)}
                    placeholder="12345"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B84B1] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="bg-[#BFD8E2] rounded-lg p-4 text-center">
                <p className="text-gray-800 font-bold">
                  ✅ Great news! We service your area
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Dogs & Plan */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Tell us about your pack
                </h3>
                <p className="text-gray-600">
                  How many dogs will we be helping?
                </p>
              </div>
              
              {/* Dog Counter */}
              <div className="text-center">
                <div className="flex justify-center items-center gap-4 mb-6">
                  <button
                    onClick={() => updateFormData('dogCount', Math.max(1, formData.dogCount - 1))}
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    -
                  </button>
                  <div className="text-4xl font-black text-[#5B84B1]">
                    {formData.dogCount === 5 ? '5+' : formData.dogCount}
                  </div>
                  <button
                    onClick={() => updateFormData('dogCount', Math.min(5, formData.dogCount + 1))}
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-600 mb-6">
                  {formData.dogCount === 5 ? '5+' : formData.dogCount} dog{formData.dogCount > 1 ? 's' : ''} selected
                </p>
              </div>

              {/* Plan Selection */}
              <div className="grid md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => updateFormData('plan', plan.id)}
                    className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                      formData.plan === plan.id
                        ? 'border-[#5B84B1] bg-[#BFD8E2]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#E27D60] text-white px-3 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">
                        {plan.name}
                      </h4>
                    <div className="text-2xl font-black text-gray-800 mb-2">
                      ${plan.price}
                      <span className="text-sm font-normal text-gray-600">/{plan.period}</span>
                    </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {plan.description}
                      </p>

                      {plan.id === 'ala-carte-walk' && isFirstTime && (
                        <p className="text-sm font-bold text-[#E27D60] mb-4">
                          First walk: $10 for 30 min
                        </p>
                      )}

                      <ul className="space-y-1 text-sm text-gray-600">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check size={16} className="text-[#5B84B1]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Schedule & Pay */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Almost there!
                </h3>
                <p className="text-gray-600">
                  Choose your service day and complete payment
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Preferred Service Day
                  </label>
                  <select
                    value={formData.serviceDay}
                    onChange={(e) => updateFormData('serviceDay', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B84B1] focus:border-transparent"
                  >
                    <option value="">Select a day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => updateFormData('paymentMethod', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B84B1] focus:border-transparent"
                  >
                    <option value="">Select payment method</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Order Summary</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Service Address:</span>
                    <span>{formData.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dogs:</span>
                    <span>{formData.dogCount === 5 ? '5+' : formData.dogCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plan:</span>
                    <span>{plans.find(p => p.id === formData.plan)?.name}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-800">
                    <span>Total (monthly):</span>
                    <span>
                      {
                        (() => {
                          const plan = plans.find(p => p.id === formData.plan);
                          if (!plan) return '$0';
                          const multiplier = plan.period === 'week' ? 4 : 1;
                          return `$${plan.price * multiplier}`;
                        })()
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-all duration-300"
            >
              <ChevronLeft size={20} />
              Back
            </button>
            
            <button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && (!formData.address || !formData.zip)) ||
                (currentStep === 2 && !formData.plan) ||
                (currentStep === 3 && (!formData.serviceDay || !formData.paymentMethod))
              }
              className="flex items-center gap-2 px-6 py-3 bg-[#5B84B1] hover:bg-[#4A698B] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all duration-300"
            >
              {currentStep === 3 ? 'Complete Order' : 'Next'}
              {currentStep < 3 && <ChevronRight size={20} />}
            </button>
          </div>
        </div>

        {/* Confetti */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 animate-ping"
                  style={{
                    left: `${Math.random() * 400 - 200}px`,
                    top: `${Math.random() * 400 - 200}px`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: '2s'
                  }}
                >
                  🎉
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OnboardingWizard;
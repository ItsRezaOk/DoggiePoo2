import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Recycle, Snowflake, Calendar } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is the service safe for my pets and family?",
      answer: "Absolutely! We never drop the ball—or the poop! Our trained crew uses eco-friendly cleaning products and follows strict safety protocols. All waste is double-bagged and disposed of properly at licensed facilities.",
      icon: Shield,
      category: "Safety"
    },
    {
      question: "How do you dispose of the waste?",
      answer: "We're paw-sitively committed to the environment! All waste goes to licensed disposal facilities, never landfills. We use biodegradable bags and can provide you with a complimentary scented dispenser for your own cleanup needs.",
      icon: Recycle,
      category: "Environment"
    },
    {
      question: "Do you provide service during winter?",
      answer: "Rain or shine, snow or sleet, we're always on our feet! We provide year-round service in most areas. During extreme weather, we may reschedule within 24 hours for safety, but we never paws our commitment to you.",
      icon: Snowflake,
      category: "Weather"
    },
    {
      question: "Can I cancel or pause my service anytime?",
      answer: "Of course! We don't want to hound you into staying. You can cancel anytime with 24-hour notice. Going on vacation? We can paws your service temporarily and resume when you return.",
      icon: Calendar,
      category: "Flexibility"
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We're not just barking up the wrong tree—we guarantee satisfaction! If you're not 100% happy, we'll re-scoop for free within 24 hours. Still not satisfied? We'll refund that service visit, no questions asked.",
      icon: Shield,
      category: "Guarantee"
    },
    {
      question: "Do I need to be home during service?",
      answer: "Nope! We're the top dogs at independent service. As long as we can access your yard, we'll get the job done. We'll send you a photo when complete so you can see the paw-some results.",
      icon: Shield,
      category: "Convenience"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FFF8F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers! (And probably a pun or two)
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5B84B1] to-[#4A698B] rounded-full flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-[#BFD8E2] text-[#5B84B1] text-xs font-bold rounded-full mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-800">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp size={24} className="text-gray-600" />
                    ) : (
                      <ChevronDown size={24} className="text-gray-600" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <div className="pl-16">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#5B84B1] to-[#4A698B] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-white/90 mb-6">
              We're here to help! Our friendly team is ready to answer any questions about our service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#5B84B1] font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
                Chat with Us
              </button>
              <button className="px-8 py-3 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300">
                Call (555) SCOOP-ME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';
import { X, Gift, Star } from 'lucide-react';

interface ExitIntentPopupProps {
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFCF8B] to-[#F6B26B] p-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-black text-white mb-2">
            Wait! Don't Leave Empty-Handed
          </h3>
          <p className="text-white/90">
            Exclusive offer for Twice-Weekly Deluxe customers only!
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎁</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              FREE Scented Waste-Bag Dispenser
            </h4>
            <p className="text-gray-600 text-sm">
              Worth $25 - Yours free when you sign up for Twice-Weekly Deluxe today!
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#5B84B1] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-700">Premium scented bags included</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#5B84B1] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-700">Weather-resistant mounting</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#5B84B1] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-700">Unlimited dogs covered</span>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-[#FFCF8B] rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 justify-center">
              <Star size={16} className="text-gray-800" />
              <span className="text-sm font-bold text-gray-800">
                Limited time offer - Only for new Deluxe subscribers!
              </span>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full py-3 bg-gradient-to-r from-[#5B84B1] to-[#4A698B] hover:from-[#4A698B] hover:to-[#5B84B1] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105">
            Claim My Free Dispenser + Start Deluxe
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            No commitment. Cancel anytime. Offer expires in 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
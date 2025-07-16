import React, { useState } from 'react';
import { Gift, Users, Share2, Trophy } from 'lucide-react';

const ReferralRewards = () => {
  const [referralCode] = useState('SCOOP-FRIEND-2024');
  const [referralCount] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  const rewards = [
    {
      referrals: 1,
      reward: '$25 Credit',
      description: 'First friend gets you started',
      icon: '🎁',
      earned: referralCount >= 1
    },
    {
      referrals: 3,
      reward: 'Free Month',
      description: 'Three friends = one month free',
      icon: '🏆',
      earned: referralCount >= 3
    },
    {
      referrals: 5,
      reward: 'VIP Status',
      description: 'Priority scheduling & support',
      icon: '⭐',
      earned: referralCount >= 5
    },
    {
      referrals: 10,
      reward: 'Captain Badge',
      description: 'Official Captain Scoop status',
      icon: '🦸‍♂️',
      earned: referralCount >= 10
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Captain Scoop Dog Waste Removal',
        text: 'Get your first month 50% off with my referral code!',
        url: `https://captainscoop.com/ref/${referralCode}`
      });
    } else {
      navigator.clipboard.writeText(referralCode);
      setShowBadge(true);
      setTimeout(() => setShowBadge(false), 2000);
    }
  };

  return (
    <section id="referral-rewards" className="py-20 bg-gradient-to-br from-[#FFD700] to-[#FFA500]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Fetch a Friend Program
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Share the love and earn rewards when your friends join Captain Scoop
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Referral Dashboard */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Your Referral Dashboard
              </h3>
              <p className="text-gray-600">
                Share your code and track your rewards
              </p>
            </div>

            {/* Referral Code */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Referral Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralCode}
                  readOnly
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg font-mono text-center"
                />
                <button
                  onClick={handleShare}
                  className="px-6 py-3 bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                >
                  <Share2 size={20} />
                  Share
                </button>
              </div>
              {showBadge && (
                <div className="mt-2 text-sm text-green-600 font-bold">
                  Code copied to clipboard!
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#A8F483] to-[#4CAF50] rounded-2xl p-4 text-center">
                <div className="text-2xl font-black text-white mb-1">
                  {referralCount}
                </div>
                <p className="text-white/90 text-sm">Friends Referred</p>
              </div>
              <div className="bg-gradient-to-br from-[#9DE5FF] to-[#00B4FF] rounded-2xl p-4 text-center">
                <div className="text-2xl font-black text-white mb-1">
                  ${referralCount * 25}
                </div>
                <p className="text-white/90 text-sm">Credits Earned</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="w-full py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-gray-800 font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                Invite Friends Now
              </button>
            </div>
          </div>

          {/* Rewards Track */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B6B] to-[#FF4444] rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Reward Milestones
              </h3>
              <p className="text-gray-600">
                Unlock amazing rewards as you refer friends
              </p>
            </div>

            <div className="space-y-4">
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    reward.earned
                      ? 'bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white'
                      : 'bg-gray-50 text-gray-600'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    reward.earned ? 'bg-white/20' : 'bg-white'
                  }`}>
                    {reward.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">
                        {reward.referrals} referral{reward.referrals > 1 ? 's' : ''}
                      </h4>
                      <span className="font-black text-lg">
                        {reward.reward}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      reward.earned ? 'text-white/90' : 'text-gray-500'
                    }`}>
                      {reward.description}
                    </p>
                  </div>
                  
                  {reward.earned && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Next reward */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">
                Next reward at {rewards.find(r => !r.earned)?.referrals || 10}+ referrals
              </p>
              <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] h-full transition-all duration-500"
                  style={{ 
                    width: `${Math.min(100, (referralCount / (rewards.find(r => !r.earned)?.referrals || 10)) * 100)}%` 
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16 bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">1. Share Your Code</h4>
              <p className="text-white/80 text-sm">
                Send your unique referral code to friends and family
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">2. Friend Signs Up</h4>
              <p className="text-white/80 text-sm">
                They get 50% off their first month, you get credit
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">3. Earn Rewards</h4>
              <p className="text-white/80 text-sm">
                Get credits, free months, and exclusive perks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralRewards;
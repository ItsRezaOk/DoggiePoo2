import React from 'react';
import { Crown } from 'lucide-react';

const DeluxeSpotlight = () => {
  return (
    <section className="py-20 bg-[#FFF8F2]">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <Crown size={48} className="mx-auto text-[#FFD700]" />
        <h2 className="text-4xl font-black text-[#4CAF50]">Deluxe Twice-Weekly Plan</h2>
        <p className="text-lg text-gray-700">
          Unlimited dogs, pristine yards, and a fresh start every visit.
        </p>
      </div>
    </section>
  );
};

export default DeluxeSpotlight;

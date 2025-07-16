import React, { useState, useEffect } from 'react';

const LogoBanner = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-10 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between bg-white rounded-full shadow-lg px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🐶</span>
            <span className="font-black text-lg text-gray-800">Captain Scoop</span>
          </div>
          <div className="hidden sm:block text-3xl">🎈</div>
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;

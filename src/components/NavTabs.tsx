import React from 'react';

const NavTabs = () => {
  const tabs = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Plans', href: '#service-cards' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="sticky top-10 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center gap-6 py-3">
          {tabs.map((tab) => (
            <li key={tab.href}>
              <a href={tab.href} className="text-gray-700 font-semibold hover:text-[#4CAF50]">
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavTabs;

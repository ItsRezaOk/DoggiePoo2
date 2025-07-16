import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-[#FFF8F2]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
      <div className="h-64 md:h-80 bg-gray-200 rounded-3xl flex items-center justify-center shadow-inner">
        {/* Replace the emoji with your photo */}
        <span className="text-6xl">📸</span>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-black text-gray-800">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm an ambitious entrepreneur and software engineering student at Iowa State University with a deep love for dogs. My mission is to build innovative businesses that help pay for my tuition while creating software that drives America forward.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          From pet care services to cutting-edge apps, I'm always exploring new ideas that bring value to people—and their pups. Your support fuels my education and my dream of launching tech ventures that make a real difference.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          If my story inspires you, consider partnering with me or contributing to my projects. Together, we can build a brighter future for our communities and our four-legged friends.
        </p>
      </div>
    </div>
  </section>
);

export default About;

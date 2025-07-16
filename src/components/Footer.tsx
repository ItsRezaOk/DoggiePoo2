import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-20 bg-gradient-to-r from-[#4CAF50] to-[#45a049] overflow-hidden">
      {/* Paw wave border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#FFF8F2]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Ready for a Paw-fect Yard?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join hundreds of happy customers who never worry about yard cleanup again
          </p>
          <button className="group relative px-8 py-4 bg-[#FFD700] hover:bg-[#FFA500] text-gray-800 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Start Your Service Today</span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        </div>

        {/* Footer content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                <span className="text-2xl">🦸‍♂️</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Captain Scoop</h3>
                <p className="text-white/80">Dog Waste Removal</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              The premier dog waste removal service in your area. We're not just picking up poop—we're giving you back your time, your clean yard, and your peace of mind.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#service-cards" className="text-white/80 hover:text-white transition-colors duration-200">Our Plans</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#before-after-gallery" className="text-white/80 hover:text-white transition-colors duration-200">Before & After</a></li>
              <li><a href="#customer-love" className="text-white/80 hover:text-white transition-colors duration-200">Testimonials</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white/80" />
                <span className="text-white/80">(555) SCOOP-ME</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white/80" />
                <span className="text-white/80">hello@captainscoop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-white/80" />
                <span className="text-white/80">Serving Greater Metro Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 Captain Scoop Dog Waste Removal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFD700] rounded-full opacity-10 transform translate-x-[-50%] translate-y-[50%]"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#9DE5FF] rounded-full opacity-10 transform translate-x-[50%] translate-y-[-50%]"></div>
    </footer>
  );
};

export default Footer;
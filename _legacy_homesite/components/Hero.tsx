import React from 'react';
import { BookingWidget } from './BookingWidget';

export const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image Container */}
      <div className="h-[600px] w-full relative overflow-hidden">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="City Skyline" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/10"></div>
        
        {/* Hero Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            把每一程，做到心安
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10 font-light tracking-wide">
            无论是接送、出游还是跨城，只要你需要，我们都可靠如初
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white">
            <span className="px-4 py-1 border-l-2 border-white/50 backdrop-blur-sm">安全合规</span>
            <span className="px-4 py-1 border-l-2 border-white/50 backdrop-blur-sm">响应快</span>
            <span className="px-4 py-1 border-l-2 border-white/50 backdrop-blur-sm">覆盖广</span>
            <span className="px-4 py-1 border-l-2 border-white/50 backdrop-blur-sm">报价透明</span>
          </div>
        </div>
      </div>

      {/* Floating Widget */}
      <div className="px-4">
        <BookingWidget />
      </div>
    </div>
  );
};
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CasesSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#1a1c4b]">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src="https://picsum.photos/1920/800?random=20" 
          alt="Concert Crowd" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c4b] via-[#1a1c4b]/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-end justify-between h-full">
        <div className="max-w-3xl text-white">
          <h4 className="text-lg text-gray-300 mb-4">服务案例</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            淄博青春之城演唱会指定<br/>
            用车单位
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl">
            全程覆盖接送站/酒店/场馆，现场调度与应急备班均到位。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm text-gray-300 border-t border-white/10 pt-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>接送站/酒店/场馆</span>
                <span className="text-gray-500">多线路同时调度</span>
            </div>
             <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>现场协调员</span>
                <span className="text-gray-500">司机统一礼仪与车检</span>
            </div>
             <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>应急备班</span>
                <span className="text-gray-500">全程服务反馈</span>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-0 flex gap-4 self-end md:self-end">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/10">
                <ChevronLeft size={18}/>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition-colors">
                <ChevronRight size={18}/>
            </button>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Calendar, MapPin, Car, ArrowRight } from 'lucide-react';

export const BookingWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-1.5 flex flex-col lg:flex-row items-center gap-2 max-w-5xl mx-auto -mt-16 relative z-20 border border-gray-100">
      
      {/* Service Type */}
      <div className="w-full lg:w-auto min-w-[140px] p-2 border-b lg:border-b-0 lg:border-r border-gray-200">
        <label className="block text-xs text-gray-500 mb-1 font-medium">用车类型</label>
        <select className="w-full bg-transparent font-bold text-gray-800 outline-none cursor-pointer appearance-none pr-4">
          <option>包车</option>
          <option>租车</option>
          <option>接送机</option>
          <option>企业班车</option>
        </select>
      </div>

      {/* Route */}
      <div className="w-full lg:flex-1 p-2 border-b lg:border-b-0 lg:border-r border-gray-200 flex items-center gap-2">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1 font-medium">出发地</label>
          <div className="flex items-center">
             <input type="text" defaultValue="淄博" className="w-full font-bold text-gray-800 outline-none placeholder-gray-300" />
          </div>
        </div>
        <div className="text-gray-300 px-2">
          <ArrowRight size={16} />
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1 font-medium">目的地</label>
          <div className="flex items-center">
             <input type="text" defaultValue="西藏" className="w-full font-bold text-gray-800 outline-none placeholder-gray-300" />
          </div>
        </div>
      </div>

      {/* Date Range */}
      <div className="w-full lg:w-auto p-2 border-b lg:border-b-0 lg:border-r border-gray-200 min-w-[280px]">
        <label className="block text-xs text-gray-500 mb-1 font-medium flex items-center gap-1">
          <Calendar size={12} /> 行程规划
        </label>
        <div className="flex items-center gap-1">
            <div className="relative">
              <input 
                  type="date" 
                  className="font-bold text-gray-800 outline-none text-xs w-[110px]"
                  defaultValue="2025-11-15"
              />
            </div>
            <span className="text-gray-400 text-xs">-</span>
            <div className="relative">
              <input 
                  type="date" 
                  className="font-bold text-gray-800 outline-none text-xs w-[110px]"
                  defaultValue="2025-12-05"
              />
            </div>
        </div>
      </div>

      {/* Vehicle Selection */}
      <div className="w-full lg:w-auto min-w-[160px] p-2">
        <label className="block text-xs text-gray-500 mb-1 font-medium flex items-center gap-1">
            <Car size={12} /> 车型选择
        </label>
        <select className="w-full bg-transparent font-bold text-gray-800 outline-none cursor-pointer appearance-none">
          <option>6-7座MPV</option>
          <option>15-20座中巴</option>
          <option>45-50座大巴</option>
          <option>豪华轿车</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="w-full lg:w-auto p-2">
        <button className="w-full lg:w-auto bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded transition-colors whitespace-nowrap">
          预约出发
        </button>
      </div>
    </div>
  );
};
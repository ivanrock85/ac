import React from 'react';
import { VEHICLES } from '../constants';

export const FleetSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">全场景车辆覆盖 7X24小时调度</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            从商务轿车、MPV 到中巴/大巴，满足接待、班车、活动等多场景需求。<br/>
            统一维护与司机培训，确保准时、安全、舒适。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {VEHICLES.map((vehicle) => (
            <div key={vehicle.id} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-[16/10] mb-4 overflow-hidden rounded-lg bg-gray-50 p-4">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{vehicle.name}</h3>
              <div className="flex gap-2">
                {vehicle.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
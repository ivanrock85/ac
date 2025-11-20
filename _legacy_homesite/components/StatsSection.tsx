import React from 'react';
import { STATS } from '../constants';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-3">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-gray-900">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
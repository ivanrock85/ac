import React from 'react';
import { SCENARIOS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const ScenariosSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">服务场景</h2>
          <p className="text-gray-500">适配多元出行需求，按路线与时间灵活组合</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCENARIOS.map((scenario) => (
            <div 
              key={scenario.id} 
              className={`
                relative p-8 rounded-xl overflow-hidden transition-all duration-300 group
                ${scenario.isActive ? 'bg-blue-700 text-white shadow-2xl scale-105 z-10' : 'bg-white text-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1'}
              `}
            >
              {/* Icon Background Effect */}
              <div className={`absolute -right-4 -top-4 opacity-5 transform scale-[2.5] rotate-12 ${scenario.isActive ? 'text-white' : 'text-blue-900'}`}>
                <scenario.icon size={100} />
              </div>

              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm ${scenario.isActive ? 'bg-white text-blue-700' : 'bg-blue-50 text-blue-600'}`}>
                <scenario.icon size={28} />
              </div>

              <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
              <p className={`text-xs mb-4 font-medium ${scenario.isActive ? 'text-blue-200' : 'text-gray-400'}`}>
                {scenario.subtitle}
              </p>
              <p className={`text-sm mb-8 leading-relaxed ${scenario.isActive ? 'text-white/80' : 'text-gray-500'}`}>
                {scenario.description}
              </p>

              <button className={`
                text-xs font-medium py-2 px-4 rounded transition-colors flex items-center gap-2
                ${scenario.isActive ? 'bg-white text-blue-700 hover:bg-blue-50' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}>
                查看方案 <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">联系我们</h2>
            <p className="text-gray-500 mb-8">全天候客服支持，电话与在线通道随时可用</p>
            
            <div className="flex items-baseline gap-3 mb-4">
                <span className="text-gray-900 font-bold text-lg">咨询热线：</span>
                <span className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">188-0533-1586</span>
            </div>
            <p className="text-sm text-gray-500">提供淄博及周边的线路规划、车型建议、报价确认全流程支持。表单/电话/微信/企业对接均可。</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors shadow-lg shadow-blue-200">
              在线咨询
            </button>
            <button className="px-8 py-3 bg-white text-blue-700 border border-blue-700 font-medium rounded-full hover:bg-blue-50 transition-colors">
              获取行程建议
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 text-blue-900">
              <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </div>
              <span className="font-bold text-xl">安程客运</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              专业包车与车辆租赁服务，覆盖商务接待、会议班车、旅游团建等多场景。
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">快速导航</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">包车服务</a></li>
              <li><a href="#" className="hover:text-blue-600">车辆租赁</a></li>
              <li><a href="#" className="hover:text-blue-600">旅游线路</a></li>
              <li><a href="#" className="hover:text-blue-600">车型展示</a></li>
              <li><a href="#" className="hover:text-blue-600">客户案例</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">支持</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">关于安程</a></li>
              <li><a href="#" className="hover:text-blue-600">联系我们</a></li>
              <li><a href="#" className="hover:text-blue-600">后台入口</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="font-medium text-gray-900">服务热线:</span> 
                188-0533-1586
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-gray-900">邮箱:</span> 
                jiang@ancheng.com
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-gray-900">地址:</span> 
                山东省淄博市
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; 2025 安程客运, 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};
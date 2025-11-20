import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3 text-gray-800' : 'bg-transparent py-5 text-white'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          </div>
          <span className="font-bold text-xl tracking-wide">安程客运</span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:opacity-80">首页</a>
          <a href="#" className="hover:opacity-80">包车</a>
          <a href="#" className="hover:opacity-80">租赁</a>
          <a href="#" className="hover:opacity-80">旅游</a>
          <a href="#" className="hover:opacity-80">案例</a>
          <a href="#" className="hover:opacity-80">联系我们</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-900 absolute top-full left-0 w-full shadow-xl py-4 px-6 flex flex-col space-y-4">
          <a href="#" className="block font-medium">首页</a>
          <a href="#" className="block font-medium">包车</a>
          <a href="#" className="block font-medium">租赁</a>
          <a href="#" className="block font-medium">旅游</a>
          <a href="#" className="block font-medium">联系我们</a>
        </div>
      )}
    </nav>
  );
};
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../images/logo.png';

// 導航欄組件
function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 桌面端下拉
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 手機版菜單
  const [isSticky, setIsSticky] = useState(false); 
  const dropdownRef = useRef(null); 
  const navRef = useRef(null); 
  const mobileMenuRef = useRef(null); // 手機版菜單容器

  const brands = [
      { name: "實拍案例", link: "/cases"},
      { name: "Central 中環", link: "/cases/Central"},
      { name: "Hung Hom 紅磡", link: "/cases/HungHom"},
      { name: "North Point 北角", link: "/cases/NorthPoint"},
      { name: "Sai Wan 西環", link: "/cases/SaiWan"},
      { name: "Tseung Kwan O 將軍澳", link: "/cases/TKO"},
      { name: "Whampoa 黃埔", link: "/cases/Whampoa"},
      { name: "LOHAS Park 日出康城", link: "/cases/Lohas"},
  ]

  // 滾動釘頂邏輯
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 點擊外部關閉桌面端下拉/手機版菜單
  useEffect(() => {
    const handleClickOutside = (e) => {
      // 關閉桌面端下拉
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
      // 關閉手機版菜單（移除 isMobileDropdownOpen 相關邏輯）
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen, isMobileMenuOpen]); // 移除 isMobileDropdownOpen 依賴

  // 手機版菜單開啟時鎖定頁面滾動
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // 移除 setIsMobileDropdownOpen(false) 操作
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]); // 移除 isMobileDropdownOpen 依賴

  // 整合導航欄 className
  const navClasses = `
    bg-nav-bg px-6 md:px-12 font-playfair transition-all duration-300
    sticky top-0 z-40 ${isSticky ? 'shadow-md py-3' : 'py-4'}
  `.replace(/\s+/g, ' ').trim();

  // 關閉手機版菜單的統一方法（移除 setIsMobileDropdownOpen）
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 桌面端 + 手機版頂部導航欄 */}
      <nav ref={navRef} className={navClasses}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={logo} width={135} height={40} alt="Comein Logo" />
          </Link>

          {/* 桌面端菜單（隱藏手機版） */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="text-text-primary hover:text-black transition-colors flex items-center"
              >
                實拍案例
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-nav-bg shadow-lg rounded-md py-2 z-50">
                  {brands.map((brand, index) => (
                    <a
                      key={index}
                      href={brand.link}
                      className="block px-4 py-2 text-sm text-text-primary hover:bg-white transition-colors"
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* 其他導航項 */}
            <a href="/ourstyle" className="text-text-primary hover:text-black transition-colors">家居風格</a>
            <a href="/howtoquo" className="text-text-primary hover:text-black transition-colors">如何報價？</a>
            <a href="/about" className="text-text-primary hover:text-black transition-colors">關於我們</a>
            <a href="/faq" className="text-text-primary hover:text-black transition-colors">FAQ</a>
            <a href="/blogs" className="text-text-primary hover:text-black transition-colors block py-2">Blog</a>
          </div>

          {/* 手機版漢堡按鈕（隱藏桌面版） */}
          <button
            className="md:hidden text-text-primary z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="開啟/關閉導航菜單"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* 手機版全螢幕導航菜單（新增右上角X按鈕） */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed inset-0 bg-nav-bg z-40 transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}
      >
        {/* 1. 右上角獨立關閉X按鈕 */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={closeMobileMenu}
            className="text-text-primary hover:text-black transition-colors p-2"
            aria-label="關閉導航菜單"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 2. 手機版菜單內容（全螢幕、文字置中） */}
        <div className="h-full flex flex-col items-center justify-center text-center px-6 py-10 pt-20">
          <ul className="space-y-8 text-lg font-playfair w-full">
            {/* 手機版導航項 */}
            <li><a href="/cases" className="text-text-primary hover:text-black transition-colors">實拍案例</a></li>
            <li><a href="/ourstyle" className="text-text-primary hover:text-black transition-colors">家居風格</a></li>
            <li><a href="/howtoquo" className="text-text-primary hover:text-black transition-colors">如何報價？</a></li>
            <li><a href="/about" className="text-text-primary hover:text-black transition-colors">關於我們</a></li>
            <li><a href="/faq" className="text-text-primary hover:text-black transition-colors">FAQ</a></li>
            <li><a href="/blogs" className="text-text-primary hover:text-black transition-colors block py-2">Blog</a></li>
          </ul>
        </div>
      </div>
      {/* Whatsapp 聯絡我們 */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/96035388"
          className="flex items-center bg-gradient-to-r from-cyan-100 to-blue-300 shadow-xl px-4 py-2 rounded-full text-text-primary hover:bg-gray-100 transition-colors"
        >
          <FaWhatsapp style={{ color: '#545454', fontSize: '24px' }} />
          <span className="pl-1">歡迎WhatsApp 聯絡我們查詢及索取報價</span>
        </a>
      </div>
    </>
  );
};

export default Nav;
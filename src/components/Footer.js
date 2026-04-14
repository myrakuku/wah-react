import { useState, useEffect } from 'react';

// 導航欄組件
function Footer() {
    // Footer 初始化年份狀態
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // 可選：監聽年份變化 (跨年夜自動更新)
  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    // 設置定時器，每秒檢查一次年份
    const timer = setInterval(updateYear, 1000);
    
    // 元件卸載時清除定時器
    return () => clearInterval(timer);
  }, []);
  
  return (
    <>
    <footer className="py-8 bg-white border-t border-gray-200 mb-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {currentYear} WAH! Space Studio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
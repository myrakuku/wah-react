import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import banner from '../../src/images/banner.png';
import Advan1 from '../../src/images/home/1.png';
import Advan2 from '../../src/images/home/2.png';
import Advan3 from '../../src/images/home/3.png';
import case1 from '../../src/images/CentralWyndham/1.png';
import case2 from '../../src/images/HungHom/livingroom.png';
import case3 from '../../src/images/NorthPoint/wc.png';
import case4 from '../../src/images/SaiWan/livingroom.png';
import { GiTeamIdea, GiAutoRepair } from "react-icons/gi";
import { AiFillLayout } from "react-icons/ai";
import { MdFamilyRestroom } from "react-icons/md";

// 主應用組件
export const Home = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    document.title = "WAH! Space Studio | 香港家居裝修設計 - 20年經驗 零爛尾 即時入住";
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 香港專業家居裝修設計公司，擁有20年裝修經驗，服務覆蓋300+屋苑，完成200+成功案例。主打價格透明、施工快速、零爛尾，保證高品質交付即時入住，打造白色簡約奶油質感家居空間。"
      );
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "香港裝修,香港家居設計,家居裝修,裝修公司,香港裝修報價,奶油風設計,簡約家居設計,中環裝修,零爛尾裝修,即時入住裝修"
      );
  }, []);

  // 案例圖片數據 (新增 link 欄位定義跳轉地址)
  const caseImages = [
    {
      id: 1,
      imgUrl: case1, 
      title: 'Central 中環',
      desc: '點擊查看更多圖片 | Click to see more pictures',
      link: '/cases/Central'
    },
    {
      id: 2,
      imgUrl: case2,
      title: 'Hung Hom 紅磡',
      desc: '點擊查看更多圖片 | Click to see more pictures',
      link: '/cases/HungHom'
    },
    {
      id: 3,
      imgUrl: case3, 
      title: 'North Point 北角',
      desc: '點擊查看更多圖片 | Click to see more pictures',
      link: '/cases/NorthPoint'
    },
    {
      id: 4,
      imgUrl: case4, 
      title: 'Sai Wan 西環',
      desc: '點擊查看更多圖片 | Click to see more pictures',
      link: '/cases/SaiWan'
    }
  ];

  // 數據統計模組資料
  const stats = [
    { number: '20', label: '設計及裝修經驗', suffix: '年+' },
    { number: '300', label: '屋苑面積', suffix: '+' },
    { number: '200', label: '客戶人數', suffix: '+' },
    { number: '100', label: '安心即時入住', suffix: '%' },
    { number: '0', label: '爛尾', suffix: '' },
  ];

  // 1. 创建统计区块的引用，用于检测元素是否可见
  const statsRef = useRef(null);
  // 2. 标记动画是否已触发，避免重复执行
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // 3. 监听滚动事件，检测元素可见性
  // 🔥 关键修复：添加 eslint 忽略注释，保留原有逻辑
  useEffect(() => {
    const handleScroll = () => {
      if (animationTriggered) return; // 动画已执行则直接返回

      const element = statsRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight - 100 && rect.bottom >= 0;

      if (isVisible) {
        setAnimationTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps  
    // 忽略不必要依赖警告
  }, [animationTriggered]);

  // 带滚动触发的数字动画组件
  const AnimatedNumber = ({ targetNumber, suffix, delay = 0 }) => {
    const [displayNumber, setDisplayNumber] = useState(0);

    useEffect(() => {
      if (!animationTriggered) return;

      const timer = setTimeout(() => {
        const end = parseInt(targetNumber);
        const duration = 2000;
        const frameRate = 16;
        const totalFrames = duration / frameRate;
        let frame = 0;

        const interval = setInterval(() => {
          frame++;
          const progress = Math.min(1, frame / totalFrames);
          const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          
          const currentNumber = Math.floor(easeProgress * end);
          setDisplayNumber(currentNumber);

          if (frame >= totalFrames) {
            clearInterval(interval);
            setDisplayNumber(end);
          }
        }, frameRate);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
      // 🔥 补充：给 AnimatedNumber 内的 useEffect 也加忽略（避免连锁警告）
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animationTriggered, targetNumber, delay]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
        {displayNumber}{suffix}
      </span>
    );
  };

  // 增強版 PrimaryButton 元件 (支援多種跳轉方式)
  const PrimaryButton = ({ 
    children, 
    href = '#',        
    to,                
    target = '_self',  
    rel = 'noopener noreferrer', 
    onClick            
  }) => {
    if (to) {
      return (
        <Link
          to={to}
          onClick={onClick}
          className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-50 transition-colors text-sm md:text-base"
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? rel : undefined}
        onClick={onClick}
        className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-50 transition-colors text-sm md:text-base"
      >
        {children}
      </a>
    );
  };
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* 英雄區塊 (Banner) */}
      <section className="relative w-full h-[600px] md:h-[600px] overflow-hidden">
        {/* 背景圖片 (替換為實際圖片路徑) */}
        <div className="absolute inset-0 overflow-hidden">
          <main className="w-full h-[80vh] flex items-center justify-center overflow-hidden">
            <img 
              src={banner} 
              alt="Hero Banner" 
              className="w-auto h-full min-w-full object-cover object-center" 
            />
          </main>
        </div>
        
        {/* 半透明遮罩 */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* 文字內容 */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            WAH ! Space Studio
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 max-w-2xl">
            二十年匠心不只是裝修，更是創造理想家園
          </p>
          <p className="max-w-md text-sm md:text-base leading-relaxed">
            在 WAH ! Space Studio，我們深信好工程勝過千言萬語。我們致力於提供最可靠的施工服務，從清拆到面飾，每一個環節都由專業團隊親自把關。我們保證工程絕不拖欠、施工現場收尾乾淨，並堅持在約定時間內準時交貨，讓裝修過程變得省心、放心、有保障。
          </p>
        </div>
      </section>



      {/* 我們的專業區塊 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 border-l-4 border-gray-300 pl-4">
            WAH! Professional 我們的專業
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* 經驗豐富的團隊 */}
            <div className="text-center md:text-left ">
              <div className="text-gray-400 text-6xl mb-4 flex items-center justify-center md:justify-start"><GiTeamIdea /></div>
              <h3 className="text-lg font-semibold mb-3">經驗豐富的團隊</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                我們的設計和裝修團隊擁有超過20年的行業經驗，擅長將客戶的想法與市場潮流相結合，為每個專案注入生命。
              </p>
            </div>

            {/* 廣泛的屋苑面積 */}
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-6xl mb-4 flex items-center justify-center md:justify-start"><AiFillLayout /></div>
              <h3 className="text-lg font-semibold mb-3">廣泛的屋苑面積</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                擁有300多個屋苑的設計面積，讓我們能夠提供多樣化的設計方案，滿足不同客戶的需求。
              </p>
            </div>

            {/* 成功案例 */}
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-6xl mb-4 flex items-center justify-center md:justify-start"><MdFamilyRestroom /></div>
              <h3 className="text-lg font-semibold mb-3">成功案例</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                迄今為止，我們已成功完成超過200個項目，無論是在家居還是商業空間方面，我們的作品都受到客戶的高度評價。
              </p>
            </div>

            {/* 一年保養期 */}
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-6xl mb-4 flex items-center justify-center md:justify-start"><GiAutoRepair /></div>
              <h3 className="text-lg font-semibold mb-3">一年保養期</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                承諾一年的售後保養期，只針對非人為損壞。經技術人員鑑定屬實後，本公司將提供免費維修受影響之服務。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 數據統計區塊 */}
       <section ref={statsRef} className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <AnimatedNumber 
                  targetNumber={stat.number} 
                  suffix={stat.suffix} 
                  delay={index * 350} // 每个数字延迟150ms，依次增长
                />
                <span className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 三大優勢區塊 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 border-l-4 border-gray-300 pl-4">
            選擇WAH！三大優勢助您輕鬆入住新家
          </h2>

          {/* 想裝修但怕麻煩？ */}
          <div className="max-w-3xl mx-auto mb-12 text-left">
            <h3 className="text-lg font-semibold mb-4">想裝修但怕麻煩？</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              WAH! Space Studio 理解你對效率與性價比的追求。我們跳過繁瑣的設計堆砌，專注於「價格公道、施工極速、品質穩健」。如果您崇尚純粹實用的生活空間，並希望縮短等待期、早日入伙，我們就是您的最佳策劃夥伴。
            </p>
          </div>

          {/* 三大優勢卡片 */}
          <div className="grid grid-cols-3 gap-8">
            {/* 價格透明化 */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg shadow-sm">
                <img 
                  src={Advan1}
                  width={310}
                  height={420}
                  alt="價格透明化" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-3">價格透明化</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                我們的設計和裝修團隊擁有超過20年的行業經驗，擅長將客戶的想法與市場潮流相結合，為每個專案注入生命。
              </p>
            </div>

            {/* 快速的設計過程 */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg shadow-sm">
                <img 
                  src={Advan2}
                  width={310}
                  height={420}
                  alt="快速的設計過程" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-3">快速的設計過程</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                對於不確定自己想要什麼設計風格的客戶，我們提供多個風格範本供其選擇，讓客戶可以輕鬆找到最符合其需求的設計方案。我們的團隊會全程跟進，確保設計方案的快速落地。從初步的理念到最終執行，我們的流程極速精簡，客戶可在短短幾周內完成家居設計與施工，享受美好時光。
              </p>
            </div>

            {/* 高品質交付與即時入住 */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg shadow-sm">
                <img 
                  src={Advan3}
                  width={310}
                  height={420}
                  alt="高品質交付與即時入住" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-3">高品質交付與即時入住</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                WAH! Space Studio 的最終目標是提供高品質的裝修交付，確保客戶即時入住。通常情況下，客戶在收房之後，只需進行簡單的日常清潔，便可直接入住，而無需為清潔工作而煩惱。這種便利性特別適合那些對設計要求不高且希望快速入住的客戶，使他們能夠在最短的時間內享受舒適的居住體驗。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 過往實拍案例區塊 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-gray-300 pl-4">
            WAH! Refurbish 過往實拍案例
          </h2>

          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h3 className="text-lg font-semibold mb-4">所有圖片皆為真實拍攝取圖</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              在 WAH！Space Studio，我們承諾您所看到的每一張照片皆為工地現場實景拍攝，絕非 AI 模擬圖或設計渲染圖。這些影像直觀地記錄了我們的施工細節——從收口處理、面料平整度到整潔的工地環境。我們用最真實的完工照展示工程團隊的專業水準，確保您看到的工藝，就是我們交付給您的質量。
            </p>
          </div>

          {/* 圖片網格核心區 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {caseImages.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer" // 新增cursor-pointer提示可點擊
              style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
            >
              {/* 方式1: 使用 React Router Link (SPA 內部跳轉) */}
              <Link to={item.link} className="block w-full h-full">
                {/* 案例圖片 (固定尺寸 400x600) */}
                <img 
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: 'center' }}
                />

                {/* 文字資訊層 (響應式顯示邏輯) */}
                <div className="
                  absolute bottom-0 left-0 right-0 p-4 bg-white/90 
                  md:opacity-0 md:translate-y-full 
                  md:group-hover:opacity-100 md:group-hover:translate-y-0
                  transition-all duration-300
                ">
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

          {/* 案例標題與按鈕 */}
          <div className="text-center my-8">
            <h4 className="text-lg font-semibold mb-2">想睇更多內容？</h4>
            <p className="text-sm text-gray-500 mb-4">點擊下方按鈕看更多圖片 | Click the button below to see more pictures</p>
            <PrimaryButton to="/cases">查看更多過往實拍案例</PrimaryButton>
          </div>
        </div>
      </section>

      {/* 家居常用風格區塊 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-gray-300 pl-4">
            WAH! Style 家居常用風格
          </h2>

          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-lg font-semibold mb-4">核心理念：流行風格的精準工程實踐——打造白色、簡約、明亮的奶油質感空間</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
              在現代家居設計中，色彩、形狀和氛圍的選擇直接影響整體空間的感受。WAH! Space Studio 多數以白色、簡約、明亮以及奶油色調的配搭來創造出既時尚又溫馨的家居環境。這種設計風格不僅迎合了當今的潮流，更符合現代人對於生活品質和心靈平靜的追求。
            </p>
            <div className="text-center">
              <PrimaryButton to="/ourstyle">查看更多家居常用風格介紹</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 常見問題區塊 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-gray-300 pl-4">
            FAQ 常見問題
          </h2>

          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-lg font-semibold mb-4">裝修初步報價需要提供哪些信息？</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
              為了提供準確的裝修初步報價，您需要提供以下信息：地區、屋苑或商廈名稱、面積尺寸、工程需求與範圍、風格偏好、預算，以及其他相關細節（如有）。
            </p>
            <div className="text-center">
              <PrimaryButton to="/faq">查看更多常見問題</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* 頁腳（簡化版） */}
      <Footer />

    </div>
  );
}

export default Home;
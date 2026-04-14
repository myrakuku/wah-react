import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import { 
  FaWhatsapp, 
  FaFileAlt, 
  FaComments, 
  FaClipboardCheck, 
  FaDraftingCompass, 
  FaHammer 
} from 'react-icons/fa';

// 主應用組件
export const Quo = () => {

  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    // 1. 基礎 SEO 標籤 (核心優化)
    document.title = "";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        ""
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        ""
      );
  }, []);

  // 報價頁 SEO 配置
  useEffect(() => {
    document.title = "WAH! Space Studio | 如何報價 - 香港裝修報價流程 透明公開 | WhatsApp 9603 5388";
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 香港裝修報價流程全公開：初步報價→深入交流→現場評估→平面圖設計→最終確認執行，全程透明，WhatsApp 9603 5388 立即查詢報價！"
      );
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "香港裝修報價,裝修報價流程,家居裝修報價,裝修初步報價,WhatsApp報價,96035388,香港裝修報價查詢"
      );
  }, []);

  // 報價步驟數據 (每個步驟對應獨特 icon)
  const quoteSteps = [
    {
      id: 1,
      title: "初步報價",
      icon: <FaFileAlt className="text-blue-500 text-2xl" />,
      desc: "我們的過程從初步報價開始。我們會根據客戶的需求進行估算，釐清預算範圍和期望的風格，為後續的深入溝通打下良好的基礎。",
      note: "*需要提供香港地區、屋苑/商廈名稱、面積尺寸、工程需求與範圍、風格偏好、預算、其他細節(如有)"
    },
    {
      id: 2,
      title: "深入交流",
      icon: <FaComments className="text-blue-500 text-2xl" />,
      desc: "當客戶對初步報價表示同意後，專業團隊將親自上門，與客戶進行深入的交流。這一階段不僅有助於了解客戶的具體需求，還可以根據現場的環境進行探討，確保設計方案切合實際。"
    },
    {
      id: 3,
      title: "現場評估與設計確認",
      icon: <FaClipboardCheck className="text-blue-500 text-2xl" />,
      desc: "完成對現場的細致評估後，我們將根據客戶的需求和空間特徵，提供最終報價與設計方案。我們與客戶共同確定色彩搭配和設計元素，力求每個細節都符合客戶的期待。"
    },
    {
      id: 4,
      title: "平面圖與擺位設計",
      icon: <FaDraftingCompass className="text-blue-500 text-2xl" />,
      desc: "根據確認的設計方案，我們的團隊將製作詳細的平面圖和擺位設計。這一步驟能幫助客戶直觀地了解實際效果，並及時進行調整以達到最佳效果。"
    },
    {
      id: 5,
      title: "最終確認與執行",
      icon: <FaHammer className="text-blue-500 text-2xl" />,
      desc: "在客戶針對設計方案進行最終確認後，我們將組織專業的施工團隊開始項目貫徹。整個過程中，我們始終與客戶保持緊密聯繫，確保施工進度和質量達到預期標準。"
    }
  ];

  // 復用統一按鈕元件
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
    <>
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* 頁面標題區 */}
      <section className="py-10 bg-gray-50 border-b border-gray-200 px-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-gray-400 pl-4">
            如何報價？
          </h1>
          <div className="max-w-3xl text-gray-600 leading-relaxed mb-8">
            <p className="mb-6">
              確保客戶能在每一個階段享受到良好的體驗，這個流程分為幾個重要步驟，簡單而高效，使客戶能充分參與，從而實現理想中的空間設計。
            </p>
            {/* WhatsApp 聯繫按鈕 */}
            <div className="inline-flex items-center gap-2 px-6 py-3 text-gray-500 rounded-full border-10 border-amber-400">
              
              <FaWhatsapp className="text-4xl" />
              <span className="font-medium text-xl">請WhatsApp我們：9603 5388</span>
            </div>
          </div>
        </div>
      </section>

      {/* 報價流程步驟區 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 步驟列表 (帶引導線的時間軸布局) */}
            <div className="relative">
              {/* 豎向引導線 (僅桌面端顯示) */}
              <div className="hidden md:block absolute left-[32px] top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {quoteSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className="mb-12 relative pl-12 md:pl-20"
                >
                  {/* 步驟 icon 容器 (圓形背景) */}
                  <div className="absolute left-0 md:left-0 top-0 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border-2 border-blue-200 z-10">
                    {step.icon}
                  </div>
                  
                  {/* 步驟內容 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                    {/* 備註文字 (僅第一步顯示) */}
                    {step.note && (
                      <p className="text-sm text-gray-500 italic bg-gray-50 p-3 rounded border-l-2 border-gray-300">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 底部行動按鈕 */}
            <div className="text-center mt-16">
              <PrimaryButton href="https://wa.me/85296035388" target="_blank">
                立即 WhatsApp 查詢報價
              </PrimaryButton>
              <p className="mt-4 text-gray-500 text-sm">
                我們承諾：全程報價透明，無隱形收費，免費上門評估
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 頁腳 */}
      <Footer />

    </div>
    </>
  );
}

export default Quo;
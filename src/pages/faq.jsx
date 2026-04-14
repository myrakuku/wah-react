// FAQ.jsx (完整10個問題版本)
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

// 主應用組件
export const FAQ = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - FAQ 頁專屬
    document.title = "FAQ 常見問題 | WAH! Space Studio 香港家居裝修設計 全拆工程/報價/材料";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 解答香港家居裝修10大常見問題：全拆工程定義、設計風格特色、裝修項目啟動、報價所需信息、預算制定、設計服務、進度管控、材料選擇、質量保證、項目成功評估。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "香港裝修FAQ,家居裝修常見問題,全拆裝修工程,裝修報價信息,裝修預算制定,裝修材料選擇,裝修進度管控,WAH! Space Studio"
      );
  }, []);

  // 完整FAQ數據 (包含所有10個問題)
  const faqItems = [
    {
      id: 1,
      question: "什麼是全拆開始的家居設計和裝修工程？",
      answer: "全拆開始的家居設計和裝修工程是指在重新設計居住空間時，徹底拆除現有結構和裝飾，以便重新規劃、設計和施工，從而實現理想的家居環境。"
    },
    {
      id: 2,
      question: "你們的設計風格有哪些特色？",
      answer: "我們的設計風格以白色、簡約、明亮和素色調為主，旨在創造出舒適、清新且高品質的家居空間，滿足新一代客戶對美學和功能性的追求。"
    },
    {
      id: 3,
      question: "如何開始我的家居裝修項目？",
      answer: "開始家居裝修項目時，您只需聯繫我們的專業設計團隊，告訴我們您的需求和預算，我們將為您提供量身定制的設計方案和施工計劃。"
    },
    {
      id: 4,
      question: "裝修初步報價需要提供哪些信息？",
      answer: "為了提供準確的裝修初步報價，您需要提供以下信息：地區、屋苑或商廈名稱、面積尺寸、工程需求與範圍、風格偏好、預算，以及其他相關細節（如有）。"
    },
    {
      id: 5,
      question: "裝修工程的預算是如何制定的？",
      answer: "我們會根據您的需求、空間面積、選材和工程範圍來制定詳細的預算，並在項目開始前提供透明的報價，以確保您不會超出預算。"
    },
    {
      id: 6,
      question: "你們提供哪些設計服務？",
      answer: "我們提供全方位的設計服務，包括空間規劃、室內裝修設計、材料選擇以及施工管理，確保從設計到實施的每一步都專業高效。"
    },
    {
      id: 7,
      question: "如何確保裝修進度按計劃進行？",
      answer: "我們會定期與客戶溝通項目的進度，在施工期間提供階段性報告，並確保所有的工序按照約定的時間框架進行，保證工程準時完成。"
    },
    {
      id: 8,
      question: "你們如何選擇裝修材料？",
      answer: "我們優先選擇高品質和環保的材料，確保它們在美觀、耐用性和功能性上都符合設計要求，並且為客戶提供最佳的裝修效果。"
    },
    {
      id: 9,
      question: "你們是否提供設計和施工的保證？",
      answer: "是的，我們提供設計和施工的質量保證，確保所有的工作都符合行業標準和客戶的期望，並在保證期內提供必要的維護和支持。"
    },
    {
      id: 10,
      question: "如何評估一個裝修項目的成功？",
      answer: "成功的裝修項目通常體現在客戶滿意度、設計效果的實現、施工質量的達標以及項目是否按時完成上，這些都是衡量裝修項目成功的重要指標。"
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
      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* 導航欄 */}
        <Navbar />

        {/* 頁面核心內容區 - 1:1還原設計稿排版 */}
        <main className="container mx-auto px-8 py-16 max-w-4xl">
          {/* 頁面標題區 - 還原左側黑色豎線樣式 */}
          <div className="mb-16 border-l-4 border-gray-400 pl-6">
            <h1 className="text-3xl font-bold">FAQ 常見問題</h1>
          </div>

          {/* FAQ 列表區 - 嚴格匹配設計稿格式 */}
          <div className="space-y-10">
            {faqItems.map((item) => (
              <div key={item.id} className="mb-6">
                {/* 問題標題 - 匹配設計稿字重和大小 */}
                <h3 className="text-xl font-bold mb-3">
                  {item.id}.{item.question}
                </h3>
                {/* 回答內容 - 匹配設計稿字色和行高 */}
                <p className="text-gray-700 leading-relaxed pl-1">
                  {item.answer}
                </p>
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
        </main>

        {/* 頁腳 */}
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
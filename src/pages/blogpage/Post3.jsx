import { useEffect } from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import decorImage from '../../images/Post/3.png';

// 主應用組件
export const Post3 = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 針對香港AI裝修設計避坑優化
    document.title = "香港裝修設計避坑｜AI設計圖落地難？這3個要點必注意 | WAH! Space Studio";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content',
        "香港裝修設計避坑必看！WAH! Space Studio拆解AI設計圖落地難的3大問題：比例失真、材質落地難、設計施工脫節，教你如何將AI理想轉化為現實，避免簡約裝修變簡陋。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]')
      ?.setAttribute('content',
        "香港裝修避坑,AI設計圖落地,裝修比例失真,材質落地難,設計施工脫節,香港裝修施工,簡約裝修避坑,WAH! Space Studio"
      );
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* 導航欄 */}
        <Navbar />
        
        {/* 核心內容區 - 1:1還原設計風格 */}
        <main className="container mx-auto px-8 py-12 max-w-4xl">
          {/* 大標題區 - 左側粗黑邊框 + 標題樣式完全匹配 */}
          <div className="mb-10 border-l-4 border-black pl-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              香港裝修設計避坑｜AI設計圖落地難？這3個要點必注意
            </h1>
            <p className="text-lg text-gray-600 italic">
              香港入伙必讀：避免「簡約變簡陋」的裝修細節全清單。
            </p>
          </div>

          {/* 開篇段落 */}
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p>
              隨著科技進步，不少業主在規劃新居時會使用AI裝修設計工具產生精美的 3D 效果圖。畫面雖然夢幻，但回到現實的 香港裝修施工 階段，往往發現「圖紙很豐滿，現實很骨感」。為了幫各位準業主達成完美的 香港裝修避坑，我們總結了 3 個將 AI 理想轉化為現實的關鍵要點。
            </p>
          </div>

          {/* 主圖片區 - 完全還原設計中的圖片布局 */}
          <div className="mb-10 w-full h-[400px] overflow-hidden rounded-lg">
            <img 
              src={decorImage} 
              alt="AI設計圖落地實景對比" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 第一個核心模塊 - AI比例失真 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              警惕 AI比例失真：美感不等於尺寸感
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 space-y-4">
              <p>
                AI裝修設計 最常見的陷阱是「比例錯誤」。AI 生成的圖片往往會為了視覺美感，自動拉開空間感或縮小家具比例。
              </p>
              <p>
                <strong className="text-gray-900">避坑指南：</strong>在施工前，必須要求裝修公司提供精確的平面佈置圖（Layout Plan）。如果 AI 圖中的特大梳化在實際 300 呎客廳中放不下，這就是典型的設計與施工脫節。
              </p>
              <p>
                <strong className="text-gray-900">香港裝修避坑關鍵：</strong>所有的設計方案必須建立在實地丈量的數據之上，而非單純依賴一張 AI生成的照片。
              </p>
            </div>
          </div>

          {/* 第二個核心模塊 - 材質落地難度 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              材質落地難度：燈光與物料的虛擬陷阱
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 space-y-4">
              <p>
                很多AI裝修設計 圖片中的光影效果極佳，但這往往是物理上難以實現的「偽自然光」。
              </p>
              <p>
                <strong className="text-gray-900">施工挑戰：</strong>AI 圖中流暢的無縫牆身，在實際的 香港裝修施工 中可能需要昂貴的水泥漆或微水泥工藝，若預算不足，最終效果會大打折扣。
              </p>
              <p>
                <strong className="text-gray-900">建議：</strong>拿著 AI 圖與師傅溝通時，務必確認現場的採光環境及物料供應。問清楚：「這種質感的板材香港買得到嗎？」或「這種收邊工法師傅做得出來嗎？」
              </p>
            </div>
          </div>

          {/* 第三個核心模塊 - 設計施工脫節 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              解決設計與施工脫節：找具備工程經驗的團隊
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 space-y-4">
              <p>
                「設計師畫得出，師傅做不到」是導致裝修爛尾的主因。香港裝修避坑的核心在於找一個能看懂設計精髓，又能兼顧結構安全的團隊。
              </p>
              <p>
                <strong className="text-gray-900">結構限制：</strong>AI 不知道哪道牆是主力牆，也不知道排水管道位在哪裡。專業的 香港裝修施工 團隊會在看到設計圖後，第一時間指出喉管及電制位的改動可行性。
              </p>
              <p>
                <strong className="text-gray-900">實例參考：</strong>參考過往的 簡約裝修案例 時，應多留意完工實景圖與當初設計圖的還原度，而非只看渲染圖。
              </p>
            </div>
          </div>
        </main>

        {/* 頁腳 */}
        <Footer />
      </div>
    </>
  );
};

export default Post3;
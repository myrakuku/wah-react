// Style.jsx (家居設計頁面)
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

// 主應用組件
export const Style = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 家居設計頁專屬
    document.title = "WAH! Style 家居常用風格 | 奶油質感空間 法式奶油/現代極簡/北歐風";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 專注打造白色、簡約、明亮的奶油質感空間，融合法式奶油、現代極簡與北歐風設計，透過白色基調、極簡工法、採光工程實現流行風格的精準工程實踐。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "WAH! Style,家居設計風格,奶油質感空間,法式奶油風,現代極簡風,北歐風,香港家居設計,白色基調設計,採光工程"
      );
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* 導航欄 */}
        <Navbar />

        {/* 頁面核心內容區 - 1:1還原設計稿排版 */}
        <main className="container mx-auto px-8 py-16 max-w-4xl">
          {/* 頁面標題區 */}
          <div className="mb-12 border-l-4 border-gray-800 pl-6">
            <h1 className="text-3xl font-bold mb-4">WAH! Style 家居常用風格</h1>
            <h2 className="text-2xl font-semibold text-gray-700">核心理念：流行風格的精華工程實踐</h2>
          </div>

          {/* 引言區 - 引號強調 */}
          <div className="mb-16">
            <p className="text-xl font-medium italic text-gray-400 mb-6">
              「打造白色、簡約、明亮的奶油質感空間」
            </p>
            <p className="text-gray-700 leading-relaxed">
              在現代家居裝修中，風格的運用與施工細節直接決定了居住感受。WAH！Space Studio 擅長參考並配搭現今主流的視覺風格，透過對白色系、簡約線條及明亮採光的精確施工，為您打造既時尚又溫馨的家居環境。我們不追求虛浮的設計口號，而是專注於將流行美學轉化為高品質的工程實作。
            </p>
          </div>

          {/* 四大核心模塊 - 嚴格對應設計稿編號與格式 */}
          <div className="space-y-16">
            {/* 1. 白色基調的專業施作 */}
            <div>
              <h3 className="text-xl font-bold mb-4">1.白色基調的專業施作</h3>
              <p className="text-gray-700 leading-relaxed">
                白色象徵純粹與開放，是提升空間通透感的關鍵。我們在施工中嚴格把關牆面處理與油漆工藝，確保白色調能平整、均勻地反射光線，瞬間擴大視覺空間感。無論是客廳或臥室，我們透過細膩的打磨與塗裝，讓白色基調展現出簡約而不失優雅的層次感。
              </p>
            </div>

            {/* 2. 極簡工法的線條美學 */}
            <div>
              <h3 className="text-xl font-bold mb-4">2.極簡工法的線條美學</h3>
              <p className="text-gray-700 leading-relaxed">
                秉持「少即是多」的哲學，我們在工程實作中追求極致的線條對齊與結構平整。WAH！Space Studio 專注於剔除不必要的施工贅飾，將重點放在精準的間隔佈局與收口細節。透過對每一個收邊、每一條接縫的嚴謹要求，讓簡約的風格不再只是空談，而是能提升整體美感的實體工藝。
              </p>
            </div>

            {/* 3. 明亮氛圍的採光工程 */}
            <div>
              <h3 className="text-xl font-bold mb-4">3.明亮氛圍的採光工程</h3>
              <p className="text-gray-700 leading-relaxed">
                空間的明亮度與居住者的情緒息息相關。我們在裝修過程中，透過專業的窗框安裝與燈光佈線規劃，極大化自然光的引入。我們建議並配合大面積玻璃窗的施工，並精確安裝柔和的嵌入式或間接照明，避免刺眼眩光，營造出溫暖、放鬆且具備高生活質感的採光環境。
              </p>
            </div>

            {/* 4. 熱門風格的完美配搭 */}
            <div>
              <h3 className="text-xl font-bold mb-4">4.熱門風格的完美配搭：法式奶油、現代極簡與北歐風</h3>
              <p className="text-gray-700 leading-relaxed">
                我們緊貼裝修市場趨勢，擅長將法式奶油風的溫潤感、現代極簡風的俐落線條以及北歐風的自然氣息融入實務工程中。透過不同材質的運用與色彩比例配搭，我們能根據您的喜好，將這些流行風格穩定且高品質地呈現在您的單位中。我們保證施工細節完全符合風格要求，確保最終成果與您理想中的視覺標準精準契合。
              </p>
            </div>
          </div>

          {/* 行動呼喚按鈕 - 匹配整站風格 */}
          <div className="mt-20 text-center">
            <Link 
              to="/cases" 
              className="inline-block px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-50 transition-colors text-lg font-medium"
            >
              查看實拍案例
            </Link>
          </div>
        </main>

        {/* 頁腳 */}
        <Footer />
      </div>
    </>
  );
};

export default Style;
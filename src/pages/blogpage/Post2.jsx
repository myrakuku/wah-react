import { useEffect } from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import decorImage from '../../images/Post/2.png';

// 主應用組件
export const Post2 = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 針對香港淺色木質系簡約裝修優化
    document.title = "細單位變大屋？5個香港後生仔必看的簡約裝修案例：淺色木質系最顯空間感 | WAH! Space Studio";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content',
        "香港細單位裝修必看！WAH! Space Studio分享5個後生仔最愛的淺色木質系簡約設計案例，結合輕工業與暖色系混搭，解鎖視覺延伸、溫潤氛圍技巧，讓細單位空間感提升20%。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]')
      ?.setAttribute('content',
        "香港細單位裝修,淺色木質系裝修,簡約裝修案例,後生仔裝修,輕工業風混搭,暖色系設計,空間感提升,WAH! Space Studio"
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
              細單位變大屋？5個香港後生仔必看的簡約裝修案例：淺色木質系最顯空間感
            </h1>
            <p className="text-lg text-gray-600 italic">
              2026 裝修新趨勢：結合輕工業與簡約風的「暖色系」混搭設計。
            </p>
          </div>

          {/* 開篇段落 */}
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p>
              對於正值事業黃金期的 30-40 歲業主來說，擁有一間屬於自己的物業是人生大事。在寸金尺土的環境下，如何利用 港入伙裝修 打造出具備空間感與質感的家？近年，追求自然與純淨的「淺色、木質系」風格已成為後生仔裝修設計的絕對主流。
            </p>
          </div>

          {/* 主圖片區 - 完全還原設計中的圖片+文字層布局 */}
          <div className="mb-10 relative w-full h-[400px] overflow-hidden rounded-lg">
            <img 
              src={decorImage} 
              alt="現代極簡風淺色木質系設計" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 第一個二級標題 */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2">
              為何「淺色、木質系」是簡約設計的首選？
            </h2>
          </div>

          {/* 淺色木質系優勢段落 */}
          <div className="mb-10 text-gray-700 leading-relaxed pl-4">
            <p className="mb-2">
              在生活節奏極快的香港，家是唯一的避風港。年輕業主不再追求奢華的水晶燈或複雜的裝飾，轉而投向大自然的懷抱。
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>視覺延伸：淺色牆身與家具能有效折射光線，讓細單位顯得更寬敞。</li>
              <li>溫潤氛圍：木質元素能平衡都市的冰冷感，為室內注入居家溫暖。</li>
              <li>百搭耐看：這種配色方案極具靈活，無論是北歐風還是日式無印風都能完美切換。</li>
            </ul>
          </div>

          {/* 案例分享二級標題 */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2">
              3個必看的簡約裝修案例分享
            </h2>
          </div>

          {/* 案例段落 - 還原數字列表+格式 */}
          <div className="mb-10 text-gray-700 leading-relaxed pl-4">
            <p className="mb-4">
              為了讓大家在 港入伙裝修 前有更多靈感，以下整理了幾個深獲好評的 簡約裝修案例，重點展示如何運用 淺色、木質系 營造氛圍：
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong className="text-gray-900">暖白與原木的視覺擴張 (450 呎單位)</strong>
                <p className="mt-1">
                  這是典型的 後生仔裝修設計。客廳運用象牙白牆身搭配淺橡木地板，並利用隱藏式收納櫃取代傳統雜物架。透過大面積的 淺色 鋪陳，空間感瞬間提升 20%。
                </p>
              </li>
              <li>
                <strong className="text-gray-900">日系簡約的多功能空間 (350 呎細單位)</strong>
                <p className="mt-1">
                  針對空間有限的 簡約裝修案例，設計師經常採用「全屋地台」設計。利用大量的 木質系 板材打造收納地台，既解決了儲物問題，又保持了整體的視覺統一。
                </p>
              </li>
              <li>
                <strong className="text-gray-900">北歐森林感色調搭配 (520 呎兩房單位)</strong>
                <p className="mt-1">
                  將 淺色 以調與深淺不一的木紋結合。這類 港入伙裝修 通常會在玄關或餐桌區使用木條屏風，增加層次感之餘，也保留了呼吸感。
                </p>
              </li>
            </ol>
          </div>

          {/* 技巧分享二級標題 */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2">
              後生仔裝修設計的 3 個實用技巧
            </h2>
          </div>

          {/* 技巧段落 - 還原項目符號+格式 */}
          <div className="mb-12 text-gray-700 leading-relaxed pl-4">
            <p className="mb-4">
              在正式 入伙前，掌握以下技巧能讓你的 簡約裝修案例 更有高級感：
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-gray-900">燈光層次感：</strong>
                淺色、木質系 的裝修若只用單一主燈會顯得平板。建議加入 3000K-4000K 的溫暖色系軌道燈或燈帶，能帶出木材的天然紋理。
              </li>
              <li>
                <strong className="text-gray-900">家具色調統一：</strong>
                購買現成家具時，木材顏色應盡量與地板或固定櫃體接近，避免因色差太大而導致視覺凌亂。
              </li>
              <li>
                <strong className="text-gray-900">材質對比：</strong>
                在 淺色 的大背景下，可以加入少量帶麻質感的織物或綠色植物，增加生活氣息。
              </li>
            </ul>
          </div>
        </main>

        {/* 頁腳 */}
        <Footer />
      </div>
    </>
  );
};

export default Post2;
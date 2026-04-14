import { useEffect } from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import decorImage from '../../images/Post/4.png';

// 主應用組件
export const Post4 = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 針對香港簡約裝修配色優化
    document.title = "香港簡約裝修配色技巧｜2-4種淺色搭配，耐看又不壓抑 | WAH! Space Studio";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content',
        "香港簡約裝修配色必學！WAH! Space Studio分享6:3:1配色原則，2-4種淺色搭配方案：奶油白x淺原木、珍珠灰x霧藍藍、象牙白x灰綠色，打造耐看不壓抑的香港細單位家居。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]')
      ?.setAttribute('content',
        "香港簡約裝修配色,淺色搭配技巧,6:3:1配色原則,奶油白原木配色,珍珠灰霧藍藍,象牙白灰綠色,香港細單位配色,WAH! Space Studio"
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
              香港簡約裝修配色技巧｜2-4種淺色搭配，耐看又不壓抑
            </h1>
            <p className="text-lg text-gray-600 italic">
              配色零出錯：6:3:1原則教你玩轉淺色木質系裝修。
            </p>
          </div>

          {/* 開篇段落 */}
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p>
              在香港普遍較為局促的居住環境中，如何透過香港簡約裝修 營造出開闊感？答案就在於「色彩」。正確的 裝修配色 技巧不僅能提升整體的質感，更能讓狹窄的空間在視覺上擴張。本文將分享 2-4 種經典的 淺色調裝修 方案，讓你家裝修十年也不過時。
            </p>
          </div>

          {/* 主圖片區 - 完全還原設計中的圖片布局 */}
          <div className="mb-10 w-full h-[400px] overflow-hidden rounded-lg">
            <img 
              src={decorImage} 
              alt="香港簡約裝修淺色配色實景" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 第一個核心模塊 - 淺色調裝修優勢 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              為何香港單位首選「淺色調裝修」？
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4">
              <p className="mb-3">
                香港住宅多屬細單位，採光往往受限。使用深色調容易產生壓迫感，而 淺色調裝修 則有以下三大優勢：
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>折射光線：白色或米色系統更有效反射自然光，提升室內明亮度。</li>
                <li>視覺延伸：淺色牆身與天花連成一線，能模糊空間邊界，顯得更有空間感。</li>
                <li>家具百搭：淺色背景就像一張乾淨的畫布，無論是木質家具還是北歐風裝飾都能完美融合。</li>
              </ul>
            </div>
          </div>

          {/* 第二個核心模塊 - 配色技巧方案 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              3個經典的裝修配色技巧方案
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 mb-4">
              <p>
                想要達成完美的 香港簡約裝修，建議全屋配色控制在2-4種以內，並遵循「631原則」（背景色60%、配搭色30%、強調色10%）。
              </p>
            </div>

            {/* 數字列表配色方案 - 完全還原參考圖格式 */}
            <div className="pl-4 space-y-6">
              {/* 方案1 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. 奶油白 x 淺原木（極致溫柔風）</h3>
                <p className="text-gray-700 mb-1">
                  這是近年 後生仔裝修設計 中點擊率最高的方案。以奶油色牆身為大背景，搭配淺色木地板。
                </p>
                <p className="text-gray-700 mb-1"><strong>優點：</strong>充滿日系柔和感，視覺非常療癒。</p>
                <p className="text-gray-700"><strong>建議：</strong>踢腳線可選用與地板同色的木質或白色，保持視覺連貫性。</p>
              </div>

              {/* 方案2 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. 珍珠灰 x 霧藍藍（現代質感風）</h3>
                <p className="text-gray-700 mb-1">
                  如果你覺得純白太單調，可以嘗試珍珠灰作為主調。這種 淺色調裝修 比純白更有層次感，搭配一兩件霧藍藍的軟裝（如窗簾或靠墊）。
                </p>
                <p className="text-gray-700"><strong>優點：</strong>具有現代都市感，且比起純白更耐髒。</p>
              </div>

              {/* 方案3 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. 象牙白 x 灰綠色（自然清新風）</h3>
                <p className="text-gray-700 mb-1">
                  將象牙白與低飽和度的灰綠色結合，能為 簡約裝修案例 注入生機。灰綠色可局部用於睡房背景牆或櫃體。
                </p>
                <p className="text-gray-700"><strong>優點：</strong>舒緩視覺壓力，營造出如同森林般的呼吸感。</p>
              </div>
            </div>
          </div>

          {/* 避坑提醒模塊 - 還原參考圖樣式 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              避坑提醒：淺色調不代表「全白」
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 space-y-3">
              <p>
                在運用 裝修配色 技巧時，最常見的錯誤是全屋只用一種純白。這會讓家裡看起來像醫院或辦公室，缺乏溫馨感。
              </p>
              <p>
                <strong className="text-gray-900">小貼士：</strong>建議選擇「暖白色」或「香檳白」，並透過不同材質（如麻質窗簾、毛氈地毯）的紋理來增加層次，避免視覺平淡。
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

export default Post4;
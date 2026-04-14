import { useEffect } from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import decorImage from '../../images/Post/6.png';

// 主應用組件
export const Post6 = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 針對2026香港全屋裝修攻略優化
    document.title = "香港全屋裝修攻略2026｜簡約淺色調設計，小面積房屋也能顯闊落 | WAH! Space Studio";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content',
        "2026香港全屋裝修必學！WAH! Space Studio分享簡約淺色調設計技巧，透過地板連貫法、懸浮收納、隱形門設計，讓香港小面積房屋顯闊落，附預算避坑建議，打造不壓抑的細單位。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]')
      ?.setAttribute('content',
        "2026香港全屋裝修,簡約淺色調設計,小面積房屋顯闊落,地板連貫法,懸浮式收納,隱形門設計,香港細單位裝修,預算避坑"
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
              香港全屋裝修攻略2026｜簡約淺色調設計，小面積房屋也能顯闊落
            </h1>
            <p className="text-lg text-gray-600 italic">
              細單位變大屋？5個香港後生仔必看的簡約裝修案例：淺色木質系最顯空間感
            </p>
          </div>

          {/* 開篇段落 */}
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p>
              在香港，如何在有限的呎數內住得舒適、不壓抑，是每一位業主的首要課題。踏入2026年，香港全屋裝修的趨勢更加追求「視覺減法」與「機能加法」。針對常見的納米樓或兩房細單位，簡約淺色調裝修成為了擴展空間感的唯一標準答案。本文將為你解析如何透過設計，讓香港小面積裝修也能展現出媲美大屋的闊落感。
            </p>
          </div>

          {/* 主圖片區 - 完全還原設計中的圖片布局 */}
          <div className="mb-10 w-full h-[400px] overflow-hidden rounded-lg">
            <img 
              src={decorImage} 
              alt="2026香港簡約淺色調裝修實景" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 第一個核心模塊 - 淺色調裝修是細單位救星 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              為何「簡約淺色調裝修」是細單位的救星？
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 space-y-3">
              <p>
                物理空間無法改變，但視覺心理可以被引導。在香港小面積裝修中，顏色決定了第一印象：消除邊界感：使用純白、奶油色或淺丁香灰作為牆身主色，能模糊牆角與天花的界線。
              </p>
              <p>
                光影折射：淺色系具備高反射率，能將有限的窗外自然光引入室內深處，解決香港常見的「黑廚」或「暗廁」問題。
              </p>
            </div>
          </div>

          {/* 第二個核心模塊 - 2026香港全屋裝修3大顯大技巧 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              2026 香港全屋裝修的 3 大顯大技巧
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 mb-3">
              <p>
                想要讓香港全屋裝修效果更出眾，除了選對顏色，還需要配合以下設計手法：
              </p>
            </div>

            {/* 字母列表技巧 - 完全還原參考圖格式 */}
            <div className="pl-4 space-y-5">
              {/* 技巧A */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  A. 地板連貫法 (Seamless Flooring)
                </h3>
                <p className="text-gray-700 pl-6">
                  在進行香港小面積裝修時，切忌在客廳、餐廳及走廊使用不同材質的地板。建議全屋鋪設長條狀的淺木紋磚或 SPC 石塑地板，視覺延伸感會讓單位看起來比實際大 20%。
                </p>
              </div>

              {/* 技巧B */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  B. 懸浮式收納櫃設計
                </h3>
                <p className="text-gray-700 pl-6">
                  這是在許多簡約裝修案例中常見的手法。將電視櫃、玄關櫃做成離地 15-20cm 的懸浮式設計，並在底部加入暖色感應燈帶。露出地面面積越多，空間感就越強。
                </p>
              </div>

              {/* 技巧C */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  C. 隱形門與玻璃隔斷
                </h3>
                <p className="text-gray-700 pl-6">
                  將房門設計成與牆身同色的「隱形門」，或將房間牆換成黑框玻璃，是後生仔裝修設計的主流。這不僅實踐了簡約淺色調裝修的精髓，更打破了小單位的侷促感。
                </p>
              </div>
            </div>
          </div>

          {/* 預算避坑建議模塊 - 還原參考圖樣式 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              香港小面積裝修的預算避坑建議
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 space-y-3">
              <p>
                進行香港全屋裝修時，細單位往往比大單位更考驗師傅的手藝。
              </p>
              <p>
                <strong className="text-gray-900">定制傢俬是關鍵：</strong>為了不浪費每一寸空間，轉角位與樑位必須精準度尺。
              </p>
              <p>
                <strong className="text-gray-900">燈光層次：</strong>避免只用一盞主燈。採用分區散光（如嵌入式筒燈）能讓簡約淺色調裝修更具質感，而不顯得單調蒼白。
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

export default Post6;
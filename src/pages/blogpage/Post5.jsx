import { useEffect } from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import decorImage from '../../images/Post/5.png';

// 主應用組件
export const Post5 = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 針對香港裝修售後保障優化
    document.title = "香港裝修售後保障攻略｜非人為損壞維修，避免裝修爛尾 | WAH! Space Studio";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content',
        "香港裝修避坑必看！WAH! Space Studio分享裝修售後保障攻略，詳解非人為損壞維修範疇（結構/水電/木工）、保養排除項及合約約定技巧，避免裝修爛尾，確保新居長治久安。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]')
      ?.setAttribute('content',
        "香港裝修售後保障,非人為損壞維修,裝修保養期,結構硬體保養,水電工程保養,木工傢俬保養,避免裝修爛尾,驗樓清單"
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
              香港裝修售後保障攻略｜非人為損壞維修，避免裝修爛尾
            </h1>
            <p className="text-lg text-gray-600 italic">
              香港裝修避坑必看：拒絕「裝修完即失蹤」
            </p>
          </div>

          {/* 開篇段落 */}
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p>
              對於香港業主而言，全屋裝修最怕的不是預算超支，而是遇到「香港裝修爛尾」。許多人在完工入伙後，發現水電、泥水出現問題卻找不到師傅跟進，這就是缺乏售後保障的典型案例。一份完善的合約不僅要管施工，更要管 裝修維修。本文將教你如何分辨專業的 香港裝修售後 服務，確保你的新居長治久安。
            </p>
          </div>

          {/* 主圖片區 - 完全還原設計中的圖片布局 */}
          <div className="mb-10 w-full h-[400px] overflow-hidden rounded-lg">
            <img 
              src={decorImage} 
              alt="香港裝修售後保障實景參考" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 第一個核心模塊 - 合格的售後保障（新增詳細內容） */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              什麼是合格的香港裝修售後保障？
            </h2>
            <div className="text-gray-700 leading-relaxed pl-4 space-y-3">
              <p>
                在簽署合約前，業主必須確認「保養期」的條款。一般優質的工程公司會提供至少 12 個月保養。
              </p>
              <p>
                <strong className="text-gray-900">結構性保養：</strong>包括防漏工程（如浴室防漏）、水電佈線等。
              </p>
              <p>
                <strong className="text-gray-900">非人為損壞維修：</strong>例如牆身因熱脹冷縮出現的裂縫、櫃門鉸位鬆脫等。
              </p>
              {/* 新增：非人為損壞維修詳細說明 */}
              <p>
                全屋裝修的非人為損壞維修通常包含在裝修保養期內，主要針對施工質量問題，但不包括材料自然損耗。一般保養期為 1 年，但具體內容須視乎合約條款而定。
              </p>
              <p className="font-semibold mt-2">以下是常見的「非人為損壞」保養範疇：</p>
              
              {/* 1. 結構與硬體設施 */}
              <div className="pl-6 space-y-1 mt-1">
                <p className="font-semibold">1. 結構與硬體設施</p>
                <p>- 油漆與牆面：如非撞擊導致的油漆剝落、起泡或牆身出現裂縫。</p>
                <p>- 瓦片與地板：非重物墜地引起的磁磚鬆脫、空心（「卜泥」）或地板翹起。</p>
                <p>- 門窗工程：非強力撞擊導致的門框變形、窗戶滲水或五金配件（如鉸位）失效。</p>
              </div>

              {/* 2. 水電工程 */}
              <div className="pl-6 space-y-1 mt-1">
                <p className="font-semibold">2. 水電工程</p>
                <p>- 水喉系統：非因自行改裝或塞渠導致的水管滲漏、接駁位漏水。</p>
                <p>- 電力裝置：非因負載過重導致的電掣面板失靈、漏電斷路器（跳掣）異常等。</p>
              </div>

              {/* 3. 木工與傢俬訂造 */}
              <div className="pl-6 space-y-1 mt-1">
                <p className="font-semibold">3. 木工與傢俬訂造</p>
                <p>- 傢俬結構：非負重過度導致的櫃門傾斜、抽屜軌道損壞或木料嚴重變形。</p>
              </div>

              {/* 注意事項 */}
              <div className="pl-6 space-y-1 mt-3">
                <p className="font-semibold">注意事項</p>
                <p>- 保養排除項：自然損耗（如燈泡、濾芯）、人為不當使用、天災或租客/業主自行改動後的損壞，通常不獲免費維修。</p>
              </div>
            </div>
          </div>

          {/* 第二個核心模塊 - 確保售後落地的步驟 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              確保售後服務落地的 3 個核心步驟
            </h2>
            
            {/* 步驟1 - 詳盡的驗樓清單 */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2 pl-4">
                詳盡的驗樓清單
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                在支付尾數前，必須進行徹底驗收。檢查牆身有無空鼓、來回水是否順暢、電制位是否通電。這不僅是為了當下的完美，更是為了日後申請 香港裝修售後 時有據可依。
              </p>
            </div>

            {/* 步驟2 - 選擇有實體店或信譽良好的公司 */}
            <div className="pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                選擇有實體店或信譽良好的公司
              </h3>
              <p className="text-gray-700 leading-relaxed pl-4">
                比起單打獨鬥的「裝修佬」，擁有實體辦公室的公司在處理香港裝修售後時更有保障，因為你隨時能找到負責人。
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

export default Post5;
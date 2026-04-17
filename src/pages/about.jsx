// About.jsx (關於我們頁面)
import { useEffect } from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

// 主應用組件
export const About = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 關於我們頁專屬
    document.title = "WAH! Space Studio | 關於我們 - 20年香港裝修經驗 定義現代家居新標準";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 擁有20年香港裝修經驗，累計交付超200個優質項目，服務覆蓋300+屋苑。以客戶需求與工程質量為核心，打造高質感港式家居，聯繫電話9603 5388。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio,香港裝修公司,20年裝修經驗,香港家居裝修,中環裝修,灣仔裝修,96035388,WAH NGAI DECORATION"
      );
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* 導航欄 */}
        <Navbar />

        {/* 頁面核心內容區 */}
        <main className="container mx-auto px-8 py-12">
          {/* 頁面標題 */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-gray-400 pl-4">
              關於我們
            </h1>
            <p className="text-xl text-gray-600">
              WAH! Space Studio：二十年匠心，定義香港現代家居新標準
            </p>
          </section>

          {/* 品牌介紹模塊 */}
          <section className="ml-5 space-y-10 mb-16">
            {/* 核心優勢 */}
            <div className=" p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">核心理念</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                擁有超過20年的香港裝修深厚底蘊，WAH! Space Studio 始終以客戶需求與工程質量為核心，隨著時代演進，我們已由傳統工程行，進化為「高標施工與風格配搭」的現代家居解決方案專家。我們不只完成工程，更致力於參考跨時主美學，為每一位香港業主實踐兼具質感與耐用的住體驗。
              </p>
            </div>

            {/* 數據實力 */}
            <div className=" p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">數據見實力，專業贏信任</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                二十載耕耘，我們已在全港各區精準交付超過200個優質項目。深耕業界多年，我們建立了極具競爭力的資源庫——擁有全港超過300個屋苑的精闢圖庫。憑借強大的數據儲備，讓我們能精準洞察由柴米樓到千豪宅的結構特點。無論您偏好法式奶油風、現代簡約風或北歐風，我們都能在施工階段展現出無可比擬的專業優勢與建造速度，確保風格完美落地。
              </p>
            </div>

            {/* 口碑相傳 */}
            <div className=" p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">口碑相傳，卓越交付</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我們的成長力源於客戶的真誠推薦。「手腳乾淨、準時交貨、絕不爛尾」是我們贏得口碑的關鍵。眾多老客戶的肯定與轉介紹，是WAH! Space Studio 在香港裝修行業屹立不搖的基石。我們深信，好的裝修必須經得起時間考驗，從結構耐用到流行風格的細節鋪陳，皆需達到完美平衡。
              </p>
            </div>

            {/* 展望未來 */}
            <div className=" p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">展望未來：持續創造理想家園</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                面對未來，我們將繼續專注於施工質量的升華與交付體驗的優化。WAH! Space Studio 擅長鋪設溫馨下修復趨勢，將您的生活空間轉化為充滿溫度與靈感的園地。這不只是一次裝修工程，更是一場關於生活品質與藝術細節的全面升級。
              </p>
            </div>
          </section>

          {/* 聯繫我們 + 地圖區塊 */}
          <section className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* 聯繫信息 */}
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">聯絡我們 | WAH! Space Studio</h2>
                <div className="space-y-4 text-gray-700">
                  <div className='flex flex-wrap'>
                    <p className="flex items-center gap-2 font-medium">
                    公司名稱：
                  </p>
                  <p className="flex items-center gap-2">
                    華藝裝飾有限公司
                  </p>
                  </div>
                  <div className='flex flex-wrap'>
                  <p className="flex items-center gap-2 font-medium">
                    地址：
                  </p>
                  <p className="flex items-center gap-2">
                    <span>牛頭角觀塘道342號鴻源工業大廈7樓A3室</span>
                  </p>
                  </div>
                  <p className="flex items-center gap-2">
                    <span className="font-medium">聯繫電話：</span>
                    <span className="text-blue-600 font-medium">9603 5388</span>
                  </p>
                </div>

                {/* WhatsApp 聯繫按鈕 */}
                <a 
                  href="https://wa.me/85296035388" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  <span className="font-medium">WhatsApp 聯絡我們</span>
                </a>
              </div>

              {/* 地圖展示 */}
              <div className="w-full h-full relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.01229719122!2d114.21430937529288!3d22.315374679675635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401484ac26423%3A0xe83754e96e9672d6!2sChuan%20Yuan%20Factory%20Building!5e0!3m2!1sen!2shk!4v1775637540515!5m2!1sen!2shk"
                    width="100%" // 改為 100% 實現響應式
                    height="400" // 優化高度，匹配頁面布局
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="WAH! Space Studio 公司地址地圖" // 新增 title 屬性，符合 React 規範
                />
                </div>
            </div>
          </section>

        </main>

        {/* 頁腳 */}
        <Footer />
      </div>
    </>
  );
};

export default About;
import { useEffect } from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import decorImage from '../../images/Post/1.png';

// 主應用組件
export const Post1 = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 針對香港裝修簡約設計優化
    document.title = "香港入伙裝修必看 | 30-40歲後生仔最愛的簡約設計案例合集 | WAH! Space Studio";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content',
        "香港30-40歲後生仔入伙裝修首選簡約設計！WAH! Space Studio分享北歐風、工業風、日式無印風3大熱門案例，拆解收納規劃、預算制定、智能家居融入三大裝修攻略，打造實用又耐看的香港家居。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]')
      ?.setAttribute('content',
        "香港入伙裝修,簡約設計案例,30-40歲裝修,北歐風裝修,工業風裝修,日式無印風,香港家居收納,裝修預算攻略,WAH! Space Studio"
      );
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* 導航欄 */}
        <Navbar />
        
        {/* 核心內容區 - 完全匹配設計風格 */}
        <main className="container mx-auto px-8 py-12 max-w-4xl">
          {/* 標題區 - 大標題+副標題 */}
          <div className="mb-10 border-l-4 border-gray-800 pl-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              香港入伙裝修必看｜30-40歲後生仔最愛的簡約設計案例合集
            </h1>
            <p className="text-lg text-gray-600 italic">
              裝修預算怎麼花？後生仔最值得投資的簡約設計重點。
            </p>
          </div>

          {/* 開篇段落 */}
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p>
              對於正值事業黃金期的 30-40 歲香港人來說，擁有一間屬於自己的物業是人生大事。無論是私人屋苑還是資助房屋，香港入伙裝修的風格選擇直接影響日後的生活質素。近年，擺脫繁瑣、回歸純粹的「簡約風」成為了後生仔裝修設計的首選。
            </p>
          </div>

          {/* 主圖片區 - 匹配設計中的圖片布局 */}
          <div className="mb-10 relative w-full h-[400px] overflow-hidden rounded-lg">
            <img 
              src={decorImage} 
              alt="現代極簡風家居設計" 
              className="w-full h-full object-cover object-center"
            />
            {/* 圖片上的文字層 (匹配設計風格) */}
            {/* <div className="absolute top-8 left-8 text-white bg-black/50 p-6 rounded">
              <h2 className="text-2xl font-bold uppercase mb-2">Modern Minimalist</h2>
              <h3 className="text-xl font-semibold">現代極簡風</h3>
              <p className="text-sm mt-4 text-gray-200 max-w-xs">
                Lorem ipsum dolor sit amet, sit nulla fugiat ut omnis quod aut nulla mollitia qui consequatur aliquam. Qui alias repellendus qui voluptatem illis distinctio cumque. Quo alias expetendis aut nulla animi hic quo minima eum et dolor ullam ea enim assumenda ab neque tempore est magnam commodi.
              </p>
              <p className="text-xs mt-4 text-gray-300 uppercase">New season 2023</p>
            </div> */}
          </div>

          {/* 第一個小標題區 */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2">
              為何「簡約風」是後生仔裝修設計的主流？
            </h2>
          </div>

          {/* 簡約風優勢段落 */}
          <div className="mb-10 text-gray-700 leading-relaxed pl-4">
            <p className="mb-2">
              在生活節奏極快的香港，家是唯一的避風港。30-40 歲的年輕業主更傾向於開闊、易打理且具質感的居住環境。
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>視覺減壓：以白、灰、木色為主調，減少視覺疲勞。</li>
              <li>空間利用：透過隱藏式收納與多功能傢俱，改善香港典型的小型單位空間感。</li>
              <li>長遠實用：簡約設計耐看且不過時，更方便日後更換軟裝。</li>
            </ul>
          </div>

          {/* 案例分享標題 */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2">
              3個簡約裝修案例分享
            </h2>
          </div>

          {/* 案例段落 */}
          <div className="mb-10 text-gray-700 leading-relaxed pl-4">
            <p className="mb-4">
              為了讓大家在入伙前有更多靈感，以下整理了幾個深獲好評的簡約裝修案例：
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong className="text-gray-900">北歐風木質暖居 (500 呎兩房單位)</strong>
                <p className="mt-1">
                  這類設計常見於現代年輕家庭。利用大量淺色木紋地板與白色牆身，營造出溫暖的自然感。開放式廚房與客廳連動，增加互動空間。
                </p>
              </li>
              <li>
                <strong className="text-gray-900">工業風質感灰色調 (400 呎一房單位)</strong>
                <p className="mt-1">
                  適合追求個性化的年輕專業人士。採用清水模漆、黑色軌道燈與鋼鐵元素，展現俐落的都市感。重點在於「減法」，只保留必要的裝飾，讓空間更顯寬敞。
                </p>
              </li>
              <li>
                <strong className="text-gray-900">日式無印風 (350 呎細單位)</strong>
                <p className="mt-1">
                  針對預算有限或空間較細的香港入伙裝修，日式風格強調高度統一的色調。使用組合收納櫃代替零散傢俬，保持視覺上的平整度。
                </p>
              </li>
            </ol>
          </div>

          {/* 攻略標題 */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2">
              香港入伙裝修：30-40歲業主必學 3 大攻略
            </h2>
          </div>

          {/* 攻略段落 */}
          <div className="mb-12 text-gray-700 leading-relaxed pl-4">
            <p className="mb-4">
              在正式入伙前，除了選定風格，以下這三點是確保裝修順利的核心：
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-gray-900">制定精準預算：</strong>
                建議將總支出的 10-15% 作為應急資金，以防裝修期間出現結構性變動。
              </li>
              <li>
                <strong className="text-gray-900">收納空間規劃：</strong>
                不要只看外觀！簡約裝修案例成功的關鍵在於「收納於無形」，在平面圖規劃階段就應考慮大型家電的藏身處。
              </li>
              <li>
                <strong className="text-gray-900">智能家居融入：</strong>
                後生仔裝修設計通常會加入智能燈光、窗簾系統。在拉電線階段先做好預留，能避免日後走明線。
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

export default Post1;
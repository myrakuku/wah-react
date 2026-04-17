// HungHom.jsx (紅磡住宅裝修案例頁面)
import { useEffect } from 'react';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';

// 1. 批量导入方法（保留）
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// 2. 批量导入指定文件夹下所有图片（自动加载，无需手动import）
// 🔥 关键：true 表示遍历子目录（Lohas/HungHom），正则匹配所有图片格式
const images = importAll(require.context('../../../src/images/HungHom', true, /\.(png|jpe?g|svg)$/));

// 主應用組件
export const HungHom = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 紅磡住宅裝修案例專屬
    document.title = "紅磡住宅裝修實拍案例 | WAH! Space Studio 現代簡約工藝 溫潤木系家園";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 紅磡住宅裝修實拍案例，現代簡約+北歐溫潤風格，奶白+淺木配色、隱形收納、無主燈系統工藝，真實工藝拒絕爛尾，紅磡屋苑裝修首選。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "紅磡住宅裝修,香港紅磡裝修,現代簡約裝修,溫潤木系設計,隱形收納工藝,無主燈系統,WAH! Space Studio,紅磡屋苑裝修"
      );
  }, []);

  // 3. 修复：自动生成图片数据（增加容错处理，避免undefined报错）
  const autoCaseImages = Object.keys(images).map((key, index) => {
    // 🌟 关键修复：拆分路径时增加容错，处理根目录图片
    const pathParts = key.split('/');
    let folder = '';
    let fileName = '';
    
    if (pathParts.length === 2) {
      // 子目录图片：Lohas/3.png → folder=Lohas, fileName=3.png
      [folder, fileName] = pathParts;
    } else {
      // 根目录图片：直接赋值fileName，folder为空
      fileName = pathParts[0];
      folder = 'default'; // 给根目录图片默认文件夹名
    }

    // 🌟 关键修复：先判断fileName存在，再执行includes
    let title = '紅磡'; 
    let desc = '';
    if (fileName) { // 先确认fileName不是undefined
      if (fileName.includes('bedroom')) desc = '臥室';
      else if (fileName.includes('wardrobe')) desc = '衣櫥';
      else if (fileName.includes('livingroom')) desc = '客廳';
      else if (fileName.includes('kitchen')) desc = '廚房';
      else if (fileName.includes('wc')) desc = '廁所';
      else desc = `案例圖片${index + 1}`;
    } else {
      desc = `案例圖片${index + 1}`; // 兜底描述
    }

    // 可选：按文件夹动态调整标题
    if (folder === 'Lohas') title = '日出康城';
    else if (folder === 'HungHom') title = '紅磡';
    else if (folder === 'Whampoa') title = '黃埔花園';
    else if (folder === 'TKO') title = '將軍澳';

    return {
      id: index + 1,
      imgUrl: images[key],
      title: title,
      desc: desc
    };
  });

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* 導航欄 */}
        <Navbar />

        {/* 頁面核心內容區 - 1:1還原設計稿排版 */}
        <main className="container mx-auto px-8 py-16 max-w-4xl">
          {/* 頁面大標題 - 匹配設計稿字重/大小/顏色 */}
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-10">
            紅磡住宅實拍案例 | WAH！Space Studio：現代簡約工藝實踐，打造溫潤木系家園
          </h1>

          {/* 核心標語 */}
          <h2 className="text-xl font-bold mb-6">
            空間最大化、工法細緻化：為紅磡業主落實舒緩放鬆的居家環境。
          </h2>

          {/* 開篇介紹段落 */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              在紅磡這個繁華且高密度的都會核心，WAH！Space Studio 負責此單位的全屋裝修工程。我們參考並落實了「現代簡約」與「北歐溫潤」的風格要求，透過全屋統一的奶白與淺木配色，配合流暢的線條施工與隱藏式收邊細節，將每一平方呎的坪效發揮至極，確保工程成果高品質交付。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我們承諾：<span className="text-orange-600 font-bold">本頁面所有圖片均為 100% 現場實景拍攝</span>。沒有 AI 生成的虛幻，只有經得起近距離檢視的匠心工藝。
            </p>
          </div>

          {/* 核心工法/特色模塊 - 匹配設計稿格式 */}
          <div className="space-y-10 mb-12">
            {/* 1. 配色體系與油漆工法 */}
            <div>
              <h3 className="text-xl font-bold mb-4">配色體系與油漆工法：溫潤治癒的「奶白 + 淺木」</h3>
              <p className="text-gray-700 leading-relaxed">
                工程團隊精確執行啞光漆面奶白色與淺橡木紋的對接。我們在施工中嚴格把關油漆批次與噴塗質量，確保色調高度統一且表面平整。這種細膩的飾面處理能有效延伸視覺空間感，讓中小型戶型也能擁有大宅的寬廣度。
              </p>
            </div>

            {/* 2. 櫃體安裝與木工細節 */}
            <div>
              <h3 className="text-xl font-bold mb-4">櫃體安裝與木工細節：隱形收納的工藝追求</h3>
              <p className="text-gray-700 leading-relaxed">
                配合「藏八露二」的收納原則，我們精準安裝懸浮式櫃體結構與隱形拉手。在施工中特別注重弧形收邊處理與一體化台面的接縫技術，讓家居清潔無死角。每一處櫃門對齊與五金調校，都展現了我們對工程實作的高度要求。
              </p>
            </div>

            {/* 3. 電工與燈光實作 */}
            <div>
              <h3 className="text-xl font-bold mb-4">電工與燈光實作：光影流轉的質感層次</h3>
              <p className="text-gray-700 leading-relaxed">
                全屋執行無主燈電力系統佈線，精確預留隱藏式燈帶與筒燈位置，營造柔和的環境光。配合天然木飾面的紋理安裝，讓每一寸空間在施工完成後，都能展現出沈穩且層次的高級感。
              </p>
            </div>

            {/* 4. 為什麼選擇我們裝修您的紅磡單位？ */}
            <div>
              <h3 className="text-xl font-bold mb-4">為什麼選擇我們裝修您的紅磡單位？</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>豐富的紅磡區實戰經驗：</strong>熟悉黃埔花園、維港·星岸及周邊樓宇的結構特性與工程規章，確保施工進度順暢，準時交貨。</p>
                <p><strong>真實工藝，拒絕爛尾：</strong>我們不依賴虛擬設計圖，堅持以實景相片展現最真實的木工、油漆與泥水工藝，保證工程圓滿收尾，絕不爛尾。</p>
                <p><strong>手腳乾淨，專業交付：</strong>從清拆到最後執漏，我們堅持高標準的工地現場管理，確保交付時環境整潔，讓業主安心收樓，快速入伙。</p>
              </div>
            </div>
          </div>

          {/* 工程承諾模塊 - 還原設計稿圓角邊框樣式 */}
          <div className="border-2 border-gray-300 rounded-2xl p-8 mb-16">
            <h3 className="text-xl font-bold mb-4">WAH！Space Studio 的工程承諾</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              在本次項目的執行中，我們再次達成以下標準：
            </p>
            <div className="space-y-3 text-gray-700">
              <p>絕不爛尾：從清拆、水電到飾面，全程緊密監控，確保工程圓滿收尾。</p>
              <p>準時交貨：嚴格控管進度，配合商業營運需求，在約定時間內完成交付。</p>
              <p>工藝紮實：不論是細美縫還是收邊處理，均經得起現場實地檢驗。</p>
            </div>
          </div>

        {/* 圖片網格核心區 (基於批量導入的圖片渲染) */}
          <div className="grid grid-cols-2 gap-6">
            {autoCaseImages.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer"
                style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
              >
                <div className="block w-full h-full">
                  <img 
                    src={item.imgUrl}
                    alt={`${item.title}-${item.desc}`} // 优化alt属性
                    className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                  />
                  {/* 原有文字层样式完全保留 */}
                  <div className="
                    absolute bottom-0 left-0 right-0 p-4 bg-white/90 
                    md:opacity-0 md:translate-y-full 
                    md:group-hover:opacity-100 md:group-hover:translate-y-0
                    transition-all duration-300
                  ">
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* 頁腳 */}
        <Footer />
      </div>
    </>
  );
};

export default HungHom;
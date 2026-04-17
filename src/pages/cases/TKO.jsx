// TKO.jsx (將軍澳欣明苑裝修案例頁面)
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
const images = importAll(require.context('../../../src/images/TKO', true, /\.(png|jpe?g|svg)$/));


// 主應用組件
export const TKO = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 將軍澳欣明苑裝修案例專屬
    document.title = "將軍澳欣明苑裝修實拍案例 | WAH! Space Studio 奶白淺木工藝 老牌屋苑現代翻新";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 將軍澳欣明苑老牌屋苑翻新工程，奶白淺木工藝打造通透高質感空間，精準油漆工法、木工弧位設計、分區照明實踐，熟悉屋苑結構、絕不爛尾、準時交付。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "將軍澳裝修,欣明苑裝修,香港將軍澳老牌屋苑翻新,奶白淺木工藝,精準油漆工法,木工弧位設計,WAH! Space Studio,將軍澳住宅翻新"
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
    let title = '將軍澳'; 
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
          {/* 頁面大標題 - 匹配設計稿字重/大小 */}
          <h1 className="text-2xl md:text-3xl font-bold mb-10">
            將軍澳欣明苑實拍案例 | WAH！Space Studio：奶白與淺木工藝實踐，老牌屋苑的現代翻新實錄
          </h1>

          {/* 核心標語 */}
          <h2 className="text-xl font-bold mb-6">
            留白、木質與弧位：在成熟屋苑中落實舒緩放鬆的高質感工程。
          </h2>

          {/* 開篇介紹段落 */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              位於將軍澳核心地段的欣明苑，以極高實用率見稱。WAH！Space Studio 負責此單位的全屋裝修翻新。我們根據客戶要求的「現代簡約」風格，精確執行大面積奶白留白與溫潤木質的銜接工法，打造出乾淨通透、具備視覺呼吸感的居住環境。
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="text-orange-600 font-bold">本頁面展示之圖片均為 100% 現場實景拍攝</span>，真實呈現細膩的材質融合與空間層次。
            </p>
          </div>

          {/* 核心工法/特色模塊 - 匹配設計稿格式 */}
          <div className="space-y-10 mb-12">
            {/* 1. 牆面與配色施工：顯白、顯大的精準油漆工法 */}
            <div>
              <h3 className="text-xl font-bold mb-4">牆面與配色施工：顯白、顯大的精準油漆工法</h3>
              <p className="text-gray-700 leading-relaxed">
                全屋嚴格執行「60% 淺色背景 + 30% 木質主調」的色彩配搭。我們在施工中特別注重底層批灰與面漆均勻度，確保奶白色牆面在不同光線下皆呈現細緻質感，有效提升空間的通透感與溫暖歸屬感。
              </p>
            </div>

            {/* 2. 木工弧位與隱藏設計：提升安全性與美感的實作細節 */}
            <div>
              <h3 className="text-xl font-bold mb-4">木工弧位與隱藏設計：提升安全性與美感的實作細節</h3>
              <p className="text-gray-700 leading-relaxed">
                我們在電視櫃、玄關及床頭位置精確執行弧形圓角加工。這項工法不僅考驗木工師傅的收邊技術，更能有效提升居家安全。配合隱形拉手櫃門安裝，我們確保門板縫隙均勻、開合順暢，實現視覺高度統一的一體化效果，展現手腳乾淨的收尾水準。
              </p>
            </div>

            {/* 3. 電工與照明佈局：去繁就簡的分區照明實踐 */}
            <div>
              <h3 className="text-xl font-bold mb-4">電工與照明佈局：去繁就簡的分區照明實踐</h3>
              <p className="text-gray-700 leading-relaxed">
                配合室內光影規劃，我們精準執行電位佈置，改用明裝筒燈與射燈提供基礎亮度，並在櫃體內嵌入隱藏式燈帶。我們對燈槽的深度與角度進行嚴格調校，確保光線柔和不刺眼，豐富空間層次。
              </p>
            </div>

            {/* 4. 為什麼選擇我們裝修您的將軍澳單位？ */}
            <div>
              <h3 className="text-xl font-bold mb-4">為什麼選擇我們裝修您的將軍澳單位？</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>熟悉將軍澳屋苑構造：</strong>我們擁有欣明苑及周邊屋苑（如英明苑、景林邨）的豐富裝修經驗，精準掌握原始喉位與結構特性，避免施工陷阱。</p>
                <p><strong>工程精準落地，絕不爛尾：</strong>我們不只是承辦商，更是確保設計理念 100% 實現在現實生活中的執行專家。嚴謹的工期控管，保證工程圓滿完工。</p>
                <p><strong>手腳乾淨，準時交貨：</strong>我們堅持高標準的工地管理，施工期間保持現場整潔，並嚴格遵守屋苑裝修規範，確保準時交付，讓業主安心入伙。</p>
                <p><strong>堅持實拍，誠信至上：</strong>拒絕 AI 模擬圖，我們用最真實的攝影作品，證明 WAH！Space Studio 對施工品質與工藝落地的執著。</p>
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

export default TKO;
// Whampoa.jsx (黃埔花園裝修案例頁面)
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
const images = importAll(require.context('../../../src/images/Whampoa', true, /\.(png|jpe?g|svg)$/));


// 主應用組件
export const Whampoa = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 黃埔花園裝修案例專屬
    document.title = "黃埔花園裝修實景案例 | WAH! Space Studio 木飾面工藝 老牌屋苑結構優化翻新";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 黃埔花園老牌屋苑翻新工程，木飾面工藝實踐+現代極簡風格，材質配色統一、弧線隱蔽工法、結構包覆收納，精進細作絕不爛尾、準時交付。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "黃埔花園裝修,香港黃埔裝修,老牌屋苑翻新,木飾面工藝,現代極簡裝修,結構包覆收納,WAH! Space Studio,紅磡黃埔裝修"
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
    let title = '中環'; 
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
            黃埔花園實景案例 | WAH！Space Studio：木飾面工藝實踐，老牌屋苑結構優化的翻新典範
          </h1>

          {/* 核心標語 */}
          <h2 className="text-xl font-bold mb-6">
            化繁為簡，工藝為魂：為黃埔花園落實「現代極簡」的空間標準。
          </h2>

          {/* 開篇介紹段落 */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              作為香港具代表性的屋苑，黃埔花園雖然實用率高，但室內常見的橫樑與柱位往往考驗施工的收口技術。WAH！Space Studio 負責此單位的全屋工程實作，參考並落實了「日式無印」與「現代極簡」的風格要求。透過大面積木飾面施工與精準的弧線處理，我們將原始結構缺陷轉化為平整的視覺亮點，交付一個通透且耐用的現代居所。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我們承諾：<span className="text-orange-600 font-bold">本頁面所有圖片均為 100% 現場實景拍攝</span>。沒有 AI 生成的虛幻，只有經得起近距離檢視的匠心工藝。
            </p>
          </div>

          {/* 核心工法/特色模塊 - 匹配設計稿格式 */}
          <div className="space-y-10 mb-12">
            {/* 1. 材質與配色施工：高度統一的飾面工法 */}
            <div>
              <h3 className="text-xl font-bold mb-4">材質與配色施工：高度統一的飾面工法</h3>
              <p className="text-gray-700 leading-relaxed">
                工程團隊精確執行「淺木為主、深木點綴、白色提亮」的配色比例。我們在施工中特別注重木飾面接縫處理與啞光漆面的平整度。由玄關、走廊到廚浴，均採用統一的飾面體系，確保 100% 的風格連貫性與耐用度。
              </p>
            </div>

            {/* 2. 線條與隱蔽工法：極簡細節的實作挑戰 */}
            <div>
              <h3 className="text-xl font-bold mb-4">線條與隱蔽工法：極簡細節的實作挑戰</h3>
              <div className="space-y-2 mb-0 text-gray-700">
                <p>全屋圓弧化工程：針對黃埔花園常見的尖銳柱位，我們執行了大量的木工圍弧修飾。這項工法不僅消除空間銳角，更考驗師傅對弧度打磨與表面打蠟的細膩度。</p>
                <p>隱形化技術落地：精準安裝隱形門、無拉手櫃體及嵌入式家電位置。我們確保門片與牆面平整對齊，將功能性元素完美隱藏於結構之中。</p>
                <p>分層照明佈線：執行無主燈電力系統規劃，精確預留軌道燈與櫃內隱藏燈帶位置，確保光線柔和且線路隱蔽。</p>
              </div>
            </div>

            {/* 3. 空間開發：結構包覆與收納實作 */}
            <div>
              <h3 className="text-xl font-bold mb-4">空間開發：結構包覆與收納實作</h3>
              <p className="text-gray-700 leading-relaxed">
                結構包覆術：利用木作櫃體將室內原有的樑柱與管道完美包覆，解決老牌屋苑格局不方正的問題。<br />
                一體化木作安裝：整合榻榻米、書桌與展示櫃的施工，確保結構穩固且尺寸精確，解決黃埔花園家庭的儲物需求。
              </p>
            </div>

            {/* 4. 為什麼選擇 WAH！Space Studio 裝修您的黃埔花園單位？ */}
            <div>
              <h3 className="text-xl font-bold mb-4">為什麼選擇 WAH！Space Studio 裝修您的黃埔花園單位？</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>精進細作飾，絕不爛尾：</strong>擁有豐富的黃埔花園實戰經驗，擅長處理鑽石廳及樑柱問題。我們嚴格控管每一道工序，保證工程圓滿收尾。</p>
                <p><strong>手腳乾淨，細節到位：</strong>我們不只是按圖施工，更注重「工藝落地」。從弧線打磨到隱形門校對，堅持現場工地整潔，確保高品質交付。</p>
                <p><strong>準時交貨，實景見證：</strong>所有案例均為真實完工圖，證明我們在約定期內達成「所見即所得」的施工承諾，讓業主安心入伙。</p>
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

export default Whampoa;
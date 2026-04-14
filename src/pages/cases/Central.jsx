// Central.jsx (工程實蹟頁面)
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
const images = importAll(require.context('../../../src/images/CentralWyndham', true, /\.(png|jpe?g|svg)$/));

// 主應用組件
export const Central = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 工程實蹟頁專屬
    document.title = "工程實蹟 | 中環Wyndham Place CrossFit館 | WAH! Space Studio 專業工法";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 中環Wyndham Place CrossFit館裝修工程實蹟，展現專業工法、準時交付實力，異材質銜接、冷熱材質施工、功能性設施精準實作，絕不爛尾、工藝紮實。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "中環裝修工程,CrossFit館裝修,異材質銜接施工,冷熱材質工藝,WAH! Space Studio,準時交付,絕不爛尾,香港商業裝修"
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
          {/* 頁面標題區 - 匹配設計稿字重和大小 */}
          <h1 className="text-2xl md:text-3xl font-bold mb-10">
            工程實蹟：中環Wyndham Place CrossFit館 —— 專業工法與準時交付的體現
          </h1>

          {/* 開篇介紹段落 */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              位於中環核心地帶的Wyndham Place，這處 CrossFit 館的裝修工程由 WAH！Space Studio 團隊全力實踐。該空間結合了「工業風的粗獷」與「北歐風的溫馨」兩種不同調性的風格，我們專注於工程細節的精準落地，確保在緊湊的商業工期內，高品質地完成每一道施工程序。
            </p>
            <p className="text-gray-700 leading-relaxed">
              本頁面展示之圖片均為 <span className="text-orange-600 font-bold">100% 現場實景拍攝</span>，真實呈現每一個結構細節與材質紋理。
            </p>
          </div>

          {/* 三大核心工法模塊 - 匹配設計稿格式 */}
          <div className="space-y-10 mb-12">
            {/* 1. 高難度異材質銜接與現場整理 */}
            <div>
              <h3 className="text-xl font-bold mb-4">高難度異材質銜接與現場整理</h3>
              <p className="text-gray-700 leading-relaxed">
                作為力量訓練區與休息區的過渡，我們精確執行了材質轉換工程（由專業運動橡膠地墊平整過渡至細美縫地磚）。在施工過程中，我們堅持「手腳乾淨」的場地管理，確保隔斷規劃與地面鋪設線條俐落，在不影響空間通透感的前提下，精準劃分功能區域。
              </p>
            </div>

            {/* 2. 冷熱材質的施工工藝 */}
            <div>
              <h3 className="text-xl font-bold mb-4">冷熱材質的施工工藝</h3>
              <p className="text-gray-700 leading-relaxed">
                工地實作重點在於處理金屬混凝土與暖色木質、綠植景觀的結合。我們透過專業的收口技術，讓不同屬性的材質完美共生。這種細膩的施工處理，成功消弭了工業風格常見的粗糙壓抑感，為業主交付了一個具備高品質休憩質感的空間。
              </p>
            </div>

            {/* 3. 功能性設施的精準實作 */}
            <div>
              <h3 className="text-xl font-bold mb-4">功能性設施的精準實作</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                高標準收納系統安裝：精確組裝大面積收納櫃體，配合隱形拉手設計，不僅解決了健身房大容量儲物需求，更體現了我們對木工安裝細節的嚴謹要求。
              </p>
              <p className="text-gray-700 leading-relaxed">
                結構與美感的施工平衡：負責安裝長虹玻璃門與具備技術挑戰的弧形隔斷，在保障更衣室私密性的同時，以精準的弧度施工柔化了室內結構。
              </p>
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

export default Central;
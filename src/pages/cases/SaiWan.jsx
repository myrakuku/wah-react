// SaiWan.jsx (西環精品住宅裝修案例頁面)
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
const images = importAll(require.context('../../../src/images/SaiWan', true, /\.(png|jpe?g|svg)$/));

// 主應用組件
export const SaiWan = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 西環精品住宅裝修案例專屬
    document.title = "西環精品住宅裝修實拍案例 | WAH! Space Studio 現代簡約工藝 高品質都市空間";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 西環精品住宅裝修實拍案例，現代簡約工藝打造通透感+功能性空間，一體式長櫃設計、多元材質對接、藏八露二收納，西區工程經驗豐富、絕不爛尾。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "西環裝修,香港西環精品住宅裝修,現代簡約裝修,一體式長櫃設計,多元材質施工,藏八露二收納,WAH! Space Studio,西區裝修"
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
    let title = '西環'; 
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
            西環精品住宅實拍案例 | WAH！Space Studio：現代簡約工藝，高品質都市空間實踐
          </h1>

          {/* 核心標語 */}
          <h2 className="text-xl font-bold mb-6">
            在海傍與繁華之間，以紮實工法落實純粹的高級感。
          </h2>

          {/* 開篇介紹段落 */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              西環區精品住宅對裝修的「通透感」與「功能性」有著極高標準。WAH！Space Studio 負責此單位的工程實作，參考並落實了「高級簡約風」的設計要領。我們專注於材質的精準對比與隱蔽式燈光佈線，確保每一道施工細節都符合現代審美要求。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我們承諾：<span className="text-orange-600 font-bold">本頁面所有圖片均為 100% 現場實景拍攝</span>。沒有 AI 生成的虛幻，只有經得起近距離檢視的匠心工藝。
            </p>
          </div>

          {/* 核心工法/特色模塊 - 匹配設計稿格式 */}
          <div className="space-y-10 mb-12">
            {/* 1. 延展視覺的通透感：一體式長櫃設計 */}
            <div>
              <h3 className="text-xl font-bold mb-4">延展視覺的通透感：一體式長櫃設計</h3>
              <p className="text-gray-700 leading-relaxed">
                針對現代住宅的開放式格局，我們精確執行了一體式通頂長櫃的安裝工程，徹底消除傳統組合櫃常見的縫隙與壓迫感。我們在施工中特別注重櫃體與天花的收口處理，並精準嵌入通透玻璃櫃位。在確保充足收納容量的同時，維持牆面線條的平整輕盈，有效提升整體的空間開闊度。
              </p>
            </div>

            {/* 2. 多元材質的施工平衡：木材、玻璃與石材的對接 */}
            <div>
              <h3 className="text-xl font-bold mb-4">多元材質的施工平衡：木材、玻璃與石材的對接</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                工程團隊需同時處理三種不同屬性的材質對接：
              </p>
              <div className="pl-4 space-y-2 mb-4 text-gray-700">
                <p>木質施工：注入自然暖意，確保木紋銜接自然。</p>
                <p>玻璃安裝：精確校對玻璃軌道與邊框，增加空間的呼吸感。</p>
                <p>石材鋪設：以冷硬質感定調，考驗石材切割與拼縫的精細度。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                我們透過成熟的異材質銜接技術，解決了異材質拼接處容易產生的瑕疵問題，展現出清爽而高雅的完工效果。
              </p>
            </div>

            {/* 3. 實用主義的精準落位：「藏八露二」收納實踐 */}
            <div>
              <h3 className="text-xl font-bold mb-4">實用主義的精準落位：「藏八露二」收納實踐</h3>
              <div className="pl-4 space-y-2 mb-4 text-gray-700">
                <p>下方實心櫃體：隱藏繁雜線路與生活用品，確保視覺上的極致整潔。</p>
                <p>上方開放/玻璃區域：用於展示業主的私人收藏。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                我們在組裝過程中嚴格要求門板的對齊度與五金調校，滿足現代家庭對「整齊好打理」的嚴苛要求。
              </p>
            </div>

            {/* 4. 為什麼選擇 WAH！Space Studio 裝修您的西環新居？ */}
            <div>
              <h3 className="text-xl font-bold mb-4">為什麼選擇 WAH！Space Studio 裝修您的西環新居？</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>豐富的西區工程經驗：</strong>我們擅長處理西區各類戶型（由傳統老牌屋苑到精品新樓），熟悉老屋結構翻新與新樓裝修規範，確保將每一平方呎的空間規劃精準實作，發揮最大價值。</p>
                <p><strong>專業施工與風格落地：</strong>我們是您最可靠的工程執行夥伴。無論您偏好哪種設計風格，我們都能從水電佈線、木工安裝到材質對接，確保圖則理念 100% 精準落地，並在過程中提供專業的技術諮詢。</p>
                <p><strong>真實口碑見證：</strong>我們在西區及全港已交付逾 200 個優質項目，憑藉細膩的工藝與誠信的服務，贏得眾多業主的信賴與推薦。</p>
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

export default SaiWan;
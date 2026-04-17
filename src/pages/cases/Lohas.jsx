// Lohas.jsx (日出康城裝修案例頁面 - 批量導入圖片版)
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
const images = importAll(require.context('../../../src/images/Lohas', true, /\.(png|jpe?g|svg)$/));

// 主應用組件
export const Lohas = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 日出康城裝修案例專屬
    document.title = "日出康城裝修實拍案例 | WAH! Space Studio 二十年匠心工藝 康城屋苑施工專家";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 深耕日出康城屋苑裝修20年，精準處理結構與收納安裝、景觀採光工程配合，堅持100%現場實景拍攝，絕不爛尾、準時交付，康城單位裝修首選。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "日出康城裝修,LOHAS Park裝修,康城屋苑施工,香港將軍澳裝修,二十年匠心工藝,精準結構處理,現景拍攝裝修,WAH! Space Studio"
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
    let title = '日出康城'; 
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
          {/* 頁面大標題 - 匹配設計稿字重和大小 */}
          <h1 className="text-2xl md:text-3xl font-bold mb-10">
            日出康城（LOHAS Park）裝修實拍案例 | WAH！Space Studio：二十年匠心工藝，康城屋苑施工專家
          </h1>

          {/* 開篇核心語句 */}
          <h2 className="text-xl font-bold mb-6">
            深耕康城屋苑，數據圖則完備，讓您的新居「所見即所得」。
          </h2>

          {/* 開篇介紹段落 */}
          <div className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-4">
              日出康城作為香港最具規模的現代化社區，每一期（由晉海、MALIBU 到 MARINI、SEA TO SKY等）都有其獨特的結構與施工挑戰。WAH！Space Studio 憑藉超過 20 年的裝修底蘊，已成功為康城多個期數的業主完成工程並精準交付。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我們堅持<span className="font-bold">「100% 現場實景拍攝」</span>，拒絕虚假 AI 生成圖。這裡展示的每一個細節，都是我們設計團隊與師傅在康城現場留下的汗水與匠心結晶。
            </p>
          </div>

          {/* 核心工法/優勢模塊 - 匹配設計稿格式 */}
          <div className="space-y-10 mb-12">
            {/* 1. 空間實作：精準結構處理與收納安裝 */}
            <div>
              <h3 className="text-xl font-bold mb-4">空間實作：精準結構處理與收納安裝</h3>
              <p className="text-gray-700 leading-relaxed">
                針對康城多樣化的戶型，我們擅長處理長走廊或特大露台的施工細節。透過精密的間隔改動工程與隱藏式收納櫃體安裝，我們能配合原有的設計規劃，將每一平方呎的效能發揮至極致，打造通透且紮實的現代化室內格局。
              </p>
            </div>

            {/* 2. 景觀與採光的工程配合 */}
            <div>
              <h3 className="text-xl font-bold mb-4">景觀與採光的工程配合</h3>
              <p className="text-gray-700 leading-relaxed">
                為了發揮康城得天獨厚的海景優勢，我們在施工中特別注重鋁窗收邊與室內光影的銜接。透過簡約線條的精確施工與低飽和色調的均稱油漆工法，確保室內裝修能完美襯托窗外景觀，讓居家環境更顯明亮。
              </p>
            </div>

            {/* 3. 為什麼選擇我們裝修您的康城單位？ */}
            <div>
              <h3 className="text-xl font-bold mb-4">為什麼選擇我們裝修您的康城單位？</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>深耕北角屋苑：</strong>熟悉和富中心等北角區老牌屋苑的結構特點、水電喉位分佈及物管工程規範。</p>
                <p><strong>設計與工程深度整合：</strong>我們不只是裝修師傅，更是您的空間顧問，確保 100% 在工程中落實。</p>
                <p><strong>所見即所得：</strong>堅持實景拍攝，用真實完工作品證明我們的設計實力與交付品質。</p>
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

export default Lohas;
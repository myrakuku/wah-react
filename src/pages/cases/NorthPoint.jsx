// NorthPoint.jsx (北角和富中心裝修案例頁面)
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
const images = importAll(require.context('../../../src/images/NorthPoint', true, /\.(png|jpe?g|svg)$/));


// 主應用組件
export const NorthPoint = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - 北角和富中心裝修案例專屬
    document.title = "北角和富中心裝修實拍案例 | WAH! Space Studio 老牌屋苑翻新 現代簡約+輕復古";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 北角和富中心老牌屋苑翻新工程，融合現代簡約、北歐溫感與中古風細節，精準實作空間施工、元素對接、收納規劃，絕不爛尾、準時交付。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "北角和富中心裝修,香港北角裝修,老牌屋苑翻新,現代簡約裝修,輕復古設計,中古風工藝,WAH! Space Studio,北角住宅翻新"
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
    let title = '北角'; 
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
            北角和富中心實拍案例 | 老牌屋苑翻新工程：現代簡約與輕復古元素的精準實作
          </h1>

          {/* 核心標語 */}
          <h2 className="text-xl font-bold mb-6">
            讓經典屋苑煥發現代靈魂，打造溫暖治癒的居住空間。
          </h2>

          {/* 開篇介紹段落 */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              位於北角海濱的和富中心，以其極高實用率深受家庭喜愛。WAH！Space Studio 負責此單位的全面裝修工程，參考並落實了「現代簡約」的俐落、「北歐風」的溫感與「中古風（MCM）」的細節要求，為業主交付了一個開明亮通透、結構穩固的理想家園。
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="text-orange-600 font-bold">本頁面展示之圖片均為100% 現場實景拍攝</span>，真實呈現和富中心翻新後的空間質感與精湛工藝。
            </p>
          </div>

          {/* 核心工法/特色模塊 - 匹配設計稿格式 */}
          <div className="space-y-10 mb-12">
            {/* 1. 現代簡約基底：純粹的空間施工 */}
            <div>
              <h3 className="text-xl font-bold mb-4">現代簡約基底：純粹的空間施工</h3>
              <p className="text-gray-700 leading-relaxed">
                視覺減法工程：精確執行純白牆面批灰及油漆工藝，配合無主燈系統（筒燈 + 隱藏氛圍燈帶）的暗線佈線，消除傳統燈飾壓迫感。我們確保每一條燈帶槽位平直，強調「少即是多」的整潔施工效果。
              </p>
            </div>

            {/* 2. 北歐與中古元素的工藝對接 */}
            <div>
              <h3 className="text-xl font-bold mb-4">北歐與中古元素的工藝對接</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                人字拼地板與木質施工：精準鋪設實木質感的人字拼地板，這類工法極度考驗師傅對紋理對位與伸縮縫處理的經驗。
              </p>
              <p className="text-gray-700 leading-relaxed">
                弧形圓角工藝：在櫃體與牆角處執行高品質的弧形收邊處理。這不僅是呼應中古風格的視覺需求，更在實務上為家中有小孩或長輩的住戶提升了安全性，體現了我們對施工細節的極致追求。
              </p>
            </div>

            {/* 3. 極致的功能性規劃與收納實作 */}
            <div>
              <h3 className="text-xl font-bold mb-4">極致的功能性規劃與收納實作</h3>
              <p className="text-gray-700 leading-relaxed">
                我們負責安裝一體式懸浮櫃體，提供海量收納空間，完美解決和富中心家庭單位的雜物存放需求。懸浮施工工對牆身承重與平衡要求極高，我們確保結構穩固且線條俐落，展現手腳乾淨的收尾水準。
              </p>
            </div>

            {/* 4. 為什麼選擇我們裝修您的北角單位？ */}
            <div>
              <h3 className="text-xl font-bold mb-4">為什麼選擇我們裝修您的北角單位？</h3>
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

export default NorthPoint;
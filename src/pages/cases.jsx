import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import case1 from '../../src/images/CentralWyndham/1.png';
import case2 from '../../src/images/HungHom/livingroom.png';
import case3 from '../../src/images/NorthPoint/wc.png';
import case4 from '../../src/images/SaiWan/livingroom.png';
import case5 from '../../src/images/TKO/livingroom.png';
import case6 from '../../src/images/Whampoa/livingroom.png';
import case7 from '../../src/images/Lohas/livingroom.png';


// 主應用組件
export const Cases = () => {

  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
    useEffect(() => {
    // 基礎 SEO 配置 - 替換為 Celine 專屬
    // 1. 基礎 SEO 標籤 (核心優化)
    document.title = "WAH! Space Studio | 香港家居裝修設計 - 20年經驗 零爛尾 即時入住";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 香港專業家居裝修設計公司，擁有20年裝修經驗，服務覆蓋300+屋苑，完成200+成功案例。主打價格透明、施工快速、零爛尾，保證高品質交付即時入住，打造白色簡約奶油質感家居空間。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "香港裝修,香港家居設計,家居裝修,裝修公司,香港裝修報價,奶油風設計,簡約家居設計,中環裝修,零爛尾裝修,即時入住裝修"
      );
  }, []);

// 案例圖片數據 (新增 link 欄位定義跳轉地址)
const caseImages = [
  {
    id: 1,
    imgUrl: case1, 
    title: 'Central 中環',
    desc: '點擊查看更多圖片 | Click to see more pictures',
    link: '/cases/Central'
  },
  {
    id: 2,
    imgUrl: case2,
    title: 'Hung Hom 紅磡',
    desc: '點擊查看更多圖片 | Click to see more pictures',
    link: '/cases/HungHom'
  },
  {
    id: 3,
    imgUrl: case3, 
    title: 'North Point 北角',
    desc: '點擊查看更多圖片 | Click to see more pictures',
    link: '/cases/NorthPoint'
  },
  {
    id: 4,
    imgUrl: case4, 
    title: 'Sai Wan 西環',
    desc: '點擊查看更多圖片 | Click to see more pictures',
    link: '/cases/SaiWan'
  },
  {
    id: 5,
    imgUrl: case5,
    title: 'Tseung Kwan O 將軍澳',
    desc: '點擊查看更多圖片 | Click to see more pictures',
    link: '/cases/TKO'
  },
  {
    id: 6,
    imgUrl: case6,
    title: 'Whampoa 黃埔',
    desc: '點擊查看更多圖片 | Click to see more pictures',
    link: '/cases/Whampoa'
  },
  {
    id: 7,
    imgUrl: case7,
    title: 'LOHAS Park 日出康城',
    desc: '點擊查看更多圖片 | Click to see more pictures',
    link: '/cases/Lohas'
  }
];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />


      {/* 過往實拍案例區塊 */}
      <section className="py-16 bg-white px-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-gray-400 pl-4">
            WAH! Refurbish 實拍案例
          </h1>

          <div className="container mx-auto px-4">
          <div className="max-w-3xl text-gray-600 leading-relaxed">
            <p className="mb-4">
              在 WAH! Space Studio，我們深知香港業主對裝修的期望。透過報價公開透明化、主流風格配搭建議以及高標準的工程質量，我們致力於提供真正「零煩惱」的裝修實作服務。
            </p>
            <p className="mb-4">
              無論您是購入一手新樓或是計劃舊屋翻新，我們的專業團隊都能針對香港特有的戶型空間，參考現時流行的法式奶油風、現代簡簡風與北歐風，助您輕鬆鎖定心儀風格。我們專注於優化施工流程以縮短工期，並嚴格執行進度管理，確保如期起貨、絕不爛尾，讓您與家人能準時入伙新居。
            </p>
            <p className="mb-6">
              我們期待與您攜手，以紮實的工藝成就更舒適、更具質感的美好生活！若您對流行風格配搭有任何初步想法、想了解裝修工程報價，或想體驗我們「手腳乾淨」的施工專業，WAH! Space Studio 隨時歡迎您的查詢。
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
              <h3 className="font-semibold text-lg mb-2">100% 實景案例拍攝：所見即所得</h3>
              <p>
                在 WAH! Space Studio，我們堅持誠信。本網站及社交平台所展示的所有完工圖，均為香港各區屋苑的真實拍攝作品，絕非 AI 生成圖或電腦渲染圖，只呈現最真實的家居質感。
              </p>
              <p className="mt-2">
                每一張照片都忠實反映了我們的室內設計理念與施工工藝水平。從木工細節到空間佈局，均是我們團隊用心交付的成果。我們希望透過最真實的鏡頭，讓香港業主能真切感受到 WAH! Space Studio 對細節的執著與專業底蘊。
              </p>
            </div>
          </div>
        </div>

        {/* 圖片網格核心區 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {caseImages.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer" // 新增cursor-pointer提示可點擊
              style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
            >
              {/* 方式1: 使用 React Router Link (SPA 內部跳轉) */}
              <Link to={item.link} className="block w-full h-full">
                {/* 案例圖片 (固定尺寸 400x600) */}
                <img 
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: 'center' }}
                />

                {/* 文字資訊層 (響應式顯示邏輯) */}
                <div className="
                  absolute bottom-0 left-0 right-0 p-4 bg-white/90 
                  md:opacity-0 md:translate-y-full 
                  md:group-hover:opacity-100 md:group-hover:translate-y-0
                  transition-all duration-300
                ">
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        </div>
      </section>


      {/* 頁腳（簡化版） */}
      <Footer />

    </div>
  );
}

export default Cases;
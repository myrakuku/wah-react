// Blog.jsx (Blog 頁面)
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import Post1 from '../../src/images/Post/1.png';
import Post2 from '../../src/images/Post/2.png';
import Post3 from '../../src/images/Post/3.png';
import Post4 from '../../src/images/Post/4.png';
import Post5 from '../../src/images/Post/5.png';
import Post6 from '../../src/images/Post/6.png';

// 主應用組件
export const Blogs = () => {
  // 原生 React 設置 Meta 標籤（兼容所有 React 框架）
  useEffect(() => {
    // 基礎 SEO 配置 - Blog 頁專屬
    document.title = "Blog | WAH! Space Studio 香港家居裝修 奶油風/現代極簡風 屋苑設計案例";
    // 頁面描述 (控制在 150-160 字，包含核心業務+優勢+地域)
    document.querySelector('meta[name="description"]') 
      ?.setAttribute('content', 
        "WAH! Space Studio 分享香港家居裝修設計案例，覆蓋奶油風、現代極簡風等熱門風格，擁有300+屋苑設計圖積，提供多樣化設計方案，滿足不同客戶的家居裝修需求。"
      );
    // 核心關鍵字 (按重要性排序，包含地域+業務+優勢)
    document.querySelector('meta[name="keywords"]') 
      ?.setAttribute('content', 
        "香港裝修Blog,奶油風裝修案例,現代極簡風設計,屋苑裝修設計,300+屋苑設計圖積,WAH! Space Studio,港式家居設計"
      );
  }, []);

  // Blog 文章數據 (匹配設計稿4個卡片結構)
  const blogPosts = [
    {
      id: 1,
      imgSrc: Post1,
      imgAlt: "奶油風裝修案例",
      title: "香港入伙裝修必看｜30-40歲後生仔最愛的簡約設計案例合集",
      desc: "裝修預算怎麼花？後生仔最值得投資的簡約設計重點。",
      path: "/blogs/post1"
    },
    {
      id: 2,
      imgSrc: Post2,
      imgAlt: "現代極簡風裝修案例",
      title: "細單位變大屋？5 個香港後生仔必看的簡約裝修案例：淺色木質系最顯空間感",
      desc: "2026 裝修新趨勢：結合輕工業與簡約風的「暖色系」混搭設計。",
      path: "/blogs/post2"
    },
    {
      id: 3,
      imgSrc: Post3,
      imgAlt: "奶油風裝修案例",
      title: "香港裝修設計避坑｜AI設計圖落地難？這3個要點必注意",
      desc: "香港入伙必讀：避免「簡約變簡陋」的裝修細節全清單。",
      path: "/blogs/post3"
    },
    {
      id: 4,
      imgSrc: Post4,
      imgAlt: "現代極簡風裝修案例",
      title: "香港簡約裝修配色技巧｜2-4種淺色搭配，耐看又不壓抑",
      desc: "配色零出錯：6:3:1 原則教你玩轉淺色木質系裝修。",
      path: "/blogs/post4"
    },
    {
      id: 5,
      imgSrc: Post5,
      imgAlt: "現代極簡風裝修案例",
      title: "香港裝修售後保障攻略｜非人為損壞維修，避免裝修爛尾",
      desc: "香港裝修避坑必看：拒絕「裝修完即失蹤」",
      path: "/blogs/post5"
    },
    {
      id: 6,
      imgSrc: Post6,
      imgAlt: "現代極簡風裝修案例",
      title: "香港全屋裝修攻略2026｜簡約淺色調設計，小面積房屋也能顯闊落",
      desc: "細單位變大屋？5 個香港後生仔必看的簡約裝修案例：淺色木質系最顯空間感",
      path: "/blogs/post6"
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* 導航欄 */}
        <Navbar />

        {/* 頁面核心內容區 - 1:1還原設計稿排版 */}
        <main className="container mx-auto px-8 py-16 max-w-5xl">
          {/* 頁面標題區 - 還原左側黑色豎線樣式 */}
          <div className="mb-16 border-l-4 border-gray-400 pl-6">
            <h1 className="text-3xl font-bold">Blog</h1>
          </div>

          {/* Blog 卡片列表 - 2列布局，匹配設計稿 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link to={post.path}>
              <div key={post.id} className="mb-8">
                {/* 博客圖片 - 還原設計稿尺寸與比例 */}
                <div className="mb-4 overflow-hidden">
                  <img 
                    src={post.imgSrc} 
                    alt={post.imgAlt}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '280px' }} // 匹配設計稿圖片高度
                  />
                </div>
                {/* 博客標題 */}
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {post.title}
                </h3>
                {/* 博客描述 */}
                <p className="text-gray-700 leading-relaxed">
                  {post.desc}
                </p>
              </div>
              </Link>
            ))}
          </div>

        </main>

        {/* 頁腳 */}
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
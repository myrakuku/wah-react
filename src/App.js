
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from "./pages/home";
import { Style } from "./pages/ourstyle";
import { Quo } from "./pages/quo";
import { About } from "./pages/about";
import { FAQ } from "./pages/faq";


import { Cases } from "./pages/cases";

import { Central } from "./pages/cases/Central";
import { HungHom } from "./pages/cases/HungHom";
import { NorthPoint } from "./pages/cases/NorthPoint";
import { SaiWan } from "./pages/cases/SaiWan";
import { TKO } from "./pages/cases/TKO";
import { Whampoa } from "./pages/cases/Whampoa";
import { Lohas } from "./pages/cases/Lohas";

import { Blogs } from "./pages/blogs";


import { Post1 } from "./pages/blogpage/Post1";
import { Post2 } from "./pages/blogpage/Post2";
import { Post3 } from "./pages/blogpage/Post3";
import { Post4 } from "./pages/blogpage/Post4";
import { Post5 } from "./pages/blogpage/Post5";
import { Post6 } from "./pages/blogpage/Post6";

// 新增：滚动恢复组件
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // 每次路由变化时，滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 可选：平滑滚动，去掉则瞬间回到顶部
    });
  }, [location.pathname]); // 监听路由路径变化

  return null;
};


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/ourstyle" element={<Style/>}/>
        <Route path="/howtoquo" element={<Quo/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<FAQ/>}/>

        {/* Case */}
        <Route path="/cases" element={<Cases/>}/>
        <Route path="/cases/Central" element={<Central/>}/>
        <Route path="/cases/HungHom" element={<HungHom/>}/>
        <Route path="/cases/NorthPoint" element={<NorthPoint/>}/>
        <Route path="/cases/SaiWan" element={<SaiWan/>}/>
        <Route path="/cases/TKO" element={<TKO/>}/>
        <Route path="/cases/Whampoa" element={<Whampoa/>}/>
        <Route path="/cases/Lohas" element={<Lohas/>}/>

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/post1" element={<Post1/>}/>
        <Route path="/blogs/post2" element={<Post2/>}/>
        <Route path="/blogs/post3" element={<Post3/>}/>
        <Route path="/blogs/post4" element={<Post4/>}/>
        <Route path="/blogs/post5" element={<Post5/>}/>
        <Route path="/blogs/post6" element={<Post6/>}/>
        {/* <Route path="/blogs/post" element={<Post/>}/> */}



      </Routes>
    </Router>
  );
}

export default App;
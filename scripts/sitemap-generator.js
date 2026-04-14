// scripts/sitemap-generator.js
const fs = require('fs');

// 已替換為你最新的路由路徑
const routes = [
  // 主頁面
  { path: '/', priority: '0.5', changefreq: 'yearly' },
  { path: '/ourstyle', priority: '0.5', changefreq: 'yearly' },
  { path: '/howtoquo', priority: '0.5', changefreq: 'yearly' },
  { path: '/about', priority: '0.5', changefreq: 'yearly' },
  { path: '/faq', priority: '0.5', changefreq: 'yearly' },

  // 案例
  { path: '/cases', priority: '0.5', changefreq: 'yearly' },
  { path: '/cases/Central', priority: '0.5', changefreq: 'yearly' },
  { path: '/cases/HungHom', priority: '0.5', changefreq: 'yearly' },
  { path: '/cases/NorthPoint', priority: '0.5', changefreq: 'yearly' },
  { path: '/cases/SaiWan', priority: '0.5', changefreq: 'yearly' },
  { path: '/cases/TKO', priority: '0.5', changefreq: 'yearly' },
  { path: '/cases/Whampoa', priority: '0.5', changefreq: 'yearly' },
  { path: '/cases/Lohas', priority: '0.5', changefreq: 'yearly' },

  // 博客
  { path: '/blogs', priority: '0.5', changefreq: 'yearly' },
  { path: '/blogs/post1', priority: '0.5', changefreq: 'yearly' },
  { path: '/blogs/post2', priority: '0.5', changefreq: 'yearly' },
  { path: '/blogs/post3', priority: '0.5', changefreq: 'yearly' },
  { path: '/blogs/post4', priority: '0.5', changefreq: 'yearly' },
  { path: '/blogs/post5', priority: '0.5', changefreq: 'yearly' },
  { path: '/blogs/post6', priority: '0.5', changefreq: 'yearly' }
];

function generateSitemap() {
  const baseUrl = 'https://wahngai.work/';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = routes.map(route => 
    `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  ).join('\n');
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`;

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }
  
  fs.writeFileSync('public/sitemap.xml', sitemapContent);
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Generated ${routes.length} URLs for ${baseUrl}`);
  console.log('⚙️  All pages: priority=0.5, changefreq=yearly');
}

function generateRobotsTxt() {
  // 統一域名，修正錯誤
  const baseUrl = 'https://wahngai.work/';
  
  const robotsContent = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml`;
  
  fs.writeFileSync('public/robots.txt', robotsContent);
  console.log('✅ Robots.txt generated successfully!');
}

if (require.main === module) {
  generateSitemap();
  generateRobotsTxt();
  console.log('🚀 All SEO files generated successfully!');
}

module.exports = {
  generateSitemap,
  generateRobotsTxt
};
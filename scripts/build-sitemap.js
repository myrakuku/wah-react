// scripts/build-sitemap.js
const { generateSitemap, generateRobotsTxt } = require('./sitemap-generator');

// 生成 sitemap 和 robots.txt
generateSitemap();
generateRobotsTxt();

console.log('🚀 All SEO files generated successfully!');

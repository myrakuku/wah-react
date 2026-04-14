### node version
    v20.19.5

### SEO meta
Added on all page

## Install and Setup
### icon
npm install react-icons

### page router
npm install react-router-dom

### tailwind.config.js
set global css

## Create Sitemap & robots
npm install next-sitemap
use App Router data to upate new page

    your-react-project/
    ├── public/
    ├── src/
    ├── scripts/s
    │   ├── sitemap-generator.js  # ✅ 
    │   └── build-sitemap.js      # ✅ 
    ├── package.json

    "scripts": {
    "start": "react-scripts start",
    "build": "npm run build:sitemap && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:sitemap": "node scripts/build-sitemap.js",
    "sitemap": "node scripts/build-sitemap.js"
    },

    // run when all done
    npm run sitemap
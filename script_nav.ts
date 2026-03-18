import * as fs from 'fs';
import * as path from 'path';

// 1. Update Layout.tsx
const layoutPath = path.join(process.cwd(), 'src/components/Layout.tsx');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');
layoutContent = layoutContent.replace(
  /const navLinks = \[\s*\{ name: "首頁", path: "\/" \},\s*\{ name: "關於我們", path: "\/about" \},\s*\{ name: "服務\/產品", path: "\/services" \},\s*\{ name: "成功案例", path: "\/case-studies" \},\s*\{ name: "資源\/部落格", path: "\/blog" \},\s*\];/,
  `const navLinks = [
    { name: "首頁", path: "/" },
    { name: "解決方案", path: "/services" },
    { name: "適用產業", path: "/industries" },
    { name: "客戶案例", path: "/case-studies" },
    { name: "關於我們", path: "/about" },
    { name: "最新洞察", path: "/blog" },
  ];`
);
fs.writeFileSync(layoutPath, layoutContent, 'utf8');

// 2. Update App.tsx
const appPath = path.join(process.cwd(), 'src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');
if (!appContent.includes('import Industries')) {
  appContent = appContent.replace(
    'import Services from "./pages/Services";',
    'import Services from "./pages/Services";\nimport Industries from "./pages/Industries";'
  );
  appContent = appContent.replace(
    '<Route path="services" element={<Services />} />',
    '<Route path="services" element={<Services />} />\n          <Route path="industries" element={<Industries />} />'
  );
  fs.writeFileSync(appPath, appContent, 'utf8');
}

console.log('Updated Layout.tsx and App.tsx');

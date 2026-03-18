import * as fs from 'fs';
import * as path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const heroPattern = /<section className="bg-primary text-white py-24 relative overflow-hidden">\s*<div className="absolute inset-0 bg-\[url\('([^']+)'\)\] bg-cover bg-center opacity-10 mix-blend-overlay"><\/div>/g;
  
  if (heroPattern.test(content)) {
    content = content.replace(heroPattern, (match, url) => {
      return `<section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('${url}')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>`;
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated hero in ${filePath}`);
  }
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(path.join(process.cwd(), 'src'));

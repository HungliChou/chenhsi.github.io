import * as fs from 'fs';
import * as path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const replacements: [RegExp, string][] = [
    [/bg-gray-50(?!\/)/g, 'bg-slate-950'],
    [/bg-white(?!\/)/g, 'bg-slate-900'],
    [/bg-blue-50(?!\/)/g, 'bg-white/5'],
    [/bg-gray-100(?!\/)/g, 'bg-white/10'],
    [/bg-gray-200(?!\/)/g, 'bg-white/20'],
    [/bg-gray-900(?!\/)/g, 'bg-slate-950'],
    [/text-gray-900(?!\/)/g, 'text-white'],
    [/text-gray-800(?!\/)/g, 'text-slate-200'],
    [/text-gray-700(?!\/)/g, 'text-slate-300'],
    [/text-gray-600(?!\/)/g, 'text-slate-400'],
    [/text-gray-500(?!\/)/g, 'text-slate-500'],
    [/text-gray-400(?!\/)/g, 'text-slate-500'],
    [/border-gray-100(?!\/)/g, 'border-white/10'],
    [/border-gray-200(?!\/)/g, 'border-white/20'],
    [/border-gray-800(?!\/)/g, 'border-white/10'],
    [/border-blue-100(?!\/)/g, 'border-white/10'],
    [/text-primary(?!\-)/g, 'text-primary-light'],
  ];

  let modified = false;
  for (const [pattern, replacement] of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
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

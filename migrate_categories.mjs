import fs from 'fs';
import path from 'path';

const targetFile = '/Users/tungnguyen/Documents/code/hamedco/src/data/products.ts';
let content = fs.readFileSync(targetFile, 'utf8');

// Replace all occurrences of `category: 'di-dong'` with `categoryIds: ['sieu-am-y-te', 'di-dong']`
// And similarly for tam-trung and cao-cap

content = content.replace(/category:\s*'di-dong'/g, "categoryIds: ['sieu-am-y-te', 'di-dong']");
content = content.replace(/category:\s*'tam-trung'/g, "categoryIds: ['sieu-am-y-te', 'tam-trung']");
content = content.replace(/category:\s*'cao-cap'/g, "categoryIds: ['sieu-am-y-te', 'cao-cap']");

// Also delete `categoryLabel: { vi: 'Siêu âm di động', en: 'Portable Ultrasound' }` since we'll rely on the Categories DB now
content = content.replace(/\s*categoryLabel:\s*\{[\s\S]*?\},/g, "");

fs.writeFileSync(targetFile, content, 'utf8');
console.log("Migration complete in products.ts");

import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

// Replace categoryIds: ['...'], with deviceType: 'sieu-am', priceTier: '...'
// 'pho-thong': lumify, innoSight, clearvue, cx50, cx30
// 'tam-trung': affiniti, cvx, iu22
// 'cao-cap': epiq, sparq, zenition

content = content.replace(/categoryIds\s*:\s*\[(.*?)\],/g, (match, p1) => {
  return `deviceType: 'sieu-am', priceTier: 'tam-trung',`; 
});

fs.writeFileSync('src/data/products.ts', content);

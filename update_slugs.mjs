import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf8');

const slugMap = {
  'lumify': 'HC795005-lumify',
  'innosight': 'HC795001-innosight-compact-ultrasound-system',
  'flash-5100-poc': '795158-flash-ultrasound-system-5100-poc',
  'flash-5100-poc-pro': '795404-flash-ultrasound-system-5100-poc-pro',
  'compact-5300': 'HC795136-compact-5300',
  'compact-5500': 'HC795140-compact-5500',
  'affiniti-30': 'HC795218-affiniti-30',
  'affiniti-50': 'HC795208-affiniti-50',
  'affiniti-70': 'HC795210-affiniti-70',
  'affiniti-cvx': '795190-affiniti-cvx',
  'epiq-cvx': 'HC795231-epiq-cvx',
  'epiq-elite': 'HC795098-epiq-elite'
};

for (const [oldSlug, newSlug] of Object.entries(slugMap)) {
  content = content.replace(`slug: "${oldSlug}"`, `slug: "${newSlug}"`);
}

fs.writeFileSync('src/data/products.ts', content);

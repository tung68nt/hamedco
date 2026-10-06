import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// The faulty string is something like `features:   {`
// Actually it's `features: ` followed by spaces then `{`. It should be `features: [`
content = content.replace(/features:\s*\{/g, 'features: [\n      {');

// Wait! Because of slice(6), the end bracket for features was NOT sliced.
// Let's check what `specifications:` looks like too. It was also sliced!
content = content.replace(/specifications:\s*\{/g, 'specifications: [\n      {');

fs.writeFileSync('src/data/products.ts', content);

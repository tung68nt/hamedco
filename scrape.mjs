import * as fs from 'fs';
import * as cheerio from 'cheerio';

const urls = [
  { id: "lumify-android", url: "https://www.usa.philips.com/healthcare/product/HC795005" },
  { id: "lumify-ios", url: "https://www.usa.philips.com/healthcare/product/HC795161" },
  { id: "innosight", url: "https://www.usa.philips.com/healthcare/product/HC795200" },
  { id: "flash-5100-poc", url: "https://www.usa.philips.com/healthcare/product/795158" },
  { id: "affiniti-30", url: "https://www.usa.philips.com/healthcare/product/HC795213" },
  { id: "affiniti-50", url: "https://www.usa.philips.com/healthcare/product/HC795191" },
  { id: "affiniti-70", url: "https://www.usa.philips.com/healthcare/product/HC795188" },
  { id: "affiniti-cvx", url: "https://www.usa.philips.com/healthcare/product/HC795325" },
  { id: "epiq-cvx", url: "https://www.usa.philips.com/healthcare/product/HC795232" },
  { id: "epiq-elite", url: "https://www.usa.philips.com/healthcare/product/HC795321" }
];

async function scrape() {
  const results = {};

  for (const item of urls) {
    console.log(`Fetching ${item.id}...`);
    try {
      const resp = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!resp.ok) continue;
      
      const html = await resp.text();
      const $ = cheerio.load(html);
      
      let imgUrls = [];
      $('img').each((i, el) => {
         const src = $(el).attr('src');
         if (src && src.includes('philips') && !src.includes('logo')) {
            imgUrls.push(src.startsWith('http') ? src : `https://www.usa.philips.com${src}`);
         }
      });

      let documents = [];
      $('a[href$=".pdf"]').each((i, el) => {
         let title = $(el).text().trim();
         let url = $(el).attr('href');
         if (url) {
            documents.push({ label: title || 'Brochure', url: url.startsWith('http') ? url : `https://www.usa.philips.com${url}` });
         }
      });

      results[item.id] = { images: [...new Set(imgUrls)].slice(0, 5), documents };
      
      console.log(`OK: ${item.id} - ${imgUrls.length} images, ${documents.length} docs`);
    } catch (e) {
      console.log(`ERROR ${item.id}:`, e.message);
    }
  }

  fs.writeFileSync('philips_data.json', JSON.stringify(results, null, 2));
  console.log("Written to philips_data.json");
}

scrape();

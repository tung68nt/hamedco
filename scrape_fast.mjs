import * as fs from 'fs';
import * as cheerio from 'cheerio';

const urls = {
  "lumify": "https://www.usa.philips.com/healthcare/product/HC795005/lumify",
  "innosight": "https://www.usa.philips.com/healthcare/product/HC795001/innosight-compact-ultrasound-system",
  "flash-5100-poc": "https://www.usa.philips.com/healthcare/product/795158/flash-ultrasound-system-5100-poc-point-of-care-ultrasound-sy",
  "flash-5100-poc-pro": "https://www.usa.philips.com/healthcare/product/795404/flash-ultrasound-system-5100-poc-pro-advanced-point-of-care-",
  "compact-5300": "https://www.usa.philips.com/healthcare/product/HC795136/5000-series-hc795136-premium-compact-ultrasound-system",
  "compact-5500": "https://www.usa.philips.com/healthcare/product/HC795140/5000-series-hc795140-premium-compact-ultrasound-system",
  "affiniti-30": "https://www.usa.philips.com/healthcare/product/HC795218/affiniti-30-ultrasound-system",
  "affiniti-50": "https://www.usa.philips.com/healthcare/product/HC795208/affiniti-50-ultrasound-system",
  "affiniti-70": "https://www.usa.philips.com/healthcare/product/HC795210/affiniti-70-ultrasound-system",
  "affiniti-cvx": "https://www.usa.philips.com/healthcare/product/795190/affiniti-cvx-everyday-ultrasound-system",
  "epiq-cvx": "https://www.usa.philips.com/healthcare/product/HC795231/epiq-cvx-premium-cardiology-ultrasound-system",
  "epiq-elite": "https://www.usa.philips.com/healthcare/product/HC795098/epiq-elite-a-new-class-of-premium-ultrasound-has-arrived"
};

async function run() {
  const final = {};
  for (const [id, url] of Object.entries(urls)) {
    try {
      const resp = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await resp.text();
      const $ = cheerio.load(html);

      // We need to differentiate product hero vs clinical vs feature images.
      
      // 1. Hero / Main image (usually has .p-hero or .p-pict--product)
      let tempHero = $('meta[property="og:image"]').attr('content');
      
      // Look for the product gallery wrapper
      let productImages = [];
      $('.p-gallery--image img, .p-gallery-item img, .p-hero img, .p-pict--product img, .p-picture img').each((i, el) => {
         let src = $(el).attr('data-src-large') || $(el).attr('src') || $(el).attr('data-src');
         let alt = $(el).attr('alt') || '';
         if (src && src.includes('philipsconsumer')) {
            if (!src.startsWith('http')) src = 'https://www.usa.philips.com' + src;
            if (src.includes('?')) src = src.split('?')[0] + '?wid=1024&$jpglarge$';
            else src = src + '?wid=1024&$jpglarge$';
            // Avoid clinical images in product images. Clinical images usually have "shown using" or "transducer" or "scan"
            if (!alt.toLowerCase().includes('shown using') && !alt.toLowerCase().includes('transducer') && !alt.toLowerCase().includes('echo') && !alt.toLowerCase().includes('fetal') && !alt.toLowerCase().includes('vein')) {
               productImages.push(src);
            }
         }
      });
      // Unique product images
      productImages = [...new Set(productImages)].slice(0, 5);
      
      if(productImages.length === 0 && tempHero) productImages.push(tempHero + '?wid=1024&$jpglarge$');

      // 2. Clinical Images (usually described using 'transducer')
      let clinicalImages = [];
      $('img').each((i, el) => {
         let src = $(el).attr('data-src-large') || $(el).attr('src') || $(el).attr('data-src');
         let alt = $(el).attr('alt') || '';
         let caption = $(el).closest('div').find('.p-media-gallery__caption, .p-caption').text().trim() || alt;
         
         if (src && src.includes('philipsconsumer') && (caption.toLowerCase().includes('transducer') || caption.toLowerCase().includes('clinical') || caption.toLowerCase().includes('fetal') || alt.toLowerCase().includes('transducer'))) {
            if (!src.startsWith('http')) src = 'https://www.usa.philips.com' + src;
            if (src.includes('?')) src = src.split('?')[0] + '?wid=1024&$jpglarge$';
            clinicalImages.push({ url: src, caption: caption });
         }
      });

      // 3. Feature Sections
      let features = [];
      $('.p-media-text, .p-feature-block, section.p-feature').each((i, el) => {
         let title = $(el).find('h2, h3, h4, .p-heading').first().text().trim();
         let desc = $(el).find('p, .p-body-copy, .p-description').first().text().trim();
         let imgEl = $(el).find('img').first();
         let img = imgEl.attr('data-src-large') || imgEl.attr('src') || imgEl.attr('data-src');
         if (title && img && img.includes('philipsconsumer')) {
            if (!img.startsWith('http')) img = 'https://www.usa.philips.com' + img;
            if (img.includes('?')) img = img.split('?')[0] + '?wid=1024&$jpglarge$';
            features.push({ title, desc, image: img });
         }
      });

      final[id] = { productImages, clinicalImages, features };
      console.log(`Scraped ${id}: ${productImages.length} prod imgs, ${clinicalImages.length} clinic imgs, ${features.length} features`);
    } catch(e) {
      console.log(`Error ${id}: ${e}`);
    }
  }
  fs.writeFileSync('fast_data.json', JSON.stringify(final, null, 2));
}

run();

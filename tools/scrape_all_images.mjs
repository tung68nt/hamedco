/**
 * Scrape product gallery image URLs from Philips product pages
 * Uses Puppeteer to handle JS-rendered SPA pages
 * Run: npx puppeteer browsers install chrome && node scrape_all_images.mjs
 */
import puppeteer from 'puppeteer';
import fs from 'fs';

const PRODUCTS = {
  // CT Products
  'ct-3500': 'https://www.philips.com.ph/healthcare/product/HC728134/philips-ct-3500-hc728134-computed-tomography-scanner',
  'incisive-ct': 'https://www.philips.com.ph/healthcare/product/HC728143/incisive-ct-ct-scanner',
  'ct-5300': 'https://www.philips.com.ph/healthcare/product/HC728285/ct-5300-hc728285-ct-scanner',
  'spectral-ct-7500': 'https://www.philips.com.ph/healthcare/product/728333/spectral-ct-7500-philips-all-new-spectral-detector-ct-7500',
  // MRI Products
  'mr-5300': 'https://www.usa.philips.com/healthcare/product/782110/mr-5300-transform-mr-productivity-quickly-easily-confidently',
  'ingenia-ambition-1.5t-s': 'https://www.philips.com.au/healthcare/product/HC781359/ingenia-ambition-excel-in-your-daily-mr-services-helium-free',
  'ingenia-ambition-1.5t-x': 'https://www.philips.com.au/healthcare/product/HC781356/ingenia-ambition-excel-in-your-daily-mr-services-helium-free',
  'ingenia-elition-3.0t-s': 'https://www.philips.com.au/healthcare/product/HC781357/ingenia-elition-30t-s-30t-imaging-at-your-fingertips',
  'ingenia-elition-3.0t-x': 'https://www.philips.com.au/healthcare/product/HC781358/ingenia-elition-30t-x',
  'mr-7700': 'https://www.philips.com.au/healthcare/product/HCNMRF429/mr-7700',
  // X-ray Products
  'digitaldiagnost-c90': 'https://www.philips.com.au/healthcare/product/HC712034/digitaldiagnost-c90',
  'combidiagnost-r90': 'https://www.philips.com.vn/healthcare/product/HC709031/combidiagnost-r90-cross-functional-drf-system',
};

async function scrapeProduct(browser, id, url) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  try {
    console.log(`Scraping ${id}...`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));
    
    // Scroll to bottom to trigger lazy loading
    await page.evaluate(async () => {
      for (let i = 0; i < 10; i++) {
        window.scrollBy(0, window.innerHeight);
        await new Promise(r => setTimeout(r, 500));
      }
      window.scrollTo(0, 0);
    });
    await new Promise(r => setTimeout(r, 2000));

    const data = await page.evaluate(() => {
      const images = new Set();
      // Get all image URLs from the page
      document.querySelectorAll('img').forEach(img => {
        ['src', 'data-src', 'data-src-large', 'data-lazy-src'].forEach(attr => {
          const val = img.getAttribute(attr);
          if (val && (val.includes('philipsconsumer') || val.includes('PhilipsConsumer'))) {
            let clean = val.split('?')[0] + '?wid=1024&$jpglarge$';
            if (!clean.startsWith('http')) clean = 'https:' + clean;
            images.add(clean);
          }
        });
      });
      // Also check srcset
      document.querySelectorAll('img[srcset], source[srcset]').forEach(el => {
        const srcset = el.getAttribute('srcset') || '';
        srcset.split(',').forEach(s => {
          const url = s.trim().split(' ')[0];
          if (url && (url.includes('philipsconsumer') || url.includes('PhilipsConsumer'))) {
            let clean = url.split('?')[0] + '?wid=1024&$jpglarge$';
            if (!clean.startsWith('http')) clean = 'https:' + clean;
            images.add(clean);
          }
        });
      });
      // Check background images in style attributes
      document.querySelectorAll('[style]').forEach(el => {
        const style = el.getAttribute('style');
        const match = style.match(/url\(['"]?(.*?philips[cC]onsumer.*?)['"]?\)/);
        if (match) {
          let clean = match[1].split('?')[0] + '?wid=1024&$jpglarge$';
          if (!clean.startsWith('http')) clean = 'https:' + clean;
          images.add(clean);
        }
      });

      // Get OG image
      const ogImg = document.querySelector('meta[property="og:image"]');
      const ogUrl = ogImg ? ogImg.getAttribute('content') : null;

      // Get product title
      const h1 = document.querySelector('h1');
      const title = h1 ? h1.textContent.trim() : '';

      // Get description from meta
      const metaDesc = document.querySelector('meta[name="description"], meta[property="og:description"]');
      const description = metaDesc ? metaDesc.getAttribute('content') : '';

      return {
        images: [...images],
        ogImage: ogUrl,
        title,
        description,
      };
    });

    console.log(`  ${id}: ${data.images.length} images found`);
    return data;
  } catch (e) {
    console.error(`  Error scraping ${id}: ${e.message}`);
    return { images: [], ogImage: null, title: '', description: '' };
  } finally {
    await page.close();
  }
}

async function main() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const results = {};

  for (const [id, url] of Object.entries(PRODUCTS)) {
    results[id] = await scrapeProduct(browser, id, url);
  }

  await browser.close();
  fs.writeFileSync('scraped_images.json', JSON.stringify(results, null, 2));
  console.log('\nDone! Results saved to scraped_images.json');
}

main().catch(console.error);

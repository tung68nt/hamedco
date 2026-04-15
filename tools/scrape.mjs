import puppeteer from 'puppeteer';
import fs from 'fs';

const urls = {
  'lumify': 'https://www.usa.philips.com/healthcare/product/HC795005/lumify',
  'innosight': 'https://www.usa.philips.com/healthcare/product/HC795001/innosight-compact-ultrasound-system',
  'flash-5100-poc': 'https://www.usa.philips.com/healthcare/product/795158/flash-ultrasound-system-5100-poc-point-of-care-ultrasound-sy',
  'flash-5100-poc-pro': 'https://www.usa.philips.com/healthcare/product/795404/flash-ultrasound-system-5100-poc-pro-advanced-point-of-care-',
  'compact-5300': 'https://www.usa.philips.com/healthcare/product/HC795136/5000-series-hc795136-premium-compact-ultrasound-system',
  'compact-5500': 'https://www.usa.philips.com/healthcare/product/HC795140/5000-series-hc795140-premium-compact-ultrasound-system',
  'affiniti-30': 'https://www.usa.philips.com/healthcare/product/HC795218/affiniti-30-ultrasound-system',
  'affiniti-50': 'https://www.usa.philips.com/healthcare/product/HC795208/affiniti-50-ultrasound-system',
  'affiniti-70': 'https://www.usa.philips.com/healthcare/product/HC795210/affiniti-70-ultrasound-system',
  'affiniti-cvx': 'https://www.usa.philips.com/healthcare/product/795190/affiniti-cvx-everyday-ultrasound-system',
  'epiq-cvx': 'https://www.usa.philips.com/healthcare/product/HC795231/epiq-cvx-premium-cardiology-ultrasound-system',
  'epiq-elite': 'https://www.usa.philips.com/healthcare/product/HC795098/epiq-elite-a-new-class-of-premium-ultrasound-has-arrived'
};

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  let result = {};
  if (fs.existsSync('/tmp/philips_deep.json')) {
    result = JSON.parse(fs.readFileSync('/tmp/philips_deep.json', 'utf8'));
  }

  for (const [key, url] of Object.entries(urls)) {
    if (result[key]) {
      console.log(`Skipping ${key}...`);
      continue; // already scraped
    }
    console.log(`Scraping ${key}...`);
    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(e => console.log('Timeout, proceeding anyway'));
      await new Promise(resolve => setTimeout(resolve, 2000)); // wait for client-side render a bit
      
      const data = await page.evaluate(() => {
        const features = [];
        document.querySelectorAll('h3, h4').forEach(h => {
          let parent = h.parentElement;
          if (parent) {
            let p = parent.querySelector('p, span');
            let img = parent.closest('.p-card, .cmp-feature, li, div')?.querySelector('img') || parent.querySelector('img');
            if (p && h.innerText.trim().length > 5) {
              features.push({
                title: h.innerText.trim(),
                desc: p.innerText.trim(),
                image: img ? img.src : null
              });
            }
          }
        });
        
        const specs = [];
        document.querySelectorAll('tr').forEach(tr => {
          const cells = tr.querySelectorAll('th, td');
          if (cells.length >= 2) {
            specs.push({
              label: cells[0].innerText.replace(/\s+/g,' ').trim(),
              value: cells[1].innerText.replace(/\s+/g,' ').trim()
            });
          }
        });

        const paragraphs = Array.from(document.querySelectorAll('p'))
          .filter(p => p.innerText.trim().length > 100)
          .map(p => p.innerText.trim());

        return { features, specs, paragraphs };
      });
      
      result[key] = data;
      fs.writeFileSync('/tmp/philips_deep.json', JSON.stringify(result, null, 2));
      await page.close();
      console.log(`Saved ${key}`);
    } catch (e) {
      console.error(`Error scraping ${key}`, e.message);
    }
  }

  await browser.close();
  console.log('Done deep scraping!');
})();

import puppeteer from 'puppeteer';

const PRODUCTS = [
  { id: 'ct-3500', url: 'https://www.philips.com.ph/healthcare/product/HC728134/philips-ct-3500-hc728134-computed-tomography-scanner' },
  { id: 'incisive-ct', url: 'https://www.philips.com.ph/healthcare/product/HC728143/incisive-ct-ct-scanner' },
  { id: 'ct-5300', url: 'https://www.philips.com.ph/healthcare/product/HC728285/ct-5300-hc728285-ct-scanner' },
  { id: 'spectral-ct-7500', url: 'https://www.philips.com.ph/healthcare/product/728333/spectral-ct-7500-philips-all-new-spectral-detector-ct-7500' },
  { id: 'mr-5300', url: 'https://www.usa.philips.com/healthcare/product/782110/mr-5300-transform-mr-productivity-quickly-easily-confidently' },
  { id: 'ingenia-ambition-1.5t-s', url: 'https://www.philips.com.au/healthcare/product/HC781359/ingenia-ambition-excel-in-your-daily-mr-services-helium-free' },
  { id: 'ingenia-ambition-1.5t-x', url: 'https://www.philips.com.au/healthcare/product/HC781356/ingenia-ambition-excel-in-your-daily-mr-services-helium-free' },
  { id: 'ingenia-elition-3.0t-s', url: 'https://www.philips.com.au/healthcare/product/HC781357/ingenia-elition-30t-s-30t-imaging-at-your-fingertips' },
  { id: 'ingenia-elition-3.0t-x', url: 'https://www.philips.com.au/healthcare/product/HC781358/ingenia-elition-30t-x' },
  { id: 'mr-7700', url: 'https://www.philips.com.au/healthcare/product/HCNMRF429/mr-7700' }
];

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const product of PRODUCTS) {
    console.log(`\nNavigating to ${product.id}...`);
    try {
      await page.goto(product.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait a moment
      await new Promise(r => setTimeout(r, 1000));

      // Hide banners using multiple strategies
      await page.evaluate(() => {
        // Attempt to remove Truste elements
        document.querySelectorAll('.truste_overlay, .truste_box_overlay, #truste-consent-track, #cookie-consent-banner, .cookie-banner, [class*="cookie"], [id*="cookie"], iframe[title="TrustArc Cookie Consent"], iframe[src*="trustarc"]').forEach(el => el.remove());
      });
      await new Promise(r => setTimeout(r, 1000));

      let imgHandle;
      if (product.id.includes('ct-3500')) {
        imgHandle = await page.$('.p-product-hero__visual, .p-product-image');
      } else {
        imgHandle = await page.$('.p-product-hero__image picture img') || 
                    await page.$('.p-product-hero__image img') ||
                    await page.$('.p-product-image picture img') ||
                    await page.$('picture img');
      }
      
      if (imgHandle) {
        await imgHandle.screenshot({ path: `public/assets/images/products/${product.id}.png` });
        console.log(`Saved pristine screenshot for ${product.id}`);
      } else {
        console.log(`No image found for ${product.id}`);
      }
    } catch (err) {
      console.log(`Error processing ${product.id}: ${err.message}`);
    }
  }

  await browser.close();
}

run().catch(console.error);

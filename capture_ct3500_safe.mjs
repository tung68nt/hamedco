import puppeteer from 'puppeteer';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('\nNavigating to ct-3500...');
  try {
    await page.goto('https://www.philips.com.ph/healthcare/product/HC728134/philips-ct-3500-hc728134-computed-tomography-scanner', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));

    // Destroy ONLY cookie banners
    await page.evaluate(() => {
      const selectors = [
        '.truste_overlay', '.truste_box_overlay', '#truste-consent-track',
        '#cookie-consent-banner', '.cookie-banner', '[class*="cookie"]', '[id*="cookie"]'
      ];
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.remove());
      });
    });
    // Wait a moment for layout shift
    await new Promise(r => setTimeout(r, 1000));

    const elementHandle = await page.$('.p-product-hero__visual, .p-product-image');
    
    if (elementHandle) {
      await elementHandle.screenshot({ path: 'public/assets/images/products/ct-3500.png' });
      console.log(`Saved pristine screenshot for ct-3500`);
    } else {
      console.log(`No image found for ct-3500`);
    }
  } catch (err) {
    console.log(`Error processing ct-3500: ${err.message}`);
  }

  await browser.close();
}

run().catch(console.error);

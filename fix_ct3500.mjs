import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to ct-3500...');
  await page.goto('https://www.philips.com.ph/healthcare/product/HC728134/philips-ct-3500-hc728134-computed-tomography-scanner', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  // Find the exact product hero container
  const container = await page.$('.p-product-hero__visual, .p-product-image');
  if (container) {
    await container.screenshot({ path: 'public/assets/images/products/ct-3500.png' });
    console.log('Saved container screenshot for ct-3500');
  }

  await browser.close();
}

run().catch(console.error);

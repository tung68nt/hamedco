import puppeteer from 'puppeteer';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('\nNavigating to ct-3500...');
  try {
    await page.goto('https://www.philips.com.ph/healthcare/product/HC728134/philips-ct-3500-hc728134-computed-tomography-scanner', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Attempt to click the Accept Cookie button
    console.log('Looking for cookie consent button...');
    const acceptBtn = await page.$('button.tv-cb-accept, #truste-consent-button, .truste-button1, .js-cookie-banner__accept-button');
    if (acceptBtn) {
      console.log('Found accept button, clicking...');
      await acceptBtn.click();
      await new Promise(r => setTimeout(r, 2000)); // wait for banner to disappear
    }

    const imgHandle = await page.$('.p-product-hero__image picture img') || 
                      await page.$('.p-product-hero__image img') ||
                      await page.$('.p-product-image picture img') ||
                      await page.$('picture img');
    
    if (imgHandle) {
      await imgHandle.screenshot({ path: 'public/assets/images/products/ct-3500.png' });
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

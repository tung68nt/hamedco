import puppeteer from 'puppeteer';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    const url = 'https://www.philips.com.ph/healthcare/product/HC728134/philips-ct-3500-hc728134-computed-tomography-scanner';
    console.log('Navigating to product page...');
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Find image src
    const imgSrc = await page.evaluate(() => {
      const img = document.querySelector('.p-product-hero__visual picture img') ||
                  document.querySelector('.p-product-hero__image picture img') || 
                  document.querySelector('.p-product-image picture img') ||
                  document.querySelector('picture img');
      return img ? img.src : null;
    });

    if (imgSrc) {
      console.log('Found Image Source:', imgSrc);
      const imgPage = await browser.newPage();
      await imgPage.goto(imgSrc, { waitUntil: 'networkidle0' });
      
      const imgEl = await imgPage.$('img');
      await imgEl.screenshot({ path: 'public/assets/images/products/ct-3500.png' });
      console.log('Successfully saved perfect image via direct URL capture!');
      await imgPage.close();
    } else {
      console.log('Could not find image src on page.');
    }
  } catch (err) {
    console.error('Error:', err);
  }

  await browser.close();
}

run().catch(console.error);

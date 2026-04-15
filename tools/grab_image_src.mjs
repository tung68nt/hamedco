import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.goto('https://www.philips.com.au/healthcare/product/HCNMRF429/mr-7700', { waitUntil: 'domcontentloaded', timeout: 30000 });
  
  const imgSrc = await page.evaluate(() => {
    const img = document.querySelector('.p-product-hero__visual img') || 
                document.querySelector('.p-product-hero__image img');
    return img ? img.src : null;
  });
  
  console.log('Found image src:', imgSrc);
  await browser.close();
}

run().catch(console.error);

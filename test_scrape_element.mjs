import puppeteer from 'puppeteer';
import fs from 'fs';

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const url = 'https://www.philips.com.ph/healthcare/product/HC728134/philips-ct-3500-hc728134-computed-tomography-scanner';
  
  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  
  // Try to find the hero image or picture element
  const imgHandle = await page.$('picture img') || await page.$('.p-product-hero__image img') || await page.$('img');
  
  if (imgHandle) {
    console.log('Found image element, taking screenshot...');
    await imgHandle.screenshot({ path: 'public/assets/images/products/ct-3500-test.png' });
    console.log('Saved to ct-3500-test.png');
  } else {
    console.log('No image found');
  }
  
  await browser.close();
}

run().catch(console.error);

import requests
from bs4 import BeautifulSoup
import json
import logging

logging.basicConfig(level=logging.INFO)

urls = {
  "lumify-android": "https://www.usa.philips.com/healthcare/product/HC795005/lumify",
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
}

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}
result = {}

for id, url in urls.items():
    try:
        logging.info(f"Fetching {id}...")
        r = requests.get(url, headers=headers)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        product_images = []
        features = []
        docs = []

        # Find document links
        for a in soup.find_all('a', href=True):
            if a['href'].endswith('.pdf'):
                h = a['href']
                if not h.startswith('http'):
                    h = 'https://www.usa.philips.com' + h
                docs.append({"label": a.get_text(strip=True), "url": h})

        # Process all images
        for img in soup.find_all('img'):
            src = img.get('data-src-large') or img.get('src') or img.get('data-src')
            if not src:
                continue
            alt = (img.get('alt') or '').lower()
            if 'philipsconsumer' in src and not src.endswith('.svg') and not src.endswith('.gif'):
                if not src.startswith('http'):
                    src = 'https://www.usa.philips.com' + src
                # Convert to large
                if '?' in src:
                    src = src.split('?')[0] + '?wid=1024&$jpglarge$'
                else:
                    src += '?wid=1024&$jpglarge$'
                
                # Check if it's a product image or clinical image
                # Exclude if alt contains clinical keywords
                if any(k in alt for k in ['clinical', 'transducer', 'fetus', 'spine', 'echo', 'vein', 'artery', 'layer']):
                    pass # it's clinical, skip for product images
                else:
                    # heuristic: look for images that are not just icons, usually paths have random hash
                    if len(src) > 50:
                        product_images.append(src)

        # Unique lists
        product_images = list(dict.fromkeys(product_images))
        # Keep max 5 for gallery
        
        # We need a proper MAIN product image. Usually og:image is good, let's check it.
        og_img = soup.find('meta', property='og:image')
        if og_img and og_img.get('content') and 'philipsconsumer' in og_img.get('content'):
            main_url = og_img.get('content').split('?')[0] + '?wid=1024&$jpglarge$'
            if main_url not in product_images:
                product_images.insert(0, main_url)

        result[id] = {
            "images": product_images[:5],
            "docs": docs
        }
        logging.info(f"Done {id}: {len(product_images[:5])} images")
    except Exception as e:
        logging.error(f"Error {id}: {e}")

with open('fast_py_data.json', 'w') as f:
    json.dump(result, f, indent=2)

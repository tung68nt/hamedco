import fs from 'fs';
import https from 'https';

const url = 'https://images.philips.com/is/image/PhilipsConsumer/HC728134-IMS-en_AA?wid=1024&$jpglarge$'; // Example Philips CDN image

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 'Referer': 'https://www.philips.com.ph/' } }, (res) => {
  const fileStream = fs.createWriteStream('test_fetch.jpg');
  res.pipe(fileStream);
  fileStream.on('finish', () => {
    console.log('Downloaded!', fs.statSync('test_fetch.jpg').size);
  });
}).on('error', console.error);

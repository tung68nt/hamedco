import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const HOSPITALS = {
  // Central
  "Bệnh viện Bạch Mai": "http://bachmai.gov.vn",
  "BV Hữu nghị Việt Đức": "http://benhvienvietduc.org",
  "Bệnh viện Chợ Rẫy": "http://choray.vn",
  "BV TW Quân đội 108": "https://benhvien108.vn",
  "Bệnh viện 103": "http://benhvien103.vn",
  "Bệnh viện 175": "https://benhvien175.vn",
  "Bệnh viện K": "https://benhvienk.vn",
  "BV Phổi Trung ương": "http://bvptw.org",

  // Provincial
  "Sở Y tế Hà Nội": "https://soyte.hanoi.gov.vn",
  "Sở Y tế TP.HCM": "https://medinet.gov.vn",
  "Sở Y tế Đà Nẵng": "https://soyte.danang.gov.vn",
  "BV ĐK tỉnh Nghệ An": "http://benhviendakhoanghean.vn",
  "BV ĐK tỉnh Thanh Hóa": "http://bvdktinhtranhhoa.vn",
  "BV ĐK tỉnh Quảng Nam": "http://bvdkquangnam.vn",
  "BV ĐK tỉnh Bình Dương": "http://benhvienbinhduong.org.vn",
  "BV ĐK tỉnh Đồng Nai": "http://benhviendongnai.com.vn",

  // Private
  "Hệ thống BV Tâm Anh": "https://tamanhhospital.vn",
  "Hệ thống BV Vinmec": "https://www.vinmec.com",
  "Hệ thống BV Hoàn Mỹ": "https://www.hoanmy.com",
  "Hệ thống BV Thu Cúc": "https://benhvienthucuc.vn",
  "BV Đa khoa Quốc tế": "https://vih.vn",
  "Phòng khám Medlatec": "https://medlatec.vn"
};

const OUT_DIR = path.join(process.cwd(), "public", "assets", "images", "partners");

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    const req = protocol.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    }, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let newUrl = res.headers.location;
        if (!newUrl.startsWith("http")) {
           const u = new URL(url);
           newUrl = u.protocol + "//" + u.host + (newUrl.startsWith("/") ? "" : "/") + newUrl;
        }
        return downloadImage(newUrl, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status: ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
    
    // Add timeout
    req.setTimeout(10000, () => {
       req.destroy();
       reject(new Error("Timeout"));
    });
  });
}

function extractLogoUrl(html, baseUrl) {
  let logoUrl = null;
  // Look for og:image
  let match = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (match) logoUrl = match[1];
  
  if (!logoUrl) {
    // Look for link rel=icon or shortcut icon with larger size if possible, or just the main logo img
    // We try to find <img ... class="...logo..."> or src="...logo..."
    match = html.match(/<img[^>]+src=["']([^"']+(?:logo)[^"']*)["']/i);
    if (match) logoUrl = match[1];
  }
  
  if (!logoUrl) {
    // Fallback to favicon
    match = html.match(/<link[^>]+rel=["'](?:shortcut\s+)?icon["'][^>]+href=["']([^"']+)["']/i);
    if (!match) {
       match = html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'](?:shortcut\s+)?icon["']/i);
    }
    if (match) logoUrl = match[1];
  }
  
  if (logoUrl) {
    if (logoUrl.startsWith("//")) {
      logoUrl = "https:" + logoUrl;
    } else if (logoUrl.startsWith("/")) {
      logoUrl = baseUrl.replace(/\/$/, "") + logoUrl;
    } else if (!logoUrl.startsWith("http")) {
      logoUrl = baseUrl.replace(/\/$/, "") + "/" + logoUrl;
    }
    
    // HTML decode
    logoUrl = logoUrl.replace(/&amp;/g, "&");
  }
  
  return logoUrl;
}

async function scrape() {
  const mapping = {};
  
  for (const [name, url] of Object.entries(HOSPITALS)) {
    console.log(`Processing: ${name} (${url})`);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      
      if (!res.ok) {
         console.error(`  -> Failed to fetch page: ${res.status}`);
         continue;
      }
      const html = await res.text();
      const logoUrl = extractLogoUrl(html, url);
      
      if (logoUrl) {
        console.log(`  -> Found logo: ${logoUrl}`);
        const ext = logoUrl.split("?")[0].split(".").pop().toLowerCase() || "png";
        const safeExt = ["png", "jpg", "jpeg", "svg", "webp", "gif"].includes(ext) ? ext : "png";
        
        // Remove 'BV', 'SYT', etc to have a clean name
        const cleanName = name.replace(/Bệnh viện |BV |Hệ thống BV |Sở Y tế |Phòng khám |ĐK |tỉnh |TW /gi, "").trim().replace(/\s+/g, "-").toLowerCase();
        
        const fileName = `${cleanName}-logo.${safeExt}`;
        const destPath = path.join(OUT_DIR, fileName);
        
        await downloadImage(logoUrl, destPath);
        console.log(`  -> Downloaded to: ${fileName}`);
        
        mapping[name] = `/assets/images/partners/${fileName}`;
      } else {
        console.log(`  -> No logo found in HTML`);
        // Fallback to favicon.ico
        const fallbackUrl = url.replace(/\/$/, "") + "/favicon.ico";
        console.log(`  -> Trying fallback: ${fallbackUrl}`);
        const cleanName = name.replace(/Bệnh viện |BV |Hệ thống BV |Sở Y tế |Phòng khám |ĐK |tỉnh |TW /gi, "").trim().replace(/\s+/g, "-").toLowerCase();
        const fileName = `${cleanName}-logo.ico`;
        const destPath = path.join(OUT_DIR, fileName);
        try {
           await downloadImage(fallbackUrl, destPath);
           console.log(`  -> Downloaded fallback to: ${fileName}`);
           mapping[name] = `/assets/images/partners/${fileName}`;
        } catch(e) {
           console.log(`  -> Fallback failed`);
        }
      }
    } catch(err) {
      console.error(`  -> Error: ${err.message}`);
    }
  }
  
  fs.writeFileSync("logo_mapping.json", JSON.stringify(mapping, null, 2));
  console.log("Done! Wrote mapping to logo_mapping.json");
}

scrape();

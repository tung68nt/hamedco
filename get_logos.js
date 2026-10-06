const fs = require('fs');

async function downloadFallback(url, dest) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
        if (!res.ok) return false;
        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        if (buffer.length < 1000) return false;
        fs.writeFileSync(dest, buffer);
        console.log(`Downloaded ${dest} (${buffer.length} bytes)`);
        return true;
    } catch (e) {
        return false;
    }
}

async function run() {
    const targets = [
        { name: '103-new.png', urls: ['https://benhvien103.vn/wp-content/themes/benhvien103/images/logo.png', 'https://upload.wikimedia.org/wikipedia/commons/d/df/H%E1%BB%8Dc_vi%E1%BB%87n_Qu%C3%A2n_Y.png'] },
        { name: 'nghean-new.png', urls: ['http://bvnghean.vn/wp-content/uploads/2016/12/logo-1600x1600.png', 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://bvnghean.vn&size=256'] },
        { name: 'quangnam-new.png', urls: ['http://bvdkquangnam.vn/assets/frontend/images/logo.png', 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://bvdkquangnam.vn&size=256'] },
        { name: 'vih-new.png', urls: ['https://vih.vn/wp-content/uploads/2023/08/logo-vih.png', 'https://vih.vn/wp-content/uploads/2023/08/co-logo-2.jpg'] },
        { name: 'thucuc-new.svg', urls: ['https://benhvienthucuc.vn/wp-content/themes/thucuc/images/logo.svg', 'https://tcihospital.vn/wp-content/themes/tcihospital/assets/images/logo.svg', 'https://upload.wikimedia.org/wikipedia/commons/8/87/H%E1%BB%87_th%E1%BB%91ng_Y_t%E1%BA%BF_Thu_C%C3%BAc_TCI_-_Logo.svg'] }
    ];

    for (const t of targets) {
        let success = false;
        const dest = `public/assets/images/partners/${t.name}`;
        for (const u of t.urls) {
            console.log(`Trying ${u}...`);
            if (await downloadFallback(u, dest)) {
                success = true;
                break;
            }
        }
        if (!success) console.log(`Failed all for ${t.name}`);
    }
}
run();

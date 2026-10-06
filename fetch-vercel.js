const fs = require('fs');
const https = require('https');
const path = require('path');

const token = "vca_4SgIlZNl6PjtQ0JV46F3lQRRbDNwqcJKAFJhKS9d3ehXGyi6qn2wy1Qc";
const teamId = ""; // No team id needed since we are using personal account or we don't know it, API handles it if token is enough
const depId = "dpl_3AXb8ubG33Ud7tjFuUMxtXELzdXU";

const options = {
    headers: {
        "Authorization": `Bearer ${token}`
    }
};

function downloadFile(uid, destPath) {
    return new Promise((resolve, reject) => {
        https.get(`https://api.vercel.com/v7/file/${uid}`, options, (res) => {
            if (res.statusCode !== 200) {
               reject(new Error(`Failed to download ${uid}, status: ${res.statusCode}`));
               return;
            }
            const fileStream = fs.createWriteStream(destPath);
            res.pipe(fileStream);
            fileStream.on('finish', () => resolve(destPath));
        }).on('error', reject);
    });
}

function processNode(node, currentPath) {
    const promises = [];
    if (node.type === 'directory') {
        const dirPath = path.join(currentPath, node.name);
        if (node.name !== 'src' && !fs.existsSync(dirPath)) {
             fs.mkdirSync(dirPath, { recursive: true });
        }
        const childPath = node.name === 'src' ? currentPath : dirPath;
        if (node.children) {
            for (const child of node.children) {
                promises.push(...processNode(child, childPath));
            }
        }
    } else if (node.type === 'file') {
        // Skip some dirs if we only want V1 files, actually let's reconstruct everything
        if (node.uid) {
            const destPath = path.join(currentPath, node.name);
            promises.push(
               downloadFile(node.uid, destPath)
                  .then(() => console.log('Downloaded:', destPath))
                  .catch(err => console.error(err))
            );
        }
    }
    return promises;
}

https.get(`https://api.vercel.com/v6/deployments/${depId}/files`, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
        try {
            const files = JSON.parse(data);
            const allPromises = [];
            for (const node of files) {
                allPromises.push(...processNode(node, __dirname));
            }
            await Promise.all(allPromises);
            console.log("All files downloaded from Vercel deployment!");
        } catch (e) {
            console.error("Parse error:", e);
        }
    });
});

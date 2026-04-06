/* ============================================================
   HAMEDCO — Product Detail Page
   Render dynamic product data based on ?id=slug
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  if (!id) {
    window.location.href = 'index.html';
    return;
  }

  const product = PHILIPS_PRODUCTS.find(p => p.slug === id);
  if (!product) {
    // Show 404
    document.getElementById('productDetailContainer').innerHTML = `
      <div class="text-center" style="padding: 100px 0;">
        <h2>Sản phẩm không tồn tại</h2>
        <p>Chúng tôi không tìm thấy sản phẩm bạn đang tìm kiếm.</p>
        <a href="index.html" class="btn btn-primary" style="margin-top:20px;">Về trang chủ</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${product.name} | HAMEDCO`;

  let currentLang = getCurrentLang ? getCurrentLang() : 'vi';
  
  function render(lang) {
    const title = product.name;
    const subtitle = product.subtitle[lang] || product.subtitle.vi;
    const desc = product.description[lang] || product.description.vi;
    const brand = product.brand;
    const category = product.categoryLabel[lang] || product.categoryLabel.vi;
    
    // Highlights list
    const highlightsObj = product.highlights[lang] || product.highlights.vi;
    const highlightsHtml = highlightsObj.map(h => `<li>${h}</li>`).join('');

    // Gallery images
    const mainImg = product.images[0] || product.thumbnail;
    const galleryHtml = product.images.length > 1 
      ? `<div class="product-gallery">
          ${product.images.map((img, i) => `
            <img class="gallery-thumb ${i===0?'active':''}" src="${img}" alt="${title} view ${i}" onclick="document.getElementById('mainImg').src='${img}'; document.querySelectorAll('.gallery-thumb').forEach(el=>el.classList.remove('active')); this.classList.add('active');">
          `).join('')}
         </div>`
      : '';

    // Language specific labels
    const btnQuote = lang === 'en' ? 'Request Quote' : 'Yêu cầu báo giá';
    const btnContact = lang === 'en' ? 'Contact Us' : 'Liên hệ tư vấn';
    const highlightLabel = lang === 'en' ? 'Key Highlights' : 'Điểm nổi bật';

    const html = `
      <div class="product-detail-wrapper" style="display: flex; flex-wrap: wrap; gap: 40px; margin-bottom: 60px;">
        <!-- Left: Image Gallery -->
        <div class="product-detail-visuals" style="flex: 1; min-width: 320px;">
          <div class="main-image-container" style="background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 24px rgba(0,0,0,0.06); text-align: center; margin-bottom: 16px;">
            <img id="mainImg" src="${mainImg}" alt="${title}" style="max-width: 100%; max-height: 400px; object-fit: contain;">
          </div>
          ${galleryHtml}
        </div>

        <!-- Right: Info -->
        <div class="product-detail-info" style="flex: 1; min-width: 320px;">
          <span class="product-brand" style="color: var(--color-gray-500); font-weight: 600; text-transform: uppercase; font-size: 0.875rem; letter-spacing: 1px;">${brand}</span>
          <h1 style="font-size: 2.5rem; color: var(--color-gray-900); margin: 8px 0 4px;">${title}</h1>
          <h2 style="font-size: 1.25rem; color: var(--color-primary); font-weight: 500; margin-bottom: 16px;">${subtitle}</h2>
          
          <span style="display:inline-block;background:rgba(11,94,215,0.08);color:#0B5ED7;padding:4px 12px;border-radius:6px;font-size:0.875rem;font-weight:600;margin-bottom:24px;">${category}</span>

          <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-gray-700); margin-bottom: 32px;">
            ${desc}
          </p>

          <h3 style="font-size: 1.25rem; margin-bottom: 16px; border-bottom: 1px solid var(--color-gray-200); padding-bottom: 8px;">${highlightLabel}</h3>
          <ul style="list-style: none; padding: 0; margin-bottom: 40px; color: var(--color-gray-700);">
            ${highlightsObj.map(h => `
              <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                <svg width="20" height="20" fill="none" stroke="var(--color-primary)" viewBox="0 0 24 24" style="margin-right: 12px; flex-shrink: 0; margin-top: 2px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                ${h}
              </li>
            `).join('')}
          </ul>

          <div style="display: flex; gap: 16px;">
            <a href="#quote" class="btn btn-primary" style="flex: 1;">${btnQuote}</a>
            <a href="index.html#contact" class="btn btn-outline" style="flex: 1;">${btnContact}</a>
          </div>
        </div>
      </div>
      
      <style>
        .product-gallery { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px; }
        .gallery-thumb { width: 80px; height: 80px; object-fit: contain; background: #fff; border: 2px solid transparent; border-radius: 8px; cursor: pointer; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: 0.2s; }
        .gallery-thumb:hover { border-color: rgba(11,94,215,0.3); }
        .gallery-thumb.active { border-color: var(--color-primary); }
      </style>
    `;
    
    document.getElementById('productDetailContainer').innerHTML = html;
  }

  // Initial render
  setTimeout(() => render(currentLang), 300); // 300ms fake loading for visual effect

  // Listen for language change
  document.addEventListener('langchange', (e) => {
    currentLang = e.detail.lang;
    render(currentLang);
  });
});

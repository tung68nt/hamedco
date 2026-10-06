const fetch = require('node-fetch');

const SUPABASE_URL = 'https://akotwldjmpvxtrjizctk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrb3R3bGRqbXB2eHRyaml6Y3RrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjI1MzI2MSwiZXhwIjoyMDkxODI5MjYxfQ.x4P73oyqiW9KhrJXvxo4WIsCTpsxgemno-lsC2uSuXo';

async function upsertProduct(product) {
  const dbData = {
    slug: product.slug,
    slug_en: product.slug_en || null,
    name: typeof product.name === 'object' ? product.name.vi : product.name,
    subtitle: product.subtitle || { vi: '', en: '' },
    description: product.description || { vi: '', en: '' },
    long_description: product.longDescription || { vi: '', en: '' },
    brand: product.brand || '',
    thumbnail: product.thumbnail || product.images?.[0] || '',
    images: (product.images || []).map((img, index) => {
      const isThumbnail = img === product.thumbnail || index === 0;
      return {
        url: img,
        type: isThumbnail ? 'thumbnail' : 'detail',
        alt: { vi: `Hình ${index + 1}`, en: `Image ${index + 1}` }
      };
    }),
    source_url: product.sourceUrl || product.source_url || '',
    video_url: product.videoUrl || product.video_url || '',
    highlights: product.highlights || { vi: [], en: [] },
    features: product.features || [],
    specifications: product.specifications || [],
    documents: product.documents || [],
    category_ids: product.categoryIds || [],
    seo: product.seo || {},
    updated_at: new Date().toISOString()
  };

  const response = await fetch(`${SUPABASE_URL}/rest/v1/cms_products?slug=eq.${product.slug}`, {
    method: 'GET',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  const existing = await response.json();
  
  if (existing && existing.length > 0) {
    // Update
    const updateResponse = await fetch(`${SUPABASE_URL}/rest/v1/cms_products?slug=eq.${product.slug}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(dbData)
    });
    const result = await updateResponse.json();
    console.log(`✅ ${product.slug} updated`);
    return { success: true, result };
  } else {
    // Insert
    dbData.created_at = new Date().toISOString();
    const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/cms_products`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify([dbData])
    });
    const result = await insertResponse.json();
    console.log(`➕ ${product.slug} inserted`);
    return { success: true, result };
  }
}

module.exports = { upsertProduct };

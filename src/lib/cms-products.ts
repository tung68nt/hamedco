import { createServerSupabase } from './supabase-server';

export function getSupabaseAdmin() {
  return createServerSupabase();
}

export interface CMSProduct {
  id: string;
  slug: string;
<<<<<<< HEAD
  slug_en?: string;
  name: string | { vi: string; en: string };
=======
  name: string;
>>>>>>> origin/main
  subtitle: { vi: string; en: string };
  deviceType: string;
  priceTier: string;
  brand: string;
  description: { vi: string; en: string };
  longDescription: { vi: string; en: string };
  images: string[];
  thumbnail: string;
  sourceUrl?: string;
  videoUrl?: string;
  highlights: { vi: string[]; en: string[] };
  features: any[];
  specifications: any[];
  documents?: any[];
  clinicalImages?: any[];
<<<<<<< HEAD
  categoryIds?: string[];
  seo?: any;
  _createdAt?: string;
  _updatedAt?: string;
=======
  seo?: any;
  _createdAt?: string;
  _updatedAt?: string;
  _source?: 'cms' | 'static';
>>>>>>> origin/main
}

export async function getAllProducts(): Promise<CMSProduct[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('cms_products')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  
<<<<<<< HEAD
  return (data || []).map(transformDbToCms);
=======
  return data || [];
>>>>>>> origin/main
}

export async function getProductBySlug(slug: string): Promise<CMSProduct | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('cms_products')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }
  
<<<<<<< HEAD
  return transformDbToCms(data);
}

function transformDbToCms(dbProduct: any): CMSProduct {
  const categoryIds = dbProduct.category_ids || [];
  const deviceType = categoryIds.find((id: string) => ['sieu-am', 'ct', 'mri', 'x-quang'].includes(id)) || '';
  const priceTier = categoryIds.find((id: string) => ['di-dong', 'pho-thong', 'tam-trung', 'cao-cap'].includes(id)) || '';
  
  return {
    id: dbProduct.id,
    slug: dbProduct.slug,
    slug_en: dbProduct.slug_en,
    name: dbProduct.name,
    subtitle: dbProduct.subtitle || { vi: '', en: '' },
    description: dbProduct.description || { vi: '', en: '' },
    longDescription: dbProduct.long_description || { vi: '', en: '' },
    brand: dbProduct.brand || '',
    thumbnail: dbProduct.thumbnail || '',
    images: dbProduct.images || [],
    sourceUrl: dbProduct.source_url || '',
    videoUrl: dbProduct.video_url || '',
    highlights: dbProduct.highlights || { vi: [], en: [] },
    features: dbProduct.features || [],
    specifications: dbProduct.specifications || [],
    documents: dbProduct.documents || [],
    clinicalImages: dbProduct.clinical_images || [],
    categoryIds: dbProduct.category_ids || [],
    deviceType,
    priceTier,
    seo: dbProduct.seo || {},
    _createdAt: dbProduct.created_at,
    _updatedAt: dbProduct.updated_at,
  };
=======
  return data;
>>>>>>> origin/main
}

export async function createProduct(productData: any): Promise<{ success: boolean; product?: CMSProduct; error?: string }> {
  try {
    const supabase = getSupabaseAdmin();
    
<<<<<<< HEAD
    // Transform data from CMS format to DB column names
    const dbData: Record<string, any> = {
      slug: productData.slug,
      slug_en: productData.slug_en || null,
      name: typeof productData.name === 'object' ? productData.name.vi : productData.name,
      subtitle: productData.subtitle || { vi: "", en: "" },
      description: productData.description || { vi: "", en: "" },
      long_description: productData.longDescription || { vi: "", en: "" },
      brand: productData.brand || "",
      thumbnail: productData.thumbnail || "",
      images: productData.images || [],
      source_url: productData.sourceUrl || productData.source_url || "",
      video_url: productData.videoUrl || productData.video_url || "",
      highlights: productData.highlights || { vi: [], en: [] },
      features: productData.features || [],
      specifications: productData.specifications || [],
      documents: productData.documents || [],
      clinical_images: productData.clinicalImages || [],
      category_ids: productData.categoryIds || productData.category_ids || [],
      seo: productData.seo || {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
=======
    const newProduct = {
      ...productData,
      id: `cms-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      _source: 'cms'
>>>>>>> origin/main
    };
    
    const { data, error } = await supabase
      .from('cms_products')
<<<<<<< HEAD
      .insert([dbData])
=======
      .insert([newProduct])
>>>>>>> origin/main
      .select()
      .single();
    
    if (error) {
<<<<<<< HEAD
      console.error('Supabase insert error:', error);
=======
>>>>>>> origin/main
      return { success: false, error: error.message };
    }
    
    return { success: true, product: data };
  } catch (err: any) {
    console.error('Failed to create product:', err);
    return { success: false, error: err.message };
  }
}

export async function updateProduct(
  slug: string, 
  productData: any
): Promise<{ success: boolean; product?: CMSProduct; error?: string }> {
  try {
    const supabase = getSupabaseAdmin();
    
<<<<<<< HEAD
    // Transform data from CMS format to DB column names
    const dbData: Record<string, any> = {
      slug: productData.slug,
      slug_en: productData.slug_en || null,
      name: typeof productData.name === 'object' ? productData.name.vi : productData.name,
      subtitle: productData.subtitle || { vi: "", en: "" },
      description: productData.description || { vi: "", en: "" },
      long_description: productData.longDescription || { vi: "", en: "" },
      brand: productData.brand || "",
      thumbnail: productData.thumbnail || "",
      images: productData.images || [],
      source_url: productData.sourceUrl || productData.source_url || "",
      video_url: productData.videoUrl || productData.video_url || "",
      highlights: productData.highlights || { vi: [], en: [] },
      features: productData.features || [],
      specifications: productData.specifications || [],
      documents: productData.documents || [],
      clinical_images: productData.clinicalImages || [],
      category_ids: productData.categoryIds || productData.category_ids || [],
      seo: productData.seo || {},
      updated_at: new Date().toISOString()
    };
    
=======
>>>>>>> origin/main
    const { data: existing } = await supabase
      .from('cms_products')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (existing) {
      const { data, error } = await supabase
        .from('cms_products')
<<<<<<< HEAD
        .update(dbData)
=======
        .update({ ...productData, updated_at: new Date().toISOString() })
>>>>>>> origin/main
        .eq('slug', slug)
        .select()
        .single();
      
      if (error) {
<<<<<<< HEAD
        console.error('Supabase update error:', error);
=======
>>>>>>> origin/main
        return { success: false, error: error.message };
      }
      
      return { success: true, product: data };
    } else {
<<<<<<< HEAD
      // Insert new product
      const newProduct = {
        ...dbData,
        id: `cms-${Date.now()}`,
        created_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('cms_products')
        .insert([newProduct])
=======
      const { data, error } = await supabase
        .from('cms_products')
        .insert([{ ...productData, slug, updated_at: new Date().toISOString(), _source: 'cms' }])
>>>>>>> origin/main
        .select()
        .single();
      
      if (error) {
<<<<<<< HEAD
        console.error('Supabase insert error:', error);
=======
>>>>>>> origin/main
        return { success: false, error: error.message };
      }
      
      return { success: true, product: data };
    }
  } catch (err: any) {
    console.error('Failed to update product:', err);
    return { success: false, error: err.message };
  }
}

export async function deleteProduct(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = getSupabaseAdmin();
    
    const { error } = await supabase
      .from('cms_products')
      .delete()
      .eq('slug', slug);
    
    if (error) {
      return { success: false, error: error.message };
    }
    
    return { success: true };
  } catch (err: any) {
    console.error('Failed to delete product:', err);
    return { success: false, error: err.message };
  }
}

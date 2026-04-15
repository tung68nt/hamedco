import { createServerSupabase } from './supabase-server';

export function getSupabaseAdmin() {
  return createServerSupabase();
}

export interface CMSProduct {
  id: string;
  slug: string;
  name: string;
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
  seo?: any;
  _createdAt?: string;
  _updatedAt?: string;
  _source?: 'cms' | 'static';
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
  
  return data || [];
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
  
  return data;
}

export async function createProduct(productData: any): Promise<{ success: boolean; product?: CMSProduct; error?: string }> {
  try {
    const supabase = getSupabaseAdmin();
    
    const newProduct = {
      ...productData,
      id: `cms-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      _source: 'cms'
    };
    
    const { data, error } = await supabase
      .from('cms_products')
      .insert([newProduct])
      .select()
      .single();
    
    if (error) {
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
    
    const { data: existing } = await supabase
      .from('cms_products')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (existing) {
      const { data, error } = await supabase
        .from('cms_products')
        .update({ ...productData, updated_at: new Date().toISOString() })
        .eq('slug', slug)
        .select()
        .single();
      
      if (error) {
        return { success: false, error: error.message };
      }
      
      return { success: true, product: data };
    } else {
      const { data, error } = await supabase
        .from('cms_products')
        .insert([{ ...productData, slug, updated_at: new Date().toISOString(), _source: 'cms' }])
        .select()
        .single();
      
      if (error) {
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

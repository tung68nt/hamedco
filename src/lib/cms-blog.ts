import { createServerSupabase } from './supabase-server';

export function getSupabaseAdmin() {
  return createServerSupabase();
}

export interface CMSPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: { name: string; avatar?: string };
  publishedAt: string;
  coverImage: string;
  content: string;
  tags: string[];
  relatedPosts?: string[];
  seo?: any;
  created_at?: string;
  updated_at?: string;
}

export async function getAllPosts(): Promise<CMSPost[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('cms_posts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  
  return data || [];
}

export async function getPostBySlug(slug: string): Promise<CMSPost | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('cms_posts')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }
  
  return data;
}

export async function createPost(postData: any): Promise<{ success: boolean; post?: CMSPost; error?: string }> {
  try {
    const supabase = getSupabaseAdmin();
    
    const { data: existing } = await supabase
      .from('cms_posts')
      .select('slug')
      .eq('slug', postData.slug)
      .single();
    
    if (existing) {
      return { success: false, error: 'Slug đã tồn tại' };
    }
    
    const newPost = {
      ...postData,
      id: `cms-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    const { data, error } = await supabase
      .from('cms_posts')
      .insert([newPost])
      .select()
      .single();
    
    if (error) {
      return { success: false, error: error.message };
    }
    
    return { success: true, post: data };
  } catch (err: any) {
    console.error('Failed to create post:', err);
    return { success: false, error: err.message };
  }
}

export async function updatePost(
  slug: string, 
  postData: any
): Promise<{ success: boolean; post?: CMSPost; error?: string }> {
  try {
    const supabase = getSupabaseAdmin();
    
    const { data, error } = await supabase
      .from('cms_posts')
      .update({ ...postData, updated_at: new Date().toISOString() })
      .eq('slug', slug)
      .select()
      .single();
    
    if (error) {
      return { success: false, error: error.message };
    }
    
    return { success: true, post: data };
  } catch (err: any) {
    console.error('Failed to update post:', err);
    return { success: false, error: err.message };
  }
}

export async function deletePost(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = getSupabaseAdmin();
    
    const { error } = await supabase
      .from('cms_posts')
      .delete()
      .eq('slug', slug);
    
    if (error) {
      return { success: false, error: error.message };
    }
    
    return { success: true };
  } catch (err: any) {
    console.error('Failed to delete post:', err);
    return { success: false, error: err.message };
  }
}

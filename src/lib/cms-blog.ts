import { createServerSupabase } from './supabase-server';

export function getSupabaseAdmin() {
  return createServerSupabase();
}

export interface CMSPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
<<<<<<< HEAD
  category_id: string;
  author_name: string;
  author_avatar?: string;
  published_at: string;
  cover_image: string;
  content: string;
  tags: string[];
  status?: string;
  is_published?: boolean;
  seo?: {
    title?: string;
    description?: string;
    metaRobots?: string;
  };
  categories?: {
    name: string;
  };
=======
  category: string;
  author: { name: string; avatar?: string };
  publishedAt: string;
  coverImage: string;
  content: string;
  tags: string[];
  relatedPosts?: string[];
  seo?: any;
>>>>>>> origin/main
  created_at?: string;
  updated_at?: string;
}

export async function getAllPosts(): Promise<CMSPost[]> {
<<<<<<< HEAD
  try {
    const supabase = getSupabaseAdmin();
    // Fetch raw posts first to avoid JOIN errors
    const { data, error } = await supabase
      .from('cms_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error in getAllPosts:', error);
      return [];
    }

    if (!data || data.length === 0) {
      console.log('No data found in cms_posts table');
      return [];
    }

    // Attempt to fetch categories separately to map names
    const { data: categories } = await supabase.from('cms_categories').select('id, name');
    const categoryMap = (categories || []).reduce((acc: any, cat: any) => {
      let name = cat.name;
      if (typeof name === 'object' && name !== null) {
        name = name.vi || name.en || "";
      }
      acc[cat.id] = name;
      return acc;
    }, {});

    const processedData = data.map(post => ({
      ...post,
      categories: post.category_id ? { name: categoryMap[post.category_id] } : null
    }));

    return processedData as unknown as CMSPost[];
  } catch (err) {
    console.error('Unexpected code error in getAllPosts:', err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<CMSPost | null> {
  try {
    const supabase = getSupabaseAdmin();
    const { data: post, error } = await supabase
      .from('cms_posts')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error || !post) {
      console.error('Error fetching post:', error);
      return null;
    }

    // Fetch category separately for mapping
    if (post.category_id) {
      const { data: category } = await supabase
        .from('cms_categories')
        .select('name')
        .eq('id', post.category_id)
        .single();
      
      if (category) {
        let name = category.name;
        if (typeof name === 'object' && name !== null) {
          name = (name as any).vi || (name as any).en || "";
        }
        post.categories = { name };
      }
    }
    
    return post as unknown as CMSPost;
  } catch (err) {
    console.error('Unexpected error in getPostBySlug:', err);
    return null;
  }
=======
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
>>>>>>> origin/main
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
<<<<<<< HEAD

export async function getRelatedPosts(currentId: string, categoryId?: string | null, limit: number = 3): Promise<CMSPost[]> {
  try {
    const supabase = getSupabaseAdmin();

    let query = supabase
      .from('cms_posts')
      .select('id, slug, title, cover_image, subtitle, published_at, created_at, category_id, categories:cms_categories(name)')
      .eq('status', 'published')
      .neq('id', currentId)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (categoryId) {
      query = query.eq('category_id', categoryId);
    }

    const { data, error } = await query;

    if (error || !data || data.length === 0) {
      // Fallback: get any recent posts
      const { data: fallback } = await supabase
        .from('cms_posts')
        .select('id, slug, title, cover_image, subtitle, published_at, created_at, category_id, categories:cms_categories(name)')
        .eq('status', 'published')
        .neq('id', currentId)
        .order('published_at', { ascending: false })
        .limit(limit);
      return (fallback as unknown as CMSPost[]) || [];
    }

    return data as unknown as CMSPost[];
  } catch (err) {
    console.error('Failed to get related posts:', err);
    return [];
  }
}
=======
>>>>>>> origin/main

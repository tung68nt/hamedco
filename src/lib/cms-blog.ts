import { promises as fs } from 'fs';
import path from 'path';
import { BLOG_POSTS } from '@/data/blog';
import type { BlogPost } from '@/data/blog';

const DATA_FILE = path.join(process.cwd(), 'src/data/cms-blog.json');

interface CMSBlogData {
  posts: (BlogPost & { _source?: 'cms' })[];
  lastUpdated: string | null;
}

async function readCMSData(): Promise<CMSBlogData> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { posts: [], lastUpdated: null };
  }
}

async function writeCMSData(data: CMSBlogData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return BLOG_POSTS.find(p => p.slug === slug) || null;
}

export async function createPost(postData: Omit<BlogPost, 'id'>): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const existingSlug = BLOG_POSTS.find(p => p.slug === postData.slug) || 
                         cmsData.posts.find(p => p.slug === postData.slug);
    if (existingSlug) {
      return { success: false, error: 'Slug đã tồn tại' };
    }
    
    const newPost: BlogPost = {
      ...postData,
      id: `cms-${Date.now()}`,
    };
    
    cmsData.posts.push(newPost as any);
    cmsData.lastUpdated = new Date().toISOString();
    
    await writeCMSData(cmsData);
    
    return { success: true, post: newPost };
  } catch (err: any) {
    console.error('Failed to create post:', err);
    return { success: false, error: err.message };
  }
}

export async function updatePost(
  slug: string, 
  postData: Partial<BlogPost>
): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const index = cmsData.posts.findIndex(p => p.slug === slug);
    
    if (index === -1) {
      const staticPost = BLOG_POSTS.find(p => p.slug === slug);
      if (!staticPost) {
        return { success: false, error: 'Bài viết không tồn tại' };
      }
      
      const updated: BlogPost = {
        ...staticPost,
        ...postData,
        id: staticPost.id,
      };
      
      cmsData.posts.push(updated as any);
    } else {
      cmsData.posts[index] = {
        ...cmsData.posts[index],
        ...postData,
      } as any;
    }
    
    cmsData.lastUpdated = new Date().toISOString();
    await writeCMSData(cmsData);
    
    const updated = cmsData.posts.find(p => p.slug === slug);
    return { success: true, post: updated };
  } catch (err: any) {
    console.error('Failed to update post:', err);
    return { success: false, error: err.message };
  }
}

export async function deletePost(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const index = cmsData.posts.findIndex(p => p.slug === slug);
    if (index === -1) {
      return { success: false, error: 'Bài viết không tồn tại trong CMS' };
    }
    
    cmsData.posts.splice(index, 1);
    cmsData.lastUpdated = new Date().toISOString();
    
    await writeCMSData(cmsData);
    
    return { success: true };
  } catch (err: any) {
    console.error('Failed to delete post:', err);
    return { success: false, error: err.message };
  }
}

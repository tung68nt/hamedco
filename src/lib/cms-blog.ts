import { promises as fs } from 'fs';
import path from 'path';
import { BLOG_POSTS } from '@/data/blog';

const DATA_FILE = path.join(process.cwd(), 'src/data/cms-blog.json');

interface CMSPost {
  [key: string]: any;
}

interface CMSBlogData {
  posts: CMSPost[];
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

export function getAllPosts(): any[] {
  return BLOG_POSTS;
}

export async function getPostBySlug(slug: string): Promise<any | null> {
  const post = BLOG_POSTS.find((p: any) => p.slug === slug);
  return post || null;
}

export async function createPost(postData: any): Promise<{ success: boolean; post?: any; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const existingSlug = BLOG_POSTS.find((p: any) => p.slug === postData.slug) || 
                         cmsData.posts.find((p: CMSPost) => p.slug === postData.slug);
    if (existingSlug) {
      return { success: false, error: 'Slug đã tồn tại' };
    }
    
    const newPost: CMSPost = {
      ...postData,
      id: `cms-${Date.now()}`,
    };
    
    cmsData.posts.push(newPost);
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
  postData: any
): Promise<{ success: boolean; post?: any; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const index = cmsData.posts.findIndex((p: CMSPost) => p.slug === slug);
    
    if (index === -1) {
      const staticPost = BLOG_POSTS.find((p: any) => p.slug === slug);
      if (!staticPost) {
        return { success: false, error: 'Bài viết không tồn tại' };
      }
      
      const updated: CMSPost = {
        ...staticPost,
        ...postData,
        id: staticPost.id,
      };
      
      cmsData.posts.push(updated);
    } else {
      cmsData.posts[index] = {
        ...cmsData.posts[index],
        ...postData,
      };
    }
    
    cmsData.lastUpdated = new Date().toISOString();
    await writeCMSData(cmsData);
    
    const updated = cmsData.posts.find((p: CMSPost) => p.slug === slug);
    return { success: true, post: updated };
  } catch (err: any) {
    console.error('Failed to update post:', err);
    return { success: false, error: err.message };
  }
}

export async function deletePost(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const cmsData = await readCMSData();
    
    const index = cmsData.posts.findIndex((p: CMSPost) => p.slug === slug);
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

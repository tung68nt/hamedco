"use server";

import { revalidatePath } from "next/cache";
import { createPost, updatePost as updatePostData, deletePost as deletePostData } from "@/lib/cms-blog";

export async function createNewPost(postData: any) {
  const result = await createPost(postData);
  
  if (result.success) {
    revalidatePath('/admin/tin-tuc');
    revalidatePath('/tin-tuc');
  }
  
  return result;
}

export async function updatePost(slug: string, postData: any) {
  const result = await updatePostData(slug, postData);
  
  if (result.success) {
    revalidatePath('/admin/tin-tuc');
    revalidatePath('/tin-tuc');
    revalidatePath(`/tin-tuc/${slug}`);
  }
  
  return result;
}

export async function deletePost(slug: string) {
  const result = await deletePostData(slug);
  
  if (result.success) {
    revalidatePath('/admin/tin-tuc');
    revalidatePath('/tin-tuc');
  }
  
  return result;
}

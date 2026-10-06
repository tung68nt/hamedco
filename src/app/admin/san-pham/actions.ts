"use server";

import { revalidatePath } from "next/cache";
import { createProduct, updateProduct as updateProductData, deleteProduct as deleteProductData } from "@/lib/cms-products";

export async function createNewProduct(productData: any) {
  const result = await createProduct(productData);
  
  if (result.success) {
    revalidatePath('/admin/san-pham');
    revalidatePath('/san-pham');
  }
  
  return result;
}

export async function updateProduct(slug: string, productData: any) {
  const result = await updateProductData(slug, productData);
  
  if (result.success) {
    revalidatePath('/admin/san-pham');
    revalidatePath('/san-pham');
    revalidatePath(`/san-pham/${slug}`);
  }
  
  return result;
}

export async function deleteProduct(slug: string) {
  const result = await deleteProductData(slug);
  
  if (result.success) {
    revalidatePath('/admin/san-pham');
    revalidatePath('/san-pham');
  }
  
  return result;
}

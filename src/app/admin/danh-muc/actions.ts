"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

export async function updateCategory(categoryData: any) {
  try {
    const filePath = path.join(process.cwd(), "src/data/categories.ts");
    
    // Import current data directly
    const { CATEGORIES } = await import("@/data/categories");
    
    // Check if it's an update or creation
    let updatedCats;
    const exists = CATEGORIES.some((c: any) => c.id === categoryData.id);
    
    if (exists) {
      updatedCats = CATEGORIES.map((c: any) => 
        c.id === categoryData.id ? { ...c, ...categoryData } : c
      );
    } else {
      updatedCats = [...CATEGORIES, categoryData];
    }

    // Completely replace the file (using quick string replacement for types)
    const fileContent = `export interface Category {
  id: string;
  slug: string;
  name: { vi: string; en: string };
  description: { vi: string; en: string };
  type: "main" | "segment";
}

export const CATEGORIES: Category[] = ${JSON.stringify(updatedCats, null, 2)};
`;

    fs.writeFileSync(filePath, fileContent, "utf-8");
    
    // Revalidate paths for Next.js to clear cache
    revalidatePath("/admin/danh-muc");
    revalidatePath("/san-pham");
    revalidatePath(`/san-pham/danh-muc/${categoryData.slug}`);
    
    return { success: true };
  } catch (err: any) {
    console.error("Failed to save category:", err);
    return { success: false, error: err.message };
  }
}

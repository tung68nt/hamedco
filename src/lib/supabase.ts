import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

/**
 * Supabase client for browser / Client Components.
 * Sử dụng publishable key.
 */
export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Helper để kiểm tra Supabase đã được cấu hình chưa.
 * Trả về false nếu env chưa có → fallback sang dữ liệu tĩnh products.ts.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseKey);
}

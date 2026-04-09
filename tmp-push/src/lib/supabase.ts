import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

/**
 * Supabase client for browser / Client Components.
 * Sử dụng anon key — chỉ đọc dữ liệu public.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper để kiểm tra Supabase đã được cấu hình chưa.
 * Trả về false nếu env chưa có → fallback sang dữ liệu tĩnh products.ts.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client dành riêng cho Server Components / Server Actions.
 * Sử dụng Service Role Key (full quyền ghi).
 * KHÔNG BAO GIỜ import file này ở Client Component.
 */
export function createServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

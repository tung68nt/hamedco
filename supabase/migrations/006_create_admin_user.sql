-- Migration: Create admin user for HAMEDCO CMS
-- Run this in Supabase Dashboard → SQL Editor

-- Step 1: Create user in auth.users
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at, raw_user_meta_data)
VALUES (
  gen_random_uuid(),
  'mai.nguyen@hamedco.vn',
  crypt('Hamedco$2026', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"full_name": "Nguyễn Mai"}'::jsonb
);

-- Step 2: Create corresponding profile in cms_users with admin role
INSERT INTO cms_users (id, email, full_name, role, created_at, updated_at)
SELECT 
  id, 
  email, 
  raw_user_meta_data->>'full_name' as full_name, 
  'admin',
  created_at,
  NOW()
FROM auth.users 
WHERE email = 'mai.nguyen@hamedco.vn';

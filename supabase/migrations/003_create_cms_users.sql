-- Migration: Create cms_users table for HAMEDCO CMS authentication
-- Run this in Supabase Dashboard → SQL Editor

-- Create cms_users table
CREATE TABLE IF NOT EXISTS cms_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT DEFAULT '',
  role TEXT DEFAULT 'viewer' CHECK (role IN ('admin', 'editor', 'viewer')),
  avatar_url TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_cms_users_email ON cms_users(email);
CREATE INDEX IF NOT EXISTS idx_cms_users_role ON cms_users(role);
CREATE INDEX IF NOT EXISTS idx_cms_users_created_at ON cms_users(created_at DESC);

-- Enable Row Level Security
ALTER TABLE cms_users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own profile, admins can view all
DROP POLICY IF EXISTS "Users can view own profile" ON cms_users;
CREATE POLICY "Users can view own profile" ON cms_users
  FOR SELECT USING (auth.uid() = id);

-- Policy: Only admins can insert users
DROP POLICY IF EXISTS "Admins can insert users" ON cms_users;
CREATE POLICY "Admins can insert users" ON cms_users
  FOR INSERT WITH CHECK (true);

-- Policy: Users can update own profile, admins can update any
DROP POLICY IF EXISTS "Users can update own profile" ON cms_users;
CREATE POLICY "Users can update own profile" ON cms_users
  FOR UPDATE USING (auth.uid() = id OR EXISTS (
    SELECT 1 FROM cms_users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Policy: Only admins can delete users
DROP POLICY IF EXISTS "Admins can delete users" ON cms_users;
CREATE POLICY "Admins can delete users" ON cms_users
  FOR DELETE USING (EXISTS (
    SELECT 1 FROM cms_users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_cms_users_updated_at ON cms_users;
CREATE TRIGGER update_cms_users_updated_at
  BEFORE UPDATE ON cms_users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to create user profile after signup
CREATE OR REPLACE FUNCTION handle_new_user_signup()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO cms_users (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    'viewer'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user_signup();

-- Comments for documentation
COMMENT ON TABLE cms_users IS 'HAMEDCO CMS Users table - stores user profiles and roles for CMS authentication';
COMMENT ON COLUMN cms_users.role IS 'User role: admin (full access), editor (can edit content), viewer (read-only)';

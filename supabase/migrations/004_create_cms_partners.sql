-- Migration: Create cms_partners table for HAMEDCO CMS
-- Run this in Supabase Dashboard → SQL Editor

-- Create cms_partners table
CREATE TABLE IF NOT EXISTS cms_partners (
  id TEXT PRIMARY KEY DEFAULT 'partner-' || gen_random_uuid()::text,
  name TEXT NOT NULL,
  short_name TEXT DEFAULT '',
  domain TEXT DEFAULT '',
  logo_url TEXT DEFAULT '',
  category TEXT DEFAULT 'central_hospital' CHECK (category IN ('central_hospital', 'provincial_hospital', 'private_hospital', 'corporate', 'international')),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_cms_partners_category ON cms_partners(category);
CREATE INDEX IF NOT EXISTS idx_cms_partners_display_order ON cms_partners(display_order);
CREATE INDEX IF NOT EXISTS idx_cms_partners_is_active ON cms_partners(is_active);

-- Enable Row Level Security
ALTER TABLE cms_partners ENABLE ROW LEVEL SECURITY;

-- Policy: Allow all access for now (adjust as needed)
DROP POLICY IF EXISTS "Allow all access to cms_partners" ON cms_partners;
CREATE POLICY "Allow all access to cms_partners" ON cms_partners
  FOR ALL USING (true) WITH CHECK (true);

-- Function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_cms_partners_updated_at ON cms_partners;
CREATE TRIGGER update_cms_partners_updated_at
  BEFORE UPDATE ON cms_partners
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE cms_partners IS 'HAMEDCO CMS Partners table - stores partner/hospital logos and info';
COMMENT ON COLUMN cms_partners.category IS 'Partner category: central_hospital, provincial_hospital, private_hospital, corporate, international';

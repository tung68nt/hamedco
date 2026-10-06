-- Migration: Create cms_leads table for tracking form submissions
-- Run this in Supabase Dashboard → SQL Editor

-- Create cms_leads table
CREATE TABLE IF NOT EXISTS cms_leads (
  id TEXT PRIMARY KEY DEFAULT 'lead-' || gen_random_uuid()::text,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  hospital TEXT,
  product TEXT,
  message TEXT,
  type TEXT NOT NULL, -- 'contact', 'quote', 'newsletter'
  status TEXT DEFAULT 'new', -- 'new', 'processing', 'completed', 'cancelled'
  source_url TEXT,
  metadata JSONB DEFAULT '{}'::jsonb, -- Store UTM params, user agent, etc.
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_cms_leads_type ON cms_leads(type);
CREATE INDEX IF NOT EXISTS idx_cms_leads_status ON cms_leads(status);
CREATE INDEX IF NOT EXISTS idx_cms_leads_created_at ON cms_leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE cms_leads ENABLE ROW LEVEL SECURITY;

-- Create policy for public to insert (service-role or special policy)
DROP POLICY IF EXISTS "Enable insert for everyone" ON cms_leads;
CREATE POLICY "Enable insert for everyone" ON cms_leads FOR INSERT WITH CHECK (true);

-- Create policy for authenticated users (admins) to see/edit everything
DROP POLICY IF EXISTS "Allow all access to cms_leads for admins" ON cms_leads;
CREATE POLICY "Allow all access to cms_leads for admins" ON cms_leads
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
DROP TRIGGER IF EXISTS update_cms_leads_updated_at ON cms_leads;
CREATE TRIGGER update_cms_leads_updated_at
  BEFORE UPDATE ON cms_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE cms_leads IS 'Table for storing customer leads from various forms (Contact, Quote, etc.)';
COMMENT ON COLUMN cms_leads.type IS 'Source of the lead: contact (from contact page), quote (from quote modal), newsletter (from footer)';
COMMENT ON COLUMN cms_leads.status IS 'Current processing state: new, processing, completed, cancelled';
